/* global store, cuid, Item */
'use strict';

const store = (function () {
  function findById(id) {
    return store.items.find(item => item.id === id); 
  }
  
  function addItem(name) {
    try {
      Item.validateName(name);
      store.items.push(Item.create(name));
    } catch(error) {
      console.log(error.message);
    }

  }
  function findAndToggleChecked(id) {
    
    !(this.findById(id).checked);

  }
  function findAndUpdateName(id, newname) {
    try {
      Item.validateName(newname);
      this.findById(id).name = newname;

    } catch(error) {
      console.log(`Cannot update name: ${error.message}`);
    }

  }
  function findAndDelete(id) {

  }

  
  return {
    items: [
      { id: cuid(), name: 'apples', checked: false },
      { id: cuid(), name: 'oranges', checked: false },
      { id: cuid(), name: 'milk', checked: true },
      { id: cuid(), name: 'bread', checked: false }
    ],
    hideCheckedItems: false,
    searchTerm: '',
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete,
  };
})();

