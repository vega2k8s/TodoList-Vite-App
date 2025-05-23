import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

import TodoItem from '@components/TodoItem';
import { fetchAllTodos } from '@/actions'

class TodoItemList extends Component {
    /*
        true(myTodos 변수에 변동이 있으면) 이면 render() 함수가 호출됨
        false(myTodos 변수에 변동이 없으면) 이면 render() 함수가 호출되지 않음 (렌더링 생략)
    */
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.myTodos !== nextProps.myTodos;
    }
    //HTML DOM 렌더링 후에 호출되는 lifecyle method
    componentDidMount() {
        this.props.fetchAll();
    }

    render() {
        const { myTodos } = this.props;
        const todoList = myTodos.map(
            ({ id, text, checked }) => (
                <TodoItem
                    id={id}
                    text={text}
                    checked={checked}
                    key={id}
                />
            )
        );
        return (
            <div>
                {todoList}
            </div>
        );
    }
}

TodoItemList.propTypes = {
    myTodos: PropTypes.array,
    fetchAll : PropTypes.func
};

export default connect(
    //store에 저장된 state 객체의 todos 를 가져와서 myTodos 이름에 매핑
    (state) => ({myTodos:state.todos}), 
    //action함수를 dispatch 하는 함수를 fetchAll 이름에 매핑
    { fetchAll: fetchAllTodos }
)(TodoItemList);