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

  async getSkills(userId: number): Promise<{ skills: string[] }> {
    const profile = await this.getProfile(userId);
    if (!profile || !profile.skills) return { skills: [] };
    return { skills: profile.skills.split(',').filter(s => s.trim() !== '') };
  }

  async addSkill(userId: number, skill: string): Promise<{ skills: string[] }> {
    const profile = await this.getProfile(userId);
    let currentSkills: string[] = [];
    if (profile && profile.skills) {
      currentSkills = profile.skills.split(',').filter(s => s.trim() !== '');
    }
    if (!currentSkills.includes(skill)) {
      currentSkills.push(skill);
    }
    await this.createOrUpdateProfile(userId, { skills: currentSkills.join(',') });
    return { skills: currentSkills };
  }

  async removeSkill(userId: number, skill: string): Promise<{ skills: string[] }> {
    const profile = await this.getProfile(userId);
    let currentSkills: string[] = [];
    if (profile && profile.skills) {
      currentSkills = profile.skills.split(',').filter(s => s.trim() !== '' && s !== skill);
    }
    await this.createOrUpdateProfile(userId, { skills: currentSkills.join(',') });
    return { skills: currentSkills };
  }

  async findAll(): Promise<Profile[]> {
    return this.profilesRepository.find();
  }
}