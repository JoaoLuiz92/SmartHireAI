const pdfParse = require('pdf-parse');
const Resume = require('../models/Resume');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

class ResumeService {
  async parseResume(filePath) {
    const dataBuffer = fs.readFileSync(filePath);
    const pdfData = await pdfParse(dataBuffer);
    const text = pdfData.text;
    return new Resume(uuidv4(), filePath, text);
  }

  async analyzeResume(text) {
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: `Analise este currículo: ${text}` }],
    });
    return response.choices[0].message.content;
  }
}

module.exports = ResumeService;