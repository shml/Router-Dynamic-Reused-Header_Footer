import React from 'react';
import {Outlet} from 'react-router-dom';
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import {FooterItemsData, MenuItemData} from "../../types";

const Layout = () => {

    const menu1 = {
        label: "Tienda",
        path: "/tienda",
    } as MenuItemData;
    const headerItemsprops = {
        logoHeader:"LAYOUT",
        menuItems:[menu1,menu1,menu1],
        labelShoppingCart:"Tus Compras",
    }

    const footerItemData = {
        logoimg: "LAYOUT",
        copyright: "Copyright © 1999-2023",
        linkpdf: "/document/aviso.pdf",
        email: "ventas@aantsolutions.com",
        phone: "Tel: 0000000000",
    } as FooterItemsData;

    return(
        <>
            <Navbar {...headerItemsprops}/>
            <Outlet />
            <Footer {...footerItemData} />
        </>
    )
}

export default Layout;