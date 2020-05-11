import React from 'react'
import {Container} from "react-bootstrap";
import ToDoItem from "./ToDoItem";

class ToDoItems extends React.Component{
    render() {
        const Items  =  this.props.data.map(
            item => <ToDoItem data={item}/>
        )
        const Style = {
            marginTop: 20,
        }
        return(
            <Container style={Style} fluid="md">
                {/*<ToDoItem data={this.props.data[0]}/>*/}
                {/*/!*<ToDoItem/>*!/*/}
                {Items}
            </Container>
        )
    }
}

export default ToDoItems
