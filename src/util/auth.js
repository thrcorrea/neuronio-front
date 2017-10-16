const helper = require('./helper');

exports.isAuthenticated = function _isAuthenticated() {
  return helper.getLocalStorageItem('sessionAccreditation');
}

exports.authenticate = function _authenticate(token) {
  localStorage.setItem('sessionAccreditation', token);
  window.location.href = '/';
}

exports.deAuthenticate = function _deAuthenticate() {
  localStorage.removeItem('sessionAccreditation');
  window.location.href = '/';
}
