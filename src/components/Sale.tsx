import {Box, Typography} from "@mui/material";

const Sale = ()=>{
    return (
        <Box sx={{
            backgroundColor:"primary.main",
            height:300,
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
        }}>
            <Typography variant="h1"
                color="white"
                fontSize={50}
            >
                Sale product list
            </Typography>
        </Box>
    )
}
export  default Sale