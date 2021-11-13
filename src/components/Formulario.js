import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { artistaSeleccionadoAction } from '../actions/articuloActions'

const Formulario = () => {

    //declarando las traduccion de componente formulario
    const {t, i18n} = useTranslation('formulario');

    const dispatch = useDispatch();

    //leer del state
    const articulos = useSelector(state => state.articulos.articulos);
    const artistaSeleccionado = useSelector(state => state.articulos.artistaSeleccionado)

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
                    {/* usando la traduccion correspondiente */}
                    <legend>{t("texto")}</legend> 
                </fieldset>

                <div className="col-md-4">
                    <select className="form-select" onChange={e => guardarArtista(e.target.value)}>
                        {/* usando la traduccion correspondiente */}
                        <option value="Todos">{t("todos")}</option>
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

