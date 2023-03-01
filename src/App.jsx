import { useState } from 'react'
import {
Button,
Paper,
Switch,
ThemeProvider,
Typography,} from "@material-ui/core"
import { createTheme } from '@material-ui/core/styles'
import CssBaseline from '@mui/material/CssBaseline';
function App() {
  const [isDark, setIsDark] = useState(false)
  const theme = createTheme({
    palette:{
      type: isDark ? "dark" : "light",
      primary:{
        main: "#141b2d",
        dark:"#4cceac"
      },
      secondary:{
        main:"#70d8bd",
        dark:"#94e2cd"
      },
      background: {
        default:"#141b2d",
      },
    }
  })
  return (
  <ThemeProvider theme={theme}>
   <Paper style= {{height: '100vh', display: 'flex',
                    flexDirection:'column', justifyContent:'center'
    }}>
    <Switch checked={isDark} onChange={e=>setIsDark(!isDark)} />
    <Typography variant='h2'>
      Aqui un poco de texto </Typography>
      <div>
        <Typography>
          Aqui unos botones que hacen algo 
        </Typography>
        <Button variant='contained' color='primary'  >Button 1</Button>
        <Button variant='contained' color='secondary'>Button 2</Button>
      </div>
    </Paper>
  </ThemeProvider>
  )
}

export default App
