import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles} from '@material-ui/core/styles';
import TwoFieldForm from "./TwoFieldForm";

const styles = theme => ({
    buttonStyle: {
        margin: '30px',
    },
});

function FormDialog(props) {
    const { classes } = props;

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen} className={classes.buttonStyle}>
                Open "2 Text Fields" dialog
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">2 Text Fields</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please Enter your name and a number.
                    </DialogContentText>
                    <TwoFieldForm/>
                    <Button
                        color="primary"
                        onClick={handleClose}
                    >
                        Done
                    </Button>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default withStyles(styles)(FormDialog);