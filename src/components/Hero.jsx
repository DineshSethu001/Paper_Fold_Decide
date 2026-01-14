import { useState } from "react";
import InstructionsModal from "./InstructionsModal";
import { useNavigate } from "react-router-dom";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};


const Hero = () => {
  const [showInstructions, setShowInstructions] = useState(false);
  const navigate = useNavigate();

  return (

    <section className="min-h-screen flex items-center justify-center bg-[#f5f5f5] px-6">
      <div className="max-w-2xl text-center space-y-6">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-serif font-semibold text-gray-900">
          Paper. Fold. Decide.
        </h1>

        {/* Tagline */}
        <p className="text-xl text-gray-700">
          Fold your thoughts. Unfold clarity.
        </p>

        {/* Description */}
        <p className="text-base text-gray-600 leading-relaxed">
          Write your options, shuffle the papers, and reveal one answer.
          <br />
          No pressure. No overthinking. Just clarity.
        </p>

        {/* CTA */}
        <div className="pt-4 flex justify-center gap-4">
          <button
            onClick={() => navigate("/decide")}
            className="cursor-pointer px-6 py-3 bg-black text-white rounded-md hover:opacity-90 transition">
            Start Deciding
          </button>

          <button onClick={() => setShowInstructions(true)} className="cursor-pointer px-6 py-3 border border-gray-300 rounded-md text-gray-800 hover:bg-gray-100 transition">
            How It Works
          </button>
        </div>
        <InstructionsModal
          isOpen={showInstructions}
          onClose={() => setShowInstructions(false)}
        />
      </div>
    </section>
  );
};

export default Hero;
