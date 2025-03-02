import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { Button } from './ui/button'

interface Todo {
  id: number
  title: string
  completed: boolean
}

const fetchTodos = async (): Promise<Todo[]> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos')
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return response.json()
}

const TodosList: React.FC = () => {
  const { isLoading, error, data } = useQuery<Todo[], Error>({
    queryKey: ['todos'],
    queryFn: fetchTodos,
  })

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div>
      <h2>Todos</h2>
      <ul>
        {data?.map((todo) => (
          <li key={todo.id}>
            {todo.title} - {todo.completed ? 'Completed' : 'Pending'}
          </li>
        ))}
      </ul>
      <Button>Add Todo</Button>
    </div>
  )
}

export default TodosList
