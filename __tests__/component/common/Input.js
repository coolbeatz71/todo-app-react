import React from 'react';
import { shallow } from 'enzyme';
import Input from '../../../src/component/common/Input';

const props = {
  value: 'just for testing',
  onChange: jest.fn(),
};
describe('Input.js', () => {
  test('should render the input component', () => {
    const wrapper = shallow(<Input {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
