import express from 'express';
import cors from 'cors';
import multer from 'multer';
import { saveBlog, createStorage, getBlogs } from './utils/files.js';

const PORT = 9999;
const app = express();
const upload = multer({ dest: './uploads/' });
createStorage();

app.use(express.json());
app.use('/uploads', express.static('uploads'));
app.use(
  cors({
    origin: 'http://localhost:5174',
  })
);

app.post('/api/blogs', upload.single('img'), (req, res) => {
  const blog = req.body;
  console.log('datei:', req.file);
  blog.img = req.file.path;
  console.log('so sieht der blog aus:', blog);
  saveBlog(blog);
  res.end();
});

app.get('/api/blogs', (_req, res) => {
  console.log('test');
  getBlogs()
    .then((data) => res.json(data))
    .catch((error) => res.status(500).end('data fetching error', error));
});

app.listen(PORT, () => console.log('express läuft auf port', PORT));
