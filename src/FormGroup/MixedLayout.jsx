import React from 'react';
import FormGroup from '@rakuten-rex/form-group';

export default function MyComponent() {
  return (
    <React.Fragment>
      <FormGroup mb={3}>
        <label htmlFor="firstName">First Name:</label>
        <br />
        <input id="firstName" type="text" defaultValue="First Name" />
      </FormGroup>
      <FormGroup mb={3}>
        <label htmlFor="lastName">Last Name:</label>
        <br />
        <input id="lastName" type="text" defaultValue="Last Name" />
      </FormGroup>
      <FormGroup>
        <FormGroup mb={3}>
          <label htmlFor="email">Mail Address:</label>
          <br />
          <input id="email" type="text" defaultValue="Mail Address" />
        </FormGroup>
        <FormGroup mb={3}>
          <label htmlFor="password">Password:</label>
          <br />
          <input id="password" type="text" defaultValue="Password" />
        </FormGroup>
      </FormGroup>
      <FormGroup mb={3}>
        <FormGroup row={true} mr={3}>
          <label htmlFor="month">Month:</label>
          <br />
          <input id="month" type="text" defaultValue="month" readOnly={true} />
        </FormGroup>
        <FormGroup row={true}>
          <label htmlFor="year">Year:</label>
          <br />
          <input id="year" type="text" defaultValue="year" readOnly={true} />
        </FormGroup>
      </FormGroup>
    </React.Fragment>
  );
}
