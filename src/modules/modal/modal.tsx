import { createPortal } from "react-dom";
import { LaunchFullType } from "../../types";
import "./modal.css";
import { MouseEvent } from "react";
import { LaunchFullCard } from "../../components/launchFullCard";

export const Modal = ({ show, launch, closeModal }: Props) =>
  createPortal(
    <div
      className="modal"
      style={{ display: show ? "block" : "none" }}
      onClick={closeModal}>
      {launch && <LaunchFullCard launch={launch} closeModal={closeModal} />}
    </div>,
    document.getElementById("modal-root")!
  );

interface Props {
  show: boolean;
  launch: LaunchFullType | null;
  closeModal: (event?: MouseEvent<HTMLDivElement>) => void;
}
