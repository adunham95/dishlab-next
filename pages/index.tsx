import Head from 'next/head';
import Button from '@mui/material/Button';
import { Logo, LogoSquare } from '@/components/logo';
import DefaultLayout from '@/layout/defaultLayout';

export default function Home() {
  return (
    <>
      <Head>
        <title>DishLab</title>
      </Head>
      <DefaultLayout>
        <Button variant="contained" color="secondary">
          Button
        </Button>
        <Logo />
        <LogoSquare />
      </DefaultLayout>
    </>
  );
}
