import React from 'react';
import styled from '@emotion/styled';
import { Inner } from '../styles/structure';
import colors from 'styles/colors';
import dimensions from '../styles/dimensions';
// import RichText from '../components/RichText';
import ButtonLink from './_ui/ButtonLink';
import Content from './_ui/Content';
import ProjectsGrid from './_grid/ProjectsGrid';
import GenericCard from './_card/GenericCard';
import { GrFormNextLink } from 'react-icons/gr';
import CloudComponent from './CloudComponent';

const ProjectsContainer = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 4rem;

  h1 {
    padding: 3rem 0;
    color: ${colors.grey200};
  }

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

  @media (min-width: ${dimensions.tabletLandscapeUp}px) {
    margin-top: 12rem;
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

const ProjectInner = styled(Inner)`
  display: flex;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 4rem;
`;

const FeaturedProjects = props => {
  const {
    heading,
    content,
    buttonText,
    destination,
    projects,
    variant,
  } = props;
  let projectsHeading;

  console.log(props);

  return (
    <ProjectsContainer
      className={`${variant ? `FeaturedProjects--${variant}` : ''}`}
    >
      <ProjectInner>
        <CloudComponent variant="project" direction="left" distance="10rem" />
        <h1>Project</h1>
        {(heading || content || (buttonText && destination)) && (
          <header>
            <div>
              {projectsHeading}
              {content && <Content content={content} />}
            </div>

            {buttonText && destination && (
              <GrFormNextLink destination={destination} text={buttonText} />
            )}
          </header>
        )}

        {projects && projects.length > 0 && (
          <ProjectsGrid dense={projects.length > 3}>
            {projects.map((feature, i) => {
              return (
                <li key={i}>
                  <GenericCard
                    uid={feature.project._meta.uid}
                    image={feature.project.project_image}
                    title={feature.project.title[0].text}
                    description={feature.project.description[0].text}
                  />
                </li>
              );
            })}
          </ProjectsGrid>
        )}
        {props.variant === 'projectPage' ? (
          <ButtonContainer>
            <ButtonLink to="/">Home</ButtonLink>
          </ButtonContainer>
        ) : (
          <ButtonContainer>
            <ButtonLink to="/projects">View all</ButtonLink>
          </ButtonContainer>
        )}
      </ProjectInner>
    </ProjectsContainer>
  );
};

export default FeaturedProjects;
