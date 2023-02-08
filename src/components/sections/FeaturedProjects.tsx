import React from 'react'
import styled from 'styled-components'
import { Inner } from '../../styles/structure'
import { colors } from '../../styles/colors'
import dimensions from '../../styles/dimensions'

import { ButtonLink } from '../_ui'
import { Content } from '../_ui'
import { ProjectsGrid } from '../_grid'
import { CardProps, ProjectCard } from '../_card'
import CloudComponent from '../_ui/CloudComponent'
import { ButtonContainer } from '../../styles/components'
import { FeaturedSectionProps, ProjectProps } from './types'

export const FeaturedProjects = ({
  heading,
  content,
  buttonText,
  destination,
  variant,
  projects,
}: FeaturedSectionProps & ProjectProps) => {
  let projectsHeading

  return (
    <ProjectsContainer
      className={`${variant ? `FeaturedProjects--${variant}` : ''}`}
    >
      <ProjectInner>
        <CloudComponent variant="project" direction="left" distance="10rem" />
        <h1>Projects</h1>
        {(heading || content || (buttonText && destination)) && (
          <header>
            <div>
              {projectsHeading}
              {content && <Content content={content} />}
            </div>
          </header>
        )}
        {projects && projects.length > 0 && (
          <ProjectsGrid dense={projects.length > 3}>
            {projects.map(({ ...project }: CardProps, i: number) => {
              const {
                uid,
                project_image,
                title,
                preview_text,
                release_date,
              } = project
              return (
                <li key={i}>
                  <ProjectCard
                    uid={uid}
                    project_image={project_image}
                    title={title}
                    preview_text={preview_text}
                    release_date={release_date}
                    projectLink={'/'}
                    variant="project"
                  />
                </li>
              )
            })}
          </ProjectsGrid>
        )}
        {variant === 'projectPage' ? (
          <ButtonContainer>
            <ButtonLink title="Home" href="/" />
          </ButtonContainer>
        ) : (
          <ButtonContainer>
            <ButtonLink title="More Projects" href="/projects" />
          </ButtonContainer>
        )}
      </ProjectInner>
    </ProjectsContainer>
  )
}

const ProjectInner = styled(Inner)`
  display: flex;
  flex-direction: column;
`

const ProjectsContainer = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 4rem;

  h1 {
    padding: 3rem 0;
    color: ${colors.grey200};
    font-family: 'Zallord';
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
`
