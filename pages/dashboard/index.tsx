import DefaultLayout from '@/layout/defaultLayout';
import Head from 'next/head';
import React from 'react';

const Index = () => {
  return (
    <>
      <Head>
        <title>Login | DishLab </title>
      </Head>
      <DefaultLayout>
        <h1>Hello World</h1>
      </DefaultLayout>
    </>
  );
};

export default Index;
