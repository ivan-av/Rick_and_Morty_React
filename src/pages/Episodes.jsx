import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getNextPage, getPreviousPage, searchByName } from '../features/episodesSlice'

import NextPageButton from '../components/buttons/NextPageButton'
import PreviousPageButton from '../components/buttons/PreviousPageButton'
import EpisodeCard from '../components/cards/EpisodeCard'
import ComponentGrouper from '../components/common/ComponentGrouper'
import GroupButtons from '../components/common/GroupButtons'
import InputSearchWithDebounder from '../components/views/InputSearchWithDebounder'

const Episodes = () => {
  const episodes = useSelector(state => state.episodes.value)
  const status = useSelector(state => state.episodes.status)
  const statusNext = useSelector(state => state.episodes.statusNext)
  const statusPrev = useSelector(state => state.episodes.statusPrev)
  const nextPage = useSelector(state => state.episodes.nextPage)
  const previousPage = useSelector(state => state.episodes.previousPage)
  const dispatch = useDispatch()

  const [searcher, setSearcher] = useState('')

  useEffect(() => {
    dispatch(searchByName(searcher)) // eslint-disable-next-line
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
        namePage='Episodes'
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
        {episodes &&
                    episodes.map(episode => (
                      <EpisodeCard
                        key={episode.id}
                        episode={episode}
                      />
                    ))}
      </ComponentGrouper>
    </div>
  )
}

export default Episodes
