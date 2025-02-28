const express = require('express');
const multer = require('multer');
const { uploadCurriculo } = require('../controllers/uploadController');

const router = express.Router();

// Configuração do multer para upload de arquivos
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

// Rota de upload
router.post('/upload', upload.single('file'), uploadCurriculo);

module.exports = router;
