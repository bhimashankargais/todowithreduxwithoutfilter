import React from 'react';
import './TodoList.scss';
import TodoListItem from './TodoListItem'
import {connect} from "react-redux" 
class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }
 
      render() {
    
      return (
            <div className="TodoList">
              
                {this.props.alltodolist && this.props.alltodolist.length
        ? this.props.alltodolist.map((todo, index) => {
            return <TodoListItem key={`todo-${todo.id}`} displaydata={todo} />;
          }) :null }
            </div>
        )


    }
}
  
const mapStateToProps = state => {
    const  alltodolist  = state.alltodolist;
        return { alltodolist };
  }
  
export default connect(mapStateToProps)(TodoList);
