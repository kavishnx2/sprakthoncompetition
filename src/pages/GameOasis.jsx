import React from 'react';
import { Row, Col, Select, Input, Button, Typography } from 'antd';
import { TimePicker } from 'antd';
import moment from 'moment';
import COLORS from '../assets/color';
const { TextArea } = Input;
const { Option } = Select;
const { Title, Text, Link } = Typography;
function GameOasis() {
  const imageSrc =
    'https://media.licdn.com/dms/image/D5603AQFUdBEoOr0TYw/profile-displayphoto-shrink_800_800/0/1683227440776?e=2147483647&v=beta&t=GAMl8mBOLqI7mRv-rdLFaY0kwpnqVyVPGh6WtFehFEY'; 
  const imageRaj ='https://media.licdn.com/dms/image/D4D03AQGV_EeRLLBTNw/profile-displayphoto-shrink_800_800/0/1680368766572?e=2147483647&v=beta&t=IMdSMJ-kd8J8QZkjMKLmXZ_gaZep0IA2dPHHd9opQII';

  const imageAyush ='data:image/jpeg;base64,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';  

  const dropdownIcon =
    'https://www.freeiconspng.com/uploads/controller-game-icon-10.png';
  const ashImg =
    'data:image/jpeg;base64,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';
  const timeIcon =
    'https://cdn2.iconfinder.com/data/icons/pittogrammi/142/10-512.png';
  const rabillIcon =
    'https://mir-s3-cdn-cf.behance.net/user/230/1e188a199264665.5e2477878d001.jpg';
  return (
    <div
      style={{
        background: 'white',
        padding: '10px',
        position: 'relative',
        minHeight: '100vh',
      }}
    >
      <Row
        style={{
          background: '#F4F5F7',
          margin: '10px 0',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          borderRadius: '20px',
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
              color: '#484848',
            }}
          >
            {"Who's Playing"}
          </p> */}
          <Title level={2} style={{ fontSize: '20px' }}>
            Who's Playing
          </Title>
          <Row style={{ marginTop: '20px' }}>
            <img
              src={imageSrc}
              alt="Player Image"
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                marginRight: '10px',
              }}
            />
            <Col>
              {/* <p
                style={{
                  fontWeight: 'bold',
                  fontSize: '16px',
                  fontFamily: 'Poppins',
                  margin: 0,
                }}
              >
                Kavish
              </p> */}
              <Title level={2} style={{ fontSize: '17px' }}>
                Kavish
              </Title>
              <p
                style={{
                  fontSize: '13px',
                  fontFamily: 'Poppins',
                  margin: 0,
                  color: '#BABCBF',
                }}
              >
                Playing FIFA 24
              </p>
            </Col>
            <Row>
              <img
                src={imageSrc}
                alt="Player Image"
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  marginLeft: '220px',
                }}
              />
              <img
                src={ashImg}
                alt="Player Image"
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  marginRight: '10px',
                }}
              />
              <p
                style={{
                  fontSize: '16px',
                  fontWeight: 'bold',
                  fontFamily: 'Poppins',
                  marginTop: '14px',
                  margin: 0,
                }}
              >
                ..+2
              </p>
            </Row>
          </Row>

          <Row style={{ marginTop: '20px' }}>
            <img
              src={ashImg}
              alt="Player Image"
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                marginRight: '10px',
              }}
            />
            <Col>
              {/* <p
                style={{
                  fontWeight: 'bold',
                  fontSize: '16px',
                  fontFamily: 'Poppins',
                  margin: 0,
                }}
              >
                Ashfaaq
              </p> */}
              <Title level={2} style={{ fontSize: '17px' }}>
                Ashfaaq
              </Title>
              <p
                style={{
                  fontSize: '13px',
                  fontFamily: 'Poppins',
                  margin: 0,
                  color: '#BABCBF',
                }}
              >
                Playing Modern Warfare II
              </p>
            </Col>
            <Row>
              <img
                src={ashImg}
                alt="Player Image"
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  marginLeft: '149px',
                }}
              />
              <img
                src={rabillIcon}
                alt="Player Image"
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  marginRight: '10px',
                }}
              />
              <p
                style={{
                  fontSize: '16px',
                  fontWeight: 'bold',
                  fontFamily: 'Poppins',
                  marginTop: '15px',
                  margin: 0,
                }}
              >
                ..+2
              </p>
            </Row>
          </Row>
          <Row style={{ marginTop: '20px' }}>
            <img
              src={imageAyush}
              alt="Player Image"
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                marginRight: '10px',
              }}
            />
            <Col>
              {/* <p
                style={{
                  fontWeight: 'bold',
                  fontSize: '16px',
                  fontFamily: 'Poppins',
                  margin: 0,
                }}
              >
                Kavish
              </p> */}
              <Title level={2} style={{ fontSize: '17px' }}>
                Ayush
              </Title>
              <p
                style={{
                  fontSize: '13px',
                  fontFamily: 'Poppins',
                  margin: 0,
                  color: '#BABCBF',
                }}
              >
                Playing Rocket League
              </p>
            </Col>
            <Row>
              <img
                src={imageAyush}
                alt="Player Image"
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  marginLeft: '170px',
                }}
              />
              <img
                src={rabillIcon}
                alt="Player Image"
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  marginRight: '10px',
                }}
              />
              <p
                style={{
                  fontSize: '16px',
                  fontWeight: 'bold',
                  fontFamily: 'Poppins',
                  marginTop: '14px',
                  margin: 0,
                }}
              >
                ..+2
              </p>
            </Row>
          </Row>
          <Row style={{ marginTop: '20px' }}>
            <img
              src={imageRaj}
              alt="Player Image"
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                marginRight: '10px',
              }}
            />
            <Col>
              {/* <p
                style={{
                  fontWeight: 'bold',
                  fontSize: '16px',
                  fontFamily: 'Poppins',
                  margin: 0,
                }}
              >
                Kavish
              </p> */}
              <Title level={2} style={{ fontSize: '17px' }}>
                Raj
              </Title>
              <p
                style={{
                  fontSize: '13px',
                  fontFamily: 'Poppins',
                  margin: 0,
                  color: '#BABCBF',
                }}
              >
                Playing Genshin Impact
              </p>
            </Col>
            <Row>
              <img
                src={imageRaj}
                alt="Player Image"
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  marginLeft: '160px',
                }}
              />
              <img
                src={ashImg}
                alt="Player Image"
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  marginRight: '10px',
                }}
              />
              <p
                style={{
                  fontSize: '16px',
                  fontWeight: 'bold',
                  fontFamily: 'Poppins',
                  marginTop: '14px',
                  margin: 0,
                }}
              >
                ..+2
              </p>
            </Row>
          </Row>
         
        </Col>
      </Row>
      <Row
        style={{
          background: '#F4F5F7',
          margin: '10px 0',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          borderRadius: '20px',
        }}
      >
        <Col style={{ margin: '20px' }}>
          {/* <p
            style={{
              fontWeight: 'bold',
              fontSize: '25px',
              fontFamily: 'Poppins',
              margin: 0,
              marginRight: '15px',
            }}
          >
            {'Register'}
          </p> */}
          <Title level={2} style={{ fontSize: '20px' }}>
            Register
          </Title>
          <Row style={{ marginTop: '20px' }}>
            <Col>
              <label
                style={{
                  display: 'block',
                  marginBottom: '5px',
                  fontSize: '16px',
                  fontFamily: 'Poppins',
                }}
              >
                Game
              </label>
              <Select
                style={{ width: '150%', borderRadius: '5px' }}
                defaultValue="fifa24"
                suffixIcon={
                  <img
                    src={dropdownIcon}
                    alt="Dropdown Icon"
                    style={{ width: '25px', height: '25px' }}
                  />
                }
              >
                <Option value="fifa24">FIFA 24</Option>
                <Option value="cod">Call of Duty</Option>
                <Option value="minecraft">Minecraft</Option>
              </Select>
            </Col>
            <Col style={{ marginLeft: '100px' }}>
              <label
                style={{
                  display: 'block',
                  marginBottom: '5px',
                  fontSize: '16px',
                  fontFamily: 'Poppins',
                }}
              >
                Time Slot
              </label>
              <TimePicker.RangePicker
                style={{ width: '100%', borderRadius: '5px' }}
                format="HH:mm" // Format for 24-hour time
                placeholder={['Start Time', 'End Time']}
                onChange={(time, timeString) => {
                  // Handle the selected time range here
                  console.log('Selected Time Range:', time, timeString);
                }}
                suffixIcon={
                  <img
                    src={timeIcon}
                    alt="Time Icon"
                    style={{ width: '20px', height: '20px' }}
                  />
                }
              />
            </Col>
          </Row>
          <Row style={{ marginTop: '20px' }}>
            <Col>
              <label
                style={{
                  display: 'block',
                  marginBottom: '5px',
                  fontSize: '16px',
                  fontFamily: 'Poppins',
                }}
              >
                Quest Buddy
              </label>
              <TextArea
                autoSize={{ minRows: 2, maxRows: 7 }} // Auto-adjust the height based on content
                style={{ borderRadius: '5px', width: '100%' }}
                placeholder="Enter names..."
              />
            </Col>
            <Col span={24} style={{ textAlign: 'center', marginTop: '50px' }}>
              <Button
                style={{
                  marginLeft: '110px',
                  width: '200px',
                  height: '50px',
                  backgroundColor: '#E94E0F',
                  color: 'white',
                  borderRadius: '15px',
                  fontSize: '16px',
                  fontWeight: 'bold',
                }}
              >
                BOOK
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <img
        src="https://i.ibb.co/wQm7w0n/your-image.png"
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
    </div>
  );
}

export default GameOasis;
