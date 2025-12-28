import { MigrationInterface, QueryRunner } from "typeorm";

export class ContentOptional1766943221034 implements MigrationInterface {
    name = 'ContentOptional1766943221034'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "content" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "content" SET NOT NULL`);
    }

}
