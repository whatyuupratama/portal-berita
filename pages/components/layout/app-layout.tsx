import React from 'react';
import Navbar from '../views/navbar';

type Props = {
  children: React.ReactNode;
};

const Apps = (props: Props) => {
  const { children } = props;
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Apps;
