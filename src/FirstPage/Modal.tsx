import { Modal as BSModal, Button } from "react-bootstrap";

import { useFirstPageState } from "./state";

export default function Modal() {
  const { closeModal, isModalActive } = useFirstPageState();

  let modalContent = null;
  if (isModalActive) {
    modalContent = (
      <>
        <BSModal.Header closeButton>
          <BSModal.Title>Modal heading</BSModal.Title>
        </BSModal.Header>
        <BSModal.Body>Woohoo modal!</BSModal.Body>
        <BSModal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </BSModal.Footer>
      </>
    );
  }

  return (
    <BSModal show={isModalActive} onHide={closeModal}>
      {modalContent}
    </BSModal>
  );
}
