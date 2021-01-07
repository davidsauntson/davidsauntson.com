import Head from 'next/head';

export default function DSHead({ pageTitle, meta }) {
  const noJsScript =
    'document.querySelector("html").classList.remove("no-js");';

  const baseMeta = {};

  const mergedMeta = {
    ...baseMeta,
    ...meta
  };

  return (
    <Head>
      <title>David Sauntson, {pageTitle}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="robots" content="noindex, nofollow" />
      {mergedMeta
        ? Object.keys(mergedMeta).map(key => {
            return <meta key={key} name={key} content={meta[key]} />;
          })
        : null}
      <script
        type="application/javascript"
        dangerouslySetInnerHTML={{ __html: noJsScript }}
      />
    </Head>
  );
}
