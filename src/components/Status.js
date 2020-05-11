import React from "react";
import { Row, Col} from 'react-bootstrap'

class Status extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            status : this.props.status
        }
    }
    render() {
        console.log(this.props.status)
        const status_color = {
            "Active" : "rgba(0, 212, 26, 1)",
            "Over Due" : "rgba(240, 22, 26, 1)",
            "Done" : "rgba(73,83,231,1)",
        }
        const Style = {
            Status: {
                borderRadius: "0px 5px 5px 0px",
                maxWidth: 20,
                background: status_color[this.state.status]
            },
            StatusContainerRow: {
                flexDirection: "row-reverse",
                height: "100%"
            },
            StatusContainer: {
                padding: 0,
                display: "flex",
                flexDirection: "row-reverse"
            },
        }
        return (
            <Col xs={1}>
                <Row style={Style.StatusContainerRow}>
                    <Col xs={2} style={Style.StatusContainer}>
                        <Col style={Style.Status}> </Col>
                    </Col>
                </Row>
            </Col>
        )
    }
}

export default Status
