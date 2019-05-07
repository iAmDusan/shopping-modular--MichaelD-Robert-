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
    
    this.findById(id).checked = !(this.findById(id).checked);

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

    this.items = this.items.filter( function(item) {

      // search the individual element for the truth condition for 
      // when the ID parameter passed in is equal to id found on this element

      // IF id doesnt match then discard
      // return false

      // if it does return true
      return (item.id !== id);
    }); 
    
  }

  function toggleCheckedFilter() {
    this.hideCheckedItems = !(this.hideCheckedItems);
  }
    
  function setSearchTerm(name) {
    this.searchTerm = name;
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
    toggleCheckedFilter,
    setSearchTerm,
  };
})();

