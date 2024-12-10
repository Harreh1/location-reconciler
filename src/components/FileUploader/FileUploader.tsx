import React, { useRef, useState } from "react";
import "./FileUploader.css";
// import { calculateLocationDifferences, formatStringIntoLists } from "../lib/LocationProcessor";

export interface FileUploaderProps {
  fileContentCallback: (fileContent: string) => void;
}

const FileUploader = (props: FileUploaderProps) => {
  const { fileContentCallback } = props;
  const [error, setError] = useState("");

  // Create a reference to the hidden file input element so we can trigger it when the button is clicked
  const hiddenFileInput = useRef<HTMLInputElement>(null);

  // Since button has the styling we want, we will trigger the hidden input when the button is clicked
  const handleFileUploadClick = () => {
    if (hiddenFileInput.current) {
      hiddenFileInput.current.click();
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event?.target?.files) {
      return;
    }

    const file = event.target.files[0];

    if (file) {
      if (file.type === "text/plain") {
        const reader = new FileReader();

        reader.onload = (e) => {
          if (e.target && typeof e.target.result === "string") {
            if (e.target.result.trim() === "") {
              setError("File content cannot be empty");
              fileContentCallback("");
              return;
            } else {
              fileContentCallback(e.target.result);
              setError("");
            }
          } else {
            setError("An error occurred while reading the file.");
            fileContentCallback("");
          }
        };

        reader.onerror = () => {
          setError("An error occurred while reading the file.");
          fileContentCallback("");
        };

        reader.readAsText(file);
      } else {
        setError("Please upload a valid text file.");
        fileContentCallback("");
      }
    }
  };

  return (
    <>
      <button className="btn btn-upload" onClick={handleFileUploadClick}>
        Upload File
      </button>
      <input
        type="file"
        accept=".txt"
        onChange={handleFileUpload}
        style={{ display: "none" }}
        ref={hiddenFileInput}
      />

      {error && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
};

export default FileUploader;
