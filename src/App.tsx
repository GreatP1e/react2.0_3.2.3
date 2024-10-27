import { AppShell, MantineProvider } from "@mantine/core";
import { Header } from "./modules/header";
import { Main } from "./modules/main";
import { Modal } from "./modules/modal";
import { MouseEvent, useEffect, useReducer } from "react";
import { reducer } from "./reducer";
import { getLaunch, getList } from "./api";

function App() {
  const [{ list, launchFull, modalShow }, dispatch] = useReducer(reducer, {
    list: [],
    launchFull: null,
    modalShow: false,
  });
  useEffect(() => {
    getList().then((data) => {
      data && dispatch({ type: "add_list", payload: data });
    });
  }, []);

  const handlerOpenModal = (flight_number: number) => {
    if (flight_number !== launchFull?.flight_number) {
      getLaunch(flight_number).then((data) => {
        data && dispatch({ type: "add_launch", payload: data });
      });
    }
    dispatch({ type: "modal" });
  };
  const handlerCloseModal = (event?: MouseEvent<HTMLDivElement>) => {
    if (event && event.target === event.currentTarget)
      dispatch({ type: "modal" });
    if (!event) dispatch({ type: "modal" });
  };

  return (
    <MantineProvider>
      <AppShell>
        <Header />
        <Main list={list} openModal={handlerOpenModal} />
      </AppShell>
      <Modal
        show={modalShow}
        launch={launchFull}
        closeModal={handlerCloseModal}
      />
    </MantineProvider>
  );
}

export default App;
