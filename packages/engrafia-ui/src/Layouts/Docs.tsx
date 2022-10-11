import { styled } from '@nextui-org/react';
import React from 'react';
import { EditContent, Footer, Sidebar, TableOfContent } from '../Components';
import Navbar from '../Components/Navbar';

export const Main = styled(`main`, {
  display: `flex`,
  flex: 1,
  flexDirection: `column`,
  margin: `0 auto`,
});

export const Container = styled(`div`, {
  display: `flex`,
  flex: 1,
  flexDirection: `row`,
  width: `100%`,
  maxWidth: `87rem`,
  margin: `0 auto`,
});

export const Content = styled(`div`, {
  display: `block`,
  height: `100%`,
  padding: `$xs $md`,
  position: `relative`,
  margin: `0 auto`,
});

export function DocsLayout({ children }: React.PropsWithChildren<{}>) {
  return (
    <Main className="app">
      <Navbar />
      <Container>
        <Sidebar />
        <Content>
          {children}
          <EditContent />
        </Content>
        <TableOfContent />
      </Container>
          <Footer />
    </Main>
  );
}
