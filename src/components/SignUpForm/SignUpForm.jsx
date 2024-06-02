import { Component } from 'react';
import { signUp } from '../../utilities/users-service';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';


export default class SignUpForm extends Component {
    state = {
        name: '',
        lastName: '',
        email: '',
        password: '',
        confirm: '',
        error: ''
    };

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value,
            error: ''
        });
    };

    handleSubmit = async (evt) => {
        evt.preventDefault()
        try {
            const formData = { ...this.state };
            delete formData.error;
            delete formData.confirm;
            const user = await signUp(formData);
            this.props.setUser(user)
            console.log(user)
            // The promise returned by the signUp service method 
            // will resolve to the user object included in the
            // payload of the JSON Web Token (JWT)
        } catch {
            // An error occurred 
            this.setState({ error: 'Sign Up Failed - Try Again' });
        }
    };


    handleSetUserLoginClick = (evt) => {
        evt.preventDefault()
        this.props.setUseHasAccount(true)
    }
    // alert(JSON.stringify(this.state));


    // function Copyright(props) {
    //   return (
    //     <Typography variant="body2" color="text.secondary" align="center" {...props}>
    //       {'Copyright © '}
    //       <Link color="inherit" href="https://mui.com/">
    //         Your Website
    //       </Link>{' '}
    //       {new Date().getFullYear()}
    //       {'.'}
    //     </Typography>
    //   );
    // }

    // TODO remove, this demo shouldn't need to reset the theme.

    // const defaultTheme = createTheme();

    //    function SignUp() {
    //       const handleSubmit = (event) => {
    //         event.preventDefault();
    //         const data = new FormData(event.currentTarget);
    //         console.log({
    //           email: data.get('email'),
    //           password: data.get('password'),
    //         });
    //       };

    render() {
        const disable = this.state.password !== this.state.confirm;
        return (
            // <ThemeProvider theme = { defaultTheme } >
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={this.handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    //   autoComplete="given-name"
                                    // name="name"
                                    name="name" value={this.state.name} onChange={this.handleChange}
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName" value={this.state.lastName} onChange={this.handleChange}
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    type="email" name="email" value={this.state.email} onChange={this.handleChange}
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    //   name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    value={this.state.confirm}
                                    onChange={this.handleChange}
                                    name="confirm"
                                    label="Password"
                                    type="password"
                                    id="confirmpassword"
                                    autoComplete="new-password"
                                />
                            </Grid>
                            <Grid item xs={12}>

                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            disabled={disable}
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <button
                                    style={{
                                        border: 'none',
                                        background: 'none',
                                        padding: 0,
                                        font: 'inherit',
                                        color: 'inherit',
                                        textDecoration: 'underline',
                                        cursor: 'pointer',
                                        outline: 'none', // Remove outline on focus if you want
                                    }}
                                    onClick={this.handleSetUserLoginClick}
                                >

                                    Already have an account? Sign in
                                </button>

                                {/* </Link> */}
                            </Grid>


                        </Grid>
                    </Box>
                    <div>
                        <p className="error-message">&nbsp;{this.state.error}</p>
                    </div>
                </Box>
                {/* <Copyright sx={{ mt: 5 }} /> */}
            </Container>
            // </ThemeProvider>
        )
    }
}