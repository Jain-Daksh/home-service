import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Heading from './component/Heading'
import Paragraph from './component/Paragraph'

export default function Home() {
  return (
   <>
    <Heading />
    <Paragraph />
   </>
  )
}
