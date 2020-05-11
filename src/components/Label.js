import React from "react";
import {Row, Col} from 'react-bootstrap'

class Label extends React.Component {
    render() {
        return(
            <Row>
                <Col>
                    <b>{this.props.label}</b> {this.props.value}
                </Col>
            </Row>
        )
    }
}

export default Label
