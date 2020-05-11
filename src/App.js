import React from "react";
import Header from "./components/Header";
import ToDoItems from "./components/ToDoItems";

import Data from './data/Data'

class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <ToDoItems data={Data}/>
            </div>
        )
    }
}

export default App
