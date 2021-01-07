import Head from 'next/head';

export default function DSHead({ pageTitle }) {
  const noJsScript =
    'document.querySelector("html").classList.remove("no-js");';

  return (
    <Head>
      <title>David Sauntson, {pageTitle}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="robots" content="noindex, nofollow" />
      <script
        type="application/javascript"
        dangerouslySetInnerHTML={{ __html: noJsScript }}
      />
    </Head>
  );
}
