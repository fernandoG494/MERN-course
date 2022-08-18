import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    Grid,
    TextField,
    Typography,
    Button,
    Link,
    Alert
} from '@mui/material';
import { Google } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import AuthLayout from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import {
    startGoogleLogin,
    startLoginWithEmailPassword
} from '../../store/auth/thunks';

export default function LoginPage() {
    const dispatch = useDispatch();
    const { status, errorMessage } = useSelector(state => state.auth);

    const { email, password, onInputChange } = useForm({
        email: 'fernando@garcia.com',
        password: '123456'
    });

    const isAuthenticating = useMemo(() => status === 'checking', [status]);

    const onSubmit = (event) => {
        event.preventDefault();
        dispatch(startLoginWithEmailPassword({ email, password }));
    };

    const onGoogleSignIn = () => {
        console.log('Google Sign In');
        dispatch(startGoogleLogin());
    };

    return (
        <AuthLayout title='Login'>
            <form onSubmit={onSubmit}>
                <Grid container>
                    <Grid item xs={ 12 } sx={{ mt: 2 }}>
                        <TextField
                            label='Correo'
                            type='email'
                            placeholder='correo@google.com'
                            fullWidth
                            name='email'
                            value={email}
                            onChange={ onInputChange }
                        >
                        </TextField>
                    </Grid>

                    <Grid item xs={ 12 } sx={{ mt: 2 }}>
                        <TextField
                            label='Contraseña'
                            type='password'
                            placeholder='Contraseña'
                            fullWidth
                            name='password'
                            value={ password }
                            onChange={ onInputChange }
                        >
                        </TextField>
                    </Grid>


                    <Grid container>
                        <Grid
                            item
                            xs={ 12 }
                            sm={ 12 }
                            sx={{ mt: 2 }}
                            display={ !!errorMessage ? '' : 'none' }
                        >
                            <Alert severity='error'>
                                { errorMessage }
                            </Alert>
                        </Grid>
                    </Grid>

                    <Grid
                        container
                        spacing={ 2 }
                        sx={{ mb: 2, mt: 1 }}
                    >
                        <Grid item xs={ 12 } sm={ 6 }>
                            <Button
                                variant='contained'
                                fullWidth
                                type='submit'
                                disabled={ !!isAuthenticating }
                            >
                                Login
                            </Button>
                        </Grid>

                        <Grid item xs={ 12 } sm={ 6 }>
                            <Button
                                variant='contained'
                                fullWidth
                                onClick={onGoogleSignIn}
                                disabled={ !!isAuthenticating }
                            >
                                <Google />
                                <Typography sx={{ml: 1}}>
                                    Google
                                </Typography>
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid
                        container
                        direction='row'
                        justifyContent='end'
                    >
                        <Link
                            color='inherit'
                            to='/auth/register'
                            component={
                                RouterLink
                            }
                        >
                            Crear una cuenta
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    );
};