import logo from './logo.svg';
import './App.css';
// import ButtonUsage from './Component/Demo/Demo';
import SignUp from './Component/TopNavBar/LoginAndLogo/SignUp/SignUp';
import SignIn from './Component/TopNavBar/LoginAndLogo/Login/SignIn';
import Dashbord from './Component/Body/DashBord/Dashbord';
import Router from './Component/Router/Router';
import { BrowserRouter } from "react-router-dom";
import GoTotop from './Component/Body/GoTOTop/GoTotop';
import GoWhatsApp from './Component/Body/GoToWhatsAPP/GoWhatsApp';
function App() {
  return (
    <div className="App">
      <GoTotop/>
      <GoWhatsApp/>
       <BrowserRouter>
       <Router/>
       </BrowserRouter>
    </div>
  );
}

export default App;
