import React from "react";
import {Container, Row} from 'react-bootstrap'
import ItemDetails from "./ItemDetails";
import Status from "./Status";

class ToDoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category : this.props.data.Category,
            title: this.props.data.Title,
            dueDate: this.props.data["Due Date"],
            createDate: this.props.data.CreateDate,
            priority: this.props.data.Priority,
            status: this.props.data.Status
        }
        this.handleDelete = this.handleDelete.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
    }
    handleEdit(){
        this.props.edit(this.props.data)
    }
    handleDelete(){

    }
    render() {
        // console.log(this.props)
        const details = this.state
        const Style = {
            Container: {
                background: "whitesmoke",
                marginTop: 20,
                borderRadius: 5
            }
        }
        return (
            <Container fluid style={Style.Container}>
                <Row sm>
                    <ItemDetails
                        details={details}
                        handleEdit = {this.handleEdit}
                        handleDelete = {this.handleDelete}
                    />
                    <Status status={this.props.data.Status}/>
                </Row>
            </Container>
        )
    }
}

export default ToDoItem
