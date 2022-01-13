import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar/navbar'
import Homes from '../components/home/home'
import Footer from '../components/footer/footer'
import isLogin from '../store/isLogin'



export default function Home() {
  
  const flag = isLogin();

 

 
  
  return (
    <div className={styles.container}>
     <Navbar isLogin={flag} />
     <Homes />
     <Footer />
    </div>
  )
}
