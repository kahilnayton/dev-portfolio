import { useState } from 'react';
import { colors, randomColors } from '../../styles/colors';

export const Logo = props => {
  const [number, setNumber] = useState(0);
  const randomNum = () => setNumber(Math.round(Math.random() * 6));
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 955.45 186.12"
      xmlSpace="preserve"
      width={props.width}
      height={props.height}
    >
      <g>
        <rect
          onMouseEnter={randomNum}
          fill={randomColors[number]}
          className="letter-1"
          x="16.35"
          y="25.22"
          width="21.45"
          height="129.55"
        />
        <polygon
          onMouseEnter={randomNum}
          fill={randomColors[number]}
          className="letter-2"
          points="100.55,25.22 76.46,25.22 45,78.13 45,103.8 79.63,154.77 104.06,154.77 59.06,91.85 	"
        />
        <polygon
          onMouseEnter={randomNum}
          fill={randomColors[number]}
          className="letter-3"
          points="167.01,25.4 121.66,154.77 143.63,154.77 177.55,57.74 211.13,154.77 232.93,154.77 187.93,25.4 	"
        />
        <polygon
          onMouseEnter={randomNum}
          fill={randomColors[number]}
          className="letter-4"
          points="165.6,113.64 160.68,127.88 194.25,127.88 189.16,113.64 	"
        />
        <rect
          onMouseEnter={randomNum}
          fill={randomColors[number]}
          className="letter-5"
          x="253.68"
          y="25.22"
          width="21.45"
          height="129.55"
        />
        <polygon
          onMouseEnter={randomNum}
          fill={randomColors[number]}
          className="letter-6"
          points="331.2,82 282.34,82 282.34,96.42 331.2,96.42 331.2,154.77 352.3,154.77 352.3,25.22 331.2,25.22 	"
        />
        <rect
          onMouseEnter={randomNum}
          fill={randomColors[number]}
          className="letter-7"
          x="378.5"
          y="25.22"
          width="21.45"
          height="129.55"
        />
        <polygon
          onMouseEnter={randomNum}
          fill={randomColors[number]}
          className="letter-8"
          points="447.07,25.22 425.63,25.22 425.63,154.77 506.66,154.77 506.66,138.78 447.07,138.78 	"
        />
        <rect
          onMouseEnter={randomNum}
          fill={randomColors[number]}
          className="letter-9"
          x="563.3"
          y="25.22"
          width="21.09"
          height="129.55"
        />
        <path
          className="letter-16"
          onMouseEnter={randomNum}
          fill={randomColors[number]}
          d="M651.63,44.21c-5.45-5.74-12.3-10.34-20.57-13.8c-8.26-3.46-17.84-5.19-28.74-5.19H591.6v16h5.1
        c10.08,0,18.28,1.32,24.61,3.96s11.34,6.09,15.03,10.37c3.69,4.28,6.18,9.05,7.47,14.33c1.29,5.27,1.93,10.61,1.93,16
        c0,17.34-3.16,30.59-9.49,39.73s-16.64,13.71-30.94,13.71H591.6v15.47h20.74c1.64,0,4.16-0.2,7.56-0.62
        c3.4-0.41,7.15-1.35,11.25-2.81c4.1-1.46,8.35-3.66,12.74-6.59c4.39-2.93,8.35-6.94,11.87-12.04s6.42-11.43,8.7-18.98
        s3.43-16.67,3.43-27.33c0-7.73-1.35-15.26-4.04-22.59C661.15,56.49,657.08,49.95,651.63,44.21z"
        />
        <rect
          onMouseEnter={randomNum}
          fill={randomColors[number]}
          className="letter-10"
          x="727.12"
          y="25.22"
          width="52.38"
          height="16"
        />
        <rect
          onMouseEnter={randomNum}
          fill={randomColors[number]}
          className="letter-11"
          x="727.12"
          y="82"
          width="46.93"
          height="14.41"
        />
        <rect
          onMouseEnter={randomNum}
          fill={randomColors[number]}
          className="letter-12"
          x="727.12"
          y="138.78"
          width="52.38"
          height="16"
        />
        <rect
          onMouseEnter={randomNum}
          fill={randomColors[number]}
          className="letter-13"
          x="698.47"
          y="25.22"
          width="21.45"
          height="129.55"
        />
        <polygon
          onMouseEnter={randomNum}
          fill={randomColors[number]}
          className="letter-14"
          points="888.67,25.22 861.25,121.2 861.25,155.48 870.39,155.48 912.57,25.22 	"
        />
        <polygon
          onMouseEnter={randomNum}
          fill={randomColors[number]}
          className="letter-15"
          points="802.71,25.22 842.96,155.48 854.04,155.48 854.04,126.83 826.79,25.22 	"
        />
      </g>
    </svg>
  );
};

