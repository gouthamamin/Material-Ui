import { Box, Button, Typography } from "@mui/material";

function HomePageContent() {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                width: "100%",
                padding: 0,
                margin: 0,
            }}
        >
            <Typography 
            variant="h4"
            sx={{
                fontWeight:"bolder"
            }}
             gutterBottom>
                Welcome to My Website
            </Typography>

            <Box
                component="img"
                sx={{
                    height: 259,
                    width: 300,
                }}
                alt="Material Ui Image"
                src="./Images/MuiLogo.png"
            />
            <Typography variant="body1" gutterBottom>
                Discover the <strong>amazing features</strong> of our website:
            </Typography>

            <Button variant="contained" color="primary">
                Get Started
            </Button>
        </Box>
    );
}
export default HomePageContent;