import React from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';
import './main.html';
 
import App from '../imports/ui/App.js';
 
Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
});