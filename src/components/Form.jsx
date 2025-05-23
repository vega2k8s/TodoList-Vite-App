import { Component } from 'react';
import PropTypes from 'prop-types';
import '@components/Form.css';

class Form extends Component {
    state = {
        todo: ''
    };

    handleChange = (e) => {
        this.setState({
            todo: e.target.value // input field의 다음 바뀔 값
        });
    }

    handleCreate = () => {
        const { todo, todos } = this.state;
        const newTodo = {
            id: this.id++,
            text: todo,
            checked: false
        };

        this.setState({
            todos: [...todos, newTodo],
            todo: '', // input 초기화
        });
    }

    handleEnter = (e) => {
        // 눌려진 키가 Enter Key 이면 handleCreate 호출
        if (e.keyCode === 13) {
            this.handleCreate();
        }
    };

    render() {
        const { mytodo, myEnter, myChange, myCreate } = this.props;
        return (
            <div className="form">
                <input value={mytodo} onChange={myChange}
                    onKeyDown={myEnter} />
                <div className="create-button" onClick={myCreate}>
                    추가
                </div>
            </div>
        );
    }
}

Form.propTypes = {
    mytodo: PropTypes.string,
    myEnter: PropTypes.func,
    myChange: PropTypes.func,
    myCreate: PropTypes.func
};

export default Form;