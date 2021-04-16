  
import React from "react";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import AccountBox from '../../components/accountBox/accountBox'
import PageContainer from '../../components/pageContainer/pageContainer'

import { useParams } from "react-router-dom";




const  CustomerAccess = (props) => {
  console.log("In customer access page")
  const { type } = useParams();

  return (
    <div>
      <Navbar />
        <AccountBox initialActive={type} />
      <Footer />
    </div>
  );
}

export default CustomerAccess;