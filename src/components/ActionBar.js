import React from 'react'
import {Container, Row, Col} from "react-bootstrap";

class ActionBar extends React.Component {
    render() {
        const Style = {
            ActionBarRow: {
              padding: "15px 15px 0px 15px"
            },
            ActionBarCol: {
                width: "100%",
                background: "rgba(205,205,205,0.5)",
                borderRadius: 5,
                height : 50,
                display: "flex"
            },
            Left: {
                background: "rgba(94,29,154,0.09)",
                width: "50%",
                height: 50
            },
            Right: {
                width: "50%",
                height: 50,
                background: "rgba(28,50,3,0.05)",
            },
            IconStyle: {
                fontSize: 25,
                lineHeight: 50
            }
        }
        return (
            <Container fluid="md">
                <Row style={Style.ActionBarRow}>
                    <Col xs={12} style={Style.ActionBarCol}>
                        <div style={Style.Left}>
                            <div style={Style.IconStyle}><i className="fas fa-plus-circle"></i></div></div>
                        <div style={Style.Right}></div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default ActionBar
