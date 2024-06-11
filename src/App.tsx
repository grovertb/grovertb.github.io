import { CssBaseline, ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material'
import Root from './containers'

const theme = responsiveFontSizes(
  createTheme({
    components: {
      MuiButton: {
        defaultProps: {
          style: {
            textTransform: 'initial'
          }
        }
      }
    },
    palette: {
      mode      : 'dark',
      background: {
        'default': '#21272f'
      },
      primary: {
        main: '#03bd95'
      }
    }
  })
)

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Root />
    </ThemeProvider>
  )
}

export default App
