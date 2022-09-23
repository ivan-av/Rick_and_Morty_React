import Icon from '../common/Icon'
import SpinnerButton from '../common/SpinnerButton'

const PreviousPageButton = ({ isLoading = false, previousPage, handlePreviousPage }) => {
  return (
    <button
      className='btn btn-primary align-items-center'
      disabled={isLoading || previousPage === null}
      onClick={handlePreviousPage}
    >
      {isLoading && <SpinnerButton />}
      <Icon className='bi bi-caret-left-fill' />
      Previous Page
    </button>
  )
}

export default PreviousPageButton
