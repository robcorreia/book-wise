import { signOut, useSession } from "next-auth/react";
import { Navigation } from "../Navigation";
import { Container, LoginButton, UserDetails } from "./style";
import { SignIn, SignOut } from "@phosphor-icons/react/dist/ssr";
import { Text } from "../Typography";
import { Avatar } from "../ui/Avatar";
import { useRouter } from "next/router";

export const SideBar = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const handleOpenProfile = () => {
    router.push(`/profile/${user?.id}`);
  };

  const user = session?.user;
  return (
    <Container>
      <div>
        <img className="logo" src="/images/logo.svg" alt="BookWise Logo" />
        <Navigation />
      </div>

      <footer>
        {!user ? (
          <LoginButton href="/login">
            Fazer login
            <SignIn size={24} />
          </LoginButton>
        ) : (
          <UserDetails>
            <Avatar
              size="sm"
              src={user?.avatar_url}
              alt={user?.name}
              onClick={handleOpenProfile}
              css={{ cursor: "pointer" }}
            />
            <Text size="sm">{user?.name}</Text>
            <SignOut size={24} color="#F75A68" onClick={() => signOut} />
          </UserDetails>
        )}
      </footer>
    </Container>
  );
};
