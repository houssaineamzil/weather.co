// import CloudyIcon from "_assets/weather/cloudy.svg"
// import HazeIcon from "_assets/weather/haze.svg"
// import HeavyRainIcon from "_assets/weather/heavy-rain.svg"
// import PartlyCloudyIcon from "_assets/weather/partly-cloudy.svg"
// import RainIcon from "_assets/weather/rain.svg"
// import SleetIcon from "_assets/weather/sleet.svg"
// import SnowIcon from "_assets/weather/snow.svg"
// import SunnyIcon from "_assets/weather/sunny.svg"
// import ThunderstormIcon from "_assets/weather/thunderstorm.svg"

export const WeatherIcon = ({ ...restProps }) => {
  return (
    <svg
      viewBox="0 0 315 281"
      fill="none"
      {...restProps}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_i_4_169)">
        <circle cx="152" cy="128" r="73" fill="#FFAB0B" />
      </g>
      <circle
        cx="151.5"
        cy="127.5"
        r="100.5"
        stroke="#FFE200"
        strokeWidth="20"
        strokeLinecap="round"
        strokeDasharray="1 70"
      />
      <g opacity="0.7" filter="url(#filter1_f_4_169)">
        <ellipse cx="141.5" cy="141" rx="38.5" ry="40" fill="white" />
        <ellipse cx="179" cy="106" rx="50" ry="52" fill="white" />
        <ellipse cx="222.5" cy="105" rx="38.5" ry="40" fill="white" />
        <ellipse cx="99" cy="153" rx="45" ry="47" fill="white" />
        <ellipse cx="128.5" cy="200.5" rx="25.5" ry="26.5" fill="white" />
      </g>
      <defs>
        <filter
          id="filter0_i_4_169"
          x="69"
          y="55"
          width="156"
          height="159"
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
          <feOffset dx="-10" dy="13" />
          <feGaussianBlur stdDeviation="12" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 0.886275 0 0 0 0 0 0 0 0 0.9 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_4_169"
          />
        </filter>
        <filter
          id="filter1_f_4_169"
          x="0"
          y="0"
          width="315"
          height="281"
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
          <feGaussianBlur
            stdDeviation="27"
            result="effect1_foregroundBlur_4_169"
          />
        </filter>
      </defs>
    </svg>
  );
};
