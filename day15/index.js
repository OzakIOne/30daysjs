const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const btnClear = document.querySelector('.clearall');
const btnCheckAll = document.querySelector('.checkall');
const btnUncheckAll = document.querySelector('.uncheckall');
let items = JSON.parse(localStorage.getItem('items')) || [];

const popList = (items) => {
  itemsList.innerHTML = items
    .map((plate, i) => {
      return `<li><input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''}></input><label for="item${i}">${plate.text}</label></li>`;})
    .join('');
  // without join it prints the , of the table
};

const addItem = (e) => {
  e.preventDefault();
  const elem = e.currentTarget;
  const itemText = elem.querySelector('[name=item]').value;
  const item = {
    text: itemText,
    done: false,
  };
  elem.reset();
  items.push(item);
  popList(items);
  localStorage.setItem('items', JSON.stringify(items));
};

addItems.addEventListener('submit', (e) => {
  addItem(e);
});

const toggleDone = (e) => {
  if (!e.matches('input')) return;
  const index = e.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem('items', JSON.stringify(items));
};

const clearList = () => {
  localStorage.clear();
  popList(items = []);
};

const checkAll = () => {
  const toggledItems = items.map((item) => {
    item.done = true;
    return item;
  });
  localStorage.setItem('items', JSON.stringify(toggledItems));
  popList(toggledItems);
};

const uncheckAll = () => {
  const toggledItems = items.map((item) => {
    item.done = false;
    return item;
  });
  localStorage.setItem('items', JSON.stringify(toggledItems));
  popList(toggledItems);
};

itemsList.addEventListener('click', (e) => toggleDone(e.target));

btnClear.addEventListener('click', () => clearList());
btnCheckAll.addEventListener('click', () => checkAll());
btnUncheckAll.addEventListener('click', () => uncheckAll());

popList(items);
