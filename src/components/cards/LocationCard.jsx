import styled from 'styled-components'

import BaseCard from './BaseCard'

const LocationCard = ({ location }) => {
    return (
        <BaseCard
            title={location.name} link={'/locations/' + location.id}
        >
            <p className="card-text">Type: <Span>{location.type}</Span></p>
            <p className="card-text">Dimension: <Span>{location.dimension}</Span></p>
        </BaseCard>
    )
}


const Span = styled.span`
  color: var( --text-secondary)
`

export default LocationCard