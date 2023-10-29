const setDataLocalStorage = (name: string, data: string) => {
  localStorage.setItem(name, data.trim());

  window.addEventListener('beforeunload', () =>
    setDataLocalStorage(name, data)
  );
};

export const getDataLocalStorage = (name: string) => {
  return localStorage.getItem(name) || '';
};

export default setDataLocalStorage;
