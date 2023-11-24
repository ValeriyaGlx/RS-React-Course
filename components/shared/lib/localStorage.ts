export const setDataLocalStorage = (name: string, data: string) => {
  localStorage.setItem(name, data.trim());
};

export const getDataLocalStorage = (name: string) => {
  return typeof window !== 'undefined' ? localStorage.getItem(name) ?? '' : '';
};
