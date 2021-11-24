import React, { useEffect, useState } from 'react';
import Todo from './Todo';

const List = () => {


    const users = [
        {
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
        }
    ];



    const [member, setmember] = useState(users)

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(data => data.json())
        .then(data => 
            setmember(data)
            )
        
    }, [])

    return (
     
        <div className="container my-5">
            <div className="row">


                {
                    member.map((data) => <Todo todo= {data} />)
                }
                
                

            </div>
        </div>
    )
}

export default List;
