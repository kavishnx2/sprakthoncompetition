import React, { useState } from 'react';
import { Row, Col, Select, Input, Button, Typography } from 'antd';
import { TimePicker } from 'antd';
import moment from 'moment';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
const { TextArea } = Input;
const { Option } = Select;
const { Title, Text, Link } = Typography;

function RedVan() {
  const [quantity, setQuantity] = useState(1); // Initialize quantity with 1

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div>
      <div
        style={{
          position: 'absolute',
          top: '5px',
          left: '10px',
          margin: '40px',
        }}
      >
        {/* <h1 style={{ fontSize: '30px', color: '#505050' }}>What's in today's menu</h1> */}
        <Title level={2} style={{ fontSize: '20px' }}>
          What's in today's menu
        </Title>
      </div>

      <div
        style={{
          position: 'absolute',
          top: '80px',
          left: '10px',
          width: '95%',
          margin: '20px',
          marginTop: '40px',
          backgroundColor: '#D9D9D9',
          display: 'flex',
          padding: '10px',
          borderRadius: '10px',
        }}
      >
        <div>
          <img
            src="https://natashaskitchen.com/wp-content/uploads/2023/06/Cheeseburger.jpg"
            alt="Burger"
            style={{
              width: '150px',
              height: 'auto',
              borderRadius: '10px',
            }}
          />
        </div>
        <div style={{ marginLeft: '20px' }}>
          {/* <h2
            style={{
              fontSize: '24px',
              color: 'black',
              fontWeight: 'bold',
              marginBottom: '30px',
            }}
          >
            SD Veggie
            
          </h2> */}
          <Title level={2} style={{ fontSize: '20px' }}>
            SD Veggie
          </Title>
          <p style={{ fontSize: '22px', color: '#AFAFAF' }}>
            This is a food to eat, and it is very good.
          </p>
        </div>
        <div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginLeft: '50px',
              marginTop: '25%',
            }}
          >
            <div
              style={{
                backgroundColor: '#F8AD07',
                borderRadius: '10px',
                width: '150px',
                height: '50px',
                display: 'flex',
                justifyContent: 'space-between', // Add space between the buttons
                alignItems: 'center',
                padding: '5px', // Add some padding
              }}
            >
              <Button
                icon={<MinusOutlined />}
                onClick={decrementQuantity}
                style={{ color: 'white', border: 'none' }}
              />
              <span>{quantity}</span>
              <Button
                icon={<PlusOutlined />}
                onClick={incrementQuantity}
                style={{ color: 'white', border: 'none' }}
              />
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          top: '240px',
          left: '10px',
          width: '95%',
          margin: '20px',
          marginTop: '80px', // Adjust the margin-top as needed (e.g., 40px)
          backgroundColor: '#D9D9D9',
          display: 'flex',
          padding: '10px',
          borderRadius: '10px',
        }}
      >
        <div>
          <img
            src="https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg"
            alt="Burger"
            style={{
              width: '150px',
              height: 'auto',
              borderRadius: '10px',
            }}
          />
        </div>
        <div style={{ marginLeft: '20px' }}>
          {/* <h2
            style={{
              fontSize: '24px',
              color: 'black',
              fontWeight: 'bold',
              marginBottom: '30px',
            }}
          >
            Worx Burger
          </h2> */}
          <Title level={2} style={{ fontSize: '20px' }}>
            Worx Burger
          </Title>
          <p style={{ fontSize: '22px', color: '#AFAFAF' }}>
            This is a food to eat, and it is very good.
          </p>
        </div>
        <div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginLeft: '50px',
              marginTop: '25%',
            }}
          >
            <div
              style={{
                backgroundColor: '#F8AD07',
                borderRadius: '10px',
                width: '150px',
                height: '50px',
                display: 'flex',
                justifyContent: 'space-between', // Add space between the buttons
                alignItems: 'center',
                padding: '5px', // Add some padding
              }}
            >
              <Button
                icon={<MinusOutlined />}
                onClick={decrementQuantity}
                style={{ color: 'white', border: 'none' }}
              />
              <span>{quantity}</span>
              <Button
                icon={<PlusOutlined />}
                onClick={incrementQuantity}
                style={{ color: 'white', border: 'none' }}
              />
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          top: '440px',
          left: '10px',
          width: '95%',
          margin: '20px',
          marginTop: '80px', // Adjust the margin-top as needed (e.g., 40px)
          backgroundColor: '#D9D9D9',
          display: 'flex',
          padding: '10px',
          borderRadius: '10px',
        }}
      >
        <div>
          <img
            src="https://www.recipetineats.com/wp-content/uploads/2022/08/Stack-of-cheeseburgers.jpg"
            alt="Burger"
            style={{
              width: '150px',
              height: 'auto',
              borderRadius: '10px',
            }}
          />
        </div>
        <div style={{ marginLeft: '20px' }}>
          {/* <h2
            style={{
              fontSize: '24px',
              color: 'black',
              fontWeight: 'bold',
              marginBottom: '30px',
            }}
          >
            Mega Worx Deluxe
          </h2> */}
          <Title level={2} style={{ fontSize: '20px' }}>
            Mega Worx Deluxe
          </Title>
          <p style={{ fontSize: '22px', color: '#AFAFAF' }}>
            This is a food to eat, and it is very good.
          </p>
        </div>
        <div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginLeft: '50px',
              marginTop: '25%',
            }}
          >
            <div
              style={{
                backgroundColor: '#F8AD07',
                borderRadius: '10px',
                width: '150px',
                height: '50px',
                display: 'flex',
                justifyContent: 'space-between', // Add space between the buttons
                alignItems: 'center',
                padding: '5px', // Add some padding
              }}
            >
              <Button
                icon={<MinusOutlined />}
                onClick={decrementQuantity}
                style={{ color: 'white', border: 'none' }}
              />
              <span>{quantity}</span>
              <Button
                icon={<PlusOutlined />}
                onClick={incrementQuantity}
                style={{ color: 'white', border: 'none' }}
              />
            </div>
          </div>
        </div>
      </div>

      <img
        src="https://i.ibb.co/wQm7w0n/your-image.png"
        alt="Your Image"
        style={{
          position: 'absolute',
          bottom: '10px',
          right: '10px',
          opacity: 0.13,
          width: '400px',
          height: 'auto',
        }}
      />
    </div>
  );
}

export default RedVan;
