function getLocalStorageItem(item) {
  return localStorage.getItem(item);
}

function setLocalStorageItem(item, value) {
  localStorage.setItem(item, value);
}


module.exports = {
  getLocalStorageItem,
  setLocalStorageItem
}
