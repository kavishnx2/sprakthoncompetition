
import React from 'react';
import { Space, Table, Tag, Button } from 'antd';
import { useNavigate } from "react-router-dom";

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  }, 
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];


function SecondPage() {
  const navigate = useNavigate();
  const divStyle = {
    width: '300px', // Set the width as per your design
    height: '200px', // Set the height as per your design
    overflow: 'auto', // Enable scrolling when content overflows the div
    // border: '1px solid #ccc', // Add a border for better visibility
    scrollbarWidth: 'none', // Remove the scrollbar width for Firefox
    msOverflowStyle: 'none', // Remove the scrollbar for Internet Explorer/Edge
  };

  const webkitStyles = {
    scrollbar: 'none', // Remove the scrollbar for WebKit-based browsers (e.g., Chrome, Safari)
  };
  return (
    <div>
    <Button type="primary" onClick={() =>  navigate("/first")}>Primary Button</Button>
    sgsgzsg
    <Table columns={columns} dataSource={data} />
    <div style={divStyle}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        <p>Sed nisi. Nulla quis sem at nibh elementum imperdiet.</p>
        <p>Duis sagittis ipsum. Praesent mauris.</p>
        <p>Fusce nec tellus sed augue semper porta.</p>
        <p>Mauris massa. Vestibulum lacinia arcu eget nulla.</p>
        <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
        <p>Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.</p>
        <p>Curabitur tortor. Pellentesque nibh. Aenean quam.</p>
        <p>In scelerisque sem at dolor.</p>
        <p>Mauris massa.</p>
        <p>Vestibulum lacinia arcu eget nulla.</p>
        <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
        <p>Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.</p>
        <p>Curabitur tortor. Pellentesque nibh. Aenean quam.</p>
        <p>In scelerisque sem at dolor.</p>
    </div>
    </div>
  )
}

export default SecondPage


