import { useRef, useState } from "react";
import { IndexModal } from "./components/IndexModal";
import { ProgressModal } from "./components/ProgressModal";
import { SectionWrapper } from "./components/SectionWrapper";
import { TextBody } from "./components/TextBody";
import { Subtitle, Title } from "./components/Title";
import { DocumentList } from "./libs/DocumentList";

function App() {
  const scrollref = useRef(null)
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({})
  const [activeSection, setActiveSection] = useState<(typeof DocumentList)[number]>(DocumentList[0]);

  const handleSection = (sectionObj: (typeof DocumentList)[number]) => {
    setActiveSection(sectionObj);
    const target = sectionRefs.current[sectionObj.id]
    if(target) {
      target.scrollIntoView({behavior: "smooth", block: "start"})
    }
  };


  return (
    <div className="flex flex-col items-center  w-screen h-screen">
      <div ref={scrollref} className="max-w-[55vw]">
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
        <SectionWrapper
        ref={(el) => void (sectionRefs.current[list.id] = el)}
        >
          <div className="flex flex-col gap-4">
            <Title className="text-4xl! font-medium!">{list.name}</Title>
            <TextBody>{list.info}</TextBody>
          </div>
        </SectionWrapper>
      ))}

      <ProgressModal>
        <button className="text-sm cursor-pointer">{activeSection.name}</button>
        <span className="flex items-center justify-center p-2 rounded-full min-w-[24px] min-h-[24px] bg-white/15">
          100
        </span>
      </ProgressModal>

      <IndexModal>
        {DocumentList.map((item) => (
          <button
            key={item.id}
            onClick={() => handleSection(item)}
            className={`cursor-pointer font-medium ${
              activeSection.id === item.id ? "text-white" : "text-white/50"
            }`}
          >
            {item.name}
          </button>
        ))}
      </IndexModal>
    </div>
  );
}

export default App;
