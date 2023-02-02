import { useRouter } from 'next/router'
import Head from 'next/head'
import ErrorPage from 'next/error'
import styled from 'styled-components'
import { RichText } from 'prismic-reactjs'

import { colors } from '../../styles/colors'
import Layout from '../../components/Layout'
import { TechStack } from '../../components/sections'
import dimensions from '../../styles/dimensions'
import { Hero } from '../../components/sections'

import { getAllProjectsWithSlug, getProject } from '../../lib/api'
import { GetStaticPaths, GetStaticProps } from 'next'

type ProjectPostProps = {
  project: any
}

const Project = ({ project }: ProjectPostProps) => {
  if (!project) {
    return null
  }

  const router = useRouter()
  if (!router.isFallback && !project?._meta?.uid) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout>
      <Head>
        <title>Project</title>
      </Head>
      <Hero text="" heading={project.title[0].text} variant="project" />
      <ProjectWrapper>
        {project.description.length > 0 && (
          <ProjectDescription>
            <RichText render={project.description} />
            <a href={project.project_link.url}>
              <img
                src={project.project_image.url}
                alt={project.project_image.alt}
              />
            </a>
          </ProjectDescription>
        )}
        {project.tech_stack.length > 0 && (
          <TechStack stack={project.tech_stack} />
        )}
      </ProjectWrapper>
    </Layout>
  )
}

export default Project

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
  previewData,
}) => {
  const data = await getProject(params?.slug, previewData)

  return {
    props: {
      preview,
      project: data?.project ?? null,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const allProjects = await getAllProjectsWithSlug()
  return {
    paths:
      allProjects?.map(({ node }: any) => `/projects/${node._meta.uid}`) || [],
    fallback: false,
  }
}

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
`

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
    width: 100%;
    height: 60%;

    @media (min-width: ${dimensions.tabletLandscapeUp}px) {
      width: 60%;
    }
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
`
