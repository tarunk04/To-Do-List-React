import React from "react";
import Header from "./components/Header";
import ToDoItems from "./components/ToDoItems";
import ActionBar from "./components/ActionBar";

import Data from './data/Data'

class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <ActionBar/>
                <ToDoItems data={Data}/>
            </div>
        )
    }
}

export default App
