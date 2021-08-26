import {
  Column, CreateDateColumn, Entity, PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('unidades')
class Unidade {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  descricao: string;

  @CreateDateColumn()
  created_at: Date;
}

export { Unidade };
