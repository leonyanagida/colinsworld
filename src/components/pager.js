import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import PropTypes, { number } from "prop-types"
 
import pagerModule from "./pager.module.scss"

const Pager = ({ pageContext }) => {
  const { previousPagePath, nextPagePath, numberOfPages, humanPageNumber, pageNumber } = pageContext

  let pageNumberArr = []
  let active = humanPageNumber // which is simply the current page the user is on
  let startIndex = 1
  let endIndex = numberOfPages

  if (numberOfPages <= 10) {
    // less than 10 total pages so show all
    startIndex = 1
    endIndex = numberOfPages
  } else {
    // more than 10 total pages so calculate start and end pages
    if (active <= 6) {
      startIndex = 1
      endIndex = 10
    } else if (active + 4 >= numberOfPages) {
      startIndex = numberOfPages - 9
      endIndex = numberOfPages
    } else {
      startIndex = active - 5
      endIndex = active + 4
    }
  }

  // Outer loop to create parent
  for (let i = startIndex; i <= endIndex; i++) {
    pageNumberArr.push(
      <Link 
        to={`/blog/${i > 1 ? i : ""}`} 
        key={i} 
        className={active === i ? pagerModule["pager__active"] : pagerModule["pager__default"]}
      >
        <span>{i}</span>
      </Link>
    )
  }

  return (
    <div className={pagerModule["pager-container"]}>
      {previousPagePath && (
        <Link to={previousPagePath} className={pagerModule["pager__prev"]}>{"<"}Previous</Link>
      )}

      {pageNumberArr}

      {nextPagePath && (
        <Link to={nextPagePath} className={pagerModule["pager__next"]}>Next{">"}</Link>
      )}
    </div>
  )
}
 
Pager.propTypes = {
  pageContext: PropTypes.object.isRequired,
}
 
export default Pager