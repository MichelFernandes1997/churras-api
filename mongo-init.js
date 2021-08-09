/* eslint-disable prettier/prettier */
const db = connect('mongodb://root:root123@localhost:27017/admin');

const pokedexDB = db.getSiblingDB('churras');

pokedexDB.createUser({
  user: 'teste',
  pwd: 'teste123',
  roles: [
    {
      role: 'readWrite',
      db: 'churras',
    },
  ],
});
