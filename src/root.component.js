// TODO: find a way how to import icons
// import { UserOutlined } from '@ant-design/icons';

import React from "react";
import { Link } from "@reach/router";
import {
  Layout,
  Menu,
  Breadcrumb,
  Input,
  Form,
  Avatar,
  Dropdown,
  isUserSignedIn,
} from "@extrascript/components";
import { links } from "./root.helper.js";

const { Header, Content, Footer } = Layout;
const { Item } = Menu;
const { Search } = Input;

const searchFormView = (
  <Form
    method="GET"
    layout="inline"
    style={{
      width: "220px",
      height: "31px",
      margin: "16px 24px 16px 32px",
      float: "left",
    }}
  >
    {/* TODO: redirect on search results page when Enter key pressed */}
    <Search name="q" placeholder="input search loading deault" loading />
  </Form>
);

const mainMenuView = (
  <Menu
    theme="dark"
    mode="horizontal"
    defaultSelectedKeys={["/"]}
    style={{ float: "left" }}
  >
    <Item key="/">
      <Link to="/">Home</Link>
    </Item>
    {links.map((link) => {
      return (
        <Item key={link.href}>
          <Link to={link.href}>{link.name}</Link>
        </Item>
      );
    })}
  </Menu>
);

const userMenuView = (
  <Menu>
    {/*<Menu.Item icon={<UserOutlined />}>*/}
    <Menu.Item>
      <Link to="/profile">Profile</Link>
      {/*<a rel="noopener noreferrer" href="/profile">*/}
      {/*  Profile*/}
      {/*</a>*/}
    </Menu.Item>
    <Menu.Item>
      <Link to="/settings">Settings</Link>
      {/*<a rel="noopener noreferrer" href="/settings">*/}
      {/*  Settings*/}
      {/*</a>*/}
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item>
      <a rel="noopener noreferrer" href="/logout">
        Sing Out
      </a>
    </Menu.Item>
  </Menu>
);

const breadcrumbsView = (
  <Breadcrumb style={{ margin: "16px 0" }}>
    <Breadcrumb.Item>Home</Breadcrumb.Item>
    <Breadcrumb.Item>List</Breadcrumb.Item>
    <Breadcrumb.Item>App</Breadcrumb.Item>
  </Breadcrumb>
);

const footerView = (
  <Footer style={{ textAlign: "center" }}>
    OfiSpace ©2020 Created by ExtraScript
  </Footer>
);

export default function Root(props) {
  const isSignedIn = isUserSignedIn();

  return (
    <Layout className="layout">
      <Header>
        <div
          className="logo"
          style={{
            width: "120px",
            height: "31px",
            background: "rgba(255, 255, 255, 0.2)",
            margin: "16px 24px 16px 0",
            float: "left",
          }}
        />
        {isSignedIn && (
          <>
            {mainMenuView}
            {searchFormView}
            <Dropdown overlay={userMenuView} placement="bottomRight">
              <Avatar>USER</Avatar>
            </Dropdown>
          </>
        )}
      </Header>
      <Content style={{ minHeight: "calc(100vh - 130px)", padding: "0 50px" }}>
        {isSignedIn && <>{breadcrumbsView}</>}
        {!isSignedIn && <div style={{ margin: "50px 0" }}></div>}
        <div
          className="site-layout-content"
          style={{ background: "white", padding: "24px" }}
        >
          <div id="content"></div>
        </div>
      </Content>
      {footerView}
    </Layout>
  );
}

// export default function Root(props) {
//   return <section>{props.name} is mounted!</section>;
// }
