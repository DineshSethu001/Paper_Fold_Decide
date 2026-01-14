import React from "react";

const InstructionsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      {/* Paper card */}
      <div
        className="relative w-[90%] max-w-xl bg-[#fffdf7] rounded-lg shadow-2xl
                   p-8 font-serif text-gray-800
                   animate-[scaleIn_0.25s_ease-out]"
      >
        {/* Inner border */}
        <div className="absolute inset-4 border-2 border-[#d6d0c4] rounded pointer-events-none" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-500 hover:text-black text-xl"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-center mb-4">
          How it works
        </h2>

        {/* Instructions */}
        <ol className="space-y-4 text-lg leading-relaxed">
          <li>
            <span className="font-semibold">1.</span>{" "}
            Write one option on each paper.
          </li>

          <li>
            <span className="font-semibold">2.</span>{" "}
            Fold all papers to hide your thoughts.
          </li>

          <li>
            <span className="font-semibold">3.</span>{" "}
            Shuffle them to remove bias and overthinking.
          </li>

          <li>
            <span className="font-semibold">4.</span>{" "}
            One paper is revealed at random.
          </li>

          <li>
            <span className="font-semibold">5.</span>{" "}
            Unfold it and read your decision.
          </li>
        </ol>

        {/* Footer line */}
        <p className="mt-6 text-center italic text-gray-600">
          Fold your thoughts. Unfold clarity.
        </p>
      </div>

      {/* Tailwind keyframes */}
      <style>
        {`
          @keyframes scaleIn {
            from {
              transform: scale(0.95);
              opacity: 0;
            }
            to {
              transform: scale(1);
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
};

export default InstructionsModal;
