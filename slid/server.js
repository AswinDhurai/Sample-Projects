import express from 'express';
import fs from 'fs-extra'; // fs-extra supports copying files
import cors from 'cors';
import path from 'path';
// import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const app = express();
// app.use(express.json());
// app.use(cors());

const app = express();

app.use(express.json());

app.use(cors({
  origin: 'http://localhost:3000', // Allow Nuxt frontend
  methods: ['POST', 'GET'], // Allow necessary HTTP methods
  allowedHeaders: ['Content-Type']
}));


const nuxtComponentPath = path.join('/home/fcintern011/chatgpt/nux/components/ParagraphComponent.vue');
const slidevComponentPath = path.join('/home/fcintern011/chatgpt/slid/components');

app.post('/copy-component', async (req, res) => {
  try {
    await fs.copy(nuxtComponentPath, slidevComponentPath);
    res.json({ message: 'Component copied to Slidev successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to copy component' });
  }
});

// Start serverCopy Component to Slidev
app.listen(3001, () => {
  console.log('Slidev API running on http://localhost:3001');
});
