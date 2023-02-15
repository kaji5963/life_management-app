import { useToast } from "@chakra-ui/react";
import { useCallback } from "react";

type Props = {
  title: string;
  status: "info" | "warning" | "success" | "error" | "loading";
};

export const useMessage = () => {
  const toast = useToast();

  const showMessage = useCallback((props: Props) => {
    const { title, status } = props;

    toast({
      title,
      status,
      duration: 2000,
      isClosable: true,
      position: "bottom",
    });
  }, []);
  return { showMessage };
};
