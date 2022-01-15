import { useSelector } from "react-redux";


function isLogin(){
  var flag = false;
  const accessToken = useSelector(state => state.authToken);

  if(accessToken)
  {
 
    flag = true;
  }

  return flag;

}




export default isLogin;