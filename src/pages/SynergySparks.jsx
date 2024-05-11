import React, { useState } from 'react';
import { Row, Col, Button, Modal, Form, Input, Typography } from 'antd';

const { Title, Text, Link } = Typography;

function SynergySparks() {
  const imageSrc = 'https://i.ibb.co/wQm7w0n/your-image.png';
  const Lux =
    'https://cf.bstatic.com/xdata/images/hotel/max1024x768/417659400.jpg?k=b11b05341b0ba878225af18e36464712d91062e929b818e877dcf357ab6b324e&o=&hp=1';
  const Casela =
    'https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/39/b3/cc.jpg';
  const Catamaran =
    'https://taxiservicemauritius.com/wp-content/uploads/2020/04/ile-aux-benitiers-catamaran-1.jpg';
  const containerStyle = {
    background: '#F4F5F7',
    margin: '20px',
    marginBottom: '40px',
    width: 'calc(100% - 40px)', // 50% width with 20px margin on all sides
    height: '350px', // 50% height with 20px margin on all sides
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '10px',
    padding: '10px',
  };

  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const handleOk = () => {
    setModalVisible(false);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  return (
    <div
      style={{
        background: 'white',
        padding: '10px',
        position: 'relative',
        minHeight: '100vh',
      }}
    >
      <Col style={{ margin: '20px' }}>
        {/* <p
          style={{
            fontWeight: 'Semi-bold',
            fontSize: '25px',
            fontFamily: 'Poppins',
            margin: 0,
            marginRight: '15px',
          }}
        >
          {"Let's Get To Know Each Other"}
        </p> */}
        <Title level={2} style={{ fontSize: '20px' }}>
          Let's Get To Know Each Other
        </Title>
      </Col>
      <Row>
        <Col span={12}>
          <div style={containerStyle}>
            <Col>
              <img
                src={Lux}
                alt="Lux"
                style={{
                  width: '83%',
                  height: '100%',
                  borderRadius: '10%',
                  margin: '30px',
                }}
              />
              <Button
                onClick={showModal}
                style={{
                  marginLeft: '70px',
                  width: '200px',
                  height: '50px',
                  backgroundColor: '#E94E0F',
                  color: 'white',
                  borderRadius: '15px',
                  fontSize: '16px',
                  fontWeight: 'bold',
                }}
              >
                Register
              </Button>
              <Modal
                title="Registration Form"
                visible={modalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
              >
                <Form>
                  <Form.Item label="Name">
                    <Input placeholder="Enter your name" />
                  </Form.Item>
                  <Form.Item label="Clan">
                    <Input placeholder="Enter your clan" />
                  </Form.Item>
                  <Form.Item label="Age">
                    <Input placeholder="Enter your age" />
                  </Form.Item>
                </Form>
              </Modal>
            </Col>
          </div>
        </Col>
        <Col span={12}>
          <div style={containerStyle}>
            <Col>
              <img
                src={Casela}
                alt="Casela"
                style={{
                  width: '83%',
                  height: '100%',
                  borderRadius: '10%',
                  margin: '30px',
                }}
              />
              <Button
                onClick={showModal}
                style={{
                  marginLeft: '70px',
                  width: '200px',
                  height: '50px',
                  backgroundColor: '#E94E0F',
                  color: 'white',
                  borderRadius: '15px',
                  fontSize: '16px',
                  fontWeight: 'bold',
                }}
              >
                Register
              </Button>
              <Modal
                title="Registration Form"
                visible={modalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
              >
                <Form>
                  <Form.Item label="Name">
                    <Input placeholder="Enter your name" />
                  </Form.Item>
                  <Form.Item label="Clan">
                    <Input placeholder="Enter your clan" />
                  </Form.Item>
                  <Form.Item label="Age">
                    <Input placeholder="Enter your age" />
                  </Form.Item>
                </Form>
              </Modal>
            </Col>
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <div style={containerStyle}>
            <Col>
              <img
                src={Catamaran}
                alt="Catamaran"
                style={{
                  width: '83%',
                  height: '100%',
                  borderRadius: '10%',
                  margin: '30px',
                }}
              />
              <Button
                onClick={showModal}
                style={{
                  marginLeft: '70px',
                  width: '200px',
                  height: '50px',
                  backgroundColor: '#E94E0F',
                  color: 'white',
                  borderRadius: '15px',
                  fontSize: '16px',
                  fontWeight: 'bold',
                }}
              >
                Register
              </Button>
              <Modal
                title="Registration Form"
                visible={modalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
              >
                <Form>
                  <Form.Item label="Name">
                    <Input placeholder="Enter your name" />
                  </Form.Item>
                  <Form.Item label="Clan">
                    <Input placeholder="Enter your clan" />
                  </Form.Item>
                  <Form.Item label="Age">
                    <Input placeholder="Enter your age" />
                  </Form.Item>
                </Form>
              </Modal>
            </Col>
          </div>
        </Col>
        <Col span={12}>
          <div style={containerStyle}>
            <Col>
              <img
                src={Lux}
                alt="Lux"
                style={{
                  width: '83%',
                  height: '100%',
                  borderRadius: '10%',
                  margin: '30px',
                }}
              />
              <Button
                onClick={showModal}
                style={{
                  marginLeft: '70px',
                  width: '200px',
                  height: '50px',
                  backgroundColor: '#E94E0F',
                  color: 'white',
                  borderRadius: '15px',
                  fontSize: '16px',
                  fontWeight: 'bold',
                }}
              >
                Register
              </Button>
              <Modal
                title="Registration Form"
                visible={modalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
              >
                <Form>
                  <Form.Item label="Name">
                    <Input placeholder="Enter your name" />
                  </Form.Item>
                  <Form.Item label="Clan">
                    <Input placeholder="Enter your clan" />
                  </Form.Item>
                  <Form.Item label="Age">
                    <Input placeholder="Enter your age" />
                  </Form.Item>
                </Form>
              </Modal>
            </Col>
          </div>
        </Col>
      </Row>
      {/* <Row style={{ marginTop: '20px' }}>
        <img
          src={imageSrc}
          alt="Your Image"
          style={{
            position: 'absolute',
            bottom: '10px',
            right: '10px',
            opacity: 0.13,
            width: '400px', // Set the width as per your requirement
            height: 'auto', // Adjust height accordingly
          }}
        />
      </Row> */}
    </div>
  );
}

export default SynergySparks;
