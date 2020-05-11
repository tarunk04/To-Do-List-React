import React from "react";
import {Container, Row} from 'react-bootstrap'
import ItemDetails from "./ItemDetails";
import Status from "./Status";

class ToDoItem extends React.Component {
    render() {
        console.log(Object.keys(this.props.data.Status))
        const details = {
            Category: this.props.data.Category,
            title : this.props.data.Title,
            dueDate : this.props.data["Due Date"],
            createDate : this.props.data.CreateDate,
            priority: this.props.data.Priority,
            status: this.props.data.Status
        }
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
                    <ItemDetails details={details}/>
                    <Status status={this.props.data.Status}/>
                </Row>
            </Container>
        )
    }
}

export default ToDoItem
