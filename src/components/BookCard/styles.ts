import { styled } from "@stitches/react";
import Image from "next/image";

export const Container = styled("div", {
  display: "flex",
  gap: "$5",
  padding: "18px $5",
  borderRadius: 8,
  cursor: "pointer",
  border: "1px solid $gray700",
  transition: "0.2s",

  "&:hover": {
    borderColor: "$gray600",
  },
});

export const BookImage = styled(Image, {
  borderRadius: 4,
  objectFit: "cover",
});
