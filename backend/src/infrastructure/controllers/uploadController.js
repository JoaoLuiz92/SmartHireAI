const ResumeService = require('../../domain/services/Resumeservice');
const resumeService = new ResumeService();

class ResumeController {
  async upload(req, res) {
    if (!req.file) {
      return res.status(400).json({ error: 'Nenhum arquivo enviado.' });
    }

    try {
      const resume = await resumeService.parseResume(req.file.path);
      res.status(200).json({ message: 'Arquivo enviado com sucesso!', resume });
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