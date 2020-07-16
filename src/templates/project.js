import React from 'react';
import { RichText } from 'prismic-reactjs';
import colors from 'styles/colors';
import Layout from 'components/Layout';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
// import { linkResolver } from '../utils/linkResolver';

const ProjectWrapper = styled.div`
  background: #fff;
  padding: 4rem 12rem;

  h2.tech-stack {
    font-size: 2.4rem;
    text-decoration: underline;
    margin-bottom: 1.6rem;
  }
`;

const ProjectDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  margin: auto;

  padding: 2rem 2rem 12rem;
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
    color: ${colors.purple};
  }

  pre {
    background: ${colors.grey900};
    color: #fff;
    /* padding: 1.6rem; */
  }
`;

const TechWrapper = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 1fr 1fr;
width: 20vw;
align-items: center;

  img {
    grid-column: 1;
    height: 4rem;
    width: 100%;
  }
  p {
    grid-column: 2;
  }
`;

const Project = ({ data }) => {
  const project = data.prismic.projectsByUID;
  const tech = project.edges[0].node.tech_stack[0].tech;

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
              <img src={project.edges[0].node.project_gif.url} alt={project.edges[0].node.project_gif.alt}/>
            </a>

          </ProjectDescription>
        )}
        <h2 className='tech-stack'>Tech Stack</h2>
        {tech.length > 0 &&
          tech.map((t, i) => (
            <TechWrapper key={i}>
              <img src={t.url} alt={t.alt} />
              <p>{t.alt}</p>
              {console.log(t)}
            </TechWrapper>
          ))}
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
