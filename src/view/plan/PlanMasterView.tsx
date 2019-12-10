import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import { useTranslation } from 'react-i18next';
import SideMenuPanel from './SideMenuPanel';
import { Route } from 'react-router-dom';

const { Header, Content, Sider } = Layout;
const PlanMasterView = () => {
    const { t } = useTranslation();
    return <Layout>
        <Sider width={300} style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0
        }}>
            <Route path="/plan/:secondMenu?" component={SideMenuPanel}></Route>
        </Sider>
        <Content style={{ paddingLeft: 300}}>
            <Layout style={{ padding: '0 24px 24px'}}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>{t('home')}</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Content
                    style={{
                        // background: '#fff',
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                    }}
                >
                </Content>
            </Layout>
        </Content>
    </Layout>
}
export default PlanMasterView