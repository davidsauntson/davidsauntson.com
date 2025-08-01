const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

const defaultSrc = "default-src 'self'";
const scriptSrc = "script-src 'self'";
const styleSrc = "style-src 'self' unsafe-inline";
const connectSrc = "connect-src 'self' vitals.vercel-insights.com";
const childSrc = "child-src 'none'";
const objectSrc = "object-src 'none'";
const imageSrc = "img-src 'self' data:";

module.exports = withMDX({
  pageExtensions: ["js", "jsx", "mdx"],

  async headers() {

    let headers = []

    if (process.env.NODE_ENV == "production") {
      headers = [
        {
          source: "/",
          headers: [
            {
              key: "Content-Security-Policy",
              value: `${defaultSrc}; ${scriptSrc}; ${styleSrc}; ${connectSrc}; ${childSrc}; ${objectSrc}; ${imageSrc};`,
            },
            {
              key: "X-Frame-Options",
              value: "SAMEORIGIN",
            },
            {
              key: "X-Content-Type-Options",
              value: "nosniff",
            },
            {
              key: "Referrer-Policy",
              value: "same-origin",
            },
            {
              key: "Permissions-Policy",
              value: "geolocation=(), microphone=(), camera=()",
            },
            {
              key: "X-Xss-Protection",
              value: "1; mode=block always;",
            },
            {
              key: "access-control-allow-origin",
              value: "https://www.davidsauntson.com",
            },
          ],
        },
      ];
    }

    
    return headers
  }
});
