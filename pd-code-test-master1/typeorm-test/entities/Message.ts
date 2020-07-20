import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { Chat } from './Chat';
import { Profile } from './Profile';

@Entity()
export class Message {
  
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  chat: Chat;

  @Column()
  sender: Profile;

  @Column()
  attachment: AuthenticatorAttachment=null;

  @Column()
  message: string;

}
