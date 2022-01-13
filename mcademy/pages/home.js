import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar/navbar'
import Home2 from '../components/home/home2'
import isLogin from '../store/isLogin'
import { useRouter} from 'next/router'
import { useEffect } from 'react'

export default function Home() {
  const flag = isLogin();

  const router = useRouter();
  useEffect(() =>{
    
    if(!flag)
    router.push("/");
  },[flag])
 

  return (
    <div className={styles.container}>
     <Navbar isLogin={flag} />
     <Home2 />

   
    </div>
  )
}


