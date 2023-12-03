import { ChartLineUp } from "@phosphor-icons/react";
import { PageTitle } from "../PageTitle";
import { Container } from "./styles";
import { Text } from "../Typography";
import { RatingCard } from "../RatingCard";

export const LatestRatings = () => {
  return (
    <Container>
      <PageTitle
        title="Início"
        icon={<ChartLineUp size={32} />}
        css={{ marginBottom: 40 }}
      />
      <Text size="sm">Avaliações mais recentes</Text>

      <section>
        {Array.from({ length: 20 }).map((_, i) => (
          <RatingCard
            key={i}
            rating={{
              id: "aa",
              rate: 4,
              user: {
                name: "John Doe",
                avatar_url:
                  "https://avatars.githubusercontent.com/u/1164541?v=4",
                email: "johndoe@gmail.com",
                id: "asdasd",
                created_at: new Date(),
              },
              book: {
                author: "John Doe",
                cover_url:
                  "https://avatars.githubusercontent.com/u/1164541?v=4",
                id: "dasdad",
                name: "John Doe",
                summary:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam officiis ab quo, amet cupiditate omnis eius non! Tenetur laudantium quas necessitatibus earum nesciunt deserunt esse. Consequuntur, consectetur. Doloremque itaque excepturi, eum illum cum similique omnis est sint accusantium ad fugit perspiciatis dolore quidem? Itaque magni harum beatae quasi sapiente? Fugiat, quaerat quam? Cum incidunt voluptates atque harum nostrum repellat nesciunt ex asperiores, nihil quibusdam explicabo iure quam ipsum cupiditate dolor esse obcaecati sequi ab dignissimos praesentium. Dicta quo, doloremque delectus eaque placeat harum? Accusantium aliquid enim possimus officia ex aperiam aliquam error veniam temporibus a ullam tempora minus similique nobis consectetur, quisquam vitae quam accusamus voluptatibus illum reprehenderit rerum ipsam. Quibusdam modi voluptatibus labore iusto atque, accusantium unde accusamus repellat ipsum illo provident nesciunt, non soluta ad minima, fugiat cum. Modi, officia? Quam voluptate reiciendis sit molestias laborum esse, impedit adipisci exercitationem possimus suscipit a natus expedita placeat at architecto neque voluptatum corporis temporibus cum eos! Est, nemo, doloremque corporis ducimus maiores dolor incidunt quas laboriosam earum sequi sunt similique repudiandae cupiditate a eveniet. Cumque magni voluptatum expedita soluta omnis mollitia tempora atque ex sit vel dolorum, suscipit ab minima a quasi fugit et, reiciendis quisquam architecto iure unde. Consequuntur.",
                total_pages: 100,
              },
              created_at: new Date(),
            }}
          />
        ))}
      </section>
    </Container>
  );
};
