import {
    extendTheme,
    withDefaultColorScheme,
} from '@chakra-ui/react'

const theme = extendTheme(
    {
        colors: {
            brand: {
                light_bgColor: '#1CDBC7',
                light_Color: '#F7F7F7',
            },
        },
        components: {
            Alert: {
                defaultProps: {
                    colorScheme: 'blue',
                },
            },
        },
    },
    withDefaultColorScheme({ colorScheme: 'brand' }),
)

export default theme