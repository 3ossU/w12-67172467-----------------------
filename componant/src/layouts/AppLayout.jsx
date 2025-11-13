import { Outlet } from "react-router-dom";
import AppHeader from "../components/AppHeader";
import AppNavbar from "../components/AppNavbar";
import Footer from "../components/Footer";

const AppLayout = ({products,carts,setToken}) => {
    return ( 
    <>
    <AppHeader/>
    <AppNavbar products={products} carts={carts} setToken={setToken}/>
    <Outlet/>
    <Footer/>
    </> 
    );
}
 
export default AppLayout;