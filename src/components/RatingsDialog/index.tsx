import * as Dialog from "@radix-ui/react-dialog";
import React, { ReactNode } from "react";
import {
  BookDetailsContainer,
  BookDetailsWrapper,
  BookInfos,
  DialogClose,
  DialogContent,
  DialogOverlay,
} from "./styles";
import { BookOpen, X } from "@phosphor-icons/react";
import { BookImage } from "../BookCard/styles";
import { BookContent } from "../RatingCard/styles";
import { Heading, Text } from "../Typography";
import { RatingStars } from "../RatingStars";
import { BookInfo } from "./BookInfo";
import { BookmarkSimple } from "@phosphor-icons/react/dist/ssr";
import { BookRatings } from "../BookRatings";

type RatingsDialogProps = {
  children: ReactNode;
};

export const RatingsDialog = ({ children }: RatingsDialogProps) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>

      <Dialog.Portal>
        <DialogOverlay />
        <DialogContent>
          <DialogClose>
            <X size={24} />
          </DialogClose>

          <BookDetailsWrapper>
            <BookDetailsContainer>
              <BookImage
                width={171}
                height={242}
                alt="Book name"
                src="https://avatars.githubusercontent.com/u/29904660?s=400&u=7e7996446fddba3e6db4c96dab29d56287ae1c30&v=4"
              />
              <BookContent>
                <div>
                  <Heading size="sm">Book Name</Heading>
                  <Text color="gray-300" css={{ marginTop: "$2" }}>
                    Joe Doe
                  </Text>
                </div>

                <div>
                  <RatingStars rating={4} size="md" />
                  <Text color="gray-400" size="sm" css={{ marginTop: "$1" }}>
                    2 avaliações
                  </Text>
                </div>
              </BookContent>
            </BookDetailsContainer>

            <BookInfos>
              <BookInfo
                icon={<BookmarkSimple />}
                title="Categorias"
                info="Ficção, Ação"
              />
              <BookInfo icon={<BookOpen />} title="Páginas" info="217" />
            </BookInfos>
          </BookDetailsWrapper>
          <BookRatings></BookRatings>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
