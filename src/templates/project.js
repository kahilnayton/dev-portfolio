import React from 'react';
import { RichText } from 'prismic-reactjs';
import colors from 'styles/colors';
import Layout from 'components/Layout';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
// import { linkResolver } from '../utils/linkResolver';

const ProjectWrapper = styled.div`
  background: ${colors.blue};
  padding: 4rem;
`;

const ProjectCard = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 12rem 1fr 1fr;

  padding: 2rem;
  grid-gap: 1.5rem;

  width: 100%;
  height: 100%;

  h2 {
    color: ${colors.grey200};
    grid-row: 1;
  }
  `;

const ImageContainer = styled.div`
  grid-row: 2;

  img {
    height: 80%;
    object-fit: cover;
    display: block;
    width: 80%;
  }
  `;

const ProjectDescription = styled.div`
grid-row: 3;
color: ${colors.grey200};


a {
  padding-top: 2rem;
  color: ${colors.purple};
}
`

const Project = ({ data }) => {
  const project = data.prismic.projectsByUID;
  
  if (!project) {
    return null;
  }

  return (
    <Layout>
      <ProjectWrapper>
        {project.edges.length && (
          <ProjectCard>
            <h2>{project.edges[0].node.title[0].text || undefined}</h2>
            <ImageContainer>
              <img
                src={project.edges[0].node.project_image.url || undefined}
                alt=""
              />
            </ImageContainer>
            <ProjectDescription>
              <RichText render={project.edges[0].node.description} />
              <a href={project.edges[0].node.project_link.url}>
                Link to project
              </a>
            </ProjectDescription>
          </ProjectCard>
        )}
      </ProjectWrapper>
    </Layout>
  );
};

export default Project;

export const query = graphql`
  query BlogPost($uid: String) {
    prismic {
      projectsByUID: allProjects(uid: $uid) {
        edges {
          node {
            title
            release_date
            project_link {
              ... on PRISMIC__ExternalLink {
                url
              }
            }
            description
            project_image
          }
        }
      }
    }
  }
`;
