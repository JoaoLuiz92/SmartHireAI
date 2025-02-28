import React from 'react';
import ResumeUpload from '../../application/components/ResumeUpload/ResumeUpload';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <div className="content">
        <h1 className="title">Upload de Currículo</h1>
        <ResumeUpload />
      </div>
    </div>
  );
};

export default Home;