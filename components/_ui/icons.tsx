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
          class="letter-1"
          x="16.35"
          y="25.22"
          width="21.45"
          height="129.55"
        />
        <polygon
          onMouseEnter={randomNum}
          fill={randomColors[number]}
          class="letter-2"
          points="100.55,25.22 76.46,25.22 45,78.13 45,103.8 79.63,154.77 104.06,154.77 59.06,91.85 	"
        />
        <polygon
          onMouseEnter={randomNum}
          fill={randomColors[number]}
          class="letter-3"
          points="167.01,25.4 121.66,154.77 143.63,154.77 177.55,57.74 211.13,154.77 232.93,154.77 187.93,25.4 	"
        />
        <polygon
          onMouseEnter={randomNum}
          fill={randomColors[number]}
          class="letter-4"
          points="165.6,113.64 160.68,127.88 194.25,127.88 189.16,113.64 	"
        />
        <rect
          onMouseEnter={randomNum}
          fill={randomColors[number]}
          class="letter-5"
          x="253.68"
          y="25.22"
          width="21.45"
          height="129.55"
        />
        <polygon
          onMouseEnter={randomNum}
          fill={randomColors[number]}
          class="letter-6"
          points="331.2,82 282.34,82 282.34,96.42 331.2,96.42 331.2,154.77 352.3,154.77 352.3,25.22 331.2,25.22 	"
        />
        <rect
          onMouseEnter={randomNum}
          fill={randomColors[number]}
          class="letter-7"
          x="378.5"
          y="25.22"
          width="21.45"
          height="129.55"
        />
        <polygon
          onMouseEnter={randomNum}
          fill={randomColors[number]}
          class="letter-8"
          points="447.07,25.22 425.63,25.22 425.63,154.77 506.66,154.77 506.66,138.78 447.07,138.78 	"
        />
        <rect
          onMouseEnter={randomNum}
          fill={randomColors[number]}
          class="letter-9"
          x="563.3"
          y="25.22"
          width="21.09"
          height="129.55"
        />
        <path
          class="letter-16"
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
          class="letter-10"
          x="727.12"
          y="25.22"
          width="52.38"
          height="16"
        />
        <rect
          onMouseEnter={randomNum}
          fill={randomColors[number]}
          class="letter-11"
          x="727.12"
          y="82"
          width="46.93"
          height="14.41"
        />
        <rect
          onMouseEnter={randomNum}
          fill={randomColors[number]}
          class="letter-12"
          x="727.12"
          y="138.78"
          width="52.38"
          height="16"
        />
        <rect
          onMouseEnter={randomNum}
          fill={randomColors[number]}
          class="letter-13"
          x="698.47"
          y="25.22"
          width="21.45"
          height="129.55"
        />
        <polygon
          onMouseEnter={randomNum}
          fill={randomColors[number]}
          class="letter-14"
          points="888.67,25.22 861.25,121.2 861.25,155.48 870.39,155.48 912.57,25.22 	"
        />
        <polygon
          onMouseEnter={randomNum}
          fill={randomColors[number]}
          class="letter-15"
          points="802.71,25.22 842.96,155.48 854.04,155.48 854.04,126.83 826.79,25.22 	"
        />
      </g>
    </svg>
  );
};

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
