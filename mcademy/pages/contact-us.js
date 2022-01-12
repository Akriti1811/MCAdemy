import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar/navbar'

import Footer from '../components/footer/footer'
import ContactUsComponent from '../components/contact-us/contact-us'

export default function ContactUs() {
  return (
    <div className={styles.container}>
     <Navbar isLogin={false} />
     <ContactUsComponent />
     <Footer />
    </div>
  )
}
