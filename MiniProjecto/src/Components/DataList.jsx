import React from 'react';

const DataList = ({ data, onEdit, onDelete }) => {
  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <p>ID: {item.id}</p>
          <p>Nombre: {item.nombre}</p>
          <p>Descripción: {item.descripcion}</p>
          <button onClick={() => onEdit(item)}>Editar</button>
          <button onClick={() => onDelete(item.id)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
};

export default DataList;
