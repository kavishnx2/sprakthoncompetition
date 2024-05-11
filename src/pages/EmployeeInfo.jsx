import { Button, Space } from 'antd';
import { fetchData } from '../../utils/apiFunctions';
import url from '../../utils/url';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import COLORS from '../assets/color';
import { Col, Row } from 'antd';
import '../styles/Firstpage.css';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, message } from 'antd';
import { Typography } from 'antd';

const { Title } = Typography;

const onClick = ({ key }) => {
    message.info(`Click on item ${key}`);
};

import '../styles/Emp.css';


function Employee_info() {
    //const navigate = useNavigate();
    

    return (
        
        <div class="emp-info">
            <h4>Profile</h4>
            <img src="data:image/jpeg;base64,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" alt="Your Image" class="rounded-image"></img>
            <h1>@KavishMojhoa</h1>
            <h3>Full Stack Developer</h3>

            <h4>Skills</h4>
            <div class="skills-container">
                <div class="rounded-box">
                    <p>React Framework</p>
                </div>
                <div class="rounded-box">
                    <p>JavaScript Framework</p>
                </div>
                <div class="rounded-box">
                    <p>UI/UX Design</p>
                </div>
            </div>

            <h4>Preferred Food and Games</h4>
            <div class="skills-container">
                <div class="rounded-box-1">
                    <p>FIFA 24</p>
                </div>
                <div class="rounded-box-1">
                    <p>
                        Mc Veggie
                    </p>
                </div>
            </div>
            <h4>Achievements</h4>
            <img src="https://i.ibb.co/Cz79Ndb/Group-62.png" alt="Your Image" class="space"></img>

        </div>

    );
}

export default Employee_info;
