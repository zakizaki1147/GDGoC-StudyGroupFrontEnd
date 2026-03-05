import { createContext, useContext, useState } from "react";

const LoadingContext = createContext()

export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
      {isLoading && (
        <div className="fixed inset-0 z-10 flex justify-center items-center backdrop-blur-sm">
          Loading...
        </div>
      )}
    </LoadingContext.Provider>
  )
}

export const useLoading = () => useContext(LoadingContext)