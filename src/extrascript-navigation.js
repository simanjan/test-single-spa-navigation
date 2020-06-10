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
    domElementGetter: () => document.getElementById("content"),
  },
});

registerApplication({
  name: "@extrascript/calendar",
  app: () => System.import("@extrascript/calendar"),
  activeWhen: "/calendar",
  customProps: {
    domElementGetter: () => document.getElementById("content"),
  },
});

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  errorBoundary(err, info, props) {
    // eslint-disable-next-line no-console
    console.log("error navigation", err, info, props);
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
