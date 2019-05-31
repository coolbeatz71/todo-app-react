import { shallow, mount } from 'enzyme';
import React from 'react';
import AddTodo from '../../src/component/AddTodo';
import Button from '../../src/component/common/Button';

let wrapper;
const props = {
  addTodo: jest.fn(),
  onClick: jest.fn(),
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
    const title = 'Title for testing again';
    wrapper.setState({
      title,
    });

    wrapper.find('Input').simulate('change', { target: { value: title } });
    const btnWrap = shallow(<Button {...props}>Add</Button>);

    btnWrap.find('button').simulate('click');
    expect(wrapper.state('title')).toBe(title);
    expect(props.onClick).toHaveBeenCalled();
  });
});
