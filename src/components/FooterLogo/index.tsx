import React, {useEffect, useState} from "react";
import {Avatar, Stack, Typography} from "@mui/material";

interface logoProps {
    logoimg:string,
    copyright:string,
}
function FooterLogo(widgetProps:logoProps) {

    const avatarData = {
        width:'15%',
        padding:'0px 15px',
        backgroundColor: 'rgba(0,0,0,0)',
        marginTop:'52px',
    }

    const stackData = {
        textAlign: 'left',
        alignItems:'left',
        marginLeft:'36px',
        color:"white",
    }

    const [avatarLogo, setAvatarLogo] = useState<string>("")
    const [copyRight, setCopyRight] = useState<string>("")
    useEffect(()=>{
        setAvatarLogo(widgetProps.logoimg)
        setCopyRight(widgetProps.copyright)
    },[widgetProps])

    return(
        <>
            <Stack
                sx={{
                    ...stackData
                }}
                spacing={4}
            >
                <Avatar
                    sx={{
                        ...avatarData
                    }}
                >
                    {avatarLogo}
                </Avatar>
                <Typography
                    fontSize='12px'
                >
                    {copyRight}
                </Typography>
            </Stack>

        </>
    )
}

export default FooterLogo;