import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar/navbar'

import Footer from '../components/footer/footer'
import ContactUsComponent from '../components/contact-us/contact-us'
import isLogin from '../store/isLogin'

export default function ContactUs() {

  const flag = isLogin();
 
  return (
    <div className={styles.container}>
     <Navbar isLogin={flag} />
     <ContactUsComponent />
     <Footer />
    </div>
  )
}
