export default {
  title: 'Engrafia',
  description: 'Easily, and delightful documentation website generator!',
  rootDocs: '',
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
        url: '/docs',
      },
      {
        title: 'link.github',
        url: 'http://github.com/jucian0/engrafia',
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
      {meta.tag && <meta name="keywords" content={meta.tag} />}
      {meta.author && <meta name="author" content={meta.author} />}
    </>
  ),
};
