import { IResult } from '../../../types/types';
import URL from '../constants/constants';

async function getCharacters(str: string): Promise<number | IResult> {
  const api = `${URL}?page=1&name=${str}`;
  const res = await fetch(api);
  if (!res.ok) {
    return res.status;
  }
  return res.json();
}

export default getCharacters;
