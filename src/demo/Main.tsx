import { Breadcrumb, Layout, Menu } from 'antd';
import React from 'react';
import { Route } from "react-router-dom";
import ButtonAppBar from './ButtonAppBar';
import SideNav from './SideNav';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const Main = (props: any) => {
    const { children } = props
    return <Layout style={{ padding: '64px 0', background: "#fff" }}>
        <Route path="/:topMenu?/:secondMenu?" component={ButtonAppBar}></Route>
        <Content>
            {children}
            <Route path="/todos">
                <Layout>
                    <Sider width={300} style={{
                        overflow: 'auto',
                        height: '100vh',
                        position: 'fixed',
                        left: 0,
                    }}>
                        <Route path="/todos/:secondMenu?" component={SideNav}></Route>
                    </Sider>
                    <Content style={{ paddingLeft: 300, background: "#fff" }}>
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
                            </Content>
                        </Layout>
                    </Content>
                </Layout>
            </Route>
        </Content>
    </Layout >
}
export default Main