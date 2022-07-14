import DummyComponent from "../components/DummyComponent";
import background from "../hoc/background";

// Currification:
export default background("green")(DummyComponent)