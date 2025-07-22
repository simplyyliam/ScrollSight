import { SectionWrapper } from "./components/SectionWrapper";
import { TextBody } from "./components/TextBody";
import { Subtitle, Title } from "./components/Title";
import { DocumentList } from "./libs/DocumentList";

function App() {
  return (
    <div className="flex flex-col items-center  w-screen h-screen">
      <div className="max-w-[55vw]">
        <div className="flex flex-col gap-3 w-full p-10">
          <Title>ScrollSight: A Minimal Reading Experience</Title>
          <Subtitle>
            A clean and experimental document viewer designed to visualize your
            reading flow.
          </Subtitle>
        </div>
        <hr className="opacity-50" />
      </div>
      {DocumentList.map((list) => (
        <SectionWrapper>
          <div className="flex flex-col gap-4">
            <Title className="text-4xl! font-medium!">{list.name}</Title>
            <TextBody>{list.info}</TextBody>
          </div>
        </SectionWrapper>
      ))}
    </div>
  );
}

export default App;
