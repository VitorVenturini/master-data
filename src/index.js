import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import routes from './masterData.routes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use('/api/master-data', routes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
