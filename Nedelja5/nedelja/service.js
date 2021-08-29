let count = 5;

const data = [];

const add = (item) => {
  //Napomena: objekat item sadrzi samo desc i done,  {desc, done}
  //item.id = count++
  data.push({ id: count++, ...item });
  return count - 1;
};

const deleteById = (id) => {
  let index = data.findIndex((item) => item.id == id);
  data.splice(index, 1);
};

const changeById = (id, noviItem) => {
  let index = data.findIndex((item) => item.id == id);
  data.splice(index, 1, noviItem);
};

export default {
  data,
  add,
  deleteById,
  changeById,
};
