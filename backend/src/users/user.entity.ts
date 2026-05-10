import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: 'jobseeker' })
  role: string;

  @Column({ nullable: true })
  skills: string;

  @Column({ nullable: true })
  education: string;

  @Column({ nullable: true })
  experience: string;

  @Column({ nullable: true })
  companyName: string;

  @CreateDateColumn()
  createdAt: Date;
}