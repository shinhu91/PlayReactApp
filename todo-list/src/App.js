import TodoListTemplate from './components/TodoListTemplate'
import Form from './components/Form'
import TodoItemList from './components/TodoItemList'
import Palette from './components/Palette'
import { Component } from 'react'

const colors = ['#000000', '#343a40', '#f03e3e', '#12b886', '#228ae6']

class App extends Component {
  id = 3 // 이미 0,1,2 가 존재하므로 3으로 설정

  state = {
    input: '',
    todos: [],
    textColor: "#000000"
    // ,
    // color = ["#343a40", "#f03e3e", "#12b886", "#228ae6"]
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value // input 의 다음 바뀔 값
    });
  }

  handleCreate = () => {
    const { input, todos, textColor } = this.state;
    this.setState({
      input: '', // 인풋 비우고
      // concat 을 사용하여 배열에 추가
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false,
        color: textColor
      })
    });
  }

  handleKeyPress = (e) => {
    // 눌려진 키가 Enter 면 handleCreate 호출
    if (e.key === 'Enter') {
      this.handleCreate();
    }
  }

  handleToggle = (id) => {
    const { todos } = this.state
    // 파라미터로 받은 id가 가르키는 객체 확인
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index]

    const nextTodos = [...todos]

    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    }

    this.setState({
      todos: nextTodos
    })

  }

  handleRemove = (id) => {
    const { todos } = this.state
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    })
  }

  handleColorChange = (color) => {
    this.setState({
      textColor: color
    })
  }

  render() {
    const { input, todos, textColor } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove,
      handleColorChange,
    } = this;

    return (
      <TodoListTemplate palette={<Palette onClick={handleColorChange} colors={colors} selected={textColor} />}
        form={< Form value={input} onChange={handleChange} onCreate={handleCreate} onKeyPress={handleKeyPress} textColor={textColor} />}>
        <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove} />
      </TodoListTemplate >
    )
  }
}

export default App;
