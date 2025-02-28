const express = require('express');
const multer = require('multer');
const path = require('path');
const ResumeController = require('../infrastructure/controllers/ResumeController');

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../../uploads'));
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

router.post('/', upload.single('file'), ResumeController.upload);
router.post('/analyze', ResumeController.analyze);

module.exports = router;