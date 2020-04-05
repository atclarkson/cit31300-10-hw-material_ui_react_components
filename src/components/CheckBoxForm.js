import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import PlayCircleOutlineOutlinedIcon from '@material-ui/icons/PlayCircleOutlineOutlined';
import PlayCircleFilledOutlinedIcon from '@material-ui/icons/PlayCircleFilledOutlined';
import Box from "@material-ui/core/Box";

const GreenCheckbox = withStyles({
    root: {
        color: green[400],
        '&$checked': {
            color: green[600],
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default function CheckboxLabels() {
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedC: false,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <Box
            display="flex"
            width="100%" height={150}
        >
            <Box m="auto">
        <FormGroup column
        >
            <FormControlLabel
                control={
                    <Checkbox
                        checked={state.checkedA}
                        onChange={handleChange}
                        name="checkedA"
                        color="primary"
                    />
                }
                label="Checky McCheckface"
            />

            <FormControlLabel
                control={<GreenCheckbox checked={state.checkedB} onChange={handleChange} name="checkedB" />}
                label="Green Bean"
            />
            <FormControlLabel
                control={<Checkbox icon={<PlayCircleOutlineOutlinedIcon />} checkedIcon={<PlayCircleFilledOutlinedIcon />} name="checkedC" />}
                label="You Playin'"
            />
        </FormGroup>
            </Box>
        </Box>
    );
}
