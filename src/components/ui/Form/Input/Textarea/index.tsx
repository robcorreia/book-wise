import { TextareaHTMLAttributes, ReactNode } from "react";
import { Container } from "./styles";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  maxLengh?: number;
};
export const Textarea = ({ maxLengh, ...props }: TextareaProps) => {
  const valueLength = String(props.value)?.length ?? 0;
  return (
    <Container>
      <textarea {...props} maxLength={maxLengh} />
      {maxLengh && (
        <span>
          {valueLength} / {maxLengh}
        </span>
      )}
    </Container>
  );
};
