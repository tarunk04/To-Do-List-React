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
                display: "flex"
            },
            Left: {
                width: "50%",
                display: "flex",
                padding: "10px 0px"
            },
            Right: {
                width: "50%",
                display: "flex",
                justifyContent: "flex-end",
                padding: "10px 0px"
            },
            IconStyle: {
                minWidth: 40,
                fontSize: 20,
                lineHeight: "40px",
                textAlign: "center",
                borderRadius: 20,
                marginRight: 10,
            }
        }
        return (
            <Container fluid="md">
                <Row style={Style.ActionBarRow}>
                    <Col xs={12} style={Style.ActionBarCol}>
                        <div style={Style.Left}>
                            <div style={Style.IconStyle} className="action-bar-icon"><i className="fas fa-plus"></i></div>
                        </div>
                        <div style={Style.Right}>
                            <div style={Style.IconStyle} className="action-bar-icon"><i className="fas fa-sort"></i></div>
                            <div style={Style.IconStyle} className="action-bar-icon"><i className="fas fa-filter"></i></div>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default ActionBar
