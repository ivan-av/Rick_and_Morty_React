import styled from 'styled-components'

const FootNav = () => {
  return (
    <Foot className='navbar navbar-expand-lg'>
      <div className='container-fluid' />
    </Foot>
  )
}

const Foot = styled.nav`
  border-top: 1px solid var(--border-primary);
  box-shadow: -2px -2px 2px rgb(0,0,0,0.2);
  color: var(--text-primary);
  background-color: #0d6efd;
`

export default FootNav
