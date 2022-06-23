import React from "react";

const AgregarTarea = (props) => {
  return (
    <div className="w-50 mx-auto">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Ingrese una tarea..."
        />
        <button className="btn btn-outline-primary">+</button>
      </div>
      <div className="text-end text-info">
        Total Tareas: {props.totalTareas}
      </div>
    </div>
  );
};

export default AgregarTarea;
