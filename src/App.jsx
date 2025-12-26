// src/App.jsx
import './App.css';
import { Panel } from './components/Panel';
import { TodoItem } from './components/TodoItem';

//type () => jsx
function App() {
  const todos = ['리액트 기초 배우기', 'To-Do List 만들어보기'];
  return (
    <div className="app-container">
      <div className="title-container">
        <h1 className="title">오늘의 할 일</h1>
        <p className="today">
          오늘은 {new Date().toLocaleDateString()} 입니다.
        </p>
      </div>

      <Panel>
        <div className="input-section">
          <input type="text" placeholder="새로운 할 일을 입력하세요" />
          <button>추가</button>
        </div>
      </Panel>

      <Panel className="list-section">
        {todos.length === 0 ? (
          <p>할일이 없어요! 새 할일을 추가해 보세요!</p>
        ) : (
          <ul className="todo-list">
            {todos.map((todo, index) => (
              <TodoItem key={index} text={todo} />
            ))}
          </ul>
        )}
      </Panel>
    </div>
  );
}

export default App;
