import React, { useEffect } from 'react'

import Formulario from './Formulario'
import Articulo from './Articulo'

import { useSelector, useDispatch } from 'react-redux';

import { obtenerArticulosAction, obtenerArticulosArtistaAction } from '../actions/articuloActions'

const Galeria = () => {

    const dispatch = useDispatch();

    const artistaSeleccionado = useSelector(state => state.articulos.artistaSeleccionado);
    //console.log(artistaSeleccionado);
    const articulos = useSelector(state => state.articulos.articulos);
    
    useEffect(() => {

        if(artistaSeleccionado){
            dispatch(obtenerArticulosArtistaAction(artistaSeleccionado));
        }
        else
            dispatch(obtenerArticulosAction());

    }, [artistaSeleccionado])

    //obtener articulos del state
    const articulosArtista = useSelector(state => state.articulos.articulosArtista);

    return (
        <div className="container">
            <div className="container bg-primary">
                <h1 className="text-center mb-5 p-2">Galería</h1>
            </div>

            <Formulario />

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

                {articulos.length === 0 ? <p className="font-weight-bold alert alert-danger text-center mt-4">No hay artículos en la Galería</p>  : (
                    articulosArtista.length === 0 ? (
                        articulos.map(articulo => (
                            <Articulo
                                key={articulo.id}
                                articulo={articulo}
                            />
                        ))
                    ) : (
                        articulosArtista.map(articulo => (
                            <Articulo
                                key={articulo.id}
                                articulo={articulo}
                            />
                        ))
                    )
                )}

                
            </div>
        </div>
    );
}

export default Galeria;