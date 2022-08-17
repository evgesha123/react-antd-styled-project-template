import React from 'react';
import { Card, Col, Layout, Row } from 'antd';
import LoginButton from '../../../app/components/LoginButton';



const PageLogin = () => {
  return (
    <Layout className="login">
      <Row>
        <Card
          style={{
            textAlign: 'center',
            boxShadow: 'rgb(24 26 27 / 69%) 0px 0px 8px 2px',
            background: '#343a40e3',
          }}
        >
          <h1>Login</h1>
          <p>Welcome back, please login to your account.</p>
          <Col>
            <LoginButton />
          </Col>
        </Card>
      </Row>
    </Layout>
  );
};


export default PageLogin;
