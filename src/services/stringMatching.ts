const stringMatching = (word: string, search: string) => {
  const regex = new RegExp(search, 'i');
  const parts = word.split(regex);

  let newPart = '';

  if (!parts[0]) {
    newPart = search.charAt(0).toUpperCase() + search.slice(1);
  } else {
    newPart = search;
  }
  return { newPart, parts };
};

export default stringMatching;
