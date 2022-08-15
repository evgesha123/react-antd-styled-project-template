import React from 'react';
import { Card, Col, Layout, Row } from 'antd';
import LoginHooks from '../../../app/auth/components/login/loginHooks';



const PageLogin = () => {
  return (
    <Layout className="login">
      <Row>
        <Card style={{ textAlign: 'center', boxShadow: 'rgb(34 60 80 / 5%) 0px 0px 8px 2px' }}>
          <h1>Login</h1>
          <p className="da-mt-sm-0 da-mt-8 da-text-color-black-60">
            Welcome back, please login to your account.
          </p>
          <Col className="da-account-buttons da-mt-32">
            <LoginHooks />
          </Col>
        </Card>
      </Row>
    </Layout>
  );
};


export default PageLogin;
