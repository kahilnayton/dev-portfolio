import React from 'react'
import {
  FaReact,
  FaPython,
  FaHtml5,
  FaGit,
  FaGithub,
  FaNodeJs,
  FaAws,
  FaWordpressSimple,
  FaPhp,
  FaShopify,
} from 'react-icons/fa'
import { SiMongodb, SiNextdotjs } from 'react-icons/si'
import { DiCss3, DiRuby, DiJsBadge, DiSass, DiPostgresql } from 'react-icons/di'
import { GrGatsbyjs, GrGraphQl } from 'react-icons/gr'
import { Slide } from 'react-awesome-reveal'
import styled from 'styled-components'

import { gradients, colors, dimensions } from '@/styles'
import { CloudComponent } from '@/components/_ui/'

const icons = [
  {
    icon: <FaReact size={70} className="fab fa-react icon-size" />,
    title: 'React',
  },
  {
    icon: <FaPython size={70} className="fab fa-python icon-size" />,
    title: 'Python',
  },
  {
    icon: <DiPostgresql size={70} className="fas fa-database icon-size" />,
    title: 'PostgreSQL',
  },
  {
    icon: <FaHtml5 size={70} className="fab fa-html5 icon-size" />,
    title: 'HTML5',
  },
  {
    icon: <DiCss3 size={70} className="fab fa-css3-alt icon-size" />,
    title: 'CSS3',
  },
  {
    icon: <DiSass size={70} className="fab fa-css3-alt icon-size" />,
    title: 'SASS',
  },
  {
    icon: <DiJsBadge size={70} className="fab fa-js-square icon-size" />,
    title: 'JavaScript',
  },
  {
    icon: <FaGit size={70} className="fab fa-git-square icon-size" />,
    title: 'Git',
  },
  {
    icon: <FaGithub size={70} className="fab fa-github icon-size" />,
    title: 'Github',
  },
  { icon: <DiRuby size={70} className="ruby icon-size" />, title: 'Ruby' },
  {
    icon: <FaNodeJs size={70} className="fab fa-node icon-size" />,
    title: 'Node.js',
  },
  { icon: <FaAws size={70} className="fab fa-Aws icon-size" />, title: 'AWS' },
  {
    icon: <GrGatsbyjs size={70} className="fab fa-gatsby icon-size" />,
    title: 'Gatsby.js',
  },
  {
    icon: <GrGraphQl size={70} className="fab fa-graphql icon-size" />,
    title: 'GraphQL',
  },
  {
    icon: <FaWordpressSimple size={70} className="fab wordpress icon-size" />,
    title: 'WordPress',
  },
  { icon: <FaPhp size={70} className="fab php icon-size" />, title: 'PHP' },
  {
    icon: <FaShopify size={70} className="fab shopify icon-size" />,
    title: 'Shopify',
  },
  { icon: <SiMongodb size={70} />, title: 'MongoDB' },
  { icon: <SiNextdotjs size={70} />, title: 'Next.js' },
]

const Icons = icons.map((icon, index) => {
  const direction = index % 2 === 0 ? 'left' : 'right'
  return (
    <div key={index} className="icon-item">
      <Slide triggerOnce direction={direction}>
        {icon.icon}
      </Slide>
      <div className="icon-title">{icon.title}</div>
    </div>
  )
})

export const About = () => {
  return (
    <Section id="about" className="about">
      <CloudComponent direction="left" distance="10rem" variant="about" />
      <h2 className="section-title">Languages / Tools</h2>
      <IconGrid>{Icons}</IconGrid>
      <CloudComponent direction="right" distance="2rem" />
    </Section>
  )
}

const Section = styled.section`
  padding: 30px 0;
  margin-bottom: 12rem;
  text-align: center;
  position: relative;
  background: ${gradients.purpleRedCircle};
  background-size: 400% 400%;

  h2,
  h4 {
    padding-bottom: 10px;
    color: ${colors.grey200};
    font-weight: 400;
    font-size: 1.6rem;
  }

  ul {
    max-width: 750px;
    margin: 0 auto;
    z-index: 2;
    position: relative;

    li {
      margin: 0.75rem 2rem;
    }
  }
  .section-title {
    font-size: 2.4rem;
    font-family: 'Zallord';
  }

  .wordpress {
    fill: #217195;
  }
  .php {
    fill: #7377ad;
  }
  .shopify {
    fill: #7cb163;
  }
  .mongo {
    fill: #49aa4d;
  }
  .next {
    fill: black;
  }

  .fa-html5 {
    color: #e34f26;
  }

  .fa-css3-alt {
    color: #0074d9;
  }

  .fa-js-square {
    color: #f7df1e;
  }

  .fa-code {
    color: #0769ad;
  }

  .fa-react {
    color: #3f889f;
  }

  .fa-git-square {
    color: #de6b55;
  }

  .fa-database {
    color: #336791;
  }
  .fa-Aws {
    color: #c55526;
  }
  .fa-gatsby {
    color: #67208b;
  }
  .fa-graphql {
    color: #ea2ccd;
  }
`
const IconGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  margin: 0 auto;
  max-width: 1000px;
  padding: 0 1rem;

  .icon-item {
    transition: 0.2s;
    &:hover {
      transform: scale(1.2);
      transition: 0.2s;
    }
  }
  @media (min-width: ${dimensions.tabletLandscapeUp}px) {
    grid-template-columns: repeat(3, 1fr);
  }
`
