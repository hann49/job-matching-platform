import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Job } from './job.entity';

@Injectable()
export class JobsService {
  constructor(@InjectRepository(Job) private jobRepo: Repository<Job>) {}

  create(data: Partial<Job>) {
    const job = this.jobRepo.create(data);
    return this.jobRepo.save(job);
  }

  findAll() {
    return this.jobRepo.find();
  }

  findOne(id: number) {
    return this.jobRepo.findOneBy({ id });
  }

  update(id: number, data: Partial<Job>) {
    return this.jobRepo.update(id, data);
  }

  remove(id: number) {
    return this.jobRepo.delete(id);
  }
}