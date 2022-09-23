import styled from 'styled-components'

import BaseCard from './BaseCard'

const EpisodeCard = ({ episode }) => {
    return (
        <BaseCard
            title={episode.name} link={'/episodes/' + episode.id}
        >
            <p className="card-text">Air date: <Span>{episode.air_date}</Span></p>
            <p className="card-text">Episode: <Span>{episode.episode}</Span></p>
        </BaseCard>
    )
}


const Span = styled.span`
  color: var( --text-secondary)
`

export default EpisodeCard