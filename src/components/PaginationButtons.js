import styled from "styled-components";

export default function PaginationButtons({
  currentPage,
  totalPages,
  onPageClick,
}) {
  const buttonsToShow = 3;
  const halfButtons = Math.floor(buttonsToShow / 2);
  const firstButton = Math.max(currentPage - halfButtons, 1);
  const lastButton = Math.min(firstButton + buttonsToShow - 1, totalPages);

  const buttons = [];
  for (let i = firstButton; i <= lastButton; i++) {
    buttons.push(
      <Pagination
        key={i}
        onClick={() => onPageClick(i)}
        active={i === currentPage}
      >
        {i}
      </Pagination>
    );
  }

  return <div>{buttons}</div>;
}

export const Pagination = styled.button`
  padding: 10px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: gray;
  font-weight: 400;
  width: 40px;
  text-align: center;

  &:hover {
    background-color: gainsboro;
  }
`;
