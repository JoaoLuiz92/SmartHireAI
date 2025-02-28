import { Resume } from '../models/Resume';
import { uploadResume, analyzeResume } from '../../infrastructure/api/resumeApi';

export class ResumeService {
  async upload(file: File): Promise<Resume> {
    const data = await uploadResume(file);
    return data;
  }

  async analyze(text: string): Promise<string> {
    const data = await analyzeResume(text);
    return data.analysis;
  }
}