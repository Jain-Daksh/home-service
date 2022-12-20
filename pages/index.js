import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Heading from '../pages/component/Heading'
import Nav from './component/Navbar'
import Homepage from './component/Homepage'
import ContactUs from './component/ContactUS'
import FooterWebsite from './component/Footer'
import Work from './component/Work'
import OurServices from './component/OurServices'
import AboutUs from './component/AboutUs'
// import Testimonail from './component/Testimonail'
import Slider from './component/Testimonail'
import OurTeam from './component/OurTeam'
import Images from './component/Images'
import Gallery from './component/Gallery'
import seoDetails from './SeoDetails.json'
export default function Home() {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(seoDetails) }}
        />

      </Head>
      <Homepage />
      {/* <Images /> */}
      <OurServices />
      <AboutUs />

      <Slider />
      <OurTeam />
      <ContactUs />

      <FooterWebsite />
      {/* 
      <Work />
      <Testimonail />
      <OurTeam />
      <Gallery />
 */}
    </>
  )
}
