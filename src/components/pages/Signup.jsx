import React,{ useState,useEffect } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import SnackBarAlerts from '../SnackBarAlerts'

import { useNavigate, Link as RouterLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUpUser, signupStart,signupSuccess, signupFailure  } from '../../redux/actions/AuthActions';

const Copyright =(props)=> {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
        David Llamas
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

 function Signup({currentUser,signupuser,signupstart,signupsuccess,signupfail}) {

    const [user,setUser] = useState({username:'',email: '', password:''})
    const [msj,setMsj] = useState('')
    const [open,setOpen] = useState(false)
    const [type,setType] = useState('info')
    const [error,setError] = useState(false)
    const [helpText, setHelpText] = useState({email:'',pass:'',username:''})

    const navigate = useNavigate();

    useEffect(() =>{
      currentUser && navigate('/')
    },[currentUser])


    const handleSubmit = async (e) => {
        e.preventDefault();

        if(user.password == '' && user.email == '' && user.username == ''){
          setError(true)
          setHelpText({pass:'please enter your password',email:'please enter your email',username:'please enter your username'})
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

          if(user.username == ''){
            setError(true)
            setHelpText({...helpText,username:'please enter your username'})
            return
          }
    
        signupstart()
        const response = await signupuser(user.username, user.email, user.password )

        response.success ? 
          (
              signupsuccess(response.user),
              setMsj('Account successfully created, you can sign in...'),
              setOpen(true),
              setType('success'),
              setUser({username:'', email:'', password:''})
              
           ) : 
           (
              setMsj(response.message),
              setOpen(true),
              setType('error'),
              signupfail(response.message)
           )

      
    }

    const handleChange = (e) => {

      setError(false)
      setHelpText({pass:'',email:'',username:''})

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleClose = () => {
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
        paddingTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <AccountCircleIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign up
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <TextField
          margin="normal"
          error={error && user.username == ''}
          helperText={ helpText.username }
          variant="outlined"
          required
          fullWidth
          id="username"
          label="Username"
          name="username"
          onChange={handleChange}
          autoFocus
        />
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
          create an account
        </Button>
        <Grid container>
          <Grid item>
            <Link component={RouterLink} to={"/signin"} variant="body2">
              {"Have an account? Sign In"}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
    <Copyright sx={{ mt: 8, mb: 4 }} />
    <SnackBarAlerts open={open} msj={msj} sev={type} handleClose={handleClose} />
  </Container>
  )
}

const mapStateToProps = (state)=>{
    const { user } = state.auth
    return{
        currentUser: user
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
      signupuser:(username,email,password)=> signUpUser(username,email,password),
      signupstart:()=> dispatch( signupStart() ),
      signupsuccess:()=> dispatch( signupSuccess() ),
      signupfail:(error)=> dispatch( signupFailure(error) )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Signup)
