import { Provider } from "react-redux";
import Routes from "./routes";
import store from "./store";
import "./style.less";

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
