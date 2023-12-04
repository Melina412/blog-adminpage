import fs from 'fs/promises';
import fssync from 'fs';
import { v4 } from 'uuid';

export function createStorage() {
  fs.access('./storage/')
    .then(() => console.log('storage ist bereits vorhanden'))
    .catch(() => {
      fs.mkdir('./storage');
      console.log('storage wurde erstellt');
    });
}

export function saveBlog(blog) {
  blog.id = v4();
  fs.writeFile('./storage/' + blog.id, JSON.stringify(blog));
}

export function getBlogs() {
  return fs.readdir('./storage').then((files) => {
    const fileArray = [];
    for (const file of files) {
      fileArray.push(JSON.parse(fssync.readFileSync('./storage/' + file)));
    }
    console.log({ fileArray });
    return fileArray;
  });
}
