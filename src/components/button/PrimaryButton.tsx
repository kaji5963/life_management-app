import { Button } from "@chakra-ui/react";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClick: () => void;
  colorScheme:
    | "blue"
    | "cyan"
    | "gray"
    | "green"
    | "orange"
    | "pink"
    | "purple"
    | "red"
    | "teal"
    | "yellow"
    | "whiteAlpha"
    | "blackAlpha"
    | "linkedin"
    | "facebook"
    | "messenger"
    | "whatsapp"
    | "twitter"
    | "telegram";
};

export const PrimaryButton = ({ children, onClick, colorScheme }: Props) => {
  return (
    <Button colorScheme={colorScheme} onClick={onClick}>
      {children}
    </Button>
  );
};
