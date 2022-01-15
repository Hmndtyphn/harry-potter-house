// import { createMuiTheme } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';

// create theme function for mui styling
const theme = createTheme({

    // font sizing 
    typography: {
        
        h1,h2,h3,h4,h5,h6: {
            fontFamily: "Sans Serif",
        },
    }
})

// export themes
export default theme;