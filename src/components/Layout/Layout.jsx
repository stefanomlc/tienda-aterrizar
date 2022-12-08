import './Layout.css';
 
/* bootstrap CSS */
import 'bootstrap/dist/css/bootstrap.min.css';
/* Navbar */
import Navbar from "../Navbar/Navbar";
import {PAGES} from "../../utils/main-pages";

import Footer from "../Footer/Footer"

/* import ItemListContainer from "../ItemListContainer/ItemListContainer"; */


function Layout(props) {
  const {children} = props;

  return (
    <div>
      <Navbar pages={PAGES} />
      { children }
      
      <Footer />
    </div>

        

  );
}

export default Layout;
