import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const RootLayout = () =>{

    return(
      <>
  <Navbar/>
  <div className="row">


  </div>

  <main>
    <Outlet/>
  </main>
    
      </>
    )
  }
  export default RootLayout;
  