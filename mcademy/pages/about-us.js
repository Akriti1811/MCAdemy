import styles from '../styles/Home.module.css'
import Navbar from "../components/navbar/navbar";
import AboutUsComponent from '../components/about-us/aboutus';
import Footer from '../components/footer/footer';
import isLogin from '../store/isLogin'

export default function AboutUs(){

  const flag = isLogin();
  
    return(
        <div className={styles.container}>
        <Navbar isLogin={flag} />
        <AboutUsComponent />
        <Footer />
        </div>
    )
}