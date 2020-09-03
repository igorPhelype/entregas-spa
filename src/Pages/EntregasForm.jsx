import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import { Button, Icon, TextField, FormGroup } from '@material-ui/core';
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

function EntregasForm(props) {
    const [entrega, setEntrega] = useState(initialStates.entregaBlank)
    const classes = useStyles();
    const history = useHistory();

    /**
     * 
     * @param {Event} event
     */
    const handleSubmit = (event) => {
        event.preventDefault()
        api.post('/entrega', entrega).then((response) => {
            const {data: payload} = response
            history.push(`/entrega/${payload.id}`)
        }).catch(e => {
            console.log(e)
        })
    }

    /**
     * 
     * @param {Event} event 
     */
    const handleInputChange = (event) => {
        setEntrega({ ...entrega, [event.target.name]: event.target.value })
    }

    return (
        <div>
            <Button
                onClick={() => history.push('/entregas')}
                variant="contained"
                color="primary"
                className={classes.button}
                startIcon={<Icon>keyboard_backspace</Icon>}
            >voltar</Button>
            <form onSubmit={handleSubmit}>
                <div>
                    {[{
                        name: 'name',
                        label: 'Nome do Cliente',
                        placeholder: 'Ex.: Igor Phelype Guimaraes...',
                    }, {
                        name: 'deliveryDate',
                        label: 'Data de Entrega',
                        placeholder: 'Ex.: 30/08/2020',
                    }].map((item) => {
                        return (
                            <TextField
                                placeholder={item.placeholder}
                                variant="outlined"
                                label={item.label}
                                onChange={handleInputChange}
                                InputProps={{ name: item.name }}
                                value={entrega[item.name]} />
                        )
                    })}
                </div>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    startIcon={<Icon>cloud</Icon>}
                >salvar</Button>
            </form>
        </div>
    )
}

EntregasForm.propTypes = {

}

export default EntregasForm

