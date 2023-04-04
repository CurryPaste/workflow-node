import { Role } from 'src/roles/entities/role.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 50 })
  name: string;

  @ManyToMany(() => Role, (role) => role.users)
  roles: Role[];

  @Column({
    comment: '是否已经被删除',
    default: true,
  })
  isDelete: boolean;
}
