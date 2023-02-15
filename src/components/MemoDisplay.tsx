import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Image,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { memo, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Memos } from "../types/memoType";
import { PrimaryButton } from "./button/PrimaryButton";

export const MemoDisplay = memo(() => {
  const navigate = useNavigate();

  const [memoInfo, setMemoInfo] = useState<Memos>({
    title: "",
    detail: "",
  });
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <Flex mt={10} justify="center">
        <PrimaryButton colorScheme="gray" onClick={() => setToggle(!toggle)}>
          登録フォーム表示/非表示
        </PrimaryButton>
      </Flex>

      {toggle ? (
        <>
          <Flex alignItems="center" direction="column">
            <Stack mt={10} spacing={6}>
              <Input
                placeholder="メモのタイトルを入力してください"
                variant="filled"
                w="70vh"
                mr={5}
                value={memoInfo.title}
                onChange={(e) =>
                  setMemoInfo({ ...memoInfo, title: e.target.value })
                }
              />
              <Input
                placeholder="メモの詳細を入力してください"
                variant="filled"
                w="70vh"
                mr={5}
                value={memoInfo.detail}
                onChange={(e) =>
                  setMemoInfo({ ...memoInfo, detail: e.target.value })
                }
              />
              <Stack justify="center" direction="row" mt={8}>
                <PrimaryButton
                  colorScheme="orange"
                  onClick={() => navigate("/memo/create")}
                >
                  登録
                </PrimaryButton>
              </Stack>
            </Stack>
          </Flex>
        </>
      ) : null}

      <Flex mt={10} justify="center">
        <Outlet />
      </Flex>
      <Flex alignItems="center" justify="center" mt="10">
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
          w="50%"
          borderRadius="20px"
          backgroundColor="gray.100"
        >
          <Image
            objectFit="cover"
            mr={6}
            p={6}
            borderRadius="50%"
            w={{ base: "50%", sm: "200px" }}
            h={{ base: "50%", sm: "200px" }}
            src="http://source.unsplash.com/random"
          />

          <Stack>
            <CardBody>
              <Heading size="md">memo1</Heading>

              <Text py="2">today is sunny</Text>
            </CardBody>

            <CardFooter>
              <Button colorScheme="green">削除</Button>
            </CardFooter>
          </Stack>
        </Card>
      </Flex>
    </>
  );
});
