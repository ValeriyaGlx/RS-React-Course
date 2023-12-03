import { useAppSelector } from '../../../App/store/hooks';

const CountryDataList = () => {
  const countries = useAppSelector((state) => state.countriesList);
  const list = countries.map((country: string) => (
    <option aria-hidden="true" key={country} value={country} />
  ));

  return <datalist id="countryList">{list}</datalist>;
};

export default CountryDataList;
