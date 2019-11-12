import React, { useState, Suspense } from "react";
import ReactDOM from "react-dom";
import CircularProgress from '@material-ui/core/CircularProgress';
import { store } from "./store";
import { Provider } from "react-redux";
import { ExampleComponent } from "./ExampleComponent";
import { MyFetchingComponent } from './Fetch'
import { StoreChanger } from "./StoreChanger";
import "./styles.css";
import { useScrollTrigger } from "@material-ui/core";

function App() {
  const [response, setResponse] = useState(null);
  const [trigger, setTrigger] = useState(false)
  const dogUrl = 'https://dog.ceo/api/breeds/image/random'
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <ExampleComponent />
        <StoreChanger />
        <br/>
        {/* <button type="button" onClick={()=>setResponse(MyFetchingComponent(dogUrl))}>Fetch Dog Image</button> */}
        <button type="button" onClick={()=>setTrigger(!trigger)}>Fetch Dog Image</button> 
        <div>
        <h3>{response && response.status}</h3>
        <div>
          <Suspense fallback={!trigger && <CircularProgress/>}>
            {/* <img src={response && response.message} alt="avatar" /> */}
            {trigger && <MyFetchingComponent url={dogUrl}/>}
          </Suspense>
        </div>
      </div>
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
