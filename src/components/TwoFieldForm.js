import React from 'react';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Box from "@material-ui/core/Box";

export default class TwoFieldForm extends React.Component {
    state = {
        formData: {
            name: '',
            number: '',
        },
        submitted: false,
    };

    componentDidMount() {
        ValidatorForm.addValidationRule('isNameMoreThanOne', (value) => {
            return value.length > 1;
        });
    }

    handleChange = (event) => {
        const { formData } = this.state;
        formData[event.target.name] = event.target.value;
        this.setState({ formData });
    };

    handleSubmit = () => {
        this.setState({ submitted: true }, () => {
            setTimeout(() => this.setState({ submitted: false }), 5000);
        });
    };

    render() {
        const { formData, submitted } = this.state;
        return (
            <ValidatorForm
                ref="form"
                onSubmit={this.handleSubmit}
            >
                <h2>Simple form</h2>
                <TextValidator
                    autoFocus
                    label="Name"
                    onChange={this.handleChange}
                    name="name"
                    value={formData.name}
                    validators={['required', 'isNameMoreThanOne']}
                    errorMessages={['this field is required', 'Name must be longer than 1 character.']}
                    type="text"
                    fullWidth
                />
                <br />
                <TextValidator
                    label="Number"
                    onChange={this.handleChange}
                    name="number"
                    value={formData.number}
                    validators={['minNumber:10','required']}
                    errorMessages={['Number must be 10 or greater.','this field is required']}
                    type="number"
                    fullWidth
                />
                <br />
                <Box component="span" m={1}>

                </Box>
                <br />
                <Button
                    color="primary"
                    variant="contained"
                    type="submit"
                    disabled={submitted}
                >
                    {
                        (submitted && 'Your form is submitted!')
                        || (!submitted && 'Submit')
                    }
                </Button>
            </ValidatorForm>
        );
    }
}