export const Plane = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 744.09 400"
    {...props}
  >
    <defs>
      <radialGradient
        id="prefix__e"
        xlinkHref="#prefix__a"
        gradientUnits="userSpaceOnUse"
        cy={352.67}
        cx={175.78}
        gradientTransform="matrix(.46351 -.50321 1.3403 1.2346 -378.39 5.726)"
        r={59.461}
      />
      <radialGradient
        id="prefix__f"
        xlinkHref="#prefix__b"
        gradientUnits="userSpaceOnUse"
        cy={451.99}
        cx={190.94}
        gradientTransform="matrix(1 0 0 .33103 0 303.73)"
        r={44.766}
      />
      <radialGradient
        id="prefix__g"
        xlinkHref="#prefix__a"
        gradientUnits="userSpaceOnUse"
        cy={395.26}
        cx={510.75}
        gradientTransform="matrix(1.3643 .48026 -.33184 .94266 -54.882 -215.04)"
        r={20.991}
      />
      <radialGradient
        id="prefix__h"
        xlinkHref="#prefix__b"
        gradientUnits="userSpaceOnUse"
        cy={421.62}
        cx={115.57}
        gradientTransform="matrix(-.13951 .28258 -1.3116 -.64755 709.14 656.3)"
        r={55.5}
      />
      <radialGradient
        id="prefix__k"
        gradientUnits="userSpaceOnUse"
        cy={430.61}
        cx={470.39}
        gradientTransform="matrix(-1.6446 -.27763 .11775 -.6976 1142.1 829.52)"
        r={236.6}
      >
        <stop stopColor="#fff" stopOpacity={0.455} offset={0} />
        <stop stopOpacity={0.275} offset={0.252} />
        <stop stopOpacity={0.635} offset={0.772} />
        <stop offset={1} />
      </radialGradient>
      <radialGradient
        id="prefix__l"
        xlinkHref="#prefix__a"
        gradientUnits="userSpaceOnUse"
        cy={405.21}
        cx={562.65}
        gradientTransform="matrix(1.547 .61688 -.20239 .50756 -225.79 -124.42)"
        r={49.044}
      />
      <radialGradient
        id="prefix__m"
        xlinkHref="#prefix__c"
        gradientUnits="userSpaceOnUse"
        cy={375.35}
        cx={135.94}
        gradientTransform="matrix(-1.2896 4.8784 -2.4076 .39882 1214.9 -450.07)"
        r={13.797}
      />
      <radialGradient
        id="prefix__n"
        xlinkHref="#prefix__c"
        gradientUnits="userSpaceOnUse"
        cy={389.21}
        cx={118.14}
        gradientTransform="matrix(-2.6007 -.39781 .28223 -1.8451 295.88 1131.1)"
        r={29.294}
      />
      <radialGradient
        id="prefix__p"
        gradientUnits="userSpaceOnUse"
        cy={350.04}
        cx={320.1}
        gradientTransform="matrix(-.24341 .5584 -2.1093 -.91943 1174.1 587.6)"
        r={177.5}
      >
        <stop stopOpacity={0} offset={0} />
        <stop stopOpacity={0.275} offset={0.591} />
        <stop offset={1} />
      </radialGradient>
      <radialGradient
        id="prefix__q"
        xlinkHref="#prefix__b"
        gradientUnits="userSpaceOnUse"
        cy={465.66}
        cx={278.2}
        gradientTransform="matrix(-1.2601 -.01853 .00428 -.2909 627.39 627.93)"
        r={28.112}
      />
      <filter
        id="prefix__o"
        width={1.055}
        y={-0.195}
        x={-0.027}
        height={1.389}
        colorInterpolationFilters="sRGB"
      >
        <feGaussianBlur stdDeviation={1.354} />
      </filter>
      <filter
        id="prefix__r"
        width={1.12}
        y={-0.238}
        x={-0.06}
        height={1.477}
        colorInterpolationFilters="sRGB"
      >
        <feGaussianBlur stdDeviation={1.714} />
      </filter>
      <filter id="prefix__j" colorInterpolationFilters="sRGB">
        <feGaussianBlur stdDeviation={0.546} />
      </filter>
      <filter
        id="prefix__i"
        width={1.238}
        y={-0.286}
        x={-0.119}
        height={1.573}
        colorInterpolationFilters="sRGB"
      >
        <feGaussianBlur stdDeviation={0.831} />
      </filter>
      <filter
        id="prefix__d"
        width={1.314}
        y={-0.188}
        x={-0.157}
        height={1.376}
        colorInterpolationFilters="sRGB"
      >
        <feGaussianBlur stdDeviation={3.746} />
      </filter>
      <filter
        id="prefix__s"
        width={1.458}
        y={-0.078}
        x={-0.229}
        height={1.155}
        colorInterpolationFilters="sRGB"
      >
        <feGaussianBlur stdDeviation={2.701} />
      </filter>
      <filter
        id="prefix__t"
        width={2.147}
        y={-0.094}
        x={-0.573}
        height={1.188}
        colorInterpolationFilters="sRGB"
      >
        <feGaussianBlur stdDeviation={3.746} />
      </filter>
      <linearGradient id="prefix__a">
        <stop stopColor="#41452d" offset={0} />
        <stop stopColor="#13140d" offset={1} />
      </linearGradient>
      <linearGradient id="prefix__b">
        <stop stopColor="#5b6e6e" offset={0} />
        <stop stopColor="#313b3b" offset={1} />
      </linearGradient>
      <linearGradient id="prefix__c">
        <stop stopColor="#bfcfb1" offset={0} />
        <stop stopColor="#5e6658" offset={1} />
      </linearGradient>
    </defs>
    <path
      strokeLinejoin="round"
      d="M157.08 826.85a3.788 45.204 0 11-7.576 0 3.788 45.204 0 117.576 0z"
      transform="matrix(.93503 -.74487 .69344 .38096 -590.506 24.246)"
      filter="url(#prefix__d)"
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.07}
    />
    <path
      d="M592.536 173.285a5.24 6.629-6.832 11-10.406 1.246 5.24 6.629-6.832 1110.406-1.246z"
      fill="#333"
    />
    <path
      d="M592.197 173.916a3.603 4.59-7.217 11-7.157.846 3.603 4.59-7.217 117.157-.846z"
      fill="gray"
    />
    <path
      d="M568.837 164.607l5.74-2.705 8.741 10.298c2.444-.215 4.952-.566 6.837.39l.164 2.354c-3.199 3.107-6.806 1.962-10.257 2.43-.892-.714-1.885-1.176-1.876-4.158z"
      fill="#41452d"
    />
    <path
      d="M118.02 322.17c-10.689 9.833 31.819 41.347 47.729 62.02l69.491-5.524c-33.4-24.84-101.52-64.36-117.22-56.5z"
      fill="url(#prefix__e)"
      transform="rotate(-19.517 -291.033 207.451)"
    />
    <path
      d="M158.998 187.478c.092-5.815 24.209-7.16 46.797-3.67 30.12 4.655 39.714 10.6 42.779 15.62 8.62 14.124-22.928 11.239-42.374 7.252-22.602-4.634-47.272-14.736-47.201-19.203z"
      fill="#2e3f53"
    />
    <path
      d="M176.394 189.353c.215-2.003 10.765-3.186 20.504-2.658 12.986.703 16.989 2.462 18.173 4.098 3.333 4.603-10.329 4.551-18.683 3.76-9.71-.92-20.158-3.661-19.994-5.2z"
      fill="#b9422b"
    />
    <path
      d="M253.55 466.73c-22.385.555-43.967 5.6-79.297-5.556l-8.334-7.07c-1.965-7.888-.124-9.792 0-14.396z"
      fill="url(#prefix__f)"
      transform="rotate(-19.517 -291.033 207.451)"
    />
    <path
      d="M532.5 415.93c-13.226-6.977-38.992-17.842-41.964-16.071-.695 8.376 18.752 13.022 29.464 19.286z"
      fill="url(#prefix__g)"
      transform="rotate(-19.517 -291.033 207.451)"
    />
    <path
      d="M588.825 68.644c-22.3 4.18-15.61 47.133-35.816 59.303-6.803 6.406-98.525 6.144-148.022 15.335-39-10.058-57.6 17.13-68.292 26.481-57.956 9.246-181.75 29.556-179.412 42.734l6.174 48.986c27.614 26.911 71.16 19.326 114.975 11.158l197.266-63.483c39.089-17.645 92.367-37.99 117.263-52.934 15.732-6.572 17.686-85.618-4.14-87.578z"
      fill="#8aa1a8"
    />
    <path
      d="M171.81 202.819c-9.552 3.375-15.089 6.594-14.578 9.477l3.217 25.351 8.698 14.623c11.68 1.537 13.87-9.603 17.23-19.204-4.12-3.632-6.688-7.95-5.16-14.086 2.613-4.581 6.353-8.452-.36-19.07a182.557 182.557 0 00-9.048 2.91zM585.83 69.29c-18.782 7.304-13.598 46.863-32.857 58.462-3.695 3.48-32.604 5-66.038 7.129-.84 56.372-26.998 71.708-33.621 81.278l22.35-7.193c7.6-3.43 15.814-6.983 24.174-10.558 5.426-16.545 9.022-31.874 46.166-51.874 31.068-20.545 39.2-55.694 58.603-43.816-1.286-17.83-6.286-33.418-15.83-34.275a16.507 16.507 0 00-2.948.847zm-232.19 84.36c-7.375 5.83-12.784 12.23-16.975 15.897a5266.016 5266.016 0 00-29.216 4.753c7.225 15.8 7.43 34.706-20.463 65.74-9.92 2.794-14.403 5.33-19.55 7.89-4.816-1.827-9.714-3.08-15.046-.733-4.938 2.209-9.687 4.369-10.51 5.614l-7.029-1.685c-5.003 2.163-8.402 4.23-9.946 6.177l-11.095-1.371c-16.5 8.559-21.888 14.71-24.633 20.302 25.57 7.76 57.327 2.137 89.23-3.811l144.287-46.404c-.116-1.712-.596-3.556-1.698-5.632 1.79-5.734 2.526-11.209-.299-15.808 5.312-10.792 10.857-21.61 11.498-31.727-4.884-10.492-6.063-22.328-13.295-31.99a298.406 298.406 0 00-13.934 2.22 71.33 71.33 0 00-8.195-1.604l-43.13 12.172z"
      fill="#41452d"
    />
    <path
      d="M232.47 282.034l1.45 7.328-10.218-3.88c-4.488-6.778-2.398-7.034-2.398-7.034z"
      fill="#1b2020"
    />
    <path
      d="M121.35 400.94l-1.938 9.313c17.036 34.59 60.628 41.999 104.66 48.938l4.72.125.624-2.625c-55.525-17.535-88.763-36.275-108.06-55.75z"
      fill="url(#prefix__h)"
      transform="rotate(-19.517 -291.033 207.451)"
    />
    <path
      filter="url(#prefix__i)"
      fill="#adcad3"
      d="M170.71 409.15c-1.191 1.488-.993 2.976-.536 4.464 5.83 3.243 15.505 2.97 16.43 1.25-2.082-2.917-8.282-4.58-15.894-5.714z"
      transform="rotate(-19.517 -291.033 207.451)"
    />
    <path
      d="M196.197 226.364c-1.767 1.817-.77 3.582.42 5.344 24.06-2.885 45.317-8.47 67.363-13.295 1.495-1.061.492-4.538-2.152-6.07z"
      fill="#1a1a1a"
    />
    <path
      d="M209.383 228.183c.391 1.908-1.797 3.97-4.889 4.604-3.091.635-5.915-.397-6.306-2.305-.392-1.908 1.796-3.97 4.888-4.604 3.091-.635 5.915.397 6.307 2.305zM222.06 226.024c.385 1.909-1.81 3.963-4.904 4.588-3.093.624-5.914-.417-6.299-2.327-.385-1.909 1.81-3.963 4.903-4.587 3.094-.625 5.914.417 6.3 2.326zM234.329 223.372c.483 1.887-1.603 4.052-4.66 4.835-3.057.784-5.928-.11-6.411-1.997-.484-1.887 1.603-4.052 4.66-4.836 3.057-.783 5.927.112 6.41 1.998zM246.765 220.863c.456 1.894-1.66 4.028-4.729 4.768-3.068.74-5.925-.197-6.381-2.09-.457-1.894 1.66-4.028 4.729-4.768 3.068-.739 5.925.197 6.381 2.09zM260.723 217.708c.503 1.882-1.56 4.068-4.61 4.883-3.048.815-5.928-.05-6.43-1.931-.504-1.882 1.56-4.068 4.609-4.883 3.049-.815 5.928.05 6.431 1.931z"
      fill="#4d4d4d"
    />
    <path
      opacity={0.62}
      d="M569.35 375.92l12.258 3.053c-7.828 25.905-16.991 69.155-29.342 76.786"
      filter="url(#prefix__j)"
      stroke="#000"
      fill="none"
      transform="rotate(-19.517 -291.033 207.451)"
    />
    <path
      style={{
        textTransform: 'none',
        textIndent: 0,
      }}
      fill="#eed455"
      d="M468.118 142.242c-3.568 1.676-6.267 4.922-7.928 8.877-2.213 5.274-2.84 11.943-1.893 19.073.94 7.076 3.201 14.708 6.832 20.489 1.815 2.89 3.976 5.345 6.664 6.92s5.954 2.17 9.276 1.288c6.349-1.686 11.736-6.641 15.363-12.872 3.626-6.231 5.525-13.867 4.49-21.286-1.242-8.907-5.963-15.248-11.598-19.064-5.635-3.816-12.109-5.253-17.364-4.555a13.038 13.038 0 00-3.843 1.13z"
      color="#000"
    />
    <path
      style={{
        textTransform: 'none',
        textIndent: 0,
      }}
      fill="#2e3f53"
      d="M470.094 146.591c.78-.358 1.607-.57 2.508-.69 3.837-.51 9.376.599 14.027 3.748 4.65 3.15 8.482 8.194 9.54 15.782.858 6.157-.736 12.8-3.867 18.18-3.132 5.38-7.748 9.365-12.45 10.614-2.141.568-3.848.269-5.61-.764s-3.506-2.894-5.042-5.34c-3.074-4.894-5.277-12.033-6.143-18.545-.858-6.46-.222-12.386 1.545-16.595 1.325-3.157 3.153-5.315 5.493-6.39z"
      color="#000"
    />
    <path
      d="M488.628 167.547a8.79 11.85-4.306 11-17.373 2.897 8.79 11.85-4.306 1117.373-2.897z"
      fill="#fff"
    />
    <path
      fill="#b9422b"
      d="M486.086 168.269a6.002 9.1-9.013 11-11.886 1.693 6.002 9.1-9.013 1111.886-1.693z"
    />
    <path
      d="M584.64 370.58c-22.415-3.51-30.461 39.209-53.571 43.929-8.552 3.765-94.916-27.126-144.64-35-33.398-22.51-60.013-3.1-73.214 2.143-57.715-10.648-181.18-32.865-183.38-19.663l-10.547 48.234c17.036 34.59 60.614 41.99 104.64 48.929l207.14 6.071c42.738-3.571 99.752-4.946 128.21-10.714 17.024-.939 45.274-74.79 25.357-83.929z"
      fill="url(#prefix__k)"
      transform="rotate(-19.517 -291.033 207.451)"
    />
    <path
      d="M371.507 143.862c-17.358 5.932-27.8 19.765-34.816 25.902 1.063-.538 1.684-.516 2.924-.742.43-.078.958-.696 1.406-.749 3.843-.452 8.122.586 10.005 1.923.7.498.721 1.704 1.547 2.094.754.026 2.282-.988 3.04-.978 9.71.134 18.954.218 29.342 2.594 1.035.237 1.54 1.625 2.592 1.911.923-.055 2.768-1.624 3.666-1.732 15.993-1.924 29.764-5.261 41.3-9.295.383-11.703-1.818-19.22-7.118-24.546-7.294.888-14.186 1.9-20.402 3.055-13.406-3.458-24.393-2.544-33.486.564z"
      fill="#41452d"
    />
    <path
      d="M531.34 430.36c-1.83-9.74 21.2-6.442 29.294-4.293 24.172 10.16 49.623 19.28 68.69 33.588-21.79 1.107-65.01-19.216-97.985-29.294z"
      fill="url(#prefix__l)"
      transform="rotate(-19.517 -291.033 207.451)"
    />
    <path
      transform="matrix(.86516 -.07054 .14519 .9829 -13.004 -134.504)"
      fill="url(#prefix__m)"
      d="M150.01 388.06a13.258 26.895 0 11-26.517 0 13.258 26.895 0 1126.517 0z"
    />
    <path
      d="M131.18 390.04c-3.43 11.428-10.092 19.234-14.881 17.437-4.789-1.798-44.004-20.309-40.489-32.02 4.03-13.425 48.121-11.16 52.91-9.363 4.789 1.798 5.89 12.52 2.46 23.946z"
      fill="url(#prefix__n)"
      transform="rotate(-19.517 -291.033 207.451)"
    />
    <path
      opacity={0.462}
      d="M348.5 401.57c-36.115.652-111.96-13.13-118.69-16.668 36.66 3.527 97.368 9.854 118.69 16.668z"
      transform="rotate(-19.517 -1785.7 1245.737) scale(1.8956 2.41581)"
      filter="url(#prefix__o)"
      fill="#fff"
    />
    <path
      d="M566.195 293.22c-.342.925 2.072 14.538 2.072 14.538l-9.556 3.655.837 1.981 14.086-4.859-.76-2.142-1.946.556 4.058-13.495z"
      fill="#41452d"
    />
    <path
      d="M278.433 272.638c-3.738-22.884 127.846-77.702 197.266-63.483-15.97 9.573-33.98 16.989-36.54 31.431 3.107 10.988 211.525 6.226 219.816 46.407-49.352 28.059-360.45-9.628-380.544-14.356z"
      fill="#8aa1a8"
    />
    <path
      d="M349.62 227.013c-41.107 14.788-73.06 34.183-71.191 45.626 5.379 1.266 31.715 4.913 68.21 9.01 22.168-16.85 44.946-32.751 76.34-35.217-.454-2.044.453-3.44-5.537-4.867-5.513-6.491 1.651-9.268 5.645-12.976.048-7.8-1.034-14.356-3.43-19.407-23.442 3.325-48.05 9.92-70.038 17.83zm110.784 18.553c4.106 11.494 61.276 5.015 42.474 21.05-2.117 1.806-22.447 12.536-35.275 26.197 83.34 5.94 167.633 7.694 191.369-5.8-1.746-8.47-12.408-14.953-28.142-19.997-18.506 8.786-43.58 13.505-83.8 8.187.195-8.426 5.975-15.018 13.877-20.9-37.614-4.159-77.033-6.195-100.506-8.735z"
      fill="#41452d"
    />
    <path
      d="M577.683 269.297c-.393 6.264-33.016 11.495-63.35 11.29-40.451-.273-53.13-5.156-57.034-10.07-10.987-13.824 31.473-15.677 57.543-14.446 30.302 1.432 63.143 8.415 62.84 13.226z"
      fill="#2e3f53"
    />
    <path
      d="M542.17 266.385c-.185 2.673-14.359 4.975-27.527 4.953-17.56-.03-23.054-2.086-24.738-4.174-4.74-5.875 13.697-6.757 25.012-6.287 13.15.546 27.393 3.454 27.252 5.508z"
      fill="#b9422b"
    />
    <path
      d="M223.93 459.08c4.122-22.818 146.46-30.524 207.14 6.071-18.25 3.687-37.704 4.66-44.941 17.417-.743 11.394 197.29 76.538 191.68 117.18-55.891 9.958-336.52-129.5-353.88-140.67z"
      fill="url(#prefix__p)"
      transform="rotate(-19.517 -291.033 207.451)"
    />
    <path
      d="M304.29 488.97c-7.76-1.21-41.572-3.435-50.179.357l-5-.178v1.607l4.821.535c.123 4.456 18.915 5.884 45.357 6.072 2.856-1.608 5.424-3.506 5-8.393z"
      fill="url(#prefix__q)"
      transform="rotate(-19.517 -291.033 207.451)"
    />
    <path
      opacity={0.41}
      d="M322.62 456.21c29.626-5.915 62.662 3.216 68.438 15.405-21.553-9.752-44.895-12.948-68.438-15.405z"
      transform="matrix(1.41918 -.50305 .4776 1.34736 -344.339 -209.808)"
      filter="url(#prefix__r)"
      fill="#fff"
    />
    <path
      d="M426.469 99.723l1.737 41.182c.858 1.068 1.4.894 1.8.166z"
      fill="#666"
    />
    <path
      opacity={0.9}
      fill="#1a1a1a"
      d="M371.491 143.847c-.904.309-1.763.649-2.63.998 9.623 6.955 13.971 23.348 18.27 24.086 8.893.186 16.38-2.536 23.026-4.674.686-.18-2.69-13.906-7.315-21.478-12.433-2.829-22.75-1.872-31.35 1.067zm-10.3 6.204c-6.826 4.874-11.918 10.036-17.346 15.134 3.906-1.397 7.066-.25 10.144 1.211 3.154-5.35 9.666-10.252 7.202-16.345zm6.65 2.019s-9.433 15.768-8.842 15.368c1.073-.724 22.892 1.942 22.68 2.199-3.547-6.297-7.922-16.05-13.838-17.567zm39.599-9.23c4.623 6.244 5.943 18.25 8.793 21.253 4.916.24 9.267-1.196 13.476-2.953.462-3.217-2.874-13.104-7.435-20.506-5.213.672-10.193 1.395-14.834 2.208z"
    />
    <path
      d="M373.082 148.662c-2.486-.828-4.37-2.045-8.265-1.96-7.092-7.656 3.52-14.842 3.423-1.683 3.115.683 3.345 2.387 4.842 3.643z"
      fill="#4d4d4d"
    />
    <path
      fill="#999"
      d="M366.242 142.208a2.431 1.256 78.805 11-2.48.403 2.431 1.256 78.805 112.48-.403z"
    />
    <path
      strokeLinejoin="round"
      d="M157.08 826.85a3.788 45.204 0 11-7.576 0 3.788 45.204 0 117.576 0z"
      transform="matrix(1.4161 .55371 -.55749 .96805 419.624 -697.37)"
      filter="url(#prefix__s)"
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={0.772}
    />
    <path
      strokeLinejoin="round"
      d="M157.08 826.85a3.788 45.204 0 11-7.576 0 3.788 45.204 0 117.576 0z"
      transform="matrix(1.1746 .22214 .16403 .77401 -157.936 -385.084)"
      filter="url(#prefix__t)"
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.07}
    />
  </svg>
);

