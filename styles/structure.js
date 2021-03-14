import styled from "styled-components";
import dimensions from "../styles/dimensions";

const fractionStrToDecimal = str => str.split('/').reduce((p, c) => p / c);

export const Inner = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding-left: 1.8rem;
  padding-right: 1.8rem;
  height: 100%;
  max-width: 120rem;
  
  @media(min-width: ${dimensions.tabletLandscapeUp}px) {
    padding-left: 3.2rem;
    padding-right: 3.2rem;
  }
  
  @media(min-width: ${dimensions.desktopLargeUp}px) {
    max-width: 126.4rem;
  }
`;

export const Wrap = styled.div`
  position: relative;
  width: 100%;
  max-width: 97.4rem;
  margin: 0 auto;
`;

export const gridColumns = (column, gap) => {
  const columnWidth =  column ? column.toString() : '1/2';
  const gapWidth = gap ? `${(1 - fractionStrToDecimal(column)) * parseFloat(gap)}rem` : '1.6rem';

  return `
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: calc(99.9% * ${columnWidth} - ${gapWidth});
    width: calc(99.9% * ${columnWidth} - ${gapWidth});
  `;
};
