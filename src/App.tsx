import { useState } from "react";
import "./App.css";
import FileUploader from "./components/FileUploader/FileUploader";
import {
  formatStringIntoLists,
  calculateLocationDifferences,
} from "./lib/LocationProcessor";

function App() {
  const [fileContent, setFileContent] = useState("");
  const [error, setError] = useState("");

  const handleFileReset = () => {
    setFileContent("");
    setError("");
  }

  let totalDistance = "";

  if (fileContent) {
    try {
      const { column1, column2 } = formatStringIntoLists(fileContent);
      totalDistance = calculateLocationDifferences(
        column1,
        column2
      )?.toString();
    } catch (error: unknown) {
      console.log(error);
      if (error instanceof Error) {
        setError(error.message);
      }
      setFileContent("");
    }
  }

  return (
    <div className="container">
      <h1>Chronicler Location Solver</h1>
      <p className="info">
        In order to reconcile the location lists you must upload a text file
        containing both of the lists. These lists should be side by side, separated by a space, and
        consist of only numbers.
      </p>
      {!fileContent && (
        <>
          <FileUploader fileContentCallback={setFileContent} />
        </>
      )}
      {fileContent && (
        <>
          {totalDistance && (
            <h2>
              Total Distance:{" "}
              <span style={{ textDecoration: "underline", color: "#2a9d8f" }}>
                {totalDistance}
              </span>
            </h2>
          )}
          {fileContent && (
            <button className="btn" onClick={handleFileReset}>
              Reset
            </button>
          )}
        </>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default App;
