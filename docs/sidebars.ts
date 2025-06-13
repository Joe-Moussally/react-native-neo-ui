import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // Getting Started sidebar
  guideSidebar: ["getting-started", "installation", "theming", "customization"],

  // Components sidebar
  componentsSidebar: [
    {
      type: "category",
      label: "Form Components",
      items: [
        "components/button",
        "components/textfield",
        "components/select",
        "components/togglebutton",
      ],
    },
    {
      type: "category",
      label: "Data Display",
      items: [
        "components/typography",
        "components/avatar",
        "components/badge",
        "components/chip",
        "components/rating",
        "components/ticker",
      ],
    },
    {
      type: "category",
      label: "Feedback",
      items: [
        "components/alert",
        "components/toast",
        "components/progress",
        "components/skeleton",
      ],
    },
    {
      type: "category",
      label: "Layout",
      items: [
        "components/box",
        "components/themedview",
        "components/themedtext",
        "components/parallaxscrollview",
      ],
    },
    {
      type: "category",
      label: "Navigation",
      items: ["components/screen", "components/tabs"],
    },
  ],
};

export default sidebars;
