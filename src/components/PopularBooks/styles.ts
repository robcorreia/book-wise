import { styled } from "@stitches/react";

export const Container = styled("div", {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "$4",
  marginTop: 40,

  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  "> section": {
    display: "flex",
    flexDirection: "column",
    gap: "$3",
  },
});
