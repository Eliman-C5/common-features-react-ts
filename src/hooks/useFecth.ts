import React, { useEffect, useState } from 'react'

//When we create an interface for data we're fetching, we can put just the types we'll use
//Obviously the json placeholder api return an array of object which have many properties
//But I just need to use three of them
interface dataType {
  id: number,
  name: string,
  email?: string
}

export const useFetch = (url: string) => {

  const [data, setData] = useState<dataType[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState(null)
  
  useEffect(() => {
      fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setData(data)
      })
      .catch(error => setError(error))
      .finally(() => setLoading(false))
  
  }, []);
  
  return {data, loading, error}
  
}
