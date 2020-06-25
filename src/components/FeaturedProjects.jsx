import React from 'react';
import styled from "@emotion/styled";
import { Inner } from '../styles/structure';
// import colors from "../colors";
import dimensions from '../styles/dimensions';
import RichText from '../components/RichText';
import Content from '../components/_ui/Content';
import ProjectsGrid from '../components/_grid/Projects';
import ProjectCard from '../components/_card/Project';
import { GrFormNextLink } from 'react-icons/gr';


const ProjectsContainer = styled.div`
  position: relative;
  width: 100%;

  
  & + * {
    margin-top: 6.4rem;
  }
  
  header {
    > div {
      > * + * {
        margin-top: 1.6rem;
      }
      
      & + * {
        margin-top: 3.2rem;
      }
    }
    
    & + * {
      margin-top: 4rem;
    }
  }
  
  & + * {
    margin-top: 6.4rem;
  }
  
  @media(min-width: ${dimensions.tabletLandscapeUp}px) {
    
    & + * {
      margin-top: 8rem;
    }
    
    header {
      display: flex;
      align-items: center;
      
      > div {
        flex: 1 1 100%;
        
        > * {
          max-width: 62.8rem;
        }
      }
      
      a {
        flex-shrink: 0;
      }
      
      & + * {
        margin-top: 5.6rem;
      }
    }
  }
`;

const FeaturedProjects = (props) => {
  console.log(props)

  const { heading, content, buttonText, destination, projects, variant } = props
  let projectsHeading;

  // if (heading && heading[0].text) {
  //   projectsHeading = <RichText render={heading}/>;
  // } else if (heading) {
  //   projectsHeading = <h3>{heading}</h3>;
  // }

  return (
    <ProjectsContainer className={`${variant ? `FeaturedProjects--${variant}` : ''}`}>
      <Inner>
      <h1>Projects</h1>
        {(heading || content || (buttonText && destination)) && (
          <header>
            <div>
              {projectsHeading}
              {content && <Content content={content} />}
            </div>

            {(buttonText && destination) && (
              <GrFormNextLink destination={destination} text={buttonText} />
            )}
          </header>
        )}

        {(projects && projects.length > 0) && (
          <ProjectsGrid dense={projects.length > 3}>
            {projects.map((feature, i) => {
              // debugger;
              return (
                <li key={i}>
                  <ProjectCard
                    uid={feature.project._meta.uid}
                    image={feature.project.project_image}
                    title={feature.project.title[0].text}
                    description={feature.project.description[0].text}
                  />
                </li>
              )
            })}
          </ProjectsGrid>
        )}
      </Inner>
    </ProjectsContainer>
  );
}

export default FeaturedProjects;
