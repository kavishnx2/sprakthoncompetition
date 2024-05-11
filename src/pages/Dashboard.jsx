import React from 'react';
import {
  Space,
  Table,
  Tag,
  Button,
  Col,
  Row,
  Typography,
  Mentions,
  Tabs,
  Tooltip,
} from 'antd';
import { useNavigate } from 'react-router-dom';
import COLORS from '../assets/color';
import { DownloadOutlined, FileImageOutlined } from '@ant-design/icons';
import Navbar from '../components/Navbar';
import GameOasis from './GameOasis';
import Employee_info from './EmployeeInfo';
import SynergySparks from './SynergySparks';
import RedVan from './RedVan';

const { Title, Text, Link } = Typography;
const { getMentions } = Mentions;
const imageSrc =
  'https://media.licdn.com/dms/image/D5603AQFUdBEoOr0TYw/profile-displayphoto-shrink_800_800/0/1683227440776?e=2147483647&v=beta&t=GAMl8mBOLqI7mRv-rdLFaY0kwpnqVyVPGh6WtFehFEY';

const ashImg =
  'data:image/jpeg;base64,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';
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: '1',
    label: 'Game Oasis',
    children: <GameOasis />,
  },
  {
    key: '2',
    label: 'Red Van',
    children: <RedVan />,
  },
  {
    key: '3',
    label: 'Synergy Sparks',
    children: <SynergySparks />,
  },
];

