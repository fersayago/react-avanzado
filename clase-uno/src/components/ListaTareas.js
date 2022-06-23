import React from "react";

const ListaTareas = (props) => {
  return (
    <ul className="list-group w-50 mx-auto">
      <li className="list-group-item active">
        Lista de Tareas
      </li>
      {
        props.tareas.map ((tarea) => (
          <li className="list-group-item" key={tarea.id}>
            {tarea.nombre}
          </li>
        ))
      }
    </ul>
  );
};

export default ListaTareas;
