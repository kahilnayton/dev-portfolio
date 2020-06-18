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

const FeaturedProjects = ({ heading, content, buttonText, destination, projects, variant }) => {
  let projectsHeading;

  if (heading && heading[0].text) {
    projectsHeading = <RichText render={heading}/>;
  } else if (heading) {
    projectsHeading = <h3>{heading}</h3>;
  }

  return (
    <ProjectsContainer className={`${variant ? `FeaturedProjects--${variant}` : ''}`}>
      <Inner>
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
            {projects.slice(0,4).map((feature, i) => {
              if (feature.node) {
                return (
                  <li key={i}>
                    <ProjectCard
                      uid={feature.node._meta.uid}
                      image={feature.node.preview_image || feature.node.feature_image}
                      title={feature.node.title[0].text}
                      type={feature.node.project_type && feature.node.project_type.title}
                      topic={feature.node.topic && feature.node.topic.title}
                      preview_text={feature.node.preview_text}
                    />
                  </li>
                );
              } else if (feature.project) {
                return (
                  <li key={i}>
                    <ProjectCard
                      uid={feature.project._meta.uid}
                      image={feature.project.preview_image || feature.project.feature_image}
                      title={feature.project.title[0].text}
                      type={feature.project.project_type && feature.project.project_type.title}
                      topic={feature.project.topic && feature.project.topic.title}
                      preview_text={feature.project.preview_text}
                    />
                  </li>
                )
              }

              return null;
            })}
          </ProjectsGrid>
        )}
      </Inner>
    </ProjectsContainer>
  );
}

export default FeaturedProjects;
