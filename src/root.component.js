import React from "react";
import { Link } from "@reach/router";
// import {
//   Button,
//   Layout,
//   Menu,
//   MenuItem,
//   Breadcrumb,
// } from "@extrascript/components";
import { links } from "./root.helper.js";

// const { Header, Content, Footer } = Layout;
// const { Item } = Menu;

export default function Root(props) {
  return <section>{props.name} is mounted!</section>;
}

// export default function Root(props) {
//   return (
//     <Layout className="layout">
//       <Header>
//         <div className="logo" />
//         <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
//           {/*<MenuItem key="1"></MenuItem>*/}
//           {/*<Menu.Item key="2">nav 2</Menu.Item>*/}
//           {/*<Menu.Item key="3">nav 3</Menu.Item>*/}
//         </Menu>
//         <div id="auth"></div>
//       </Header>
//       <Content style={{ padding: "0 50px" }}>
//         <Breadcrumb style={{ margin: "16px 0" }}>
//           <Breadcrumb.Item>Home</Breadcrumb.Item>
//           <Breadcrumb.Item>List</Breadcrumb.Item>
//           <Breadcrumb.Item>App</Breadcrumb.Item>
//         </Breadcrumb>
//         <div className="site-layout-content">
//           {links.map((link) => {
//             return (
//               <Link key={link.href} to={link.href}>
//                 {link.name}
//               </Link>
//             );
//           })}
//         </div>
//       </Content>
//       <Footer style={{ textAlign: "center" }}>
//         Ant Design ©2018 Created by Ant UED
//       </Footer>
//     </Layout>
//   );
// }
