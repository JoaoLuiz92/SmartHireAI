import React, { useState } from 'react';
import { ResumeService } from '../../../domain/services/ResumeService';
import './ResumeUpload.css';

const ResumeUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [analysis, setAnalysis] = useState('');

  const resumeService = new ResumeService();

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
      setErrorMessage('');
    }
  };

  const onFileUpload = async () => {
    if (!file) {
      setErrorMessage('Por favor, selecione um arquivo primeiro!');
      return;
    }

    setLoading(true);
    setErrorMessage('');

    try {
      const data = await resumeService.upload(file);
      alert('Arquivo enviado com sucesso');
      console.log('Resposta do servidor:', data);

      const analysisData = await resumeService.analyze(data.content);
      setAnalysis(analysisData);
    } catch (error) {
      setErrorMessage('Erro ao enviar o arquivo. Verifique o console para mais detalhes.');
      console.error('Erro no upload:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="resume-upload">
      <input type="file" onChange={onFileChange} className="file-input" />
      <button onClick={onFileUpload} disabled={loading} className="upload-button">
        {loading ? 'Enviando...' : 'Enviar Currículo'}
      </button>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {analysis && (
        <div className="analysis-result">
          <h2>Análise do Currículo:</h2>
          <p>{analysis}</p>
        </div>
      )}
    </div>
  );
};

export default ResumeUpload;