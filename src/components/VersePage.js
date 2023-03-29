import {
  Container,
  Title,
  Button,
  Modal,
  ModalContent,
  ModalTitle,
  ModalText,
  ModalCloseButton,
  PaginationContainer,
  Pagination,
} from "./styles";
import { useState } from "react";

export default function VersePage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <Container>
      <Title>Read a Verse</Title>
      <Button onClick={handleClick}>Click Me</Button>
      {showModal && (
        <Modal>
          <ModalContent>
            <ModalCloseButton onClick={() => setShowModal(false)}>
              X
            </ModalCloseButton>
            <ModalTitle>Daniel 9:9</ModalTitle>
            <ModalText>
              The Lord our God is merciful and forgiving, even though we have
              rebelled against him;
            </ModalText>
            <PaginationContainer>
              <Pagination>
                <ion-icon name="chevron-back-outline"></ion-icon>
              </Pagination>
              <Pagination>1</Pagination>
              <Pagination>2</Pagination>
              <Pagination>3</Pagination>
              <Pagination>
                <ion-icon name="chevron-back-outline"></ion-icon>
              </Pagination>
            </PaginationContainer>
          </ModalContent>
        </Modal>
      )}
    </Container>
  );
}
