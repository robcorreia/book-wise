import { styled } from "@stitches/react";

export const Container = styled("div", {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  overflow: "auto",
  paddingBottom: 40,

  "&::webkit-scrollbar": {
    display: "none`",
  },
  "> section": {
    display: "flex",
    flexDirection: "column",
    gap: "$3",
    marginTop: "$4",
  },
});