export const UpUnderlined = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={props.width}
    height={props.height}
    viewBox="0 0 18 19"
  >
    <defs>
      <path
        id="upun"
        d="M10 4.244V14H8V4.244L4.707 7.537 3.293 6.123 9 .416l5.707 5.707-1.414 1.414L10 4.244zM0 17h18v2H0v-2z"
      />
    </defs>
    <use fill={props.color} fillRule="evenodd" xlinkHref="#upun" />
  </svg>
);

export const PlaneRight = props => (
  <svg
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  width={props.width}
  height={props.height}
  viewBox="0 0 880 477"
  {...props}
>
  <image
    width={880}
    height={477}
    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA3AAAAHdCAYAAABc95vOAAAgAElEQVR4XuydB3QUVRuGv2x6D72DVAHpoCL8IqggKFIERJASQkcEpAkKCIJ0pPeOSBUboIJ0ARVQkN57CS2kQHpy//Pd2Ul2k20pu8nuvnPOnk2Zcu8zd+7MO19zISwgAAIgAAIgAAIgAAIgAAIgAAJ2QcDFLlqJRoIACIAACIAACIAACIAACIAACBAEHAYBCIAACIAACIAACIAACIAACNgJAQg4OzlRaCYIgAAIgAAIgAAIgAAIgAAIQMBhDIAACIAACIAACIAACIAACICAnRCAgLOTE4VmggAIgAAIgAAIgAAIgAAIgAAEHMYACIAACIAACIAACIAACIAACNgJAQg4OzlRaCYIgAAIgAAIgAAIgAAIgAAIQMBhDIAACIAACIAACIAACIAACICAnRCAgLOTE4VmggAIgAAIgAAIgAAIgAAIgAAEHMYACIAACIAACIAACIAACIAACNgJAQg4OzlRaCYIgAAIgAAIgAAIgAAIgAAIQMBhDIAACIAACIAACIAACIAACICAnRCAgLOTE4VmggAIgAAIgAAIgAAIgAAIgAAEHMYACIAACIAACIAACIAACIAACNgJAQg4OzlRaCYIgAAIgAAIgAAIgAAIgAAIQMBhDIAACIAACIAACIAACIAACICAnRCAgLOTE4VmggAIgAAIgAAIgAAIgAAIgAAEHMYACIAACIAACIAACIAACIAACNgJAQg4OzlRaCYIgAAIgAAIgAAIgAAIgAAIQMBhDIAACIAACIAACIAACIAACICAnRCAgLOTE4VmggAIgAAIgAAIgAAIgAAIgAAEHMYACIAACIAACIAACIAACIAACNgJAQg4OzlRaCYIgAAIgAAIgAAIgAAIgAAIQMBhDIAACIAACIAACIAACIAACICAnRCAgLOTE4VmggAIgAAIgAAIgAAIgAAIgAAEHMYACIAACIAACIAACIAACIAACNgJAQg4OzlRaCYIgAAIgAAIgAAIgAAIgAAIQMBhDIAACIAACIAACIAACIAACICAnRCAgLOTE4VmggAIgAAIgAAIgAAIgAAIgAAEHMYACIAACIAACIAACIAACIAACNgJAQg4OzlRaCYIgAAIgAAIgAAIgAAIgAAIQMBhDIAACIAACIAACIAACIAACICAnRCAgLOTE4VmggAIgAAIgAAIgAAIgAAIgAAEHMYACIAACIAACIAACIAACIAACNgJAQg4OzlRaCYIgAAIgAAIgAAIgAAIgAAIQMBhDIAACIAACIAACIAACIAACICAnRCAgLOTE4VmggAIgAAIgAAIgAAIgAAIgAAEHMYACIAACIAACIAACIAACIAACNgJAQg4OzlRaCYIgAAIgAAIgAAIgAAIgAAIQMBhDIAACIAACIAACIAACIAACICAnRCAgLOTE4VmggAIgAAIgAAIgAAIgIAzEli/fr04e/YsRURE0Jw5c5xevzg9AGe8CNBnEAABEAABEAABEAABEMiNBBYuXCjFGn8uXbpEkZGRlJiYKD958uShe/fuOb1+cXoAuXHgok0gAAIgAAIgAAIgAAIg4MgENm3aJIXa9evX6e7duyzMKDQ0lKKioigpKUl+kpOT9RAEBgbSsmXLqF27dk6tYZy68458UaBvIAACIAACIAACIAACIJAbCMyaNUtcvnxZWtWuXbtGT58+pfj4+JQPt5HFmhBCr7kuLi56f/P29qYxY8bQyJEjnVrDOHXnc8OARhtAAARAAARAAARAAARAwBEIrFq1SrBA4w9b1O7cuUMPHz6UbpAs0NiqxiJNV6ilFWmmOHh4eFBISAgtWrTIqTWMU3feES4U9AEEQAAEQAAEQAAEQAAEbE1gwYIF4uLFi3ThwgW6evWqTDASFxdHsbGxlJCQIEWaIataVtrp6upKzZo1o23btjm1hnHqzmdlAGFbEAABEAABEAABEAABEHAGAhMmTBAs0jhWja1qbF1jN0g1Ti27hZoxphqNhurUqUNHjhxxag3j1J13hgsOfQQBEAABEAABEAABEACBzBKoVKmSuHXrlrSusVDLqFjLiIukuTbyvkqWLEk3btxwag3j1J03N0jwfxAAARAAARAAARAAARBwVgIfffSRWLp0qUw2klsWPz8/tv45tYZx6s7nloGIdoAACIAACIAACIAACIBAbiNQqlQpcfPmzXTZIXOynZ6enjRhwgQaNmyY0+oYp+14Tg48HBsEQAAEQAAEQAAEQAAEcjOBxo0bi71798oC2rlpcXNzo27dutHSpUudVsc4bcdz00BEW0AABEAABEAABEAABEAgtxDgcgAff/yxLKqtv2h0ftUvsp2Ztms0bnIzFmVcIoDj66Kjo7kqXMru0sbQcSKT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h/g5sCIA6mHAoQLxasIKgA43y733HkWjRo3iRQmAufiLPx37OZJs30z02Z/sdbyO090f7T5F/LxA34GXApR6scViAZg0LACBVUN/A5BT70ZqabFj04RVCwui0lWnRK7nBmnwrgCjhjcW4uBejIWM888/Py/muOmyoTlPYhbIi86x9957W1988YVh4BJrW9574qTzrKeffopatFgbuB+dOeEndOwxxwcyIklc0hzSbi2g4mQwkM6c+SK9//571NSMHFPOiTgmYphwAbiNGDGSXf/ir6B3bBU5TIJrajbQokVf0uIlX1FNTU1E5UzPGZRczIWIxETBHinRCIA99UENAQWWYsGKS0uUsESrynHU1KJWsPE/XlgHd0ziW63oyrifC2RisSM2I4NEsXsOH8Fuo4iZFLZITfYTy2/Ubm/JNqqYgDJpE2yVe1oTi0KIwiVEIcCQqJQFAuCD44YEzPWoQp653Wn06DG8GIRniVKyLNIWdJVIRaRDt5FF8u+yiYI3d5vLc8DN5sZaws6jJv/p7o/q+VfDC0KIUUPfkcUgsGpw029sVKIituujt4BNrj0X9EU2yauGhTXkPgWjNnDgQE6CDdA2eXL+ucTnX69vXyXOCwA3btw464MPPnDEwMHd4vbb76LJF/0k5+tgGLj2ddO079q4xQHs75icrfx+KU2b9hR99fWXEVVY58o3gAHc+fbf/wDaZRdJEaAs5pgwQLSkIHgi175t7awdxDsQq/HNN0to6dKltG69vdLslwg9lpkLslhirmjhJkTh29HL1UgBMiVwAbVCALfdd9+DGTclPR/f7Taoxub/eBZInrmK1zeUq1sjPyOQWHzFihX8xiQdsXOibunldu0sbSEzxFCsRL84+OBDaK+9RhKAHfqL38JQuH5rekaYxZBkbKnnIhRGra5ue4RV28aqjwD2YG0B2MCygcnFgqC4PwpgzHScWrxekEjdRYQHWzy3ICgCrwd4O1RXV7MKK+LVTKyaue/SZYGcBz+o6EknnWS98sorURVK3FSdOpXTlMuuoLv/dEfO18EAuHR1V3OeTFsA4nJqVd25wgnwtuSbr+mFF56jBQvne6QJUMxJv77VdNhhh9GgQUOouKiU2RnPVzvN95Z6+yiWE5OY9evVJIdzEa1fw+6JIvsugNh5vfBAKvVyOs+QSCyViFjgGEzC4TY0oHoQB+QP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gBMEMMFxAhIOAQEQ8D6BWbNmiZMnT9KlS5fowoULdOfOHWXNHL+Cg4MpLCxMScBdrlw5qlixIlWtWpX69++PZ5r3uwpnBAEQAAEQAAEQ8CIBTHa8CBunAgEQAAEQAAEQAAEQAAEQAAEjBCDgjNBDWRAAARAAARAAARAAARAAARDwIgEIOC/CxqlAAARAAARAAARAAARAAARAwAgBCDgj9FAWBEAABEAABEAABEAABEAABLxIAALOi7BxKhAAARAAARAAARAAARAAARAwQgACzgg9lAUBEAABEAABEAABEAABEAABLxKAgPMibJwKBEAABEAABEAABEAABEAABIwQgIAzQg9lQQAEQAAEQAAEQAAEQAAEQMCLBCDgvAgbpwIBEAABEAABEAABEAABEAABIwQg4IzQQ1kQAAEQAAEQAAEQAAEQAAEQ8CIBCDgvwsapQAAEQAAEQAAEQAAEQAAEQMAIAQg4I/RQFgRAAARAAARAAARAAARAAAS8SAACzouwcSoQAAEQAAEQAAEQAAEQAAEQMEIAAs4IPZQFARAAARAAARAAARAAARAAAS8SgIDzImycCgRAAARAAARAAARAAARAAASMEICAM0IPZUEABEAABEAABEAABEAABEDAiwQg4LwIG6cCARAAARAAARAAARAAARAAASMEIOCM0ENZEAABEAABEAABEAABEAABEPAiAQg4L8LGqUAABEAABEAABEAABEAABEDACAEIOCP0UBYEQAAEQAAEQAAEQAAEQAAEvEgAAs6LsHEqEAABEAABEAABEAABEAABEDBCAALOCD2UBQEQAAEQAAEQAAEQAAEQAAEvEoCA8yJsnAoEQAAEQAAEQAAEQAAEQAAEjBCAgDNCD2VBAARAAARAAARAAARAAARAwIsEIOC8CBunAgEQAAEQAAEQAAEQAAEQAAEjBCDgjNBDWRAAARAAARAAARAAARAAARDwIgEIOC/CxqlAAARAAARAAARAAARAAARAwAgBCDgj9FAWBEAABEAABEAABEAABEAABLxIAALOi7BxKhAAARAAARAAARAAARAAARAwQgACzgg9lAUBEAABEAABEAABEAABEAABLxKAgPMibJwKBEAABEAABEAABEAABEAABIwQgIAzQg9lQQAEQAAEQAAEQAAEQAAEQMCLBCDgvAgbpwIBEAABEAABEAABEAABEAABIwQg4IzQQ1kQAAEQAAEQAAEQAAEQAAEQ8CIBCDgvwsapQAAEQAAEQAAEQAAEQAAEQMAIAQg4I/RQFgRAAARAAARAAARAAARAAAS8SAACzouwcSoQAAEQAAEQAAEQAAEQAAEQMEIAAs4IPZQFARAAARAAARAAARAAARAAAS8SgIDzImycCgRAAARAAARAAARAAARAAASMEICAM0IPZUEABEAABEAABEAABEAABEDAiwT+H0kImxHhJVghAAAAAElFTkSuQmCC"
  />
</svg>
);