function Dashboard() {
  const navigate = useNavigate();
  const divStyle = {
    width: '300px',
    height: '200px',
    overflow: 'auto',
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
  };

  const cardStyle = {
    width: '100%',
    height: '100%',
    margin: '10px',
    padding: '0px',
    borderRadius: '10px',
    background: `${COLORS.background}`,
    boxShadow: '0px 8px 25px rgba(208, 210, 218, 0.8)',
  };

  return (
    <div style={{ height: '100vh' }}>
      <Row>
        <Col span={24}>
          <div>
            <Navbar />
          </div>
        </Col>
      </Row>
      <Row style={{ height: '100%' }} gutter={15}>
        <Col span={4}>
          <div style={cardStyle}>
            <Employee_info />
          </div>
        </Col>
        <Col
          span={10}
          style={{
            height: '100%',
            overflow: 'auto',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          <div style={{ height: '100%' }}>
            <Row span={10}>
              <div
                style={{
                  width: '100%',
                  margin: '10px',
                  padding: '0px',
                  borderRadius: '10px',
                  //   background: `${COLORS.background}`,
                }}
              >
                <Col>
                  <Title level={2}>Hello Kavish</Title>
                  <Title level={5} style={{ marginTop: '-5px' }}>
                    See What's Happening in Sdworx 👋{' '}
                  </Title>
                </Col>
              </div>
            </Row>
            <Row
              span={10}
              style={{
                width: '100%',
                margin: '10px',
                padding: '10px',
                borderRadius: '10px',
                background: `${COLORS.background}`,
                height: '200px',
                boxShadow: '0px 8px 25px rgba(208, 210, 218, 0.8)',
              }}
              // style={divStyle}}
            >
              <Col style={{ width: '100%' }}>
                <Row>
                  <Col>
                    <Title level={5}>Create post</Title>
                  </Col>
                </Row>
                <Mentions
                  rows={3}
                  placeholder="Create a new post and tag your collegue"
                  options={[
                    {
                      value: 'KavishMojoa',
                      label: 'KavishMojoa',
                    },
                    {
                      value: 'AyushPravesh',
                      label: 'AyushPravesh',
                    },
                    {
                      value: 'RabillMadarboccus',
                      label: 'RabillMadarboccus',
                    },
                    {
                      value: 'AshfaaqJowaheer',
                      label: 'AshfaaqJowaheer',
                    },
                  ]}
                />

                <Row style={{ marginTop: '10px' }} gutter={16}>
                  <Col>
                    <Tooltip title="Upload a photo">
                      <Button
                        type="primary"
                        shape="circle"
                        icon={
                          <FileImageOutlined style={{ color: '#9B9B9B' }} />
                        }
                      />
                    </Tooltip>
                    <Text
                      strong
                      style={{
                        margin: 0,
                        color: '#9B9B9B',
                        marginLeft: '10px',
                      }}
                    >
                      Image
                    </Text>
                  </Col>
                  <Col>
                    <Col>
                      <Tooltip title="Upload a Document">
                        <Button
                          type="primary"
                          shape="circle"
                          icon={
                            <FileImageOutlined style={{ color: '#9B9B9B' }} />
                          }
                        />
                      </Tooltip>
                      <Text
                        strong
                        style={{
                          margin: 0,
                          color: '#9B9B9B',
                          marginLeft: '10px',
                        }}
                      >
                        Document
                      </Text>
                    </Col>
                  </Col>
                  <Col
                    span={12}
                    style={{ display: 'flex', justifyContent: 'end' }}
                  >
                    <Button type="primary" style={{ background: '#E94E0F' }}>
                      Share
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
            {/* //////////////////////////////////////////////// */}
            <Row
              span={10}
              style={{
                width: '100%',
                margin: '10px',
                padding: '10px',
                borderRadius: '10px',
                background: `${COLORS.background}`,
                height: '200px',
                boxShadow: '0px 8px 25px rgba(208, 210, 218, 0.8)',
              }}
              // style={divStyle}}
            >
              <Col style={{ width: '100%' }}>
                <Row style={{ marginBottom: '10px' }}>
                  <Col>
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
                  </Col>
                  <Col>
                    <Title level={5} style={{ margin: '0px' }}>
                      Kavish Mojhoa
                    </Title>
                    <Title
                      type="secondary"
                      style={{ margin: '0px', fontSize: '11px' }}
                    >
                      20 Oct 2023
                    </Title>
                  </Col>
                </Row>
                <div
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '10px',
                    background: '#EAEAEA',
                  }}
                >
                  <Title level={2} style={{ margin: '0px', fontSize: '16px' }}>
                    Mon ressi zwen en bon dimoune 😂 @Ayush
                  </Title>
                  <Title level={2} style={{ margin: '0px', fontSize: '16px' }}>
                    #Funny
                  </Title>
                </div>

                <Row>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginTop: '10px',
                      gap: '10px',
                    }}
                  >
                    <Button
                      className="custom-button-hover"
                      type="primary"
                      shape="round"
                      size={'large'}
                      style={{ paddingTop: '5px' }}
                      textHoverBg={'red'}
                    >
                      <img
                        src="https://i.ibb.co/wJ7Qf2m/02.png"
                        alt="Logo"
                        width="25"
                      ></img>
                    </Button>

                    <Text strong style={{ margin: 0, color: '#9B9B9B' }}>
                      422 Sparks
                    </Text>
                  </div>
                </Row>
              </Col>
            </Row>
            {/* ////////////// */}
            {/* //////////////////////////////////////////////// */}
            <Row
              span={10}
              style={{
                width: '100%',
                margin: '10px',
                padding: '10px',
                borderRadius: '10px',
                background: `${COLORS.background}`,
                height: '470px',
                boxShadow: '0px 8px 25px rgba(208, 210, 218, 0.8)',
              }}
              // style={divStyle}}
            >
              <Col style={{ width: '100%' }}>
                <Row style={{ marginBottom: '10px' }}>
                  <Col>
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
                  </Col>
                  <Col>
                    <Title level={5} style={{ margin: '0px' }}>
                      Ashfaaq Jowaheer
                    </Title>
                    <Title
                      type="secondary"
                      style={{ margin: '0px', fontSize: '11px' }}
                    >
                      20 Oct 2023
                    </Title>
                  </Col>
                </Row>
                <div
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '10px',
                    background: '#EAEAEA',
                  }}
                >
                  <Row>
                    <Col style={{ marginRight: '0px' }}>
                      <Title
                        level={2}
                        style={{
                          margin: '0px',
                          fontSize: '16px',
                          marginBottom: '10px',
                        }}
                      >
                        Team Building at Casela 🦁
                      </Title>
                      <img
                        src={
                          'https://i.ytimg.com/vi/uwxuujK582I/maxresdefault.jpg'
                        }
                        alt="Player Image"
                        style={{
                          //   width: '250px',
                          height: '250px',
                          borderRadius: '10px',
                          // marginRight: '10px',
                        }}
                      />
                    </Col>
                    <Col
                      span={24}
                      style={{ display: 'flex', justifyContent: 'end' }}
                    >
                      <Button type="primary" style={{ background: '#E94E0F' }}>
                        Register
                      </Button>
                    </Col>
                  </Row>
                </div>

                <Row>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginTop: '10px',
                      gap: '10px',
                    }}
                  >
                    <Button
                      className="custom-button-hover"
                      type="primary"
                      shape="round"
                      size={'large'}
                      style={{ paddingTop: '5px' }}
                      textHoverBg={'red'}
                    >
                      <img
                        src="https://i.ibb.co/wJ7Qf2m/02.png"
                        alt="Logo"
                        width="25"
                      ></img>
                    </Button>

                    <Text strong style={{ margin: 0, color: '#9B9B9B' }}>
                      231 Sparks
                    </Text>
                  </div>
                </Row>
              </Col>
            </Row>
            {/* //////////////////////////////////////////////// */}
            <Row
              span={10}
              style={{
                width: '100%',
                margin: '10px',
                padding: '10px',
                borderRadius: '10px',
                background: `${COLORS.background}`,
                height: '300px',
                boxShadow: '0px 8px 25px rgba(208, 210, 218, 0.8)',
              }}
              // style={divStyle}}
            >
              <Col style={{ width: '100%' }}>
                <Row style={{ marginBottom: '10px' }}>
                  <Col>
                    <img
                      src={
                        'https://media.licdn.com/dms/image/C4D03AQGf6MVZWcDWYw/profile-displayphoto-shrink_800_800/0/1653889251990?e=2147483647&v=beta&t=mQQ2TxjAaJ638HdJsEVWQ_1exTE4pAp96HZZoUvkVJs'
                      }
                      alt="Player Image"
                      style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        marginRight: '10px',
                      }}
                    />
                  </Col>
                  <Col>
                    <Title level={5} style={{ margin: '0px' }}>
                      Ayush Praveer (HR)
                    </Title>
                    <Title
                      type="secondary"
                      style={{ margin: '0px', fontSize: '11px' }}
                    >
                      20 Oct 2023
                    </Title>
                  </Col>
                </Row>
                <div
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '10px',
                    background: '#EAEAEA',
                  }}
                >
                  <Row justify="space-between">
                    <Col style={{ marginRight: '20px' }}>
                      <Title
                        level={2}
                        style={{ margin: '0px', fontSize: '16px' }}
                      >
                        New Fullstack Developer!
                      </Title>
                      <Title
                        level={2}
                        style={{ margin: '0px', fontSize: '16px' }}
                      >
                        Working in the department of Interns 🔥
                      </Title>
                    </Col>

                    <img
                      src={imageSrc}
                      alt="Player Image"
                      style={{
                        width: '150px',
                        height: '150px',
                        borderRadius: '10px',
                        // marginRight: '10px',
                      }}
                    />
                  </Row>
                </div>

                <Row>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginTop: '10px',
                      gap: '10px',
                    }}
                  >
                    <Button
                      className="custom-button-hover"
                      type="primary"
                      shape="round"
                      size={'large'}
                      style={{ paddingTop: '5px' }}
                      textHoverBg={'red'}
                    >
                      <img
                        src="https://i.ibb.co/wJ7Qf2m/02.png"
                        alt="Logo"
                        width="25"
                      ></img>
                    </Button>

                    <Text strong style={{ margin: 0, color: '#9B9B9B' }}>
                      6 Sparks
                    </Text>
                  </div>
                </Row>
              </Col>
            </Row>
            {/* //////////////////////////////////////////////// */}
            <Row
              span={10}
              style={{
                width: '100%',
                margin: '10px',
                padding: '10px',
                borderRadius: '10px',
                background: `${COLORS.background}`,
                height: '280px',
                boxShadow: '0px 8px 25px rgba(208, 210, 218, 0.8)',
              }}
              // style={divStyle}}
            >
              <Col style={{ width: '100%' }}>
                <Row style={{ marginBottom: '10px' }}>
                  <Col>
                    <img
                      src={
                        'https://media.licdn.com/dms/image/C4D03AQGf6MVZWcDWYw/profile-displayphoto-shrink_800_800/0/1653889251990?e=2147483647&v=beta&t=mQQ2TxjAaJ638HdJsEVWQ_1exTE4pAp96HZZoUvkVJs'
                      }
                      alt="Player Image"
                      style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        marginRight: '10px',
                      }}
                    />
                  </Col>
                  <Col>
                    <Title level={5} style={{ margin: '0px' }}>
                      Ayush Praveer (HR)
                    </Title>
                    <Title
                      type="secondary"
                      style={{ margin: '0px', fontSize: '11px' }}
                    >
                      20 Oct 2023
                    </Title>
                  </Col>
                </Row>
                <div
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '10px',
                    background: '#EAEAEA',
                  }}
                >
                  <Row justify="space-between">
                    <Col style={{ marginRight: '20px' }}>
                      <Title
                        level={2}
                        style={{ margin: '0px', fontSize: '16px' }}
                      >
                        New company policy
                      </Title>
                      <Row align="middle">
                        <img
                          src={
                            'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Circle-icons-document.svg/1024px-Circle-icons-document.svg.png'
                          }
                          alt="Player Image"
                          style={{
                            width: '75px',
                            borderRadius: '10px',
                            marginTop: '15px',
                          }}
                        />

                        <Link
                          underline
                          href="https://www.sdworx.com/en-en/en"
                          target="_blank"
                          style={{
                            margin: '0px',
                            fontSize: '16px',
                            marginLeft: '20px',
                            color: COLORS.link,
                          }}
                        >
                          https://www.sdworx.com/policy
                        </Link>
                      </Row>
                    </Col>
                  </Row>
                </div>

                <Row>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginTop: '10px',
                      gap: '10px',
                    }}
                  >
                    <Button
                      className="custom-button-hover"
                      type="primary"
                      shape="round"
                      size={'large'}
                      style={{ paddingTop: '5px' }}
                      textHoverBg={'red'}
                    >
                      <img
                        src="https://i.ibb.co/wJ7Qf2m/02.png"
                        alt="Logo"
                        width="25"
                      ></img>
                    </Button>

                    <Text strong style={{ margin: 0, color: '#9B9B9B' }}>
                      55 Sparks
                    </Text>
                  </div>
                </Row>
              </Col>
            </Row>
          </div>
        </Col>

        <Col span={10}>
          <div style={cardStyle}>
            {/* <GameOasis /> */}
            <Tabs
              style={{ backgroundColor: COLORS.white }}
              defaultActiveKey="1"
              items={items}
              onChange={onChange}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
