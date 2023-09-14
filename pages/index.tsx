import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Button from '@mui/material/Button';
import { Logo, LogoSquare } from '@/components/logo'
import DefaultLayout from '@/layout/defaultLayout';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <DefaultLayout>
      <Button variant='contained' color='secondary'>Button</Button>
      <Logo/>
      <LogoSquare/>
    </DefaultLayout>
  )
}
