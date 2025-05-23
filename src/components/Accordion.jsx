import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import styled from "styled-components";

const StyledAccordion = styled.div`
  width: 80%;
  border: 1px solid var(--color-grey-200);

  margin: 20px auto;
  padding: 20px;
`;

function Accordion({ accordion, accordionTitle, onClick }) {
  const { title, description } = accordion;
  return (
    <StyledAccordion>
      <div>
        <span role="button" onClick={() => onClick(accordion)}>
          {accordionTitle === title ? <HiChevronUp /> : <HiChevronDown />}
        </span>
        <span>{title}</span>
      </div>
      {accordionTitle === title && <div>{description}</div>}
    </StyledAccordion>
  );
}



export default Accordion;
