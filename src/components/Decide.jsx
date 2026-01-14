import React, { useState } from "react";
import { FaQuestion } from "react-icons/fa";
import Hero from "./Hero";
const Paper = ({ paper, mode, onChangeText }) => {
  return (
    <>
    
    <div
      className={`relative w-[300px] h-[300px] bg-[#fffdf7] rounded-xl
      shadow-[0_10px_25px_rgba(0,0,0,0.15)] p-7 font-serif
      flex items-center justify-center
      transition-transform duration-500 ease-in-out
      ${paper.foldStep === 1 ? "scale-x-50" : ""}
      ${paper.foldStep === 2 ? "scale-x-50 scale-y-50" : ""}`}
    >
      
      {/* Inner border */}
      <div className="absolute inset-[18px] border-2 border-[#d6d0c4] rounded pointer-events-none" />

      {/* CONTENT */}
      {paper.foldStep !== 0 ? (
        <FaQuestion className="text-8xl text-[#75B06F]" />
      ) : mode === "input" ? (
        <input
  type="text"
  value={paper.text}
  onChange={(e) => onChangeText(paper.id, e.target.value)}
  placeholder="Type your option..."
  className="w-full border-b-2 border-gray-400 outline-none bg-transparent
           text-center tracking-wide text-lg"
/>

      ) : (
        <p className="text-xl text-center px-3">{paper.text}</p>
      )}
    </div>
    </>
  );
};

export default function Decide() {
  const initialPapers = [
    { id: 1, text: "", foldStep: 0 },
    { id: 2, text: "", foldStep: 0 },
    { id: 3, text: "", foldStep: 0 },
  ];

  const [papers, setPapers] = useState(initialPapers);
  const [visiblePaperId, setVisiblePaperId] = useState(null);
  const [mode, setMode] = useState("input"); // input | reveal
  const [isShuffling, setIsShuffling] = useState(false);

  /* ---------------- INPUT ---------------- */
  const handleChangeText = (id, text) => {
    setPapers((prev) =>
      prev.map((p) => (p.id === id ? { ...p, text } : p))
    );
  };

  /* ---------------- FOLD ALL ---------------- */
  const foldAll = () => {
    setPapers((prev) =>
      prev.map((p) => ({ ...p, foldStep: 1 }))
    );
    setTimeout(() => {
      setPapers((prev) =>
        prev.map((p) => ({ ...p, foldStep: 2 }))
      );
    }, 500);
  };

  /* ---------------- SHUFFLE ---------------- */
  const shufflePapers = () => {
    foldAll();
    setIsShuffling(true);
    let count = 0;

    const interval = setInterval(() => {
      const random =
        papers[Math.floor(Math.random() * papers.length)];
      setVisiblePaperId(random.id);

      count++;
      if (count > 10) {
        clearInterval(interval);
        setIsShuffling(false);
        setMode("reveal");
      }
    }, 100);
  };

  /* ---------------- UNFOLD (REVERSE ANIMATION) ---------------- */
  const unfoldVisible = () => {
    if (!visiblePaperId) return;

    setPapers((prev) =>
      prev.map((p) =>
        p.id === visiblePaperId ? { ...p, foldStep: 1 } : p
      )
    );

    setTimeout(() => {
      setPapers((prev) =>
        prev.map((p) =>
          p.id === visiblePaperId ? { ...p, foldStep: 0 } : p
        )
      );
    }, 500);
  };

  /* ---------------- NEXT ROUND ---------------- */
  const nextRound = () => {
    setPapers(initialPapers);
    setVisiblePaperId(null);
    setMode("input");
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex flex-col items-center justify-center gap-10 p-10">
      
      {/* PAPERS */}
      <div className="flex gap-10">
        {papers
          .filter(
            (p) => visiblePaperId === null || p.id === visiblePaperId
          )
          .map((paper) => (
            <Paper
              key={paper.id}
              paper={paper}
              mode={mode}
              onChangeText={handleChangeText}
            />
          ))}
      </div>

      {/* CONTROLS */}
      <div className="flex gap-4">
        {mode === "input" && (
          <button
            onClick={shufflePapers}
            className="px-5 py-2 bg-green-600 text-white rounded"
          >
            Shuffle & Decide
          </button>
        )}

        {mode === "reveal" && (
          <>
            <button
              onClick={unfoldVisible}
              className="px-5 py-2 bg-black text-white rounded"
            >
              Unfold
            </button>

            <button
              onClick={nextRound}
              className="px-5 py-2 bg-gray-700 text-white rounded"
            >
              Next Round
            </button>
          </>
        )}
      </div>
    </div>
  );
}
