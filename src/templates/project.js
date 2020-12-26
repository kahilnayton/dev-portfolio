import React from 'react';
import { RichText } from 'prismic-reactjs';
import colors from 'styles/colors';
import Layout from 'components/Layout';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import TechStack from '../components/TechStack';
import dimensions from '../styles/dimensions';

const ProjectWrapper = styled.div`
  background: #fff;
  padding: 1.6rem 2.3rem 12rem 2.3rem;

  h2.tech-stack {
    font-size: 2.4rem;
    text-decoration: underline;
    margin-bottom: 1.6rem;
    padding-left: 2.3rem;
  }

  @media (min-width: ${dimensions.tabletLandscapeUp}px) {
  padding: 1.6rem 4.6rem 12rem 4.6rem;

  }
`;

const ProjectDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  margin: auto;

  padding: 2rem 0rem 12rem;
  width: 100%;
  height: 100%;
  color: ${colors.grey900};

  h3 {
  }

  p {
    margin-bottom: 2rem;
    margin-top: 2rem;
  }

  img {
    align-self: center;
    display: block;
    width: 60%;
    height: 60%;
  }

  a {
    padding-top: 2rem;
    color: ${colors.blue};
  }

  pre {
    background: #53517bb3;
    color: #fff;
    padding: 1.6rem;
    white-space: pre-wrap;
    word-wrap: break-word;
    font-size: 1.4rem;
  }
  em {
    background: linear-gradient(transparent 1.2rem, ${colors.blue} 1rem);
  }
`;

const Project = ({ data }) => {
  const project = data.prismic.projectsByUID;

  if (!project) {
    return null;
  }

  return (
    <Layout>
      <ProjectWrapper>
        {project.edges.length > 0 && (
          <ProjectDescription>
            <RichText render={project.edges[0].node.description} />
            <a href={project.edges[0].node.project_link.url}>
              <img
                src={project.edges[0].node.project_gif.url}
                alt={project.edges[0].node.project_gif.alt}
              />
            </a>
          </ProjectDescription>
        )}
        {project.edges.length > 0 && (
          <TechStack stack={project.edges[0].node.tech_stack} />
        )}
      </ProjectWrapper>
    </Layout>
  );
};

export default Project;

export const query = graphql`
  query ProjectPost($uid: String) {
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
            project_gif
            tech_stack {
              tech
            }
          }
        }
      }
    }
  }
`;
