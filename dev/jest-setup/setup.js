/* eslint no-unused-vars: "off" */
import raf from './temp-polyfills';
/* eslint import/first: "off" */
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });
