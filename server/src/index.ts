import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { factsRoutes } from 'routes/routes';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(
  cors({
    origin: '*',
  })
);
app.use(bodyParser.json());
app.use('/api/facts', factsRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
