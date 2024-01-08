import React, { useRef } from "react";
import Card from "./Card";

function Forground() {
  const ref = useRef(null);
  const data = [
    {
      description: "one day or day one.",
      fileSize: "1 MB",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
    },
    {
      description: "A person who wants to be successful nobody can stop him",
      fileSize: "5 MB",
      close: true,
      tag: { isOpen: true, tagTitle: "Check Now", tagColor: "green" },
    },
    {
      description: "Some people in life are come to teach you lesson of life",
      fileSize: ".9 MB",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
    },
  ];

  return (
    <>
      <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full p-3 flex gap-10 flex-wrap">
        {data.map((item, index) => (
          <Card data={item} key={index} reference={ref} />
        ))}
      </div>
    </>
  );
}

export default Forground;
