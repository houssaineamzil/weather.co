"use client";

import React, { useCallback, useRef, useState } from "react";
import styles from "./Search.module.scss";
import Link from "next/link";

export const Search = ({ children, className, ...props }) => {
  const searchRef = useRef(null);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(false);
  const [results, setResults] = useState([]);

  const searchEndpoint = (query) => `/api/search?q=${query}`;

  const onChange = useCallback((event) => {
    const query = event.target.value;
    setQuery(query);

    if (query.length) {
      fetch(searchEndpoint(query))
        .then((res) => res.json())
        .then((res) => {
          setResults(res.results);
        });
    } else {
      setResults([]);
    }
  }, []);

  const onFocus = usecallback(() => {
    setActive(true);
    // window.addEventListener("click", onClick)
  }, []);

  const onClick = useCallback((event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setActive(false);
      // window.removeEventListener("click", onClick)
    }
  }, []);

  return (
    <div className={styles.container} ref={searchRef}>
      <input
        type="text"
        value={query}
        onFocus={onFocus}
        onChange={onChange}
        className={styles.search}
        placeholder="Country, Zip Code..."
      />
      {active && results.length > 0 && (
        <ul className={styles.results}>
          {results.map(({ id, title }) => (
            <li className={styles.result} key={id}>
              <Link href={`/query=${f}`}>{title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
