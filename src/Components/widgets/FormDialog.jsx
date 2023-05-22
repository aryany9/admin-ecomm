import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from '@mui/material';

export default function FormDialog(props) {
    const { open, handleClose } = props;

    return (
        <div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{props.title}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address here. We
                        will send updates occasionally.
                    </DialogContentText>
                    <Box component="form" noValidate sx={{ mt: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        // sx={{ width: 300 }}
                        />
                        <Box component="div" noValidate sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, width: '100%' }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="fName"
                                label="First Name"
                                name="name"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="lName"
                                label="Last Name"
                                name="name"
                                autoFocus
                            />
                        </Box>

                        <Box component="div" noValidate sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, width: '100%' }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="age"
                                label="age"
                                name="age"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="mobile"
                                label="Phone Number"
                                name="mobile"
                                autoFocus
                            />
                        </Box>

                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Subscribe</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
