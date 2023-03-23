import useSearch from './useSearch'

const Search = () => {
  const { onHandleSearch } = useSearch()
  return (
    <input
      type="search"
      placeholder="Input to search"
      className="form-control"
      onChange={onHandleSearch}
    />
  )
}

export default Search
