import React from 'react'


const Todo = (user) => {
    return (
        <div className="col-md-3 my-5"> 
            <div className="card shadow">
                    <div className="card-body">
                        <h5>User Id : {user.todo.userId}</h5>
                        <h5>Id : {user.todo.id}</h5>
                        <h5>Title : {user.todo.title}</h5>
                        <h5>Completed : {user.todo.completed}</h5>
                    </div>
            </div>
        </div>
    )
}

export default Todo;
