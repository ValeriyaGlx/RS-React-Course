import * as React from 'react';
import { ImageProps } from 'next/image';

const mock = (props: ImageProps): React.ReactElement => {
  const { objectFit, objectPosition, src, ...filteredProps } = props;

  return <img src={src.toString()} {...filteredProps} />;
};

export default mock;
