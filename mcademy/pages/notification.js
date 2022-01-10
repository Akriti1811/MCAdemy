import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import NotificationComponent from '../components/notification/notification'

export default function Notification() {

  const arr=[{notice:"Date Added of NIMCET 2022",link:"https://gg.com",id:1},{notice:"Date Added of NIMCET 2022",link:"https://gg.com",id:2}];

  return (
    <div className={styles.container}>
      
     <Navbar />
     <h1 className={styles.center}> <span className={styles.logo2}>Important Notification</span> </h1>
     {
       arr.map(data =>(<NotificationComponent  key = {data.id} notice={data.notice} link={data.link} />))
       }
     <Footer />
    </div>
  )
}
