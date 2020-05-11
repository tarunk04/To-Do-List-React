import React from "react";
import {Container, Row, Col} from 'react-bootstrap'
import Label from "./Label";

class ItemDetails extends React.Component {
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
                                    {this.props.details.Category}
                                </Container>
                            </Col>
                            <Col xs={9}>
                                <Label label="Title:" value={this.props.details.title}/>
                                <Label label="Due Date:" value={this.props.details.dueDate}/>
                                <Label label="Create Date:" value={this.props.details.createDate}/>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={4} style={Style.ColPad}>
                        <Row>
                            <Col xs={12}>
                                <Label label="Priority:" value={this.props.details.priority}/>
                                <Label label="Status: " value={this.props.details.status}/>
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
