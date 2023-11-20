import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import FileUpload from "components/common/upload";
import axios from "axios";
import { useApi } from "hooks/api";

// import.meta.env;

// const API_URL = import.meta.env.VITE_API_URL;

const API_URL: string =
  'https://onbuddy.onrender.com' || 'http://localhost:8000';

const AdminUploadCsv: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [content, setContent] = useState<any>(null);
  const [fileUrl, setFileUrl] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const navigate = useNavigate();

  const [{ data, isLoading }, makeRequest] = useApi.post("/users/create");

  const handleFileChange = (file: File) => {
    const display = `${file.name} size:${file.size}mb`;
    setContent(display);

    setSelectedFile(file);
  };

  const handleDataSubmit = () => {
    const data = { csvUrl: fileUrl };
    if (!fileUrl) return;
    makeRequest(data);
  };

  const handleFileUpload = async () => {
    setIsUploading(true);
    if (selectedFile) {
      try {
        const formData = new FormData();
        formData.append("file", selectedFile);
        const response = await axios.post(
          `${API_URL}/api/v1/file/upload`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log(response.data);
        setIsUploading(false);
        setFileUrl(response.data.secure_url);
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }
  };

  if (data) {
    navigate("/home");
  }

  const disableUploadButton = isUploading || fileUrl !== null;

  return (
    <div className="flex flex-col p-2 px-4 min:h-screen h-screen ">
      <div className="flex items-center px-4  gap-5 cursor-pointer">
        <h1 className="font-bold mb-5 uppercase flex md:text-4xl text-lg text-[#309CFF] ">
          Add new Employees
        </h1>
      </div>
      <div>
      <h2 className="text-[1.1rem] px-4 mb-8  w-[100%]">
        A template CSV file has been provided below. Please ensure to use the csv template provided for upload request. Thank you!
      </h2>
      <h2 className="text-[1.3rem] px-4 mb-8  w-[100%]">
        <button className="text-[#1D6CB3] hover:underline" onClick={() => window.open('/assets/template.csv')}>Download Template CSV file</button>
      </h2>
      </div>
      
      <FileUpload onFileChange={handleFileChange} content={content} />
      <div className="flex p-1 items-center justify-between gap-[10px] w-full">
        <button
          className={`text-white w-full bg-[grey] hover:bg-[#575555] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ${
            disableUploadButton && "cursor-not-allowed"
          }`}
          disabled={disableUploadButton}
          onClick={handleFileUpload}
        >
          {fileUrl ? "File upload successfully!" : "Upload"}
        </button>
        <button
          className={`text-white bg-[#309CFF] w-full hover:bg-[#1D6CB3] focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ${
            isLoading && "cursor-not-allowed"
          }`}
          disabled={isLoading}
          onClick={handleDataSubmit}
        >
          {isLoading ? "loading..." : "Submit"}
        </button>
      </div>
    </div>
  );
};

export default AdminUploadCsv;
