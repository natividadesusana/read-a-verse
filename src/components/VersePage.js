import { useState } from "react";
import axios from "axios";
import PaginationButtons from "./PaginationButtons";
import loading from "../assets/loading.gif";
import { Loading } from "./styles";
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
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = (verseId, totalPages) => {
    const apiUrl = `https://bible-api.com/${verseId}`;
    setIsLoading(true);
    axios
      .get(apiUrl)
      .then((response) => {
        setVerseData(response.data);
        setCurrentVerseId(verseId);
        setShowModal(true);
        setTotalPages(totalPages);
        setIsLoading(false);
      })
      .catch((error) => {
        alert(error.response.data);
        setIsLoading(false);
      });
  };
  const handlePageClick = (page) => {
    setCurrentPage(page);
    const verseId = `${currentVerseId.slice(0, -1)}${page}`;
    handleClick(verseId, totalPages);
  };

  const handleRandomClick = () => {
    const book = "romans";
    const maxChapters = 16;
    const maxVerses = 25;
    const chapter = Math.floor(Math.random() * maxChapters) + 1;
    const verse = Math.floor(Math.random() * maxVerses) + 1;
    const verseId = `${book}+${chapter}:${verse}`;
    const totalPages = maxVerses;
    handleClick(verseId, totalPages);
  };

  function renderContent() {
    if (showModal) {
      return null;
    }
    if (isLoading) {
      return <Loading src={loading} alt="loading" />;
    }
    return (
      <>
        <Title>Read a Verse</Title>
        <Button onClick={handleRandomClick}>Click Me</Button>
      </>
    );
  }

  return (
    <Container>
      {renderContent()}
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
