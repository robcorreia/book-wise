import { Book } from "@prisma/client";
import { Container } from "./styles";

export type BookWithAvgRating = Book & {
  avgRating: number;
};

type BookCardProps = {
  book: BookWithAvgRating;
  size?: "md" | "lg";
};

export const BookCard = ({ book, size = "md" }: BookCardProps) => {
  return <Container>book</Container>;
};
