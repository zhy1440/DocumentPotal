import React from 'react';
import { Menu, Icon } from 'antd';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const { SubMenu } = Menu;
const menu = [
    { key: "ROUTES", icon: "schedule" }, { key: "TICKETS", icon: "red-envelop" }, { key: "ACCOMMODATION", icon: "" }, { key: "MARK" }, { key: "SCENE" }
]


const SideMenuPanel = () => {
    const { t } = useTranslation();
    console.log(FontAwesomeIcon)
    // return <FontAwesomeIcon icon="coffee" />
    return <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0 }}
    >
        {menu.map(m =>
            <Menu.Item key={m.key}>
                {/* <FontAwesomeIcon icon="coffee" /> */}
                <Icon type={m.icon} style={{ fontSize: '16px', color: '#08c' }} />
                {t(m.key)}
            </Menu.Item>
        )}
    </Menu>
}
export default SideMenuPanel