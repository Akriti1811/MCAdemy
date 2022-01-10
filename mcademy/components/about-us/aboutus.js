
import classes from './AboutUs.module.css';

function AboutUsComponent() {

    return(
        <>
        <div className={classes.row}>
            <div className={classes.coltwelve}>
            <h1 className={classes.center}><span className={classes.logo}>MCA</span><span className={classes.logo2}>demy</span></h1>
          
             <h2 className={classes.center2}>Promoting Self Study</h2> 
        
            </div>

        </div>

        <div className={classes.row}>

            <div className={classes.colseven}>
                <div className={classes.row}>
                    <div className={classes.colfour}>
                    <div className={classes.margin}>    
                    <span className={classes.logo}>50M+</span>
                    <h3> Active Learner</h3>
                    </div>
                    </div>

                    <div className={classes.colfour}>
                    <div className={classes.margin}>    
                    <span className={classes.logo}>50M+</span>
                    <h3> Active Learner</h3>
                    </div>
                    </div>
                    <div className={classes.colfour}>
                    <div className={classes.margin}>    
                    <span className={classes.logo}>50M+</span>
                    <h3> Active Learner</h3>
                    </div>
                    </div>
                    <div className={classes.colfour}>
                    <div className={classes.margin}>    
                    <span className={classes.logo}>50M+</span>
                    <h3> Active Learner</h3>
                    </div>
                    </div>
                </div>
             
        
            </div>
            <div className={classes.colfour}>
             <img className={classes.fit}src="https://static.uacdn.net/production/_next/static/images/about/device_mashup.png?q=75&w=640" />
        
             </div>

        </div>

        <div className={classes.row}>
            <div className={classes.colsix}>
            <img className={classes.round} src="https://pixinvent.com/demo/vuexy-bootstrap-laravel-admin-template/demo-1/images/profile/user-uploads/user-13.jpg" />
            <h3>
            <span className={classes.logo}>Akriti Singh</span>
            </h3>
            <h3>
            <span className={classes.logo}>AIR 115</span>
            </h3>
            
            </div>
            <div className={classes.colfive}>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages</p>
           
            </div>
            <div className={classes.colsix}>
            <img className={classes.round} src="https://pixinvent.com/demo/vuexy-bootstrap-laravel-admin-template/demo-1/images/profile/user-uploads/user-13.jpg" />
            <h3>
            <span className={classes.logo}>Manish Upadhyay</span>
            </h3>
            <h3>
            <span className={classes.logo}>AIR 101</span>
            </h3>
            
            </div>
            <div className={classes.colfive}>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages</p>
           
            </div>
        </div>



        </>

    )
}

export default AboutUsComponent;