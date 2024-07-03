import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseSync('myDatabase.db');

// Function to create tables if they do not exist
export const createTables = () => {
  return new Promise((resolve, reject) => {
    db.transaction(
      tx => {
        tx.executeSql(
          `CREATE TABLE IF NOT EXISTS words (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            word TEXT,
            translation TEXT,
            definition TEXT,
            phonetic TEXT,
            example TEXT,
            translation_example TEXT
          );`,
          [],
          () => resolve(),
          (_, error) => reject(error)
        );
      },
      error => console.error('Transaction error:', error)
    );
  });
};

// Function to insert a new word into the database
export const insertWord = (word, translation, definition, phonetic, example, translation_example) => {
  return new Promise((resolve, reject) => {
    db.transaction(
      tx => {
        tx.executeSql(
          'INSERT INTO words (word, translation, definition, phonetic, example, translation_example) VALUES (?, ?, ?, ?, ?, ?)',
          [word, translation, definition, phonetic, example, translation_example],
          () => resolve(),
          (_, error) => reject(error)
        );
      },
      error => console.error('Transaction error:', error)
    );
  });
};

// Function to retrieve all words from the database
export const getWords = () => {
  return new Promise((resolve, reject) => {
    db.transaction(
      tx => {
        tx.executeSql(
          'SELECT * FROM words',
          [],
          (_, { rows: { _array } }) => resolve(_array),
          (_, error) => reject(error)
        );
      },
      error => console.error('Transaction error:', error)
    );
  });
};

export default db;
