import React from 'react'
import {Container} from "react-bootstrap";
import ToDoItem from "./ToDoItem";
import Editor from "./Editor"

class ToDoItems extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data : this.props.data,
            editor: false,
            editorData: ""
        }
        this.toggleEditor = this.toggleEditor.bind(this)
        this.saveChanges = this.saveChanges.bind(this)
    }
    toggleEditor(data){
        this.setState( prevState => {
                return {
                    editor: !prevState.editor,
                    editorData: data
                }
            }
        )
    }
    saveChanges(id){
        console.log(id)
    }
    render() {
        const Items  =  this.props.data.map(
            item => <ToDoItem
                key = {item.id}
                data = {item}
                edit = {this.toggleEditor}
            />
        )
        const Style = {
            marginTop: 20,
        }
        return(
            <div>
                <Container style={Style} fluid="md">
                    {/*<ToDoItem data={this.props.data[0]}/>*/}
                    {/*/!*<ToDoItem/>*!/*/}
                    {Items}
                </Container>
                <Editor
                    show={this.state.editor}
                    data={this.state.editorData}
                    handleClose={this.toggleEditor}
                    saveChanges={this.saveChanges}
                />
            </div>
        )
    }
}

export default ToDoItems
