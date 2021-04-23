import Head from "next/head";

export default function DSHead({ pageTitle, meta }) {
  const baseMeta = {};

  const mergedMeta = {
    ...baseMeta,
    ...meta,
  };

  return (
    <Head>
      <title>David Sauntson, {pageTitle}</title>
      <link rel="icon" href="/favicon.ico" />
      {mergedMeta
        ? Object.keys(mergedMeta).map((key) => {
            return <meta key={key} name={key} content={meta[key]} />;
          })
        : null}

      <meta
        name="google-site-verification"
        content="RtsUf9TBOP1dgie4Ge4xDaB-xE1Jp8anjxkMqOUSoQo"
      />
    </Head>
  );
}
