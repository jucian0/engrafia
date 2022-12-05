export const getServerSideProps = async () => {
  return {
    props: {
      meta: {
        title: 'Engrafia | 404',
        description: 'Page not found',
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
  return <div>Page not found 404</div>;
}

export default Index;
