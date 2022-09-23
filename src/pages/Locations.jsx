import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getNextPage, getPreviousPage, searchByName } from '../features/locationsSlice'

import NextPageButton from '../components/buttons/NextPageButton'
import PreviousPageButton from '../components/buttons/PreviousPageButton'
import LocationCard from '../components/cards/LocationCard'
import ComponentGrouper from '../components/common/ComponentGrouper'
import GroupButtons from '../components/common/GroupButtons'
import InputSearchWithDebounder from '../components/views/InputSearchWithDebounder'

const Locations = () => {
  const locations = useSelector(state => state.locations.value)
  const status = useSelector(state => state.locations.status)
  const statusNext = useSelector(state => state.locations.statusNext)
  const statusPrev = useSelector(state => state.locations.statusPrev)
  const nextPage = useSelector(state => state.locations.nextPage)
  const previousPage = useSelector(state => state.locations.previousPage)
  const dispatch = useDispatch()

  const [searcher, setSearcher] = useState('')

  useEffect(() => {
    dispatch(searchByName(searcher))
  }, [searcher])

  const handleNextPage = () => {
    dispatch(getNextPage(nextPage))
  }
  const handlePreviousPage = () => {
    dispatch(getPreviousPage(previousPage))
  }

  return (
    <div className='container-fluid'>
      <InputSearchWithDebounder
        namePage='Locations'
        setSearcher={setSearcher}
      />
      {status === 'loading' && <div>Loading...</div>}
      <GroupButtons>
        <PreviousPageButton
          previousPage={previousPage}
          isLoading={statusPrev === 'loading'}
          handlePreviousPage={handlePreviousPage}
        />
        <NextPageButton
          nextPage={nextPage}
          isLoading={statusNext === 'loading'}
          handleNextPage={handleNextPage}
        />
      </GroupButtons>
      <ComponentGrouper>
        {locations &&
                    locations.map(location => (
                      <LocationCard
                        key={location.id}
                        location={location}
                      />
                    ))}
      </ComponentGrouper>
    </div>
  )
}

export default Locations
