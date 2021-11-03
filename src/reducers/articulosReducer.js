import {
    OBTENER_ARTICULOS,
    OBTENER_ARTICULOS_ERROR,
    OBTENER_ARTICULOS_EXITO,
    OBTENER_ARTICULOS_ARTISTA,
    OBTENER_ARTICULOS_ARTISTA_ERROR,
    OBTENER_ARTICULOS_ARTISTA_EXITO,
    ARTISTA_SELECCIONADO,
    ARTISTA_SELECCIONADO_ERROR,
    ARTISTA_SELECCIONADO_EXITO
} from '../types'

const initialState = {
    articulos: [],
    articulosArtista: [],
    artistaSeleccionado: '',
    error: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case OBTENER_ARTICULOS:
            return {
                ...state,
                articulos: action.payload
            }
        case OBTENER_ARTICULOS_ARTISTA:
            return {
                ...state,
                articulosArtista: state.articulos.filter(articulo => articulo.artista === action.payload)
            }
        case ARTISTA_SELECCIONADO:
            return {
                ...state,
                artistaSeleccionado: action.payload
            }
        default:
            return state;
    }
}