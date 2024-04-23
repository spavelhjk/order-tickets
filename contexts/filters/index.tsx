import React, { createContext } from 'react'

import useFilters from './useFilters'

const defaultValue = {
  filters: [],
  filtersAsHash: {},
  changeFilters: () => null,
  transformFiltersToHash: () => null,
  transformHashToFilters: () => null,
} as unknown as ReturnType<typeof useFilters>

const FiltersContext = createContext(defaultValue)

export const FiltersContextProvider = ({ children }: { children: React.ReactNode }) => {
  const value = useFilters()

  return (
    <FiltersContext.Provider value={value || {}}>
      {children}
    </FiltersContext.Provider>
  )
}

export default FiltersContext
