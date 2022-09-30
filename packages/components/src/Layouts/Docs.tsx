import { MDXProvider } from '@mdx-js/react';
import { NextUIProvider, styled } from '@nextui-org/react';
import React from 'react';
import { Sidebar } from '../Components';
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
  maxWidth: `90rem`,
  margin: `0 auto`,
});

export const Content = styled(`div`, {
  display: `block`,
  height: `100%`,
  padding: `$2 $3`,
  position: `relative`,
  margin: `0 auto`,
  top: '3.797rem',
});

export function DocsLayout({ children }: React.PropsWithChildren<{}>) {
  return (
    <Main className="app">
      <Navbar />
      <Container>
        <Sidebar />
        <Content>
          <MDXProvider components={{}}>{children}</MDXProvider>
        </Content>
      </Container>
    </Main>
  );
}
