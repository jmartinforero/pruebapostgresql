import {
    createUnifiedTheme,
    palettes
  } from '@backstage/theme';
  
  export const multicolorTheme = createUnifiedTheme({  
    palette: {  
      ...palettes.light,  // Take everything from the default light theme, then change what you want
      primary: {  
        main: '#FB4341', // Red  
      },  
      secondary: {  
        main: '#D62020', // Darker red  
      },  
      background: {  
        default: '#FFEBEE', // Light red  
      },  
      navigation: {  
        background: '#de8c94', // Lighter red background for the left-side panel  
        indicator: '#FB4341', // Red color for the selected indicator  
        selectedColor: '#FFFFFF', // White text color for the selected item  
        color: '#D2D5D7', // Light gray text color for unselected items  
        navItem: {  
          hoverBackground: '#D62020', // Darker red for the hover background  
        },  
      },    
    },
    components: {
      MuiButton: {  
        styleOverrides: { 
          root: {  
            textTransform: 'none', // Remove uppercase text  
          },  
          containedPrimary: {  
            backgroundColor: '#001952',  
            '&:hover': {  
              backgroundColor: '#D62020', // Slightly darker red on hover  
            },  
            color: '#FFFFFF',  
          },  
          containedSecondary: {  
            backgroundColor: '#FB4341',  
            '&:hover': {  
              backgroundColor: '#D62020', // Slightly darker red on hover  
            },  
            color: '#FFFFFF',  
          },  
        },  
      }, 
    },  
    fontFamily: 'Helvetica Neue',  
    defaultPageTheme: 'home',  
  });  