import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';

export const config = { amp: false };

export default function Home() {
  return (
    <>
      <Head>
        <title>David Sauntson</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <Layout>
        <main>
          <h1>David Sauntson</h1>
          <h2>About me</h2>
          <p>
            A talented and enthusiastic front end developer with eight years’
            commercial experience and an MSc in Software Engineering. Skilled
            and experienced at creating high fidelity front end builds, content
            managed sites, performant React/Redux and SaaS applications.
          </p>
          <h2>Things I have worked on</h2>
          <nav aria-label="projects">
            <ul>
              <li>
                <Link href="/">
                  <a>Citizens Advice public website</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Front end template and component library for DHL</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Interactive cricket matchday scorecard for Lord's</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Content managed site for Kahicool</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>My website (this actual one!)</a>
                </Link>
              </li>
            </ul>
          </nav>
          <h2>Education</h2>
          <ul>
            <li>
              <strong>MSc Software Engineering</strong>, Univesrity of
              Westminster, 2010 - 2012
            </li>
            <li>
              <strong>BSc (Hons) Chemistry</strong>, University of Durham, 2001
              - 2004
            </li>
          </ul>
        </main>
      </Layout>
    </>
  );
}
