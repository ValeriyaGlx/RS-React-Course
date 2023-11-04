import URL from '../constants/constants';

const getSingleCharacter = async (slug: string) => {
  const api = URL + slug;
  const res = await fetch(api);
  if (!res.ok) {
    return res.status;
  }
  return res.json();
};

export default getSingleCharacter;
