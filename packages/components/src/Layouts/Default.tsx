import { styled } from '@nextui-org/react';
import React from 'react';
import Navbar from '../Components/Navbar';

export const Main = styled(`main`, {
  // display: `flex`,
  flex: 1,
  flexDirection: `column`,
  margin: `0 auto`,
});

export const Container = styled(`div`, {
  // display: `flex`,
  // flex: 1,
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
    </Main>
  );
}
