import React, { Component } from 'react'
import TodoItem from '../TodoItem'

class TodoItemList extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.todos !== nextProps.todos;
    }

    render() {
        const { todos, onToggle, onRemove } = this.props
        const todolist = todos.map(({ id, text, checked, color }) => {
            return <TodoItem
                id={id}
                text={text}
                checked={checked}
                textColor={color}
                onToggle={onToggle}
                onRemove={onRemove}
                key={id}
            />
        })
        return (
            <div>
                {todolist}
            </div>
        )
    }
}

export default TodoItemList