const ResumeService = require('../../domain/services/ResumeService');
const ResumeRepository = require('../repositories/ResumeRepository');
const resumeService = new ResumeService();
const resumeRepository = new ResumeRepository();

class ResumeController {
  async upload(req, res) {
    if (!req.file) {
      return res.status(400).json({ error: 'Nenhum arquivo enviado.' });
    }

    try {
      const resume = resumeRepository.saveResume(req.file);
      const parsedResume = await resumeService.parseResume(resume.filePath);
      res.status(200).json({ message: 'Arquivo enviado com sucesso!', resume: parsedResume });
    } catch (error) {
      console.error('Erro ao processar o arquivo:', error);
      res.status(500).json({ error: 'Erro ao processar o arquivo.' });
    }
  }

  async analyze(req, res) {
    try {
      const { text } = req.body;
      if (!text) {
        return res.status(400).json({ error: 'Texto do currículo não fornecido.' });
      }

      const analysis = await resumeService.analyzeResume(text);
      res.status(200).json({ analysis });
    } catch (error) {
      console.error('Erro na análise do currículo:', error);
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new ResumeController();