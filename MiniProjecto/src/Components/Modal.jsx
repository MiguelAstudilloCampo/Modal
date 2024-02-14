import React, { useState } from 'react';

const CreateModal = ({ isOpen, onClose, onCreate }) => {
  const [id, setId] = useState('');
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleCreate = () => {
    onCreate({ id, nombre, descripcion });
    onClose();
  };

  return (
    <div style={{ display: isOpen ? 'block' : 'none' }}>
      <div>
        <h2>Crear Registro</h2>
        <label>ID: </label>
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        <br />
        <label>Nombre: </label>
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        <br />
        <label>Descripción: </label>
        <input type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
        <br />
        <button onClick={handleCreate}>Confirmar</button>
        <button onClick={onClose}>Cancelar</button>
      </div>
    </div>
  );
};

export default CreateModal;
