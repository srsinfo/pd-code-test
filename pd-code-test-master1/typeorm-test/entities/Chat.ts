import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { Profile } from './Profile';
import { Message } from './Message';

@Entity()
export class Chat {

  // Implement fields here

  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column("simple-array")
  Participants: Profile[];

  @Column("simple-array")
  messages: Message[];


}
