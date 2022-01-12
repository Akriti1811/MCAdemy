import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar/navbar'
import Homes from '../components/home/home'
import Footer from '../components/footer/footer'
import Home2 from '../components/home/home2'

export default function Home() {
  return (
    <div className={styles.container}>
     <Navbar isLogin={true} />
     <Home2 />

   
    </div>
  )
}
