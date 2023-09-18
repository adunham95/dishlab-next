import NavBar from '@/components/NavBar';
import React from 'react';

interface IDefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout = (props: IDefaultLayoutProps) => {
  const { children } = props;
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};

export default DefaultLayout;
