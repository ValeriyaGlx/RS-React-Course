import URL from '../constants/constants';
import { IResponse, IResult } from '../../../types/types';

async function getBigAmountCharacters(str: string) {
  const pages = ['1', '2', '3', '4', '5'];
  const requests = pages.map((page) =>
    fetch(`${URL}?page=${page}&name=${str}`)
  );

  return Promise.all(requests)
    .then((responses) => {
      return Promise.all(responses.map((response) => response.json()));
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
}

export async function getObject(string: string) {
  const arrayOfObjects = await getBigAmountCharacters(string);

  return arrayOfObjects
    .flatMap((obj: IResult) => obj.results)
    .filter((el: IResponse) => el !== undefined);
}

export default getBigAmountCharacters;
