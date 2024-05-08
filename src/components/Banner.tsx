import {Box} from "@mui/material";
import React from "react";

const Banner = (pros: any) => {
    return (
        <Box sx={{
            width:300,
            mr:2
        }}>
            <a href={pros.href}>
                <img style={{borderRadius:20}} src={pros.image}/>
            </a>
        </Box>
    )
}
export default Banner