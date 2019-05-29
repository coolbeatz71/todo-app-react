import React from 'react';
import { shallow } from 'enzyme';
import Checkbox from '../../../src/component/common/Checkbox';

const props = {
  checked: false,
  markComplete: jest.fn(),
};
describe('Checkbox.js', () => {
  test('should render the checkbox component', () => {
    const wrapper = shallow(<Checkbox {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
