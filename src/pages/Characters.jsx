import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getNextPage, getPreviousPage, searchByName } from '../features/charactersSlice'

import NextPageButton from '../components/buttons/NextPageButton'
import PreviousPageButton from '../components/buttons/PreviousPageButton'
import CharacterCard from '../components/cards/CharacterCard'
import ComponentGrouper from '../components/common/ComponentGrouper'
import InputSearchWithDebounder from '../components/views/InputSearchWithDebounder'
import GroupButtons from '../components/common/GroupButtons'

const Characters = () => {
  const characters = useSelector(state => state.characters.value)
  const status = useSelector(state => state.characters.status)
  const statusNext = useSelector(state => state.characters.statusNext)
  const statusPrev = useSelector(state => state.characters.statusPrev)
  const nextPage = useSelector(state => state.characters.nextPage)
  const previousPage = useSelector(state => state.characters.previousPage)
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
        namePage='Characters'
        setSearcher={setSearcher}
      />
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
      {status === 'loading' && <div>Loading...</div>}
      <ComponentGrouper>
        {characters &&
                    characters.map(character => (
                      <CharacterCard
                        key={character.id}
                        character={character}
                      />
                    ))}
      </ComponentGrouper>
    </div>
  )
}

export default Characters
