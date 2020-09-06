import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import {
    Button, Icon, TextField, FormGroup, Chip,
    Grid,
    Divider,
    Typography,
} from '@material-ui/core';
import { useHistory, useRouteMatch } from 'react-router-dom';

import api from '../Utils/api'
import initialStates from '../Utils/initialStates'

const useStyles = makeStyles((theme) => ({
    table: {
        maxWidth: 600,
    },

    button: {
        margin: theme.spacing(1),
    },

    root: {
        width: '100%',
        // maxWidth: 500,
        backgroundColor: theme.palette.background.paper,
    },
    chip: {
        margin: theme.spacing(0.5),
    },
    section1: {
        margin: theme.spacing(3, 2),
    },
    section2: {
        margin: theme.spacing(2),
    },
    section3: {
        margin: theme.spacing(3, 1, 1),
    },
}))

function EntregasDetails(props) {
    const [entrega, setEntrega] = useState(initialStates.entregaBlank)
    const classes = useStyles();
    const history = useHistory();
    const match = useRouteMatch("/entrega/:id");

    useEffect(() => {
        api.get('/entrega/' + match.params.id, entrega).then((response) => {
            const { data: payload } = response
            history.push(`/entrega/${payload.id}`)
        }).catch(e => {
            setEntrega(initialStates.entregasList.find((item => item.id === match.params.id)))
            console.log(e)
        })
    }, [])

    return (
        <div>
            <Button
                onClick={() => history.push('/entregas')}
                variant="contained"
                color="primary"
                className={classes.button}
                startIcon={<Icon>keyboard_backspace</Icon>}
            >voltar</Button>
            <div className={classes.root}>
                <div className={classes.section1}>
                    <Grid container alignItems="center">
                        <Grid item xs={10}>
                            <Typography gutterBottom variant="h5">Cliente: {entrega.name}</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography gutterBottom variant="h6">$4.50</Typography>
                        </Grid>
                    </Grid>
                    <Typography color="textSecondary" variant="body2">
                        Pinstriped cornflower blue cotton blouse takes you on a walk to the park or just down the
                        hall.
        </Typography>
                </div>
                <Divider variant="middle" />
                <div className={classes.section2}>
                    <Typography gutterBottom variant="h5">Trajeto:</Typography>
                    <div>
                        
                    </div>
                </div>
            </div>
            <div>
                {entrega.name}
                {entrega.deliveryDate}
                {entrega.startPoint}
                {entrega.destinationPoint}
            </div>
        </div>
    )
}

EntregasDetails.propTypes = {

}

export default EntregasDetails