export const DownUnderlined = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={props.width}
    height={props.height}
    viewBox="0 0 18 17"
  >
    <defs>
      <path
        id="downun"
        d="M10 9.709l3.293-3.293 1.414 1.414L9 13.537 3.293 7.83l1.414-1.414L8 9.709V0h2v9.709zM0 15h18v2H0v-2z"
      />
    </defs>
    <use fill={props.color} fillRule="evenodd" xlinkHref="#downun" />
  </svg>
);

export const Cloud = props => (
  <svg
      width={361}
      height={207}
      viewBox="0 0 361 207"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>{"image (2)"}</title>
      <g fill="#FFF" fillRule="nonzero">
        <path
          d="M184.864 6c-35.133 0-64.811 24.87-74.045 58.83-1.14.082-2.284.082-3.424 0-14.621 0-26.485 13.168-26.485 29.397 0 .166-.003.323 0 .489a61.57 61.57 0 01-1.405 0C50.522 94.716 27 114.485 27 138.829c0 24.345 23.522 44.115 52.505 44.115 11.479 0 22.086-3.125 30.73-8.382 5.162 17.144 19.73 29.528 36.905 29.528 11.638 0 22.074-5.687 29.208-14.683 6.921 4.02 15.061 6.335 23.764 6.335 11.843 0 22.65-4.275 30.76-11.304 10.93 12.589 27 20.562 44.925 20.562 21.99 0 41.209-12.01 51.537-29.82 17.494 0 31.666-15.27 31.666-34.11 0-18.838-14.173-34.14-31.666-34.14-3.13 0-6.158.516-9.014 1.43-9.427-12.336-23.521-20.886-39.628-22.968-3.294-41.665-36.383-74.422-76.707-74.422L184.864 6z"
          stroke="#013A81"
          strokeWidth={2.587}
        />
        <path
          d="M183.162 3c-32.158.106-63.598 23.951-73.59 58.006-14.545-8.188-34.082 1.284-38.803 18.51-.773 2.613-1.281 5.351-1.407 8.101-22.819-4.46-49.808 3.83-62.043 26.938-8.183 15.076-4.206 35.526 7.444 46.912 18.892 19.945 49.827 22.052 72.477 10.215 7.349 21.786 31.191 34.111 51.023 26.092 6.317-2.27 12.071-6.764 16.647-11.777 17.009 9.108 38.542 7.489 53.896-4.848 24.625 27.454 69.542 26.337 92.697-2.765 2.767-2.096 3.555-8.228 7.59-6.832 18.706 1.44 36.318-17.145 34.818-38.128-.612-21.613-20.738-38.171-39.624-33.737-3.894 1.791-5.386-4.601-8.586-6.214-9.057-8.832-21.078-13.645-32.355-16.07-3.437-37.687-32.803-68.519-66.195-73.415a73.03 73.03 0 01-.89 0L183.16 3z"
          stroke="#000"
          strokeWidth={5.587}
        />
      </g>
    </svg>
);

