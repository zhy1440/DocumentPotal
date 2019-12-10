import { Breadcrumb, Layout, Menu } from 'antd';
import React from 'react';
import { useTranslation, withTranslation, Trans } from 'react-i18next';
import { Route } from "react-router-dom";
import TopBar from './TopBar';
import SideMenuPanel from './plan/SideMenuPanel';
import PlanMasterView from './plan/PlanMasterView';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const Main = (props: any) => {
    const { children } = props
    const { t, i18n } = useTranslation();
    return <Layout style={{ paddingTop: 56, background: "#fff" }}>
        <Route path="/:menu?" component={TopBar}></Route>
        <Content>
            {children}
            <Route path="/plan">
                <PlanMasterView></PlanMasterView>
            </Route>
        </Content>
    </Layout >
}
export default Main