const setDataLocalStorage = (name: string, data: string) => {
  localStorage.setItem(name, data.trim());
};

export const getDataLocalStorage = (name: string) => {
  return localStorage.getItem(name) || '';
};

export default setDataLocalStorage;
