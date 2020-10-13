/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';
import Button from './Button';
import Checkbox from './Checkbox';
import FormGroup from './FormGroup';
import Grid from './Grid';
import Icons from './Icons';
import Panel from './Panel';
import Password from './Password';
import RadioButton from './RadioButton';
import Select from './Select';
import Slider from './Slider';
import Stepper from './Stepper';
import Switch from './Switch';
import TextField from './TextField';
import Textarea from './Textarea';
import Track from './Track';
import Typography from './Typography';

export const rootPath = '/react-app-code-samples';

export default function App() {
  return (
    <Router>
      {/* Home Routing */}
      <Home rootPath={rootPath} />
      {/* Components Pages Routing */}
      <Button />
      <Checkbox />
      <FormGroup />
      <Grid />
      <Icons />
      <Panel />
      <Password />
      <RadioButton />
      <Select />
      <Slider />
      <Stepper />
      <Switch />
      <TextField />
      <Textarea />
      <Track />
      <Typography />
    </Router>
  );
}
