import Head from 'next/head';

export default function DSHead({ pageTitle }) {
  return (
    <Head>
      <title>David Sauntson | {pageTitle}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="robots" content="noindex, nofollow" />
    </Head>
  );
}
