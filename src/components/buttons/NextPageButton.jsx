import Icon from '../common/Icon'
import SpinnerButton from '../common/SpinnerButton'

const NextPageButton = ({ isLoading = false, nextPage, handleNextPage }) => {
  return (
    <button
      className='btn btn-primary align-items-center'
      disabled={isLoading || nextPage === null}
      onClick={handleNextPage}
    >
      {isLoading && <SpinnerButton />}
      Next Page
      <Icon className='bi bi-caret-right-fill' />
    </button>
  )
}

export default NextPageButton
