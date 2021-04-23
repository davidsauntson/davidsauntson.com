import Head from "../components/head";

import CardList from "../components/card-list";
import Layout from "../components/layout";

export const config = { amp: false };

export default function Home() {
  const projects = [
    {
      title: "This Very Website",
      stub: "my-website",
    },
    {
      title: "Citizens Advice Public Website",
      stub: "citizens-advice-public-website",
    },
    {
      title: "DHL Component Library",
      stub: "dhl-front-end",
    },
    {
      title: "Lord's Matchday Scorecard",
      stub: "lords-scorecard",
    },
    {
      title: "Kahicool Brochure Site",
      stub: "kahicool-cms-build",
    },
    {
      title: "Nassari 360 .NET MVC App",
      stub: "nassari-360",
    },
  ];

  const meta = {
    description:
      "A talented and enthusiastic front end developer with over 8 years of commercial experience.",
  };

  return (
    <>
      <Head pageTitle="Home" meta={meta} />
      <Layout>
        <main id="main-content" className="content">
          <h2>Intro</h2>
          <p>
            A talented and enthusiastic front end developer with eight years’
            commercial experience and an MSc in Software Engineering. Skilled
            and experienced at creating high fidelity front end builds, content
            managed sites, performant React/Redux and .NET MVC web applications.
          </p>
          <p>
            <a href="https://name.pn/david-sauntson">My pronouns are he/him</a>.
          </p>
          <hr />
          <h2>Things I have worked on</h2>
          <nav aria-label="Project menu">
            <CardList cards={projects} />
          </nav>
          <hr />
          <h2>Education</h2>
          <ul>
            <li>
              <strong>MSc Software Engineering</strong>, 2010 - 2012, University
              of Westminster
            </li>
            <li>
              <strong>BSc (Hons) Chemistry</strong>, 2001 - 2004, University of
              Durham
            </li>
          </ul>
          <hr />
          <h2>Career</h2>
          <h3>Senior Front End Developer - Citizens Advice</h3>
          <small>August 2020 onwards</small>
          <p>
            Working on a project to replace our current episerver powered
            website with a Contentful / Ruby on Rails app. Developing and
            maintaining a design system to ensure consistency across all new
            Citizens Advice web sites and apps.
          </p>
          <p />
          <h3>Director - Landd Agency & David Sauntson Ltd</h3>
          <small>October 2015 - August 2020</small>
          <p>
            Acting as a contractor for various companies. Highlights include:
          </p>
          <ul>
            <li>
              working for <strong>Nassari 360 Ltd</strong>, where I:
              <ul>
                <li>
                  architected, built and delivered an enterprise level software
                  as a service subscription application, hosted in Azure
                </li>
                <li>
                  created a microsite generating .NET MVC Core 2 application
                </li>
                <li>
                  created a React / Redux microsite template, hosted in Azure
                </li>
                <li>
                  used BitBucket pipelines and nightwatch.js to automate
                  deployment and testing
                </li>
              </ul>
            </li>
            <li>
              working for <strong>Positive Technology</strong>, where I:
              <ul>
                <li>
                  created a react / redux live matchday scorecard for Lord's
                  Cricket
                </li>
                <li>
                  built a front end template and component library, including
                  AMP templates, for DHL
                </li>
              </ul>
            </li>
            <li>
              working for <strong>Reed Exhibitions</strong>, where I:
              <ul>
                <li>
                  refactored the front end build stack to use node, npm, grunt
                </li>
                <li>
                  implemented continuous integration and deployment using
                  Jenkins
                </li>
                <li>wrote automated tests for crucial javascript modules</li>
                <li>
                  introduced Jira to control team workflow and log deployments
                </li>
              </ul>
            </li>
            <li>
              working for <strong>PwC</strong>, where I:
              <ul>
                <li>
                  created a front end architecture for a large web application
                  build using node,grunt, SASS, BEM
                </li>
                <li>
                  decomposed designs into functional components, modules and
                  templates and created a folder structure that reflected these
                  elements
                </li>
              </ul>
            </li>
          </ul>
          <h3>Senior Developer - Positive Technology</h3>
          <small>January 2014 - September 2015</small>
          <p>
            Assumed a broader range of development responsibilities, including
            leading on small to medium sized web build projects.
          </p>
          <h3>Junior Developer - Positive Technology</h3>
          <small>October 2012 - January 2014</small>
          <p>
            Assisted on a variety of small - medium sized web sites using .NET
            and Kenitco CMS.
          </p>
        </main>
      </Layout>
    </>
  );
}
