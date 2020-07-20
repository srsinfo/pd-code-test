import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { Settings } from 'http2';
import { User } from './User';

@Entity()
export class Profile {

  @PrimaryGeneratedColumn("uuid")
  id:string;

  @Column()
  user: User;

  @Column()
  settings: Settings;

  @Column()
  fullName: string;
}
