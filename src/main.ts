import { NestApplication } from '@/nest-application';

const app = NestApplication.create();

app
  .start()
  .then(() => {
    console.info('Server started successfully!');
  })
  .catch((error) => {
    console.error('Failed to start server', error);
  });
