import { ReactNode } from "react";
import { Container, Content } from "../styles";
import Head from "next/head";

type DefaultLayoytPOrops = {
  children: ReactNode;
  title: string;
};

export const DefaultLayout = ({ title, children }: DefaultLayoytPOrops) => {
  return (
    <Container>
      <Head>
        <title>{`${title} | BookWise`}</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg" />
      </Head>
      <aside>sidebar</aside>

      <Content>{children}</Content>
    </Container>
  );
};
