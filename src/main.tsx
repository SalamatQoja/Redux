import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "./Components";
import stores from "./ChangeState/stores";
import store2 from "./Products/ProductIndex";
import App from "./Components/TodoApp";
import App2 from "./ChangeState/MainSide";
import App3 from "./Products/ProductApp";


const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <>
    <Provider store={store}>
      <App/>
    </Provider>
    <Provider store={stores}>
      <App2/>
    </Provider>
    <Provider store={store2}>
      <App3/>
    </Provider>
  </>

)


