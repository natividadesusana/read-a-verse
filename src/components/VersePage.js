import { useState } from "react";
import axios from "axios";
import PaginationButtons from "./PaginationButtons";
import {
  Container,
  Title,
  Button,
  Modal,
  ModalContent,
  ModalCloseButton,
  ModalTitle,
  ModalText,
  PaginationContainer,
  Pagination,
} from "./styles";

export default function VersePage() {
  const [showModal, setShowModal] = useState(false);
  const [verseData, setVerseData] = useState({});
  const [currentVerseId, setCurrentVerseId] = useState("romans+12:1-2");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handleClick = (verseId, totalPages) => {
    const apiUrl = `https://bible-api.com/${verseId}`;

    axios
      .get(apiUrl)
      .then((response) => {
        setVerseData(response.data);
        setCurrentVerseId(verseId);
        setShowModal(true);
        setTotalPages(totalPages);
      })
      .catch((error) => {
        alert(error.response.data);
      });
  };
  const handlePageClick = (page) => {
    setCurrentPage(page);
    const verseId = `${currentVerseId.slice(0, -1)}${page}`;
    handleClick(verseId, totalPages);
  };

  const handleRandomClick = () => {
    const book = "romans";
    const chapter = Math.floor(Math.random() * 16) + 1;
    const verse = Math.floor(Math.random() * 25) + 1;
    const verseId = `${book}+${chapter}:${verse}`;
    const totalPages = 25;
    handleClick(verseId, totalPages);
  };

  return (
    <Container>
      <Title>Read a Verse</Title>
      <Button onClick={handleRandomClick}>Click Me</Button>
      {showModal && verseData.text && (
        <Modal>
          <ModalContent>
            <ModalCloseButton onClick={() => setShowModal(false)}>
              <ion-icon name="close-outline"></ion-icon>
            </ModalCloseButton>
            <ModalTitle>{verseData.reference}</ModalTitle>
            <ModalText>{verseData.text}</ModalText>
            <PaginationContainer>
              <Pagination onClick={() => handlePageClick(currentPage - 1)}>
                <ion-icon name="play-back-outline"></ion-icon>
              </Pagination>
              <PaginationButtons
                currentPage={currentPage}
                totalPages={totalPages}
                onPageClick={handlePageClick}
              />
              <Pagination onClick={() => handlePageClick(currentPage + 1)}>
                <ion-icon name="play-forward-outline"></ion-icon>
              </Pagination>
            </PaginationContainer>
          </ModalContent>
        </Modal>
      )}
    </Container>
  );
}
