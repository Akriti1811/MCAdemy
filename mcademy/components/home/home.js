import classes from './Home.module.css'

function Homes (){

  
    return(
        
        <>
            <div className={classes.rowone}>
               <div className={classes.colnine}>
               <h1 className={classes.mca}>India's Larget MCA
               </h1>
               <h1 className={classes.mca2}>
                   TestSeries Provider
               </h1>
               </div>
               <div className={classes.colthree}>
                <img src="https://static.uacdn.net/production/_next/static/images/home/test-prep-learning.svg?q=75&w=256" />
               </div>
            </div>
            <div className={classes.row}>
                <div className={classes.colfive}>
                 <h2 className={classes.heading2}>Preparing For MCA</h2>
                 <p className={classes.goal}>Mock Test</p>
                 <button className={classes.button}>Start  Practicing</button>
                 <img className={classes.block} src="https://static.uacdn.net/production/_next/static/images/home/k12-learning.svg?q=75&w=256" />
               
                </div>
                <div className={classes.colfive}>
                <h2>Preparing For MCA</h2>
                 <p>Need Assistant</p>
                 <button className={classes.button}>Check Next Free Assistant</button>
                 <img className={classes.block} src="https://static.uacdn.net/production/_next/static/images/home/k12-learning.svg?q=75&w=256" />
                </div>
            </div>
 
            <div className={classes.row}>
                <div className={classes.colfour}>
                 <img className={classes.block2} src="https://static.uacdn.net/web-cms/dailyliveclasses_0c0023950f_c187155ee3.svg?q=75&w=384&fm=webp" />
                 <h2 className={classes.heading2}>Weekly Free Assistant</h2>
                 <p className={classes.goal}>Chat with educators, ask questions, answer live polls, and get your doubts cleared - all on the live meet</p>
                </div>
                <div className={classes.colfour}>
                <img className={classes.block2} src="https://static.uacdn.net/web-cms/dailyliveclasses_0c0023950f_c187155ee3.svg?q=75&w=384&fm=webp" />
                <h2 className={classes.heading2}>NIMCET Free Mock Test</h2>
                 <p className={classes.goal}>Start Practicing free mock test and know how to approach the questions and solution in the Exam Hall</p>
               
                </div>
                <div className={classes.colfour}>
                <img className={classes.block2} src="https://static.uacdn.net/web-cms/dailyliveclasses_0c0023950f_c187155ee3.svg?q=75&w=384&fm=webp" />
                <h2 className={classes.heading2}>NIMCET FREE Test Series</h2>
                 <p className={classes.goal}>Try our free NIMCET Test series designed by NIMCET Toppers</p>
               
                </div>
            </div>


            <div className={classes.row}>
                <div className={classes.colsix}>
                 <h1 className={classes.margin20}>Start Learning with</h1>
                 <h1 className={classes.margin20}> MCAdemy </h1>

                 <p className={classes.margin20}>Get unlimited access to NIMCET Test Series</p>
                 <p className={classes.margin20}>& doubt clearing sessions</p>

                 <button className={classes.button}>Start Learning</button>
                </div>

                <div className={classes.colsix}>
                    <div className={classes.row}>
                        <div className={classes.coleight}>
                        <p className={classes.goal}>Weekly Assistant</p>
                        <img className={classes.block3} src="https://static.uacdn.net/web-cms/highlightgoals_96d24a04e7_a8e8de225d.svg?q=75&w=384&fm=webp" />
                       
                        </div>
                        <div className={classes.coleight}>
                        <p className={classes.goal}>From NIMCET Rankers</p>
                        <img className={classes.block3} src="https://static.uacdn.net/web-cms/highlightlive_b05ed1f073_a8042bd7a8.svg?q=75&w=384&fm=webp" /> 
                        
                        </div>
                    </div>
                </div>
            </div>

           

            </>
       
    )


}

export default Homes;