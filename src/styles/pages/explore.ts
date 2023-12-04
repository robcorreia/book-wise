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
