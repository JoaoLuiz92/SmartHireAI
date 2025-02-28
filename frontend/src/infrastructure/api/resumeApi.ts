import axios from 'axios';

export const uploadResume = async (file: File) => {
  const formData = new FormData();
  formData.append('file', file);

  const response = await axios.post('http://localhost:5000/api/upload', formData);
  return response.data;
};

export const analyzeResume = async (text: string) => {
  const response = await axios.post('http://localhost:5000/analyze-resume', { text });
  return response.data;
};