import React,{ useState,useEffect } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LoginIcon from '@mui/icons-material/Login';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import SnackBarAlerts from '../SnackBarAlerts';

// redux
import { connect } from 'react-redux';
import { loginUser, loginStart, loginSuccess, loginFailure } from '../../redux/actions/AuthActions'
import { useNavigate,Link as RouterLink } from 'react-router-dom';

const Copyright =(props)=> {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit"  href="https://mui.com/">
          David Llamas
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

 function Login({userlogin,currentUser,loginstart,loginsuccess,loginfail}) {

    const [user,setUser] = useState({email: '', password:''})
    const [msj,setMsj] = useState('')
    const [open,setOpen] = useState(false)
    const [type,setType] = useState('info')
    const [error,setError] = useState(false)
    const [helpText, setHelpText] = useState({email:'',pass:''})

    const navigate = useNavigate();

    useEffect(() =>{
      currentUser && navigate('/')
    },[currentUser])

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(user.password == '' && user.email == ''){
          setError(true)
          setHelpText({pass:'please enter your password',email:'please enter your email'})
          return
        }
          
          if(user.password == ''){
            setError(true)
            setHelpText({...helpText,pass:'please enter your password'})
            return
          }

          if(user.email == ''){
            setError(true)
            setHelpText({...helpText,email:'please enter your email'})
            return
          }
    
        loginstart()
        const response = await userlogin( user.email, user.password )

        response.success ? 
          (
              loginsuccess( response.user ),
              localStorage.setItem('token', response.token)
           ) : 
           (
              setMsj(response.message),
              setOpen(true),
              setType('error'),
              loginfail(response.message)
           )

      
    }

    const handleChange = (e) => {

      setError(false)
      setHelpText({pass:'',email:''})

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleClose = (event, reason) => {
      setOpen(false);
    };
  return (
    <Container component="main" maxWidth="xs"
    sx={{
      height:'100vh',
      display: "flex",
      flexDirection:'column',
      justifyContent: 'center'
      }}>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LoginIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            error={error && user.email == ''}
            helperText={ helpText.email }
            variant="outlined"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            onChange={handleChange}
            autoFocus
          />
          <TextField
            error={error && user.password == ''}
            helperText={ helpText.pass}
            margin="normal"
            variant="outlined"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link component={RouterLink} to={"/signup"} variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
      <SnackBarAlerts open={open} msj={msj} sev={type} handleClose={handleClose} />
    </Container>
  );
}

const mapDispatchToProps = (dispatch)=>{
  return {
    userlogin : (email, password)=> loginUser(email, password),
    loginstart: ()=> dispatch( loginStart() ),
    loginsuccess: (user)=> dispatch( loginSuccess(user) ),
    loginfail: (error)=> dispatch( loginFailure(error) )
  }
}

const mapStateToProps = (state)=>{
  const { user } = state.auth
  return {
    currentUser : user
  }
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)