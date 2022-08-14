import React from 'react';
import FeaturedRow from './FeaturedRow';

const Featured = () => {
  return (
    <>
      <FeaturedRow title="test1" description={'test desc 1'} />
      <FeaturedRow title="test2" description={'test desc 2'} />
      <FeaturedRow title="test3" description={'test desc 3'} />
    </>
  );
};

export default Featured;
