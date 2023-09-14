import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Button } from 'theme-ui'
import { Logo, LogoSquare } from '@/components/logo'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Button variant='secondaryOutline'>Button</Button>
      <Logo/>
      <LogoSquare/>
    </>
  )
}
