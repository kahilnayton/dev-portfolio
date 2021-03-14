import React from 'react';
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
} from 'react-icons/fa';
import {SiMongodb, SiNextDotJs} from 'react-icons/si';
import {
  DiCss3,
  DiRuby,
  DiJsBadge,
  DiSass,
  DiPostgresql,
} from 'react-icons/di';
import { GrGatsbyjs, GrGraphQl } from 'react-icons/gr';
import gradients from '../styles/gradients';
import colors from '../styles/colors';
import styled from 'styled-components';
import CloudComponent from './CloudComponent';
import Reveal from 'react-reveal/Reveal';
import Roll from 'react-reveal/Roll';

const Li = styled.li`
  &:hover {
    transform: scale(1.2);
  }
`;

const Section = styled.section`
  margin-bottom: 12rem;
  text-align: center;
  background: black;
  position: relative;
  background: ${gradients.purpleRedCircle};

  h2,
  h4 {
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
    fill: #7377AD;
  }
  .shopify {
    fill: #7CB163;
  }
  .mongo {
    fill: #49AA4D;
  }
  .next {
    fill: black;
  }

.fa-html5 {
  color: #e34f26;
}

.fa-css3-alt {
  color: #0074D9;
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
`;

export default function About() {
  return (
    <Section id="about" className="about">
      <Reveal effect="fadeInUp">
        <CloudComponent direction="left" distance="10rem" variant="about" />
        <h2 className="section-title">Languages / Tools</h2>
        <ul>
          <Li>
            <Roll left>
              <FaReact className="fab fa-react icon-size" />
              <h4 className="about-subtitle block">React</h4>
            </Roll>
          </Li>
          <Li>
            <Roll right>
              <FaPython className="fab fa-python icon-size" />
              <h4 className="about-subtitle block">Python</h4>
            </Roll>
          </Li>
          <Li>
            <Roll left>
              <DiPostgresql className="fas fa-database icon-size" />
              <h4 className="about-subtitle block">PostgreSQL</h4>
            </Roll>
          </Li>
          <Li>
            <Roll right>
              <FaHtml5 className="fab fa-html5 icon-size" />
              <h4 className="about-subtitle block">HTML5</h4>
            </Roll>
          </Li>
          <Li>
            <Roll left>
              <DiCss3 className="fab fa-css3-alt icon-size" />
              <h4 className="about-subtitle block">CSS3</h4>
            </Roll>
          </Li>
          <Li>
            <Roll right>
              <DiSass className="fab fa-css3-alt icon-size" />
              <h4 className="about-subtitle block">SASS</h4>
            </Roll>
          </Li>
          <Li>
            <Roll left>
              <DiJsBadge className="fab fa-js-square icon-size" />
              <h4 className="about-subtitle block">JavaScript</h4>
            </Roll>
          </Li>
          <Li>
            <Roll right>
              <FaGit className="fab fa-git-square icon-size" />
              <h4 className="about-subtitle block">Git</h4>
            </Roll>
          </Li>
          <Li>
            <Roll left>
              <FaGithub className="fab fa-github icon-size" />
              <h4 className="about-subtitle block">Github</h4>
            </Roll>
          </Li>

          <Li>
            <Roll right>
              <DiRuby className="ruby icon-size" />
              <h4 className="about-subtitle block">Ruby</h4>
            </Roll>
          </Li>

          <Li>
            <Roll left>
              <FaNodeJs className="fab fa-node icon-size" />
              <h4 className="about-subtitle block">Node.js</h4>
            </Roll>
          </Li>
          <Li>
            <Roll right>
              <FaAws className="fab fa-Aws icon-size" />
              <h4 className="about-subtitle block">AWS</h4>
            </Roll>
          </Li>
          <Li>
            <Roll left>
              <GrGatsbyjs className="fab fa-gatsby icon-size" />
              <h4 className="about-subtitle block">Gatsby.js</h4>
            </Roll>
          </Li>
          <Li>
            <Roll right>
              <GrGraphQl className="fab fa-graphql icon-size" />
              <h4 className="about-subtitle block">GraphQL</h4>
            </Roll>
          </Li>
          <Li>
            <Roll left>
              <FaWordpressSimple className="fab wordpress icon-size" />
              <h4 className="about-subtitle block">WordPress</h4>
            </Roll>
          </Li>
          <Li>
            <Roll right>
              <FaPhp className="fab php icon-size" />
              <h4 className="about-subtitle block">PHP</h4>
            </Roll>
          </Li>
          <Li>
            <Roll left>
              <FaShopify className="fab shopify icon-size" />
              <h4 className="about-subtitle block">Shopify</h4>
            </Roll>
          </Li>
          <Li>
            <Roll left>
              <SiMongodb className="fab mongo icon-size" />
              <h4 className="about-subtitle block">MongoDB</h4>
            </Roll>
          </Li>
          <Li>
            <Roll left>
              <SiNextDotJs className="fab next icon-size" />
              <h4 className="about-subtitle block">Next.js</h4>
            </Roll>
          </Li>
        </ul>
        <CloudComponent direction="right" distance="2rem" />
      </Reveal>
    </Section>
  );
}
