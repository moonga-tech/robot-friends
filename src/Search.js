

const Search = ({ searchChange }) => {
    return (
        <div className="pa2">
            <input type="search" name="search" id="search" placeholder="Search Robots" className="pa3 ba b--green bg-lightest-blue" onChange={ searchChange }/>
        </div>
    )
}

export default Search;