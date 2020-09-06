import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Button, Icon, IconButton } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import api from '../Utils/api'
import initialStates from '../Utils/initialStates'

const useStyles = makeStyles((theme) => ({
    table: {
        maxWidth: 600,
    },

    button: {
        margin: theme.spacing(1),
    },
}))

function EntregasList(props) {
    const [entregasList, setEntregasList] = useState(initialStates.entregasList)
    useEffect(() => {
        api.get('/entregas').then((response) => {
            setEntregasList(response.data)
        }).catch(e => {
            console.log(e)
        })
    }, [])
    const classes = useStyles();
    const history = useHistory();

    return (
        <div>
            <Button onClick={() => history.push('/entregas/new')} variant="contained" color="primary" className={classes.button} startIcon={<Icon>add</Icon>}>nova entrega</Button>
            <TableContainer>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Ações</TableCell>
                            <TableCell>ID da entrega</TableCell>
                            <TableCell>Nome do cliente</TableCell>
                            <TableCell align="right">Data de entrega</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {entregasList.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                    <IconButton onClick={() => history.push('/entrega/' + row.id)} aria-label="create">
                                        <Icon>pageview</Icon>
                                    </IconButton>
                                </TableCell>
                                <TableCell component="th" scope="row">{row.id}</TableCell>
                                <TableCell component="th" scope="row">{row.name}</TableCell>
                                <TableCell align="right">{row.deliveryDate}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

EntregasList.propTypes = {

}

export default EntregasList

