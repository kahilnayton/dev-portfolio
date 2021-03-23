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
        blockProgression: 'tb',
        textTransform: 'none',
        textIndent: 0,
      }}
      fill="#eed455"
      d="M468.118 142.242c-3.568 1.676-6.267 4.922-7.928 8.877-2.213 5.274-2.84 11.943-1.893 19.073.94 7.076 3.201 14.708 6.832 20.489 1.815 2.89 3.976 5.345 6.664 6.92s5.954 2.17 9.276 1.288c6.349-1.686 11.736-6.641 15.363-12.872 3.626-6.231 5.525-13.867 4.49-21.286-1.242-8.907-5.963-15.248-11.598-19.064-5.635-3.816-12.109-5.253-17.364-4.555a13.038 13.038 0 00-3.843 1.13z"
      color="#000"
    />
    <path
      style={{
        blockProgression: 'tb',
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

export const Dots = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    viewBox="0 0 16 4"
  >
    <g id="Edit" transform="translate(0.171)">
      <circle
        id="Ellipse_3"
        data-name="Ellipse 3"
        cx="2"
        cy="2"
        r="2"
        transform="translate(-0.171)"
        fill={props.color}
      />
      <circle
        id="Ellipse_4"
        data-name="Ellipse 4"
        cx="2"
        cy="2"
        r="2"
        transform="translate(5.829)"
        fill={props.color}
      />
      <circle
        id="Ellipse_5"
        data-name="Ellipse 5"
        cx="2"
        cy="2"
        r="2"
        transform="translate(11.829)"
        fill={props.color}
      />
    </g>
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

export const Bell = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={props.width}
    height={props.height}
    viewBox="0 0 18 18"
  >
    <defs>
      <path
        id="bell"
        d="M14.131 12L13 10.303V5c0-1.65-1.35-3-3.01-3H8.01A3 3 0 0 0 5 5v5.303L3.869 12H14.13zM15 9.697L17.869 14H.13L3 9.697V5a5 5 0 0 1 5.01-5h1.98C12.754 0 15 2.244 15 5v4.697zM8 14v1c0 .552.444 1 1 1 .552 0 1-.444 1-1v-1H8zm-2 1v-3h6v3c0 1.66-1.343 3-3 3-1.66 0-3-1.343-3-3z"
      />
    </defs>
    <use fill={props.color} fillRule="nonzero" xlinkHref="#bell" />
  </svg>
);

export const BriefcasePlus = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={props.width}
    height={props.height}
    viewBox="0 0 24 24"
  >
    <defs>
      <path
        id="brief"
        d="M8 14v8h14v-8H8zm-2-2h18v12H6V12zm5-1V9.5c0-.834.674-1.5 1.505-1.5h4.99C18.332 8 19 8.672 19 9.5V11h-2v-1h-4v1h-2zM6 4h4v2H6v4H4V6H0V4h4V0h2v4z"
      />
    </defs>
    <use fill={props.color} fillRule="nonzero" xlinkHref="#brief" />
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
