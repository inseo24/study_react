import React, { useEffect } from "react";
import { PageHeader, Col, Row, Descriptions, Typography } from "antd";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { actions, Types } from "../state";

export default function User({ match }) {
    const history = useHistory();
    const dispatch = useDispatch();

    // @ts-ignore
    const user = useSelector((state) => state.user.user);

    const name = match.params.name;

    useEffect(() => {
        dispatch(actions.fetchUser(name));
    }, [dispatch, name]);

    return (
        <Row justify="center">
            <Col xs={24} md={20} lg={14}>
                <PageHeader onBack={() => history.push("/")}>
                    {user && (
                        <Descriptions layout="vertical" bordered column={1}>
                            <Descriptions.Item label="이름">
                                <Typography.Text>{user.name}</Typography.Text>
                            </Descriptions.Item>
                            <Descriptions.Item></Descriptions.Item>
                            <Descriptions.Item></Descriptions.Item>
                            <Descriptions.Item label="수정 내역"></Descriptions.Item>
                        </Descriptions>
                    )}
                </PageHeader>
            </Col>
        </Row>
    );
}
