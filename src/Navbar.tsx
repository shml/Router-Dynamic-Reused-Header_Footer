import React, {useEffect, useState} from 'react';
import {
    Grid,
} from '@mui/material';
import backgroundimage from "./assets/images/headerBackgroundShop.png";
import LogoHeader from "./components/LogoHeader";
import {MenuItemData} from "./types";

interface headerProps {
    logoHeader: string,
    labelShoppingCart: string,
    menuItems: MenuItemData[],
}

function Navbar(widgetProps:headerProps){

    const backgroundProps = {
        marginBottom:"38px",
        backgroundImage:`url(${backgroundimage})`,
    }

    const [logo, setLogo] = useState<string>("")
    useEffect(()=>{
        setLogo(widgetProps.logoHeader)
    },[])

    return(
        <>
            <Grid
                sx={{
                    ...backgroundProps
                }}
                container
            >
                <Grid xs={12} sx={{minHeight:"28px"}} ></Grid>

                <Grid item xs={4}>
                    <LogoHeader logoHeader={logo} />
                </Grid>

                <Grid item xs={6} >

                </Grid>

                <Grid item xs={2} >

                </Grid>

            </Grid>
        </>
    )
}

export default Navbar;