const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const multer = require('multer');
const pdfParse = require('pdf-parse');
const app = express();

require('dotenv').config();

const OpenAI = require("openai");
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(bodyParser.json());

const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

app.post('/api/upload', upload.single('file'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'Nenhum arquivo enviado.' });
  }

  try {
    const filePath = path.join(uploadDir, req.file.filename);
    const dataBuffer = fs.readFileSync(filePath);
    const pdfData = await pdfParse(dataBuffer);
    const text = pdfData.text;

    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: `Analise este currículo: ${text}` }],
    });

    res.status(200).json({ message: 'Arquivo enviado com sucesso!', analysis: response.choices[0].message.content });
  } catch (error) {
    console.error('Erro ao processar o arquivo:', error);
    res.status(500).json({ error: 'Erro ao processar o arquivo.' });
  }
});

app.listen(5000, () => {
  console.log('Backend rodando na porta 5000');
});