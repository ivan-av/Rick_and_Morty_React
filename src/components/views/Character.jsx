import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'

import { getCharacterById } from '../../features/charactersSlice'
import useCharacter from '../../hooks/useCharacter'

import BackButton from '../buttons/BackButton'
import ComponentGrouper from '../common/ComponentGrouper'
import EpisodeCard from '../cards/EpisodeCard'

import styled from 'styled-components'

const Character = () => {
  const [isLoadingEpisodes, setIsLoadingEpisodes] = useState(false)
  const [episodes, setEpisodes] = useState([])

  const { getEpisodesByCharacter } = useCharacter()
  const { characterId } = useParams()

  const character = useSelector(state => state.characters.character)
  const isLoading = useSelector(state => state.characters.status)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCharacterById(characterId)) // eslint-disable-next-line
  }, [])
  useEffect(() => {
    getAllEpisodes() // eslint-disable-next-line
  }, [character])

  const getAllEpisodes = async () => {
    if (character.episode) {
      setIsLoadingEpisodes(true)
      getEpisodesByCharacter(character).then(res => {
        setIsLoadingEpisodes(false)
        if (res) setEpisodes(res)
      })
    }
  }

  return (
    <section className='container-fluid'>
      <BackButton />
      <div className='text-center'>
        {isLoading === 'loading' && <div>Loading...</div>}
        <h1>{character?.name}</h1>
        <Img src={character.image} className='card-img-top' alt={character.name} />
        <p className='pt-4 mt-2'>{character?.status}</p>
        <p>{character?.species}</p>
        <p>{character?.gender}</p>
        <h2 className='mt-2'>Origin</h2>
        <p className='pt-4 mt-2'>{character?.origin?.name}</p>
        <h2 className='mt-2'>Episodes</h2>
        {isLoadingEpisodes && <div>Loading...</div>}
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
    </section>
  )
}

// Styles
const Img = styled.img`
  width:35vh;
  border-radius:25%
`

export default Character
