import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Application } from './application.entity';

@Injectable()
export class ApplicationsService {
  constructor(
    @InjectRepository(Application)
    private applicationsRepository: Repository<Application>,
  ) {}

  async apply(userId: number, jobId: number): Promise<Application> {
    const existing = await this.applicationsRepository.findOne({
      where: { userId, jobId },
    });
    if (existing) return existing;
    const application = this.applicationsRepository.create({ userId, jobId });
    return this.applicationsRepository.save(application);
  }

  async getMyApplications(userId: number): Promise<Application[]> {
    return this.applicationsRepository.find({
      where: { userId },
      relations: ['job'],
    });
  }

  async getJobApplications(jobId: number): Promise<Application[]> {
    return this.applicationsRepository.find({
      where: { jobId },
      relations: ['user'],
    });
  }

  async updateStatus(id: number, status: string): Promise<Application | null> {
    await this.applicationsRepository.update(id, { status });
    return this.applicationsRepository.findOne({ where: { id } });
  }
}
