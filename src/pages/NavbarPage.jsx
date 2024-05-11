
import React from 'react';
import { Space, Table, Tag, Button } from 'antd';
import { useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar';


function NavbarPage() {
  const navigate = useNavigate();
  return (
    <div>
    <Navbar />
  </div>
  );
  }
export default NavbarPage


