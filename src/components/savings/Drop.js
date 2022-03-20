import React from "react";
import { useDropzone } from "react-dropzone";

const Drop = (props) => {
  const { acceptedFiles, fileRejections, getRootProps, getInputProps, open } =
    useDropzone({
      accept: "image/jpeg, image/png",
      noClick: true,
      noKeyboard: true,
    });

  const acceptedFileItems = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));
  const fileRejectionItems = fileRejections.map(({ file, errors }) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
      <ul>
        {errors.map((e) => (
          <li key={e.code}>{e.message}</li>
        ))}
      </ul>
    </li>
  ));
  return (
    <div className="dropzone">
      <div {...getRootProps({ className: "drop" })}>
        <input {...getInputProps()} />
        <p>Drag files to upload or select upload</p>
        <input type="button" className="upload" onClick={open} value="Upload" />
      </div>
      <aside>
        <ul>{acceptedFileItems}</ul>

        <ul>{fileRejectionItems}</ul>
      </aside>
    </div>
  );
};

export default Drop;
