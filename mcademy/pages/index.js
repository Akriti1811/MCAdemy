import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar/navbar'
import Homes from '../components/home'

export default function Home() {
  return (
    <div className={styles.container}>
     <Navbar />
     <Homes />
    </div>
  )
}
