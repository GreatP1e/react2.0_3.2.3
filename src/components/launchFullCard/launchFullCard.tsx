import {
  Button,
  Card,
  Center,
  Flex,
  Image,
  Space,
  Title,
  Text,
  ScrollArea,
} from "@mantine/core";
import { LaunchFullType } from "../../types";

export const LaunchFullCard = ({ launch, closeModal }: Props) => (
  <Card
    shadow="sm"
    withBorder
    radius="md"
    mt="10%"
    mx="auto"
    w="70%"
    mah="70vh">
    <ScrollArea h="70vh" type="scroll">
      <Flex align="center" justify="space-between" w="100%">
        <Title order={3}>{launch.mission_name}</Title>
        <Button onClick={() => closeModal()} c="black" bg="transparent">
          X
        </Button>
      </Flex>
      <Space h={20} />
      <Center>
        <Image src={launch.links?.mission_patch} alt="logo" w={200} />
      </Center>
      <Space h={20} />
      <Title order={4}>Mission name</Title>
      <Text c="dimmed">{launch.mission_name}</Text>
      <Space h={20} />
      <Title order={4}>Rocket name</Title>
      <Text c="dimmed">{launch.rocket?.rocket_name}</Text>
      <Space h={20} />
      <Title order={4}>Details</Title>
      <Text c="dimmed">{launch.details}</Text>
    </ScrollArea>
  </Card>
);

interface Props {
  launch: LaunchFullType;
  closeModal: () => void;
}
