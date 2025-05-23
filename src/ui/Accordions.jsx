import { createContext, useContext, useState } from "react";
import styled from "styled-components";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

const AccordionsContext = createContext();

const Accordion = styled.div`
  width: 80%;
  border: 1px solid var(--color-grey-200);

  margin: 20px auto;
  padding: 20px;
`;

function Accordions({ children }) {
  const [activeAccordion, setActiveAccordion] = useState("");
  const close = () => setActiveAccordion("");
  const open = (name) => setActiveAccordion(name);
  return (
    <>
      <AccordionsContext.Provider value={{ activeAccordion, close, open }}>
        {children}
      </AccordionsContext.Provider>
    </>
  );
}

function Title({ children, name: titleName }) {
  const { activeAccordion, open, close } = useContext(AccordionsContext);
  function handleClick() {
    activeAccordion === "" || activeAccordion !== titleName
      ? open(titleName)
      : close();
  }

  return (
    <div>
      <span role="button" onClick={handleClick} style={{ cursor: "pointer" }}>
        {activeAccordion === "" || activeAccordion !== titleName ? (
          <HiChevronDown />
        ) : (
          <HiChevronUp />
        )}
      </span>
      <span>{children}</span>
    </div>
  );
}

function Description({ children, name }) {
  const { activeAccordion } = useContext(AccordionsContext);
  if (activeAccordion !== name) return null;
  return <div>{children}</div>;
}

Accordions.Accordion = Accordion;
Accordions.Title = Title;
Accordions.Description = Description;

export default Accordions;
