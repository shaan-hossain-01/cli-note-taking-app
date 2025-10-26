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

export const getAllNotes = async () => {
  const { notes } = await getDB();
  return notes;
};

export const findNotes = async (filter) => {
  const { notes } = await getDB();
  return notes.filter((note) =>
    note.content.toLowerCase().includes(filter.toLowerCase())
  );
};
