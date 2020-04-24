import React from "react";
import TextFieldLabelHelper from "@rakuten-rex/text-field/TextFieldLabelHelper";

export default function MyComponent() {
  return (
    <TextFieldLabelHelper
      id="age"
      name="firstname"
      placeholder="Placeholder"
      htmlFor="firstname"
      label="Label"
      labelId="labelId"
      helper="Helper Text"
      required
    />
  );
}
