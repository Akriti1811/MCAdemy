import styles from '../../styles/Home.module.css'
import Navbar from '../../components/navbar/navbar'
import InsertQuestion from '../../components/insert-question'
import isLogin from '../../store/isLogin'

export default function Home() {
 const flag = isLogin();
 

  return (
    <div className={styles.container}>
     <Navbar isLogin={flag} />
     <InsertQuestion />
    
    </div>
  )
}


