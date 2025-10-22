'use client';
import React, { useEffect, useState } from 'react';
import Nav from "@/Components/Nav";
import Footer from "@/Components/Footer";
import Song from "@/Components/Song";
import AddNewsModal from './ModalNewAdd';
import AddMenuModalAll from './MenuAdd';
const LayoutComponent = ({ children }) => {
    const [opneModalAll , setOpenModalAll] = useState(false)
  return (
    <div>
        <div className={`flex flex-col items-center w-full`}>
        
            <Nav opneModalAll={opneModalAll} setOpenModalAll={setOpenModalAll}/>
            {children}
            <Song />
            <AddNewsModal />
            <AddMenuModalAll open={opneModalAll} onClose={() => setOpenModalAll(false)}/>
            <Footer/>
                
        </div>
    </div>
  );
};

export default LayoutComponent;
