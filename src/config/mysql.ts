import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const mysqlDefaultConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'password',
  database: 'workflow',
  synchronize: true,
};
export default mysqlDefaultConfig;
