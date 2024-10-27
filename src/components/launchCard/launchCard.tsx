import { Card, Flex, Image, Title, Text, Button, Space } from "@mantine/core";
import { LaunchType } from "../../types";

export const LaunchCard = ({
  mission_name,
  rocket,
  links,
  flight_number,
  openModal,
}: Props) => {
  return (
    <Card
      shadow="sm"
      withBorder
      miw={200}
      padding="md"
      radius="md"
      data-testid="launch-card">
      <Flex align="center" direction="column" justify="space-between" h="100%">
        <Flex align="center" direction="column">
          <Image w={150} src={links.mission_patch_small} alt="logo" />
          <Space h={30} />
          <Title>{mission_name}</Title>
          <Space h={20} />
          <Text c="dimmed">{rocket.rocket_name}</Text>
          <Space h={20} />
        </Flex>
        <Button w="100%" radius={8} onClick={() => openModal(flight_number)}>
          See more
        </Button>
      </Flex>
    </Card>
  );
};

interface Props extends LaunchType {
  openModal: (id: number) => void;
}
