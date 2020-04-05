import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SnackBarButton from "./SnackBarButton";
import SimpleMenu from "./SimpleMenu";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        textAlign: "left",
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <SimpleMenu classes={classes}/>
                    <Typography variant="h6" className={classes.title}>
                        Adam Clarkson
                    </Typography>
                    <SnackBarButton/>
                </Toolbar>
            </AppBar>
        </div>
    );
}
