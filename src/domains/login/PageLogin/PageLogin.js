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
            boxShadow: 'rgb(34 60 80 / 5%) 0px 0px 8px 2px',
            background: '#272727',
          }}
        >
          <h1>Login</h1>
          <p className="da-mt-sm-0 da-mt-8 da-text-color-black-60">
            Welcome back, please login to your account.
          </p>
          <Col className="da-account-buttons da-mt-32">
            <LoginButton />
          </Col>
        </Card>
      </Row>
    </Layout>
  );
};


export default PageLogin;
