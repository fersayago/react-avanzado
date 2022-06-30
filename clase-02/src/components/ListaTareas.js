import React from "react";
import Swal from 'sweetalert2'

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

            <button
              className="btn btn-danger float-end btn-sm"
              onClick={()=>{
                Swal.fire({
                  title: 'Seguro desea eliminar la tarea?',
                  icon: 'warning',
                  showCancelButton: true,
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Si, eliminar!'
                }).then((result) => {
                  if (result.isConfirmed) {
                    props.eliminarTarea(tarea.id);
                    Swal.fire(
                      'Eliminado!',
                      'Su tarea ha sido eliminada.'
                    )
                  }
                })
              }}
            >
              X
            </button>
          </li>
        ))
      }
    </ul>
  );
};

export default ListaTareas;
