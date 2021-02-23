import { keyframes } from '@emotion/core';

export const slightRock = keyframes`
0% {
transform: rotate(0)
}
50% {
transform: rotate(5deg)

}
100% {
transform: rotate(0)

}
`;

export const acrossScreen = keyframes`
0% {
  transform: translate(220rem, -4rem)
}
5% {
  transform: translate(220rem, -4rem)
}
10% {
  transform: translate(120rem, -4rem)
}
25% {
  transform: translate(25rem, 0rem)
}
50% {
  transform: translate(-100rem, -2rem)
}
75% {
  transform: translate(-250rem, 4rem)
}
100% {
  transform: translate(-250rem, -6rem)
}
`;

export const bottomToTop = keyframes`
0% {
  transform: translate(0, 500rem)
}
10% {
  transform: translate(0, 300rem)
}
20% {
  transform: translate(0, 200rem) rotate(10deg)
}
30% {
  transform: translate(0, 100rem)
}
40% {
  transform: translate(0, 0rem)
}
50% {
  transform: translate(0, -50rem)
}
60% {
  transform: translate(0, -100rem) rotate(0deg)
}
70% {
  transform: translate(0, -150rem)
}
80% {
  transform: translate(0, -200rem)
}
90% {
  transform: translate(0, -100rem)
}
100% {
  transform: translate(0, -200rem) rotate(-10deg)
}
`;

export const slideInBottom = keyframes`
  0% {
    transform: translateY(0.6rem);
  }
  
  100% {
    transform: translateY(0);
  }
`;

export const slideInLeft = keyframes`
  0% {
    transform: translateX(-0.6rem);
  }
  
  100% {
    transform: translateX(0);
  }
`;

export const slideInTop = keyframes`
  0% {
    transform: translateY(-0.6rem);
  }
  
  100% {
    transform: translateX(0);
  }
`;

export const drawIn = keyframes`
  0% {
    transform: scaleX(0.6);
  }
  
  100% {
    transform: scaleX(1);
  }
`;

export const drawDown = keyframes`
  0% {
    transform: translateY(-50%) scaleX(0);
  }
  
  100% {
    transform: translateY(-50%) scaleX(1);
  }
`;

export const slideUpFade = keyframes`
  0% {
    transform: translate(-50%, -50%);
    opacity: 1;
  }
  
  100% {
    transform: translate(-50%, -200%);
    opacity: 0;
  }
`;

export const lineAnimate = keyframes`
  0% {
    background-size: 100% 0.2rem;
    background-position: right 100%;
  }
  
  50% {
    background-size: 0 0.2rem;
    background-position: right 100%;
  }
  
  50.01% {
    background-position: left 100%;
  }
  
  100% {
    background-size: 100% 0.2rem;
    background-position: left 100%;
  }
`;

export const fadeIn = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`;
