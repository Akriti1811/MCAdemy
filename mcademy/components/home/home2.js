import classes from "./Home2.module.css";
function Home2() {
  return (
    <div>
      <div className={classes.row}>
        <div className={classes.colthree}>
          <div className={classes.left}>
            <h3>Home</h3>
            <h3>Concept Videos</h3>
            <h3>Study Material</h3>
            <h3>Online Test Series</h3>
            <h3>Practice</h3>
            <h3>Syllabus</h3>  
            <h3>Free Live Classes</h3>
          </div>
        </div>

        <div className={classes.coleight}>
          <div className={classes.center}>
            <h2>Self Study is most powerfull tool to grow knowledge</h2>
          </div>

          
        </div>
      </div>

      <p className={classes.para}>Latest Added Test Series ...</p>
      <div className={classes.rowone}>
      

        <div className={classes.colfour}>
          <img
            className={classes.size}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtG5XLehyhh6TXPj97hnEwbDYbx4L5JeuFyw&usqp=CAU"
          />
          <h3>Test 101</h3>
        </div>

        <div className={classes.colfour}>
          <img
            className={classes.size}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtG5XLehyhh6TXPj97hnEwbDYbx4L5JeuFyw&usqp=CAU"
          />
          <h3>Test 102</h3>
        </div>

        <div className={classes.colfour}>
          <img
            className={classes.size}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtG5XLehyhh6TXPj97hnEwbDYbx4L5JeuFyw&usqp=CAU"
          />
          <h3>Test 102</h3>
        </div>

      </div>


      <p className={classes.para}>Daily Practice Problem ...</p>
      <div className={classes.rowone}>
      

        <div className={classes.colfour}>
          <img
            className={classes.size}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtG5XLehyhh6TXPj97hnEwbDYbx4L5JeuFyw&usqp=CAU"
          />
          <h3>Parabola</h3>
        </div>

        <div className={classes.colfour}>
          <img
            className={classes.size}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtG5XLehyhh6TXPj97hnEwbDYbx4L5JeuFyw&usqp=CAU"
          />
          <h3>Hyperbola</h3>
        </div>

        <div className={classes.colfour}>
          <img
            className={classes.size}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtG5XLehyhh6TXPj97hnEwbDYbx4L5JeuFyw&usqp=CAU"
          />
          <h3>Ellipse</h3>
        </div>

      </div>

      <p className={classes.para}>Subject Wise Practice Problem ...</p>
      <div className={classes.rowone}>
      

        <div className={classes.colfour}>
          <img
            className={classes.size}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtG5XLehyhh6TXPj97hnEwbDYbx4L5JeuFyw&usqp=CAU"
          />
          <h3>Maths</h3>
        </div>

        <div className={classes.colfour}>
          <img
            className={classes.size}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtG5XLehyhh6TXPj97hnEwbDYbx4L5JeuFyw&usqp=CAU"
          />
          <h3>English</h3>
        </div>

        <div className={classes.colfour}>
          <img
            className={classes.size}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtG5XLehyhh6TXPj97hnEwbDYbx4L5JeuFyw&usqp=CAU"
          />
          <h3>Reasoning</h3>
        </div>

      </div>

    </div>
  );
}
export default Home2;
