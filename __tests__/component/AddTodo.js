import { shallow, mount } from 'enzyme';
import React from 'react';
import AddTodo from '../../src/component/AddTodo';

let wrapper;
const e = { preventDefault: jest.fn() };
const props = {
  addTodo: jest.fn(),
  onClick: jest.fn(e),
};
describe('AddTodo component', () => {
  beforeEach(() => {
    wrapper = mount(<AddTodo {...props} />);
  });

  it('Should render the AddTodo component', () => {
    wrapper = shallow(<AddTodo {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should set state `value`', () => {
    const title = 'Title for testing';
    wrapper.setState({
      title,
    });

    wrapper.find('Input').simulate('change', { target: { value: title } });
    expect(wrapper.state('title')).toBe(title);
  });

  it('should trigger Button click`', () => {
    wrapper = shallow(<AddTodo {...props} />);
    wrapper.find('Button').simulate('click', e);
    expect(e.preventDefault).toHaveBeenCalled();
  });
});
