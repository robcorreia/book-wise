import { BookCard } from "../BookCard";
import { Text } from "../Typography";
import { Link } from "../ui/Link";
import { Container } from "./styles";

export const PopularBooks = () => {
  return (
    <Container>
      <header>
        <Text size="sm">Livros populares</Text>
        <Link href="/explore" text="ver todos" />
      </header>

      <section>
        {Array.from({ length: 4 }).map((_, index) => (
          <BookCard
            key={`popular-${index}`}
            book={{
              author: "John Doe",
              avgRating: 4,
              cover_url: "https://avatars.githubusercontent.com/u/1164541?v=4",
              created_at: new Date(),
              id: "",
              name: "Lorem ipsun dolar sit amet",
              summary:
                "Lorem ipsun dolar sit amet, consectetur adipiscing elit. Donec ouismod, nisl",
              total_pages: 100,
            }}
          />
        ))}
      </section>
    </Container>
  );
};
