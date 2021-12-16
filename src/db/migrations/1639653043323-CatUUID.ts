import { MigrationInterface, QueryRunner } from 'typeorm';

export class CatUUID1639653043323 implements MigrationInterface {
  name = 'CatUUID1639653043323';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE "cat" DROP CONSTRAINT "PK_7704d5c2c0250e4256935ae31b4"
        `);
    await queryRunner.query(`
            ALTER TABLE "cat" DROP COLUMN "id"
        `);
    await queryRunner.query(`
            ALTER TABLE "cat"
            ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()
        `);
    await queryRunner.query(`
            ALTER TABLE "cat"
            ADD CONSTRAINT "PK_7704d5c2c0250e4256935ae31b4" PRIMARY KEY ("id")
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE "cat" DROP CONSTRAINT "PK_7704d5c2c0250e4256935ae31b4"
        `);
    await queryRunner.query(`
            ALTER TABLE "cat" DROP COLUMN "id"
        `);
    await queryRunner.query(`
            ALTER TABLE "cat"
            ADD "id" integer NOT NULL
        `);
    await queryRunner.query(`
            ALTER TABLE "cat"
            ADD CONSTRAINT "PK_7704d5c2c0250e4256935ae31b4" PRIMARY KEY ("id")
        `);
  }
}
