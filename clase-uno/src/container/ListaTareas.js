import ListaTareas from "../components/ListaTareas";
import { connect } from "react-redux";

function mapStateToProps(state){
  return {
    tareas: state
  }
}

export default connect(mapStateToProps)(ListaTareas);