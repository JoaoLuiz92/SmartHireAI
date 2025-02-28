const fs = require('fs');
const path = require('path');
const Resume = require('../../domain/models/Resume');

class ResumeRepository {
  constructor() {
    this.uploadDir = path.join(__dirname, '../../../uploads');
    if (!fs.existsSync(this.uploadDir)) {
      fs.mkdirSync(this.uploadDir, { recursive: true });
    }
  }

  saveResume(file) {
    const filePath = path.join(this.uploadDir, `${Date.now()}-${file.originalname}`);
    fs.writeFileSync(filePath, file.buffer);
    return new Resume(filePath, file.originalname, file.mimetype);
  }

  getResume(filePath) {
    if (fs.existsSync(filePath)) {
      const fileBuffer = fs.readFileSync(filePath);
      return new Resume(filePath, path.basename(filePath), fileBuffer);
    }
    throw new Error('Resume not found');
  }
}

module.exports = ResumeRepository;