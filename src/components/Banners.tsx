import {Box} from "@mui/material";
import React from "react";
import Banner from './Banner';

let data = [
    {
        image: "https://nhasachphuongnam.com/images/promo/276/khung_long.png",
        href: "https://nhasachphuongnam.com/images/promo/276/khung_long.png"
    },
    {
        image: "https://nhasachphuongnam.com/images/promo/276/2.jpg",
        href: "https://nhasachphuongnam.com/images/promo/276/2.jpg"
    },
    {
        image:'https://nhasachphuongnam.com/images/promo/276/SX-SL.jpg',
        href: "https://nhasachphuongnam.com/images/promo/276/SX-SL.jpg"
    },
    {
        image: "https://nhasachphuongnam.com/images/promo/276/TSTNH.jpg",
        href: "https://nhasachphuongnam.com/images/promo/276/TSTNH.jpg"
    }
]

const Banners = () => {
    return (
        <Box sx={{
            paddingX: 5,
            paddingY: 2,
            display: "flex",
        }}>
            {data.map(item => {
                return <Banner image={item.image} href={item.href}/>
            })}
        </Box>
    )
}
export default Banners