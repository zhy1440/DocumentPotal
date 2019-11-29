import { Breadcrumb, Layout, Menu } from 'antd';
import React from 'react';
import ButtonAppBar from './ButtonAppBar';
import SideNav from './SideNav';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const Main = (props: any) => {
    const { children } = props
    return <Layout>
        <ButtonAppBar></ButtonAppBar>
        <Layout>
            <Sider width={200} style={{ background: '#fff' }}>
                <SideNav></SideNav>
            </Sider>
            <Layout style={{ padding: '0 24px 24px', background: "#fff" }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Content
                    style={{
                        background: '#fff',
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                    }}
                >
                    {children}
                </Content>
            </Layout>
        </Layout>
    </Layout>
}
export default Main