export const PlaneTwo = props => (
  <svg
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  width={600}
  height={600}
  viewBox="0 0 600 600"
  {...props}
>
  <image
    width={600}
    height={600}
    xlinkHref="data:image/png;base64,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"
  />
</svg>
);

export const DashboardIcon = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={props.width}
    height={props.height}
    viewBox="0 0 23 14"
  >
    <defs>
      <path
        id="dash"
        d="M4.761 14.13l-.075.08c-.196.212-.948 1.16-2.255 2.842L.921 15.71l3.332-3.873a1 1 0 0 1 1.621.178l1.585 2.854.06-.13c.26-.56 1.78-4.19 2.115-5.02l.322-.8.128-.319c.348-.796 1.477-.8 1.83-.005l3.022 6.8c.042-.117.087-.243.134-.379.303-.866 2.722-8.488 2.835-8.857l.146-.474c.282-.845 1.445-.928 1.843-.131L22.618 11l-1.789.894-1.64-3.28-3.24 9.702c-.289.866-1.492.924-1.863.09l-3.078-6.926-2.592 5.92a1 1 0 0 1-1.79.086L4.76 14.13z"
      />
    </defs>
    <g fill="none" fillRule="evenodd" transform="translate(0 -5)">
      <mask id="b" fill="#fff">
        <use xlinkHref="#dash" />
      </mask>
      <use fill={props.color} fillRule="nonzero" xlinkHref="#dash" />
    </g>
  </svg>
);

