import {Box, Typography} from "@mui/material";

const Carousel = () => {
    return(
        <Box sx={{
            height:400,
            backgroundColor:"primary.dark",
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
        }}>
            <Typography variant="h5"
                        fontSize={40}
                        color="white"
            >This is the very carousel</Typography>
        </Box>
    )
}
export default Carousel;
