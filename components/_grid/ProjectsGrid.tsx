import React, { Component } from 'react';
import styled from 'styled-components';
import dimensions from '../../styles/dimensions';

const GridContainer = styled.div`
  display: block;
  width: 100%;
`;

const GridList = styled.ul`
  li + * {
    margin-top: 4.8rem;
  }
  
  @media(min-width: ${dimensions.tabletLandscapeUp}px) {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    width: calc(100% + 3.6rem);
    left: -1.8rem;
    
    li {
      flex: 0 0 33.3334%;
      width: 33.3334%;
      padding: 0 1.8rem;
      
      & + * {
        margin-top: 0;
      }
      
      &:nth-child(n+4) {
        margin-top: 8rem;
      }
    }
  }
  
  @media(min-width: ${dimensions.desktopUp}px) {
    .is-dense & {
        li {
          flex: 0 0 25%;
          width: 25%;
          
          &:nth-child(n+4) {
            margin-top: 0;
          }
          
          &:nth-child(n+5) {
            margin-top: 8rem;
          }
        }
    }
  }
`;

class ProjectsGrid extends Component {
  render() {
    return (
      <GridContainer className={`${this.props.dense && 'is-dense'} ${this.props.variant && `Grid--${this.props.variant}`}`}>
        <GridList>
          {this.props.children}
        </GridList>
      </GridContainer>
    );
  }
}

export default ProjectsGrid;
