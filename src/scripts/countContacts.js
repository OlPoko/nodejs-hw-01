import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const countContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(data);
    return contacts.length;
  } catch (err) {
    console.error('Помилка при зчитуванні контактів:', err.message);
    throw err;
  }
};
console.log(await countContacts());