export const DownArrow = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={props.width}
    height={props.height}
    viewBox="0 0 18 11"
  >
    <defs>
      <path
        id="downarr"
        d="M9 10.414L.222 1.636 1.636.222l7.37 7.359L16.292.293l1.414 1.414z"
      />
    </defs>
    <use fill={props.color} fillRule="nonzero" xlinkHref="#downarr" />
  </svg>
);

export const Edit = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={props.width}
    height={props.height}
    viewBox="0 0 20 18"
  >
    <defs>
      <path
        id="edit"
        d="M17 4l-4-4L0 13v4h4L17 4zM3 15l-1-1L13 3l1 1L3 15zm3 3l2-2h12l-2 2H6z"
      />
    </defs>
    <use fill={props.color} fillRule="nonzero" xlinkHref="#edit" />
  </svg>
);

export const EnterMenu = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={props.width}
    height={props.height}
    viewBox="0 0 20 20"
  >
    <defs>
      <path
        id="enter"
        d="M13 18v2H0V0h13v2H2v16h11zM6 9h10.016L12.8 5.714 14.214 4.3l5.706 5.707-5.706 5.707L12.8 14.3l3.23-3.3H6V9z"
      />
    </defs>
    <use fill={props.color} fillRule="nonzero" xlinkHref="#enter" />
  </svg>
);

