import GlobalStyle from "./styles/GlobalStyle";
import Accordions from "./ui/Accordions";

function App() {
  return (
    <>
      <GlobalStyle />
      <Accordions>
        <Accordions.Accordion>
          <Accordions.Title name="What is an accordion?">
            What is an accordion?
          </Accordions.Title>
          <Accordions.Description name="What is an accordion?">
            An accordion is a UI component that allows users to expand and
            collapse sections of content.
          </Accordions.Description>
        </Accordions.Accordion>

        <Accordions.Accordion>
          <Accordions.Title name="Why use an accordion?">
            Why use an accordion?
          </Accordions.Title>
          <Accordions.Description name="Why use an accordion?">
            Accordions help organize content and reduce page clutter by hiding
            non-essential information until needed.
          </Accordions.Description>
        </Accordions.Accordion>
      </Accordions>
    </>
  );
}

export default App;
