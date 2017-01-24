import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Footer from '../universal/components/Footer';
import Header from '../universal/components/Header';

describe('<Footer />', () => {
  it('renders the footer text', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text()).to.equal('This is a site wide footer. The placement is determined in routes.jsx.');
  });

  it('renders the header text', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.text()).to.contain('This is a site wide header. The placement is determined in routes.jsx.');
  });
});
