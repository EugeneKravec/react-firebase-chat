import React, {useContext} from 'react';
import {AppBar, Button, Grid, Toolbar} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import {LOGIN_ROUTE} from "../utils/consts";
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";

const Navbar = () => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)

    return (
        <AppBar color={'secondary'} position="static">
            <Toolbar variant={'dense'}>
                <Grid container justifyContent={'flex-end'}>
                    {user?
                        <Button onClick={()=> auth.signOut()} variant={'outlined'}>Log Out</Button>
                        :
                        <NavLink to={LOGIN_ROUTE}>
                            <Button variant={'outlined'}>Log In</Button>
                        </NavLink>
                    }
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;