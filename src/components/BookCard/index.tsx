import { Book } from "@prisma/client";
import { BookDetails, BookImage, BookName, Container } from "./styles";
import { Text } from "../Typography";

export type BookWithAvgRating = Book & {
  avgRating: number;
};

type BookCardProps = {
  book: BookWithAvgRating;
  size?: "md" | "lg";
};

export const BookCard = ({ book, size = "md" }: BookCardProps) => {
  const IMAGE_SIZES = {
    md: {
      width: 64,
      height: 94,
    },
    lg: {
      width: 108,
      height: 151,
    },
  };

  const currentSize = IMAGE_SIZES[size];

  return (
    <Container>
      <BookImage
        width={currentSize.width}
        height={currentSize.height}
        alt={book.name}
        src={book.cover_url}
        css={{ minWidth: currentSize.width }}
      />

      <BookDetails>
        <div>
          <BookName size="xs">{book.name}</BookName>
          <Text size="sm" color="gray-400">
            {book.author}
          </Text>
        </div>
      </BookDetails>
    </Container>
  );
};
