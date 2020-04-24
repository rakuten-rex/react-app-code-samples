import { lazy } from "react";
import Page from "../Page";

export default function Index() {
  return Page("TextField", [
    {
      name: "Default",
      Component: lazy(() => import("./Default")),
    },
    {
      name: "Disabled",
      Component: lazy(() => import("./Disabled")),
    },
    {
      name: "Error",
      Component: lazy(() => import("./Error")),
    },
    {
      name: "Valid",
      Component: lazy(() => import("./Valid")),
    },
    {
      name: "Required",
      Component: lazy(() => import("./Required")),
    },
    {
      name: "With Default Value",
      Component: lazy(() => import("./WithDefaultValue")),
    },
    {
      name: "Theme",
      Component: lazy(() => import("./Theme")),
    },
    {
      name: "TextFieldLabelHelper Default",
      Component: lazy(() => import("./TextFieldLabelHelperDefault")),
    },
    {
      name: "TextFieldLabelHelper Disabled",
      Component: lazy(() => import("./TextFieldLabelHelperDisabled")),
    },
    {
      name: "TextFieldLabelHelper Error",
      Component: lazy(() => import("./TextFieldLabelHelperError")),
    },
    {
      name: "TextFieldLabelHelper Valid",
      Component: lazy(() => import("./TextFieldLabelHelperValid")),
    },
    {
      name: "TextFieldLabelHelper Required",
      Component: lazy(() => import("./TextFieldLabelHelperRequired")),
    },
    {
      name: "TextFieldLabelHelper With Default Value",
      Component: lazy(() => import("./TextFieldLabelHelperWithDefaultValue")),
    },
    {
      name: "TextFieldLabelHelper Theme",
      Component: lazy(() => import("./TextFieldLabelHelperTheme")),
    },
  ]);
}
