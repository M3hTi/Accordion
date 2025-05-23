import { useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import styled from "styled-components";

const StyledAccordion = styled.div`
  width: 80%;
  border: 1px solid var(--color-grey-200);

  margin: 20px auto;
  padding: 20px;
`;

function Accordion({ accordion }) {
  const [isOpen, setIsOpen] = useState(false);
  const { title, description } = accordion;
  return (
    <StyledAccordion>
      <div>
        <span role="button" onClick={() => setIsOpen((s) => !s)}>
          {!isOpen ? <HiChevronDown /> : <HiChevronUp />}
        </span>
        <span>{title}</span>
      </div>
      {isOpen && <div>{description}</div>}
    </StyledAccordion>
  );
}

export default Accordion;
