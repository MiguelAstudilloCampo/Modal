import React, { useState } from 'react';
import DataList from './Components/DataList'
import CreateModal from './Components/Modal'; 
import EditModal from './Components/Modal Editable';

const App = () => {
  const [data, setData] = useState([]);
  const [selectedData, setSelectedData] = useState(null);
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);

  const handleCreate = (newData) => {
    setData([...data, { ...newData, id: Date.now().toString() }]);
  };

  const handleEdit = (editedData) => {
    const updatedData = data.map((item) => (item.id === editedData.id ? editedData : item));
    setData(updatedData);
  };

  const handleDelete = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };

  const handleEditModalOpen = (selected) => {
    setSelectedData(selected);
    setEditModalOpen(true);
  };
  // div
  // div
  // div

  return (
    <div>
      <h1>Registro de Datos</h1>

      <button onClick={() => setCreateModalOpen(true)}>Crear Registro</button>

      <DataList data={data} onEdit={handleEditModalOpen} onDelete={handleDelete} />

      <CreateModal isOpen={isCreateModalOpen} onClose={() => setCreateModalOpen(false)} onCreate={handleCreate} />

      {selectedData && (
        <EditModal
          isOpen={isEditModalOpen}
          onClose={() => setEditModalOpen(false)}
          onUpdate={handleEdit}
          selectedData={selectedData}
        />
      )}
    </div>
  );
};

export default App;
