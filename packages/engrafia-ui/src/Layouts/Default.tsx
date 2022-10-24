import { styled } from '@nextui-org/react';
import React from 'react';
import { Footer } from '../Components';
import Navbar from '../Components/Navbar/Navbar';

export const Main = styled(`main`, {
  flex: 1,
  flexDirection: `column`,
  margin: `0 auto`,
});

export const Container = styled(`div`, {
  flexDirection: `row`,
  width: `100%`,
  margin: `0 auto`,
});

export const Content = styled(`div`, {
  display: `block`,
  height: `100%`,
  position: `relative`,
  margin: `0 auto`,
});

export function DefaultLayout({ children }: React.PropsWithChildren<{}>) {
  return (
    <Main>
      <Navbar />
      <Container>
        <Content>{children}</Content>
      </Container>
      <Footer />
    </Main>
  );
}
