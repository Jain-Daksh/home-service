import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Heading from '../pages/component/Heading'
import Nav from './component/Navbar'
import Homepage from './component/Homepage'
import ContactUs from './component/ContactUS'
import FooterWebsite from './component/Footer'
import { OurTeam } from './component/OurTeam'

export default function Home() {
  return (
    <>
    <Homepage />
    <OurTeam />
    <ContactUs />
    <FooterWebsite />
    </>
  )
}
