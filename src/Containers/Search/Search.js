import React, {Component,useState} from 'react';
import doSeach from '../../API/Search';
import Post from '../../Components/Photo/Post';
import style from './Search.module.scss'

const Search = ({})=>{
  const [loading, setLoading] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [results, setResults] = useState([]);

  const  handleSearchSubmit=async (e) =>{
    e.preventDefault();
    try{
      setLoading(true)
      setResults([])
      let results =  await doSeach(searchInput)
      setLoading(false)
      setResults(results.results)
    }
    catch (error) {
      setLoading(false)
      console.log(error);
    }
  }

  const handleSearchChange=(e)=>{
    e.preventDefault()
    setSearchInput(e.target.value)
  }

  return (
      <div className={style.searchContainer}>
        <form onSubmit={ handleSearchSubmit}>
          <input placeholder={'Type and hit enter'} className={style.searchInput} autoFocus={true} onChange={handleSearchChange} value={searchInput} type="text"/>
        </form>
        {loading && <p>Searching...</p>}
        <div className={style.searchResults}>
          {results.length>0 && results.map((item,i)=>{
            return !item.sponsored && <Post
                style={{marginLeft:`-16px`,marginRight:`-16px`}}
                key={i}
                item={item}/>
          })}
        </div>
      </div>
  )
}


export default Search;