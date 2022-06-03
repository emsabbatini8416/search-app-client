import React from 'react'
import { useHistory } from "react-router-dom";

const Search = () => {
  const history = useHistory();

  const [value, setValue] = React.useState<string>('')

  const handleOnChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }, [])

  const handleOnClick = React.useCallback(() => {
    history.push({
      pathname: '/items',
      search: `?q=${value}`
    })
  }, [value])

  return (
    <div className="form">
      <input 
        type="text" 
        className="form-control form-input" 
        placeholder="Search anything..." 
        name="search"
        value={value}
        onChange={handleOnChange}
      />
      <span className="left-pan"><i className="fa fa-search" onClick={handleOnClick}></i></span>
    </div>
  )
}

export default Search