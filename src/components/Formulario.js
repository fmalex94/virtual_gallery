import React, { useState } from 'react'

import { useSelector, useDispatch } from 'react-redux';

import { artistaSeleccionadoAction } from '../actions/articuloActions'

const Formulario = () => {

    const dispatch = useDispatch();

    //leer del state
    const articulos = useSelector(state => state.articulos.articulos);
    const artistaSeleccionado = useSelector(state => state.articulos.artistaSeleccionado)

    //console.log(artistaSeleccionado);

    const [artista, guardarArtista] = useState('');

    if(artista!='')
        dispatch(artistaSeleccionadoAction(artista));

    function Uniq(data, key) {
        return [
            ...new Map(
                data.map(x => [key(x), x])
            ).values()
        ]
    }

    return (
        <div className="container">
            <form className="col-12 mb-4">

                <fieldset className="text-left">
                    <legend>Buscar por artista</legend>
                </fieldset>

                <div className="col-md-4">
                    <select className="form-select" onChange={e => guardarArtista(e.target.value)}>
                        <option value="Todos">Todos</option>
                        {/* llamar la funcion creada para eliminar los artistas repetidos */}
                        {(Uniq(articulos, it => it.artista)).map(articulo => (
                            <option
                                key={articulo.id}
                                value={articulo.artista}
                            >{articulo.artista}</option>
                        ))}
                    </select>
                </div>
            </form>
        </div>
    );
}

export default Formulario;

