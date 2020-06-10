// TODO: find a way how to import icons
// import { UserOutlined } from '@ant-design/icons';
import React from "react";
// import { Link } from "@reach/router";
// import {
//   Layout,
//   Menu,
//   Breadcrumb,
//   Input,
//   Form,
//   Avatar,
//   Dropdown,
// } from "@extrascript/components";
// import { links } from "./root.helper.js";

// const { Header, Content, Footer } = Layout;
// const { Item } = Menu;
// const { Search } = Input;

// const menu = (
//   <Menu>
//     {/*<Menu.Item icon={<UserOutlined />}>*/}
//     <Menu.Item>
//       <a rel="noopener noreferrer" href="/profile">
//         Profile
//       </a>
//     </Menu.Item>
//     <Menu.Item>
//       <a rel="noopener noreferrer" href="/settings">
//         Settings
//       </a>
//     </Menu.Item>
//     <Menu.Divider />
//     <Menu.Item>
//       <a rel="noopener noreferrer" href="/logout">
//         Sing Out
//       </a>
//     </Menu.Item>
//   </Menu>
// );

// export default function Root(props) {
//   return (
//     <Layout className="layout">
//       <Header>
//         <div
//           className="logo"
//           style={{
//             width: "120px",
//             height: "31px",
//             background: "rgba(255, 255, 255, 0.2)",
//             margin: "16px 24px 16px 0",
//             float: "left",
//           }}
//         />
//         <Menu
//           theme="dark"
//           mode="horizontal"
//           defaultSelectedKeys={["/"]}
//           style={{ float: "left" }}
//         >
//           <Item key="/">
//             <Link to="/">Home</Link>
//           </Item>
//           {links.map((link) => {
//             return (
//               <Item key={link.href}>
//                 <Link to={link.href}>{link.name}</Link>
//               </Item>
//             );
//           })}
//         </Menu>
//         <Form
//           layout="inline"
//           style={{
//             width: "220px",
//             height: "31px",
//             margin: "16px 24px 16px 32px",
//             float: "left",
//           }}
//         >
//           <Search placeholder="input search loading deault" loading />
//         </Form>
//         <Dropdown overlay={menu} placement="bottomRight">
//           <Avatar>USER</Avatar>
//         </Dropdown>
//       </Header>
//       <Content style={{ height: "calc(100vh - 130px)", padding: "0 50px" }}>
//         <Breadcrumb style={{ margin: "16px 0" }}>
//           <Breadcrumb.Item>Home</Breadcrumb.Item>
//           <Breadcrumb.Item>List</Breadcrumb.Item>
//           <Breadcrumb.Item>App</Breadcrumb.Item>
//         </Breadcrumb>
//         <div
//           className="site-layout-content"
//           style={{ background: "white", padding: "24px" }}
//         >
//           <div id="auth"></div>
//           <div id="content"></div>
//         </div>
//       </Content>
//       <Footer style={{ textAlign: "center" }}>
//         OfiSpace ©2020 Created by ExtraScript
//       </Footer>
//     </Layout>
//   );
// }

export default function Root(props) {
  return <section>{props.name} is mounted!</section>;
}
