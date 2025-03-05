export interface Todo {
    __typename: string;
    id: number;
    todo: string;
    completed: boolean;
    created_at: string;
  }
  
  export type TodoType = {
    todos:Array<Todo>
  }