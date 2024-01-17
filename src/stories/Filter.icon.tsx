import styled from "styled-components";

interface Props {
  onClick: () => void;
}
export const FilterIcon = (props: Props) => (
  <Container onClick={props.onClick}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="rgba(255, 255, 255, 1)"
    >
      <path d="M7 11h10v2H7zM4 7h16v2H4zm6 8h4v2h-4z"></path>
    </svg>
  </Container>
);

const Container = styled.div`
  cursor: pointer;
`;
