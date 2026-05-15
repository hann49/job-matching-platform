import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { Employer } from '../employer/employer.entity';

@Entity()
export class Job {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column('simple-array')
  requiredSkills: string[];

  @Column()
  deadline: Date;

  @Column({ default: true })
  isActive: boolean;

  @ManyToOne(() => Employer, { eager: true })
  employer: Employer;

  @CreateDateColumn()
  createdAt: Date;
}