import { getDB, saveDB, insertDB } from "./db";

export const newNotes = async (note, tags) => {
  const newNote = {
    tags,
    content: note,
    id: Date.now(),
  };
  await insertDB(newNote);
  return newNote;
};
