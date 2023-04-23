// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react'

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
    brand: {
        900: '#1a365d',
        800: '#153e75',
        700: '#2a69ac',
    },
}

const style = {
    styles: {
        global: {
            html: {
                overflowX: "hidden !important",
            },
            body: {
                overflowX: "hidden !important",
                fontFamily: "'Inter', sans-serif",
            },
            a: {
                outline: "none !important",
                "-webkit-tap-highlight-color": "transparent !important",
                _focus: {
                    boxShadow: "none !important",
                },
                _hover: {
                    textDecoration: "none !important",
                },
            },
        },
    },
}

const theme = extendTheme({
    colors,
    style,
})

export default theme;