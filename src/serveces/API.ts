async function getCharacters(api: string) {
  const res = await fetch(api);
  if (!res.ok) {
    return res.status;
  }
  return res.json();
}

export default getCharacters;
