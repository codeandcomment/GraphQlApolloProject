import {gql,useMutation} from "@apollo/client";

export const GET_TODOS = gql`
#graphql

query GET_TODOS {

    todos {
        id
        todo
        completed
        created_at
    }
}

`

export const Create_Todo = gql`
#graphql

mutation Create_Todo($todo:String!){
   
    createTodo(todo: $todo){
        id
        todo
        completed
        created_at
    }
}


`


export const Toggle_Todo = gql`
#graphql

mutation ToggleComplete($id: Int!, $data: Boolean){
   
    toggleComplete(id: $id, data : $data){
        message
    }
}


`
