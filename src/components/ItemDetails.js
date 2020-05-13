import React from "react";
import {Container, Row, Col} from 'react-bootstrap'
import Label from "./Label";

class ItemDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category : this.props.details.Category,
            title: this.props.details.title,
            dueDate: this.props.details.dueDate,
            createDate: this.props.details.createDate,
            priority: this.props.details.priority,
            status: this.props.details.status
        }
    }
    render() {
        const Style = {
            ColPad: {
            }
        }
        return(
            <Col xs={11}>
                <Row style={{margin: "15px -15px"}}>
                    <Col md={7} style={Style.ColPad}>
                        <Row>
                            <Col xs={3}>
                                <Container className="title_category">
                                    {this.state.category}
                                </Container>
                            </Col>
                            <Col xs={9}>
                                <Label label="Title:" value={this.state.title}/>
                                <Label label="Due Date:" value={this.state.dueDate}/>
                                <Label label="Create Date:" value={this.state.createDate}/>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={4} style={Style.ColPad}>
                        <Row>
                            <Col xs={12}>
                                <Label label="Priority:" value={this.state.priority}/>
                                <Label label="Status: " value={this.state.status}/>
                                <Label label="Buttons"/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        )
    }
}

export default ItemDetails
