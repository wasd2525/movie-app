import React, { useState, useContext } from "react";
import Genres from "./Genres/Genres";
import Length from "./Length/Length.jsx";
import Decades from "./Decades/Decades.jsx";
import MovieContext from "../../MovieContext";

const Home = () => {
  const hasGenres = () => {
    return movie.genres?.length === 0;
  };

  const hasLength = () => {
    return movie.length.from === null;
  };

  const { movie } = useContext(MovieContext);
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
          <button
            style={hasGenres() ? { backgroundColor: "lightgray" } : null}
            className="buttonStep"
            onClick={() => setStep(step + 1)}
            disabled={hasGenres()}
          >
            Next
          </button>
        )}
        {step === 2 && (
          <>
            <button className="buttonStep" onClick={() => setStep(step - 1)}>
              Prev
            </button>
            <button
              style={hasLength() ? { backgroundColor: "lightgray" } : null}
              disabled={hasLength()}
              className="buttonStep"
              onClick={() => setStep(step + 1)}
            >
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
