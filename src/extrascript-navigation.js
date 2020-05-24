import "./set-public-path";
import React from "react";
import ReactDOM from "react-dom";
import { registerApplication } from "single-spa";
import singleSpaReact from "single-spa-react";
import Root from "./root.component";

registerApplication({
  name: "@extrascript/auth",
  app: () => System.import("@extrascript/auth"),
  activeWhen: "/",
  customProps: {
    domElementGetter: () => document.getElementById("auth"),
  },
});

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  errorBoundary(err, info, props) {
    // console.log("error navigation", err, info, props);
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
