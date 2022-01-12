import styles from '../styles/Home.module.css'
import Navbar from "../components/navbar/navbar";
import AboutUsComponent from '../components/about-us/aboutus';
import Footer from '../components/footer/footer';
export default function AboutUs(){

    return(
        <div className={styles.container}>
        <Navbar isLogin={false} />
        <AboutUsComponent />
        <Footer />
        </div>
    )
}