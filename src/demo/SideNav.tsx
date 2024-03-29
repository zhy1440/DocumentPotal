import React from 'react';
import { Menu, Icon } from 'antd';

const { SubMenu } = Menu;

const SideNav = () =>
    <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0 }}
    >
        <SubMenu
            key="sub1"
            title={
                <span>
                    <Icon type="user" />
                    subnav 1
              </span>
            }
        >
            <Menu.Item key="1">option1</Menu.Item>
            <Menu.Item key="2">option2</Menu.Item>
            <Menu.Item key="3">option3</Menu.Item>
            <Menu.Item key="4">option4</Menu.Item>
            <Menu.Item key="5">option1</Menu.Item>
            <Menu.Item key="6">option2</Menu.Item>
            <Menu.Item key="7">option3</Menu.Item>
            <Menu.Item key="8">option4</Menu.Item>
            <Menu.Item key="9">option1</Menu.Item>
            <Menu.Item key="10">option2</Menu.Item>
            <Menu.Item key="11">option3</Menu.Item>
            <Menu.Item key="12">option4</Menu.Item>
            <Menu.Item key="13">option1</Menu.Item>
            <Menu.Item key="14">option2</Menu.Item>
            <Menu.Item key="15">option3</Menu.Item>
            <Menu.Item key="16">option4</Menu.Item>
            <Menu.Item key="17">option1</Menu.Item>
            <Menu.Item key="18">option2</Menu.Item>
            <Menu.Item key="19">option3</Menu.Item>
            <Menu.Item key="20">option4</Menu.Item>
        </SubMenu>
        <SubMenu
            key="sub2"
            title={
                <span>
                    <Icon type="laptop" />
                    subnav 2
              </span>
            }
        >
            <Menu.Item key="5">option5</Menu.Item>
            <Menu.Item key="6">option6</Menu.Item>
            <Menu.Item key="7">option7</Menu.Item>
            <Menu.Item key="8">option8</Menu.Item>
        </SubMenu>
        <SubMenu
            key="sub3"
            title={
                <span>
                    <Icon type="notification" />
                    subnav 3
              </span>
            }
        >
            <Menu.Item key="9">option9</Menu.Item>
            <Menu.Item key="10">option10</Menu.Item>
            <Menu.Item key="11">option11</Menu.Item>
            <Menu.Item key="12">option12</Menu.Item>
        </SubMenu>
    </Menu>
    export default SideNav