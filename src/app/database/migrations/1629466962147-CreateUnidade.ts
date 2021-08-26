import {
  MigrationInterface, QueryRunner, Table,
} from 'typeorm';

export class CreateUnidade1629466962147 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table(
        {
          name: 'unidades',
          columns: [
            {
              name: 'id',
              type: 'bigint',
              isPrimary: true,
            },
            {
              name: 'descricao',
              type: 'varchar',
            },
            {
              name: 'created_at',
              type: 'datetime',
              default: 'current_timestamp',
            },
          ],
        },
      ),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('unidades');
  }
}
