import { useSelector } from "react-redux";


function isLogin(){
  var flag = false;
  const accessToken = useSelector(state => state.authToken);

  if(accessToken)
  {
    console.log("ohhhoo");
    flag = true;
  }

  console.log(flag);
  return flag;

}




export default isLogin;