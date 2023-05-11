import React, {useEffect, useState} from "react";
import {Typography} from "@mui/material";

interface logoData {
    logoHeader:string,
}

function LogoHeader(widgetProps:logoData){

    const [logo, setLogo] = useState<string>("")
    useEffect(()=>{
        setLogo(widgetProps.logoHeader)
    },[widgetProps])

    const typodata = {
        width:'10%',
        padding:"0px 10px 50px 10px",
        backgroundColor:"rgba(0,0,0,1)",
        marginLeft:"47px",
        marginTop:"22px",
        color:"white",
    }

    return(
        <>
            <Typography
                sx={{
                    ...typodata
                }}
            >
                {logo}
            </Typography>
        </>
    )
}

export default LogoHeader;