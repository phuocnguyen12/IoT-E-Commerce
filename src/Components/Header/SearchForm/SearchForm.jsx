import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'

const SearchForm = ({ active }) => (
  <form action='' className={`search-form ${active ? 'active' : ''}`}>
    <label htmlFor='search-box'>
      <input type='search' placeholder='Search Here...' id='search-box' />
      <FontAwesomeIcon name='search-icon' icon={faMagnifyingGlass} />
    </label>
  </form>
)

SearchForm.propTypes = {
  active: PropTypes.bool.isRequired
}

export default SearchForm
