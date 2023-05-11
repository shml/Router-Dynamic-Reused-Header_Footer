import React, {useEffect, useState} from "react";
import {Grid} from "@mui/material";
import FooterLogo from "./components/FooterLogo";

interface footerProps {
    logoimg:string,
    copyright:string,
}
function Footer(widgetProps:footerProps) {

    const backgroundProps = {
        background:'rgba(94,94,94,1)',
        marginTop:"38px",
    }

    const [logoimg, setLogoimg] = useState<string>("")
    const [copyright, setCopyright] = useState<string>("")
    useEffect(()=>{
        setLogoimg(widgetProps.logoimg)
        setCopyright(widgetProps.copyright)
    },[])

    return(
        <>
            <Grid
                sx={{
                    ...backgroundProps
                }}
                container
            >
                <Grid item xs={4}>
                    <FooterLogo logoimg={logoimg} copyright={copyright} />
                </Grid>
                <Grid>

                </Grid>
                <Grid>

                </Grid>
            </Grid>

        </>
    )
}

export default Footer;