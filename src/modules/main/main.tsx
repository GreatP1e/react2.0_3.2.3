import { AppShell, SimpleGrid } from "@mantine/core";
import { LaunchCard } from "../../components/launchCard";
import { LaunchType } from "../../types";

export const Main = ({ list, openModal }: Props) => (
  <AppShell.Main mt={50}>
    <SimpleGrid type="container" cols={3} spacing={20} maw={800} mx="auto">
      {list.map((el) => (
        <LaunchCard key={el.flight_number} {...el} openModal={openModal} />
      ))}
    </SimpleGrid>
  </AppShell.Main>
);

interface Props {
  list: LaunchType[];
  openModal: (id: number) => void;
}
