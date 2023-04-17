import express, { Application } from 'express';
import AppConfig from './config/app';
import Routes from './routes';
import cors from 'cors';

export const app: Application = express();
const port = AppConfig.port;

app.use(Routes);
app.use(cors());

try {
  app.listen(port, (): void => {
    console.log(`Connected successfully on port ${port}`);
  });
} catch (error) {
  console.error(`Error occured: ${(error as Error).message}`);
}
