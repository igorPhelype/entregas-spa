const initialStates = {
    entregasList: [{
        id: '4654654af98f9sa8',
        name: 'Igor Guimarães',
        deliveryDate: '30/09/2020',
        startPoint: 'Rua altivo militão, 56',
        destinationPoint: 'Rua Alberto Ignácio, 85',
    }, {
        id: '4654654af98f9sa8saf',
        name: 'Igor Guimarães',
        deliveryDate: '30/09/2020',
        startPoint: {
            latitude: -1.5651651,
            longitude: 5.454545,
        },
        destinationPoint: {
            latitude: -7.4984894,
            longitude: 6.54684654,
        }
    }],
    entregaBlank: {
        id: '',
        name: '',
        deliveryDate: '',
        startPoint: null,
        destinationPoint: null
    }
}

export default initialStates