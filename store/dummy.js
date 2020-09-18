const db = {
  user: [
    {
      id: 1,
      name: 'Ernesto  ',
    },
  ],
};

function list(table) {
  return db[table];
}

function get(table, id) {
  const collection = list(table);
  return collection.filter((item) => item.id === id)[0] || null;
}

function upsert(table, data) {
  db[table].push(data);
}

function remove(table, id) {
  return true;
}

module.exports = {
  list,
  get,
  upsert,
  remove,
};
