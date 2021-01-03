import React from "react";
import { Switch, Route } from "react-router-dom";

import Calculator from "./components/Calculator.jsx";

function App() {
    return(
        <div>
            <Switch>
                <Route path="/calculator" exact component={Calculator} />
            </Switch>
        </div>
    );
};

export default App;