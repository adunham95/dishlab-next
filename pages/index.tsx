import Head from 'next/head';
import Button from '@mui/material/Button';
import { Logo, LogoSquare } from '@/components/logo';
import DefaultLayout from '@/layout/defaultLayout';
import { useSession } from 'next-auth/react';

export default function Home() {
  const { data: session } = useSession();

  console.log('session', session);

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
