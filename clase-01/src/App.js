import "bootstrap/dist/css/bootstrap.css"
import { Provider } from "react-redux";
//import AgregarTarea from './components/AgregarTarea';
import AgregarTarea from "./container/AgregarTarea";
//import ListaTareas from './components/ListaTareas';
import ListaTareas from "./container/ListaTareas";
import theOnlySourceOfTruth from './store/store'

function App() {

  /*  SE MUEVEN LAS TAREAS A EL STORE
  const tareas = [
    { id: 1, nombre:"curso", done:false},
    { id: 2, nombre:"trabajar", done:false},
    { id: 3, nombre:"bañarse", done:false}
  ] */

  return (
    <Provider store={theOnlySourceOfTruth}>
      <header className="alert alert-info text-center">
        <h1 className="display-1">Andreani Todo List</h1>
      </header>
      <main>
        <ListaTareas/>
        <AgregarTarea/>
      </main>
    </Provider>
  );
}

export default App;