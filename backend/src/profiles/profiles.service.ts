import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profile } from './profile.entity';

@Injectable()
export class ProfilesService {
  constructor(
    @InjectRepository(Profile)
    private profilesRepository: Repository<Profile>,
  ) {}

  async getProfile(userId: number): Promise<Profile | null> {
    return this.profilesRepository.findOne({ where: { userId } });
  }

  async createOrUpdateProfile(userId: number, data: Partial<Profile>): Promise<Profile | null> {
    let profile = await this.getProfile(userId);
    if (profile) {
      await this.profilesRepository.update(profile.id, data);
      return this.getProfile(userId);
    } else {
      const newProfile = this.profilesRepository.create({ ...data, userId });
      return this.profilesRepository.save(newProfile);
    }
  }
}