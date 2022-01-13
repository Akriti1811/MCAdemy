import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import NotificationComponent from '../components/notification/notification'
import isLogin from '../store/isLogin'

export default  function Notification() {

  const arr=[{notice:"Date Added of NIMCET 2022",link:"https://gg.com",id:1},{notice:"Date Added of NIMCET 2022",link:"https://gg.com",id:2}];

  const flag = isLogin();
//   const response = await fetch('/api/notification',{
//     method:'GET',
//     headers:{
//         'Content-Type':'application/json'
//     }
// });

// const data  = await response.json();
// console.log(data);

 
  return (
    <div className={styles.container}>
      
     <Navbar isLogin={flag} />
     <h1 className={styles.center}> <span className={styles.logo2}>Important Notification</span> </h1>
     {
       arr.map(data =>(<NotificationComponent  key = {data.id} notice={data.notice} link={data.link} />))
       }
     <Footer />
    </div>
  )
}
