import { AuthButtons } from "@/components/AuthButtons";
import { Heading, Text } from "@/components/Typography";
import {
  LoginContainer,
  LogoSection,
  WelcomeSection,
} from "@/styles/pages/login";
import Head from "next/head";

export default function Login() {
  return (
    <LoginContainer>
      <Head>
        <title>Login | BookWise</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg" />
      </Head>
      <LogoSection>
        <img src="/images/logo.svg" alt="BookWise logo" />
      </LogoSection>

      <WelcomeSection>
        <Heading size="lg" color="gray-100">
          Boas vindas!
        </Heading>
        <Text color="gray-200">Faça seu login ou acesso como visitante.</Text>
        <AuthButtons />
      </WelcomeSection>
    </LoginContainer>
  );
}
