export const getStaticProps = async () => {
  return {
    props: {
      meta: {
        title: 'Engrafia | Docs generator',
        description: 'The easiest way to write docs for your project.',
        tags: 'docs, documentation, nextjs',
      },
    },
  };
};

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.styled-components file.
   */
  return <div>alo</div>;
}

export default Index;
