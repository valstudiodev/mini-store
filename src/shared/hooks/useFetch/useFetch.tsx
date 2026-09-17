import { useState, useEffect } from "react";
import { fetchData } from "@/shared/api";

function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    async function loadData(): Promise<void> {
      setIsLoading(true)

      try {
        setError(null)
        const response = await fetchData<T>(url)
        setData(response)

      } catch (error) {
        if (error instanceof Error) {
          setError(error)
        }
      } finally {
        setIsLoading(false)
      }
    }
    void loadData()

  }, [url]);

  return {
    data,
    isLoading,
    error
  }
}

export default useFetch