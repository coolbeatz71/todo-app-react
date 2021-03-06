import React from 'react';
import { shallow } from 'enzyme';
import Button from '../../../src/component/common/Button';

const props = {
  children: 'Testing',
  onClick: jest.fn(),
};
describe('Button.js', () => {
  test('should render the button component', () => {
    const wrapper = shallow(<Button {...props} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.props().onClick).toBeDefined();
  });
});
