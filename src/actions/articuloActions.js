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

import MonaLisa from '../assets/Mona_Lisa.jpg'
import Monet from '../assets/Monet.jpg'
import VanGogh from '../assets/Van-Gogh.jpg'
import Amor from '../assets/Amor.jpg'

const art = [
    {
        id: 1,
        titulo: 'La Mona Lisa',
        artista: 'Leonardo Da Vinci',
        imagen: MonaLisa,
        fecha: new Date('2021/01/18')
    },
    {
        id: 2,
        titulo: 'Monet',
        artista: 'Monet',
        imagen: Monet,
        fecha: new Date('2021/03/20')
    },
    {
        id: 3,
        titulo: 'Amor',
        artista: 'Monet',
        imagen: Amor,
        fecha: new Date('2021/03/17')
    },
    {
        id: 4,
        titulo: 'Van Gogh',
        artista: 'Van Gogh',
        imagen: VanGogh,
        fecha: new Date('2020/01/19')
    }
]

art.sort((a,b) => a.fecha.getTime() > b.fecha.getTime());

export function obtenerArticulosAction() {
    return (dispatch) => {
        dispatch(obtenerArticulos(art));
    }
}

const obtenerArticulos = (articulos) => ({
    type: OBTENER_ARTICULOS,
    payload: articulos
})

export function obtenerArticulosArtistaAction(artista) {
    return (dispatch) => {
        dispatch(obtenerArticulosArtista(artista));
    }
}

const obtenerArticulosArtista = (artista) => ({
    type: OBTENER_ARTICULOS_ARTISTA,
    payload: artista
})

export function artistaSeleccionadoAction(artistaSeleccionado) {
    return (dispatch) => {
        dispatch(obtenerArtistaSeleccionado(artistaSeleccionado));
    }  
}

const obtenerArtistaSeleccionado = artistaSeleccionado => ({
    type: ARTISTA_SELECCIONADO,
    payload: artistaSeleccionado
})