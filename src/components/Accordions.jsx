import { useState } from "react";
import Accordion from "./Accordion";

const accordions = [
  {
    title: "What is an accordion?",
    description:
      "An accordion is a UI component that allows users to expand and collapse sections of content.",
  },
  {
    title: "Why use an accordion?",
    description:
      "Accordions help organize content and reduce page clutter by hiding non-essential information until needed.",
  },
  {
    title: "How does it work?",
    description:
      "Clicking on the accordion header toggles the visibility of its associated content.",
  },
  {
    title: "Can I style it?",
    description:
      "Yes, accordions can be customized using CSS or a component library like Tailwind or Material UI.",
  },
];

function Accordions() {
  const [accordionTitle, setAccordionTitle] = useState("");
  function handleClick(accordion) {
    accordionTitle === "" || accordionTitle !== accordion.title
      ? setAccordionTitle(accordion.title)
      : setAccordionTitle("");
  }
  return (
    <>
      {accordions.map((accordion) => (
        <Accordion
          accordion={accordion}
          key={accordion.title}
          accordionTitle={accordionTitle}
          onClick={handleClick}
        />
      ))}
    </>
  );
}

export default Accordions;
