import styled from 'styled-components'

// Component that allows configurate the distribution of the cards
const ComponentGrouper = ({ children }) => {
  return (
    <Grouper className='pb-4'>
      {children}
    </Grouper>
  )
}

// Styles
const Grouper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  grid-auto-flow: dense;
  grid-auto-rows: 22rems;
`

export default ComponentGrouper
