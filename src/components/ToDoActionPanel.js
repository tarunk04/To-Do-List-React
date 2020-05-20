import React from 'react';
import {Row,Col,Button} from "react-bootstrap";

class ToDoActionPanel extends React.Component {
    render() {
        const style = {
            btn: {
                fontSize : 13,
                marginRight: 20
            }
        }
        return (
            <Row>
                <Col>
                    <Button
                        style={style.btn}
                        className="btn-custom-style"
                        onClick={this.props.handleEdit}>
                        <i className="fas fa-pencil-alt"></i> Edit
                    </Button>
                    <Button
                        style={style.btn}
                        className="btn-custom-style"
                        onClick={this.props.handleDelete}>
                        <i className="fas fa-trash"></i> Delete
                    </Button>
                </Col>
            </Row>
        )
    }
}

export default ToDoActionPanel
