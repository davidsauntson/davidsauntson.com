import Head from "../components/head";

import CardList from "../components/card-list";
import Layout from "../components/layout";
import projects from "../data/projects";

export const config = { amp: false };

export default function Home() {
  const meta = {
    description:
      "A talented and enthusiastic full stack engineer with over 12 years' of commercial experience.",
  };

  return (
    <>
      <Head pageTitle="Home" meta={meta} />
      <Layout>
        <main id="main-content" className="content">
          <h2>Intro</h2>
          <p>
            A capable, experienced and personable senior software engineer / tech lead with over 12 years’ experience building and maintaining websites, web applications and APIs.  
            An experienced line manager and mentor with tech lead experience, I'm looking for a role where I can make meaningful individual contributions whilst working as part of a team.
          </p>
          <p>
            I enjoy creating simple, functional and accessible sites and apps using frameworks like Ruby on Rails and React.  
            An excellent team worker with a long history of collaborative creation with developers, designers, account managers and product owners.
          </p>
          <p>
            I might struggle to work out the big O notiation of bubble sort or navigate a binary tree on demand; but I can work with a product designer to meet
            a user need or communicate risk to a non-technical stakeholder.  I enjoy working with other people to solve real world problems and deliver
            products that people will find useful.  I prefer working with a stable, well-tested codebase in small, diverse and happy teams. 
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
              <strong>MSc Software Engineering, 1st</strong>, 2010 - 2012, University
              of Westminster
            </li>
            <li>
              <strong>BSc (Hons) Chemistry, 2.1</strong>, 2001 - 2004, University of
              Durham
            </li>
          </ul>
          <hr />
          <h2>Career</h2>
          <h3>Tech Lead (Interim) - Citizens Advice</h3>
          <small>May 2025 - Present</small>
          <p>
            Working in the core content-platform team, responsible for developing and maintaining our public advice site, 
            our internal advice site used by local offices and our intranet.
            Our tech stack includes: Ruby on Rails, React, Postgres, Redis, AWS, Kubernetes and Helm.
          </p>
          <p>
            My day-to-day work is very varied, but I like to focus on team health, unblocking, supporting and empowering engineers, and working with our delivery and product
            managers to plan and provide technical guidance on upcoming work.  At the moment I'm helping us become compliant with cookie regulations, preparing for a pen test
            and automating maintenance tasks to free up engineer time.
          </p>

          <h3>Senior Full Stack Engineer - Citizens Advice</h3>
          <small>August 2020 - May 2025</small>
          <p>
            Working across a Rails, React and AWS powered stack to deliver a number of sites and applications used by the public and our internal staff.  
          </p>
          <p>  
            Working across various multi-disciplinary teams, I:
          </p>
          <ul>
            <li>
              created a number of Rails apps to assist our public users with energy consumption related tasks, leading on architectural deicisions and 
              working with the SRE team to develop and continuously deploy the infrastructure as code using AWS CDK, helm and github actions
            </li>
            <li>
              co-authored and maintained a design system to ensure consistency across all new Citizens Advice web sites and apps
            </li>
            <li>
              developed and maintained in-house React apps to enhance our content management system, Contentful, and used github actions to implement CI/CD
            </li>
            <li>
              collaborated with product designers to create a presentational Rails app, using view components to build a modular, 
              testable and WCAG AA compliant front-end
            </li>
            <li>
              played a key role in the migration from episerver to a headless CMS (Contentful), making significant improvements to the content model 
            </li>
            <li>
              made various improvements and enhancements to our in-house content API, built using Rails and Postgres
            </li>
            <li>
              translated user research and business requirements into well developed and tested features using RSpec, Jest, Cucumber, Capybara and SitePrism
            </li>
          </ul>

          <h3>Senior Developer / Sole Engineer - Landd Agency & David Sauntson Ltd</h3>
          <small>October 2015 - August 2020</small>
          <p>
            Acting as a contractor for various companies. Highlights include:
          </p>
          <ul>
            <li>
              created a front end architecture for a large web application build using node,grunt, SASS, BEM, for PwC
            </li>
            <li>
                architected, built and delivered an enterprise level software
                as a service subscription application, hosted in Azure, powered by React / Redux and .NET MVC Core 2, for Nassri 360
            </li>
            <li>
              created a react / redux live matchday scorecard, for Lord's Cricket
            </li>
            <li>
              built a front end template and component library, including AMP templates, for DHL
            </li>
            <li>
              improved frontend workflows, using node, npm, grunt, nightwatch.js for automated tests and AWS and Jenkins for 
              automated deployments across 52 exhibition websites, for Reed Exhibitions
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
