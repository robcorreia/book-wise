import { Text } from "../Typography";
import { UserRatingCard } from "../UserRatingCard";
import { Link } from "../ui/Link";
import { Container } from "./styles";

export const BookRatings = () => {
  const handleRate = () => {
    console.log("Avaliar");
  };
  return (
    <Container>
      <header>
        <Text>Avaliações</Text>
        <Link withoutIcon onClick={handleRate} text="Avaliar" />
      </header>

      <section>
        {Array.from({ length: 10 }).map((_, index) => (
          <UserRatingCard
            key={index}
            rating={{
              rate: 2,
              user: {
                name: "John Doe",
                avatar_url:
                  "https://avatars.githubusercontent.com/u/29904660?s=400&u=7e7996446fddba3e6db4c96dab29d56287ae1c30&v=4",
              },
              created_at: new Date(),
              description: "pdaskdpaskdpasdk dpsakdapskd",
            }}
          ></UserRatingCard>
        ))}
      </section>
    </Container>
  );
};
