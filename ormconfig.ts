import path from 'path';

const { SnakeNamingStrategy } = require('typeorm-naming-strategies');

const config = {
  cli: {
    entitiesDir: path.resolve('src', 'database', 'entities'),
    migrationsDir: path.resolve('src', 'database', 'migrations'),
  },
  name: 'default',
  type: 'postgres',
  namingStrategy: new SnakeNamingStrategy(),
  host: 'localhost',
  port: 5433,
  username: 'postgres',
  password: 'docker1234',
  database: 'postgres',
  synchronize: false,
  logging: true,
  entities: [
    path.resolve(__dirname, 'src', 'database', 'entities', '*.ts'),
  ],
  migrations: [
    path.resolve(__dirname, 'src', 'database', 'migrations', '*.ts'),
  ],
};

export = config;
