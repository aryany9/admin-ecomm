import Layout from '../widgets/Layout'
import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import { Button, IconButton } from '@mui/material';
import { Edit } from '@mui/icons-material';
import FromApi from '../../Utilities/FromApi';
import { getUsers } from '../../Services/UserDashboardService';
import LoadingIcons from 'react-loading-icons'
import { useTheme } from '@mui/material/styles';
import FormDialog from '../widgets/FormDialog';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.primary.light,
        color: 'white',
        fontWeight: 700
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


const columns = [
    {
        id: 'userId',
        label: 'Id',
        minWidth: 30,
        // align: 'right',
        format: (value) => value,
    },
    { id: 'fName', label: 'First Name', minWidth: 150 },
    { id: 'lName', label: 'Last Name', minWidth: 150 },
    {
        id: 'phone',
        label: 'Mobile',
        minWidth: 170,
        align: 'left',
        format: (value) => value.toLocaleString('en-US'),
    },
    { id: 'email', label: 'Email Address', minWidth: 170 },
    {
        id: 'actions',
        label: 'Actions',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
];

function createData(userId, fName, lName, phone, email, actions) {
    return { userId, fName, lName, phone, email, actions };
}



function UserDashboard() {
    const theme = useTheme();
    const [users, setUsers] = useState([]);

    const rows = users.map((user) =>
    (
        createData(
            user.id,
            user.firstName,
            user.lastName,
            user.mobileNumber,
            user.emailId,
            <IconButton LinkComponent="/edit">
                <Edit />
            </IconButton>
        )
    )
    );


    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const config = {};

    useEffect(() => {
        getUsers(config, (res) => {
            setUsers(res)
        }, (err) => {
            alert(err)
        });
    }, [])

    const [openDialog, setOpenDialog] = React.useState(false);

    const handleOpenDialog = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    return (
        <Layout title='Manage Users'>
            {users.length === 0 ? (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'calc(100vh - 100px)' }}>
                    <LoadingIcons.BallTriangle stroke={theme.palette.primary.light} strokeOpacity={1} fill={theme.palette.primary.main} strokeWidth={4} height={100} width={60} />
                </div>
            ) : (
                <Paper sx={{ display: 'flex', flexDirection: 'column', width: '100%', overflow: 'hidden', tableLayout: 'fixed' }}>
                    <TableContainer sx={{ maxHeight: 440 }}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <StyledTableRow>
                                    {columns.map((column) => (
                                        <StyledTableCell
                                            key={column.id}
                                            align={column.align}
                                            style={{ minWidth: column.minWidth }}
                                        >
                                            {column.label}
                                        </StyledTableCell>
                                    ))}
                                </StyledTableRow>
                            </TableHead>
                            <TableBody>
                                {rows
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row) => {
                                        return (
                                            <StyledTableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                                {columns.map((column) => {
                                                    const value = row[column.id];
                                                    return (
                                                        <StyledTableCell key={column.id} align={column.align}>
                                                            {column.format && typeof value === 'number'
                                                                ? column.format(value)
                                                                : value}
                                                        </StyledTableCell>
                                                    );
                                                })}
                                            </StyledTableRow>
                                        );
                                    })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingLeft: 10 }}>
                        <Button variant="contained" color="secondary" disableElevation size='small' style={{ fontWeight: 'bold' }} onClick={handleOpenDialog}>
                            Add User
                        </Button>
                        <TablePagination
                            rowsPerPageOptions={[10, 25, 100]}
                            component="div"
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </div>
                    <FormDialog open={openDialog} handleClose={handleCloseDialog} />
                </Paper>

            )}
        </Layout>
    )
}

export default UserDashboard