import { IResult } from '../types/types';

async function getCharacters(api: string): Promise<number | IResult> {
  const res = await fetch(api);
  if (!res.ok) {
    return res.status;
  }
  return res.json();
}

export default getCharacters;
