import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Spinner from '../../shared/UI/Spinner/Spinner';
import ContentContainer from '../ContentContainer/ContentContainer';
import { useGetCharactersQuery } from '../../shared/api/getCharactersApiSlice';
import { useAppSelector } from '../../App/store/hooks';
import { setValue } from '../../features/SearchSection/searchSectionSlice';

import styles from './MainSection.module.css';

const MainSection = () => {
  const dispatch = useDispatch();
  const { inputValue, size, currentPage } = useAppSelector(
    (state) => state.searchReducer
  );
  const { data, isFetching } = useGetCharactersQuery(
    {
      inputValue,
      page: currentPage,
      size,
    },
    { refetchOnMountOrArgChange: true }
  );

  useEffect(() => {
    dispatch(
      setValue({ key: 'totalPages', value: data?.meta.pagination.last })
    );
    dispatch(setValue({ key: 'isLoadingCharacters', value: isFetching }));
  }, [data]);

  const renderCharacterCards = () => {
    return isFetching ? <Spinner /> : <ContentContainer data={data} />;
  };

  return (
    <section className={styles.container}>
      <h1>
        Search Results <span className={styles.request}>{inputValue}</span>:
      </h1>
      {renderCharacterCards()}
    </section>
  );
};

export default MainSection;
