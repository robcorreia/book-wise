import { styled } from "@stitches/react";

export const ExploreContainer = styled("section", {
  width: "100%",
  height: "100%",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",

  "> header": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export const TagsContainer = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  gap: "$3",
  marginTop: 40,
  marginBottom: 48,
});

export const BooksGrid = styled("div", {
  display: "grid",
  height: "100%",
  gridTemplateColumns: "reapeat(3, 1fr)",
  gridAutoColumns: 188,
  gap: "$5",
  overflowY: "auto",
  paddingBottom: 40,

  "&::-webkit-scrollbar": {
    display: "none",
  },
});
