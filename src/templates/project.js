import React from 'react';
// import { RichText } from 'prismic-reactjs';
import Layout from 'components/Layout';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
// import { linkResolver } from '../utils/linkResolver';

const ProjectCard = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 10vh);

  padding-top: 10rem;
  grid-gap: 1.5rem;

  h2 {
    grid-row: 1;
  }
`;

const ImageContainer = styled.div`
  grid-row: 1 / 6;
  grid-column: 1 / 6;
  img {
    height: 100%;
    object-fit: cover;
    display: block;
    width: 100%;
  }
`;

const Project = ({ data }) => {
  const project = data.prismic.projectsByUID;

  if (!project) {
    return null;
  }

  return (
    <Layout>
      {project.edges.length && (
        <ProjectCard>
          <h2>{project.edges[0].node.title[0].text || undefined}</h2>
          <ImageContainer>
            <img
              src={project.edges[0].node.project_image.url || undefined}
              alt=""
            />
          </ImageContainer>
        </ProjectCard>
      )}
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
