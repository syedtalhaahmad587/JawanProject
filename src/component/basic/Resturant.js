import React, { useState } from 'react';
import './style.css'; 
import Menu from './menuApi.js';
import MenuCart from './MenuCart.js';
// Menu Api ko hum ne use kara hai is ko hum
//  React.useState(Menu) Ase be kr sekte hain or 
//  dura jaise ap ke samne huwa wa hai ye phir react main import hojaye ga //

const UniqeList = [
    ...new Set(
    Menu.map((currElement) => {
    return  currElement.category;
} )
),
]

const Resturant = () => { 
    // const style = {color: red}
    const [menuData, setMenuData] = useState(Menu)
         const BfUpdate = (category) => {
               const updateBreakFast = Menu.filter( (currElement) => {
                  return currElement.category === category

        } );
           setMenuData(updateBreakFast); 
     }   
     
    return (
        <>
            <MenuCart menuData={menuData} />
        </>
    )
}

export default Resturant

