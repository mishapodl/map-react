export const checkCredentials = data => {
  if (data.name === 'admin' || data.password === '123456') {
    return true;
  }
  return false;
};
