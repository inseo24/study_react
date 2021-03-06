import { Col, Row, Typography } from "antd";
import React from "react";
import Settings from "../component/Settings";
import SearchInput from "./SearchInput";

export default function Search() {
    return (
        <>
            <Row justify="end" style={{ padding: 20 }}>
                <Col>
                    <Settings logout={() => {}}></Settings>
                </Col>
            </Row>
            <Row justify="center" style={{ marginTop: 100 }}>
                <Col>
                    <Typography.Title> 찾아야 한다</Typography.Title>
                </Col>
            </Row>
            <Row justify="center" style={{ marginTop: 50 }}>
                <Col span={12}>
                    <SearchInput />
                </Col>
            </Row>
        </>
    );
}
