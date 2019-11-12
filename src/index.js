import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import useFetch from 'fetch-suspense';
import { store } from "./store";
import { Provider } from "react-redux";
import { ExampleComponent } from "./ExampleComponent";
import { StoreChanger } from "./StoreChanger";
import "./styles.css";

const MyFetchingComponent = () => {
  const response = useFetch('https://jsonplaceholder.typicode.com/todos');
  console.log(JSON.stringify(response, null, 2 ))
  const obj = response.map(value=><div>{value.title}</div>)
  return obj
};

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <ExampleComponent />
        <StoreChanger />
        <br/>
        <Suspense fallback="Loading...">
          <MyFetchingComponent />
        </Suspense>
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
