import styled from 'styled-components'
import { Link } from 'react-router-dom'

const BaseCard = ({ children, title, elementTop, link }) => {
    return (
        <Card className="card bg-transparent">
            {elementTop}
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                {children}
                {link &&
                    <Link to={link.toString()} className="btn btn-primary">More Details</Link>
                }
            </div>
        </Card>
    )
}

const Card = styled.article`
  box-shadow: 3px 0px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--border-primary);
`

export default BaseCard