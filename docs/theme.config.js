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
        width="30"
        height="30"
        viewBox="0 0 224 187"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_1_2)">
          <path
            d="M105.192 174.967C108.318 180.032 115.682 180.032 118.808 174.967L218.786 12.9512C222.075 7.62132 218.241 0.75 211.978 0.75H12.0219C5.75892 0.75 1.92484 7.62131 5.21384 12.9512L105.192 174.967Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_1_2"
            x="0.00927734"
            y="0.75"
            width="223.981"
            height="186.016"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_1_2"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_1_2"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    ),
    textLogo: 'Engrafia',
    links: [
      {
        title: 'link.docs',
        url: '/docs/0.1.0/introduction/quick-start',
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
    textLogo: '',
    logo: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 224 187"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_1_2)">
          <path
            d="M105.192 174.967C108.318 180.032 115.682 180.032 118.808 174.967L218.786 12.9512C222.075 7.62132 218.241 0.75 211.978 0.75H12.0219C5.75892 0.75 1.92484 7.62131 5.21384 12.9512L105.192 174.967Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_1_2"
            x="0.00927734"
            y="0.75"
            width="223.981"
            height="186.016"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_1_2"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_1_2"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    ),
  },
  head: ({ title, meta }) => (
    <>
      <link rel="shortcut icon" href="/favicon.ico" />
      <title>{meta.title}</title>
      {meta.description && (
        <meta name="description" content={meta.description} />
      )}
      {meta.tags && <meta name="keywords" content={meta.tags} />}
      {meta.author && <meta name="author" content={meta.author} />}
      <meta property="og:title" content={meta.title} />
      <meta property="og:url" content="https://engrafia.vercel.app" />
      <meta property="og:site_name" content="Engrafia" />
      <meta property="og:type" content="website" />
      {meta.description && (
        <meta property="og:description" content={meta.description} />
      )}
      <meta
        property="og:image"
        content="https://engrafia.vercel.app/imgs/engrafia-social-image.png"
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="juciano_barbosa" />
      <meta name="twitter:title" content={meta.title} />
      {meta.description && (
        <meta name="twitter:description" content={meta.description} />
      )}
      <meta
        name="twitter:image"
        content="https://engrafia.vercel.app/imgs/engrafia-social-image.png"
      />
    </>
  ),
};
