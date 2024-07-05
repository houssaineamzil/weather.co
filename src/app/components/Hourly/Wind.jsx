"use client";

import { Card } from "_components/ui/Card";
import { toDateTime } from "_utils/dateUtils";
import { useRef, useState } from "react";
import styles from "./styles.module.scss";

export const Wind = ({ data }) => {
  const sliderRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStatX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const onMouseDown = (event) => {
    const slider = sliderRef?.current;
    setIsDown(true);
    slider.style.cursor = "grabbing ";
    setStatX(event.pageX - slider.offsetLeft);
    setScrollLeft(slider.scrollLeft);
  };

  const onMouseLeave = (event) => {
    const slider = sliderRef?.current;
    setIsDown(false);
    slider.style.cursor = "grab";
  };

  const onMouseUp = () => {
    const slider = sliderRef?.current;
    setIsDown(false);
    slider.style.cursor = "grab";
  };

  const onMouseMove = (event) => {
    const slider = sliderRef?.current;
    if (!isDown) return;
    event.preventDefault();
    const x = event.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
      ref={sliderRef}
      className={styles.hourly__Wind}
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseLeave}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
    >
      {data.map((hour, index) => {
        return (
          <Card key={index} className={styles.day}>
            <div className={styles.title}>{toDateTime(hour.dt)}</div>
            <div className={styles.iconWrapper}>
              {/* <WeatherIcon
								className={styles.icon}
								style={{ transform: `rotateZ(${hour.wind_deg}deg)` }}
							/> */}
              <svg
                className={styles.icon}
                style={{ transform: `rotateZ(${hour.wind_deg}deg)` }}
                viewBox="0 0 57 57"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_80_710)">
                  <g filter="url(#filter0_if_80_710)">
                    <path
                      d="M47.763 17.1369C50.973 16.9383 52.7338 20.8213 50.4474 23.0569L21.4191 51.4408C19.2143 53.5967 15.4709 51.9865 15.5082 48.8984L15.6578 36.5155C15.6701 35.4925 15.226 34.513 14.4451 33.8412L4.99354 25.7104C2.63644 23.6826 3.91171 19.8499 7.00721 19.6584L47.763 17.1369Z"
                      fill="#C8EAFF"
                    />
                  </g>
                </g>
                <defs>
                  <filter
                    id="filter0_if_80_710"
                    x="3.57545"
                    y="16.9296"
                    width="57.9091"
                    height="55.4991"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="10" dy="20" />
                    <feGaussianBlur stdDeviation="34.5" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.666667 0 0 0 0 0.87451 0 0 0 0 0.980392 0 0 0 1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_80_710"
                    />
                    <feGaussianBlur
                      stdDeviation="0.1"
                      result="effect2_foregroundBlur_80_710"
                    />
                  </filter>
                  <clipPath id="clip0_80_710">
                    <rect width="57" height="57" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className={styles.value}>{`${(hour.wind_speed * 3.6).toFixed(
              1,
            )}km/h`}</div>
          </Card>
        );
      })}
    </div>
  );
};
