import { IResult } from '../../../types/types';
import URL, { DEFAULT_CARDS, DEFAULT_PAGE } from '../constants/constants';

async function getCharacters(
  str: string,
  page: number | string = DEFAULT_PAGE,
  size = DEFAULT_CARDS
): Promise<number | IResult> {
  const api = `${URL}?filter[name_cont]=${str}&page[number]=${page}&page[size]=${size}`;
  const res = await fetch(api);
  if (!res.ok) {
    return res.status;
  }
  return res.json();
}

export default getCharacters;
