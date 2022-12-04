import './Layout.css';
 
/* bootstrap CSS */
import 'bootstrap/dist/css/bootstrap.min.css';
/* Navbar */
import Navbar from "../Navbar/Navbar";
import {PAGES} from "../../utils/main-pages";

import Footer from "../Footer/Footer"

import ItemListContainer from "../ItemListContainer/ItemListContainer";
import { Children } from 'react';

function Layout() {
  return (
    <div>
      <Navbar pages={PAGES} />
      
      <ItemListContainer/>
      <Footer />
    </div>

        

  );
}

export default Layout;
