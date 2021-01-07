const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
});

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx'],

  async headers() {
    return [
      {
        source: '/',
        headers: [
          {
            key: 'Content-Security-Policy',
            value:
              "default-src 'self' data: 'unsafe-eval' 'unsafe-inline' 'vitals.vercel-insights.com'; child-src 'none'; object-src 'none'"
          }
        ]
      }
    ];
  }
});
