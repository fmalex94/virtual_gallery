import React from 'react'

const Articulo = ({articulo}) => {


    //prueba en Github
    const { id, titulo, imagen, descripcion} = articulo;

    return (
        <div className="col">
            <div className="card shadow-sm">
                <img src={imagen} className="card-img-top imagenes" alt="Mona Lisa" />

                <div className="card-body">
                    <h3 className="card-title">{titulo}</h3>
                    <p className="card-text">{descripcion}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">Favorito</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Criterio</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Articulo;
