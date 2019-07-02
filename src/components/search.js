import React, { Component } from 'react';

const Search = ({searchfield, searchChange}) => {
  return(
    <div className='searchBox'>
      <input 
        className=''
        type='search' 
        placeholder='Search recipes'
        onChange={searchChange}
      />
    </div>
  )
}

export default Search;