export const HomeIcon = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={props.width}
    height={props.height}
    viewBox="0 0 18 19"
  >
    <defs>
      <path
        id="home"
        d="M9 3.419l7 7.046V19h2V9.64L9 .581l-9 9.06V19h2v-8.535z"
      />
    </defs>
    <use fill={props.color} fillRule="nonzero" xlinkHref="#home" />
  </svg>
);

export const Pause = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={props.width}
    height={props.height}
    viewBox="0 0 8 13"
  >
    <defs>
      <path id="pause" d="M6 0h2v13H6V0zM0 0h2v13H0V0z" />
    </defs>
    <use fill={props.color} fillRule="evenodd" xlinkHref="#pause" />
  </svg>
);

export const Play = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={props.width}
    height={props.height}
    viewBox="0 0 17 21"
  >
    <defs>
      <path
        id="play"
        d="M2 4v13l11-6.5L2 4zm1.017-1.722l11 6.5 2.914 1.722-2.914 1.722-11 6.5L0 20.505V.495l3.017 1.783z"
      />
    </defs>
    <use fill={props.color} fillRule="nonzero" xlinkHref="#play" />
  </svg>
);

export const Star = props => (
  <svg
    id="cpi-star-button"
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    viewBox="0 0 51 48"
  >
    <path
      id="cpi-star-button"
      fill={props.fill}
      stroke={props.color}
      strokeWidth={3}
      d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
    />
  </svg>
);

export const SecurityIcon = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={props.width}
    height={props.height}
    viewBox="0 0 15 18"
  >
    <defs>
      <path
        id="secure"
        d="M2 9v7h11V9H2zm9-2V4.5C11 3.123 9.877 2 8.494 2H6.506A2.503 2.503 0 0 0 4 4.5V7h7zM2 7V4.5C2 2.015 4.018 0 6.506 0h1.988A4.506 4.506 0 0 1 13 4.5V7h2v11H0V7h2z"
      />
    </defs>
    <use fill={props.color} fillRule="nonzero" xlinkHref="#secure" />
  </svg>
);

export const SecurityPracticesIcon = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={props.width}
    height={props.height}
    viewBox="0 0 24 24"
  >
    <defs>
      <path
        id="securePratices"
        d="M8 14v8h14v-8H8zm-2-2h18v12H6V12zm5-1V9.5c0-.834.674-1.5 1.505-1.5h4.99C18.332 8 19 8.672 19 9.5V11h-2v-1h-4v1h-2zM6 4h4v2H6v4H4V6H0V4h4V0h2v4z"
      />
    </defs>
    <use fill={props.color} fillRule="nonzero" xlinkHref="#securePratices" />
  </svg>
);

export const UpArrow = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={props.width}
    height={props.height}
    viewBox="0 0 18 11"
  >
    <defs>
      <path
        id="uparr"
        d="M3.868 5.646l8.778 8.779 1.415-1.415L6.7 5.641l7.289-7.287-1.415-1.415z"
      />
    </defs>
    <use
      fill={props.color}
      fillRule="nonzero"
      transform="rotate(90 8.964 5.682)"
      xlinkHref="#uparr"
    />
  </svg>
);

export const CheckMark = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={props.width}
    height={props.height}
    viewBox="0 0 18 13"
  >
    <defs>
      <path
        id="check"
        d="M6.3 9.946L2.049 5.722a1.203 1.203 0 0 0-1.698.002c-.467.47-.466 1.23.002 1.697l5.1 5.07c.083.081.182.13.278.183.04.023.076.061.119.079a1.196 1.196 0 0 0 .903 0c.044-.018.078-.056.119-.079.097-.053.195-.102.277-.183L17.647 2.049A1.2 1.2 0 0 0 15.952.35L6.3 9.946z"
      />
    </defs>
    <use fill={props.color} fillRule="evenodd" xlinkHref="#check" />
  </svg>
);

export const Ellipses = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={props.width}
    height={props.height}
    viewBox="0 0 22 4"
  >
    <defs>
      <path
        id="dots"
        d="M20 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-9 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM2 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
      />
    </defs>
    <use fill={props.color} fillRule="evenodd" xlinkHref="#dots" />
  </svg>
);

export const Ribbon = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={props.width}
    height={props.height}
    viewBox="0 0 15 23"
  >
    <defs>
      <path
        id="ribbon"
        d="M7.5 15a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15zm0-2a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zm0-3.48l-2.163 1.137.413-2.408L4 6.543l2.418-.352L7.5 4l1.082 2.191L11 6.543 9.25 8.249l.413 2.408L7.5 9.52zM5 16.668V19.5L7.5 18l2.5 1.5v-2.832a9.438 9.438 0 0 0 2-.8V23l-4.5-2.5L3 23v-7.131a9.438 9.438 0 0 0 2 .799z"
      />
    </defs>
    <use fill={props.color} fillRule="nonzero" xlinkHref="#ribbon" />
  </svg>
);

export const Recent = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={props.width}
    height={props.height}
    viewBox="0 0 18 18"
  >
    <defs>
      <path
        id="recent"
        d="M17.962 9.21A8.001 8.001 0 1 0 10 18v2C4.477 20 0 15.523 0 10S4.477 0 10 0c5.073 0 9.264 3.777 9.913 8.673l2.38-2.38 1.414 1.414-4 4-.552.552-.67-.402-5-3 1.03-1.714 3.447 2.068zM9 11.415V6h2v4.57l2.707 2.723-1.414 1.414L9 11.414z"
      />
    </defs>
    <use fill={props.color} fillRule="nonzero" xlinkHref="#recent" />
  </svg>
);

export const Delete = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={props.width}
    height={props.height}
    viewBox="0 0 16 20"
  >
    <defs>
      <path
        id="delete"
        d="M3.995 18C3.445 18 3 17.544 3 16.998V6H1v11.994C1 19.102 1.897 20 3.006 20h9.988A2.005 2.005 0 0 0 15 17.994V6h-2v10.998c0 .553-.456 1.002-.995 1.002h-8.01zM11 16V6H9v10h2zm-4 0V6H5v10h2zm9-12V2h-5V0H5v2H0v2h16z"
      />
    </defs>
    <use fill={props.color} fillRule="nonzero" xlinkHref="#delete" />
  </svg>
);

