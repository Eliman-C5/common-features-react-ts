import { useFetch } from '../hooks/useFecth';

export const UseEffectExample = () => {

  const {data, loading, error} = useFetch('https://jsonplaceholder.typicode.com/users')

  return (
    <div>
      <ul>
      {error && <li>Error: {error}</li>}
      {loading && <li>Loading...</li>}
      {data?.map(item => <li key={item.id}>{item.name} - {item.email}</li>)}
      </ul>
    </div>
  )
}
