import express, { Application } from 'express';
import AppConfig from './config/app';
import Routes from './routes';

const app: Application = express();
const port = AppConfig.port;

app.use(Routes);

try {
  app.listen(port, (): void => {
    console.log(`Connected successfully on port ${port}`);
  });
} catch (error) {
  console.error(`Error occured: ${(error as Error).message}`);
}