export const Flat = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={props.width}
    height={props.height}
    viewBox="0 0 16 2"
  >
    <defs>
      <path id="flat" d="M0 0v2h16V0z" />
    </defs>
    <use fill={props.color} fillRule="nonzero" xlinkHref="#flat" />
  </svg>
);

export const Plus = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={props.width}
    height={props.height}
    viewBox="0 0 16 16"
  >
    <defs>
      <path id="a" d="M13 11h7v2h-7v7h-2v-7H4v-2h7V4h2v7z" />
    </defs>
    <use
      fill={props.color}
      fillRule="evenodd"
      transform="translate(-4 -4)"
      xlinkHref="#a"
    />
  </svg>
);

export const AddUserIcon = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={props.width}
    height={props.height}
    viewBox="0 0 18 17"
  >
    <defs>
      <path
        id="a"
        d="M12 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm-2.629 4.48L8 17H6l1.448-5.069C7.753 10.865 8.887 10 9.998 10h4.004c1.103 0 2.243.858 2.55 1.931L18 17h-2l-1.371-4.52c-.061-.212-.415-.48-.627-.48H9.998c-.213 0-.566.268-.627.48zM6 7v2H4v2H2V9H0V7h2V5h2v2h2z"
      />
    </defs>
    <use fill={props.color} fillRule="nonzero" xlinkHref="#a" />
  </svg>
);

export const DropdownArrow = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    viewBox="0 0 9.018 5.073"
  >
    <g id="sort" transform="translate(-1865 -37.049)">
      <path
        id="Path"
        d="M1873.85,37.216a.541.541,0,0,0-.4-.167h-7.891a.56.56,0,0,0-.4.96l3.945,3.945a.553.553,0,0,0,.793,0l3.945-3.945a.553.553,0,0,0,0-.793Z"
        fill={props.color}
      />
    </g>
  </svg>
);

export const UserBell = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    viewBox="0 0 23.332 28"
  >
    <g id="Group_2" data-name="Group 2" transform="translate(-1591.037 -28)">
      <g id="bell">
        <path
          id="Path"
          d="M1614.286,51.617l-2-3.339a9.917,9.917,0,0,1-1.414-5.1V40.25a8.177,8.177,0,0,0-5.833-7.822V30.333a2.333,2.333,0,1,0-4.667,0v2.094a8.177,8.177,0,0,0-5.833,7.822v2.925a9.924,9.924,0,0,1-1.413,5.1l-2,3.339a.584.584,0,0,0,.5.884h22.167a.583.583,0,0,0,.5-.883Z"
          fill="#d8d8d8"
        />
        <path
          id="Path-2"
          data-name="Path"
          d="M1599.029,53.667a4.059,4.059,0,0,0,7.348,0Z"
          fill="#d8d8d8"
        />
      </g>
      <g
        id="Oval"
        transform="translate(1604 30)"
        fill={props.color}
        stroke="#f6f5fa"
        strokeMiterlimit="10"
        strokeWidth="1"
      >
        <circle cx="5" cy="5" r="5" stroke="none" />
        <circle cx="5" cy="5" r="4.5" fill="none" />
      </g>
    </g>
  </svg>
);

export const GearIcon = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    viewBox="0 0 1278.000000 1280.000000"
    preserveAspectRatio="xMidYMid meet"
  >
    <g
      transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
      fill={props.color}
    >
      <path
        d="M5911 12790 c-409 -52 -565 -233 -603 -696 -11 -142 -7 -279 22 -754
      14 -210 0 -279 -67 -342 -45 -43 -108 -65 -278 -99 -208 -41 -259 -58 -530
      -184 -303 -140 -521 -232 -602 -253 l-65 -17 -35 40 c-20 22 -117 135 -217
      250 -368 427 -594 616 -802 670 -235 61 -449 -40 -738 -348 -441 -472 -472
      -510 -536 -642 -43 -91 -60 -159 -60 -246 0 -83 15 -139 66 -244 73 -153 152
      -245 502 -592 l326 -321 -34 -54 c-272 -428 -426 -760 -565 -1218 -57 -187
      -84 -244 -128 -267 -53 -28 -155 -32 -493 -21 -551 18 -724 -12 -875 -150 -95
      -87 -152 -208 -180 -382 -19 -113 -19 -819 -1 -930 58 -346 181 -505 453 -583
      154 -45 247 -51 741 -48 l457 2 11 -43 c101 -380 368 -970 535 -1184 139 -178
      154 -215 119 -290 -10 -20 -125 -138 -273 -278 -313 -297 -513 -502 -574 -588
      -128 -179 -161 -352 -98 -517 61 -160 345 -497 647 -765 285 -254 458 -338
      634 -308 206 35 394 175 708 527 121 135 550 587 563 593 4 2 72 -29 151 -69
      330 -165 652 -285 1023 -378 146 -37 203 -56 227 -78 21 -19 23 -61 7 -213
      -15 -149 -35 -1015 -27 -1134 23 -305 139 -489 359 -566 202 -71 582 -87 1079
      -45 274 23 360 53 476 169 109 108 166 236 197 441 33 214 32 360 -8 920 -8
      116 -18 258 -21 317 l-7 107 30 30 c22 22 57 38 134 61 266 80 466 147 604
      202 158 64 422 189 540 256 l70 40 90 -102 c204 -232 566 -627 650 -710 161
      -158 324 -272 455 -317 89 -30 224 -37 310 -15 81 21 199 84 269 144 129 110
      425 388 536 503 238 248 332 441 305 628 -15 98 -76 229 -159 338 -66 88 -251
      274 -416 419 -55 48 -143 126 -196 173 -52 47 -128 115 -168 150 -155 136
      -153 153 37 474 149 250 275 521 370 799 28 81 60 165 71 186 33 66 103 114
      206 143 68 19 349 17 575 -4 354 -33 489 -31 644 9 143 37 261 126 320 243 69
      135 99 384 99 811 1 389 -23 554 -103 727 -75 162 -213 247 -470 289 -114 19
      -439 21 -653 4 -78 -7 -205 -12 -282 -13 -157 -1 -193 8 -253 66 -49 47 -67
      88 -102 238 -56 236 -85 315 -181 490 -129 236 -244 474 -264 547 -25 95 -23
      183 6 230 13 22 124 129 246 240 401 365 554 558 608 767 19 76 19 204 0 280
      -20 78 -84 205 -140 280 -44 59 -278 315 -465 508 -224 232 -389 327 -569 327
      -248 0 -461 -151 -875 -620 -309 -351 -342 -377 -465 -368 -65 5 -140 39 -274
      125 -122 79 -243 129 -472 197 -379 112 -499 161 -585 242 -76 71 -75 66 -54
      377 49 730 2 1020 -201 1222 -132 132 -252 171 -570 185 -336 16 -664 20 -744
      10z m712 -4576 c422 -62 783 -229 1053 -487 260 -248 409 -532 475 -904 27
      -152 30 -456 5 -608 -59 -374 -204 -662 -458 -912 -143 -141 -259 -223 -457
      -322 -589 -296 -1396 -273 -1965 55 -192 110 -390 284 -509 444 -212 288 -317
      628 -317 1028 1 376 89 683 276 959 84 124 157 207 264 301 311 272 720 432
      1195 466 88 6 337 -5 438 -20z"
      />
    </g>
  </svg>
);
