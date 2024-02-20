// UploadJSONComponent.js
// UploadJSONComponent.js
import React, { useState } from 'react';
import axios from 'axios';

const UploadJSONComponent = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    setSelectedFiles(Array.from(event.target.files));
  };

  const uploadFiles = async () => {
    selectedFiles.forEach(async (file) => {
      const formData = new FormData();
      formData.append('file', file);

      try {
        const response = await axios.post('API_GATEWAY_ENDPOINT', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    });
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} multiple />
      <button onClick={uploadFiles}>Upload</button>
    </div>
  );
};

export default UploadJSONComponent;