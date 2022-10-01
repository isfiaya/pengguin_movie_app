import { useState, useEffect } from 'react';
import { axiosTMDB } from "@/utils/axios";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return
    setLoading(true)
    axiosTMDB.get(url).then((response) => {
      setData(response)
    }).catch((err) => {
      setError(err.message)
    }).finally(() => {
      setLoading(false)
    })
  }, [url])

  return { data, loading, error }
}

export default useFetch