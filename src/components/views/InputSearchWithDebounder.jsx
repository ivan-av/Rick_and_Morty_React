import { debounce } from 'lodash'
import { useEffect, useMemo } from 'react'

import Icon from '../common/Icon'

const InputSearchWithDebounder = ({ namePage, setSearcher }) => {
  const handleChanges = (event) => {
    setSearcher(event.target.value)
  }
  const handleDebouncerChanges = useMemo(() =>
    debounce(handleChanges, 1000) // eslint-disable-next-line
  , [])

  useEffect(() => {
    return () => {
      handleDebouncerChanges.cancel()
    } // eslint-disable-next-line
  }, [])

  return (
    <div className='container d-flex align-items-center justify-content-center mb-4'>
      <Icon className='bi bi-search' withSpace />
      <label htmlFor='search' className='visually-hidden-focusable'>
        Buscar:
      </label>
      <input
        type='text'
        placeholder={`Search ${namePage}`}
        className='form-control'
        id='search'
        onChange={handleDebouncerChanges}
      />
    </div>
  )
}

export default InputSearchWithDebounder
