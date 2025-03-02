import React from 'react'
import { Button } from '@/components/ui/button'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import TodosList from './TodosList.js'

const queryClient = new QueryClient()

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <h1>Hello from React!</h1>
        <TodosList />
      </div>
    </QueryClientProvider>
  )
}

export default App
