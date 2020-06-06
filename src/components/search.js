import React, { useEffect, useState } from "react"
import { Index } from "elasticlunr"

// Search component
const Search = (props) => {
    const [searchTerm, setSearchTerm] = useState("")
    const [searchResults, setSearchResults] = useState([])

    const searchHandler = (e) => {
        setSearchTerm(e.target.value)
    }

    return (
        <div>
            <form onSubmit={props.searched} value={searchTerm}>
                <input
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={searchHandler}
                />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default Search