export default {
  title: 'Engrafia',
  description: 'Easily, and delightful documentation website generator!',
  rootDocs: 'docs',
  repository: {
    url: 'http://github.com/jucian0/engrafia',
    branch: 'main',
    author: 'Jucian0',
  },
  nav: {
    logo: (
      <svg
        className=""
        fill="none"
        height="36"
        viewBox="0 0 32 32"
        width="36"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect fill="var(--secondary)" height="100%" rx="16" width="100%" />
        <path
          clipRule="evenodd"
          d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
          fill="currentColor"
          fillRule="evenodd"
        />
      </svg>
    ),
    links: [
      {
        title: 'link.docs',
        url: '/docs/0.1.0/pt_BR/quick-start',
      },
      {
        title: 'link.github',
        url: 'https://github.com/jucian0/engrafia',
        external: true,
      },
    ],
    search_bar: 'search.placeholder',
  },
  footer: {
    text: 'Engrafia 2022',
    logo: (
      <svg
        className=""
        fill="none"
        height="36"
        viewBox="0 0 32 32"
        width="36"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect fill="var(--secondary)" height="100%" rx="16" width="100%" />
        <path
          clipRule="evenodd"
          d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
          fill="currentColor"
          fillRule="evenodd"
        />
      </svg>
    ),
  },
  head: ({ title, meta }) => (
    <>
      <title>{title}</title>
      {meta.description && (
        <meta name="description" content={meta.description} />
      )}
      {meta.tags && <meta name="keywords" content={meta.tags} />}
      {meta.author && <meta name="author" content={meta.author} />}
      {meta.socialImage && <meta name="author" content={meta.author} />}
      <meta name="og:site_name" property="og:site_name" content="Engrafia" />
      <meta name="og:type" property="og:type" content="website" />
      {meta.description && (
        <meta property="og:description" content={meta.description} />
      )}
      <meta property="og:title" content={title} />
      <meta property="og:image" content="/code.png" />
      <meta property="og:url" content="https://engrafia.vercel.app/" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="engrafia" />
      <meta name="twitter:title" content={title} />
      {meta.description && (
        <meta name="twitter:description" content={meta.description} />
      )}
      <meta name="twitter:image" content="/code.png" />
    </>
  ),
};
