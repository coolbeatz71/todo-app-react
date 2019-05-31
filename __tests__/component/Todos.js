import { shallow, mount } from 'enzyme';
import React from 'react';
import Todos from '../../src/component/Todos';

let wrapper;
const todos = [
  {
    id: 1,
    userId: 1,
    title: 'Just for testing 1',
    completed: false,
  },
  {
    id: 2,
    userId: 1,
    title: 'Just for testing 2',
    completed: false,
  },
  {
    id: 3,
    userId: 1,
    title: 'Just for testing 3',
    completed: true,
  },
];
const props = {
  todos,
  markComplete: jest.fn(),
  delTodo: jest.fn(),
};

describe('Todos component', () => {
  beforeEach(() => {
    wrapper = mount(<Todos {...props} />);
  });

  it('Should render the Todos component', () => {
    wrapper = shallow(<Todos {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
