import React, { useState } from "react";
import Genres from "./Genres/Genres";
import Length from "./Length/Length.jsx";
import Decades from "./Decades/Decades.jsx";

const Home = () => {
  const [step, setStep] = useState(1);
  const stepper = () => {
    switch (step) {
      case 1:
        return <Genres setStep={setStep} />;
      case 2:
        return <Length setStep={setStep} />;
      case 3:
        return <Decades setStep={setStep} />;
      default:
        return null;
    }
  };
  return (
    <div style={{ padding: "3rem 3rem" }}>
      {stepper()}
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {step === 1 && (
          <button className="buttonStep" onClick={() => setStep(step + 1)}>
            Next
          </button>
        )}

        {step === 2 && (
          <>
            <button className="buttonStep" onClick={() => setStep(step - 1)}>
              Prev
            </button>
            <button className="buttonStep" onClick={() => setStep(step + 1)}>
              Next
            </button>
          </>
        )}

        {step === 3 && (
          <button className="buttonStep" onClick={() => setStep(step - 1)}>
            Prev
          </button>
        )}
      </div>
      <div className="copyright">
        <div className="copyright-wrapper">
          <p className="p-text">a project by ben hazan</p>
          <p className="p-text">@2022</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
