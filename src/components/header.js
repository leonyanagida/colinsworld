import React, { useState, useEffect } from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import headerModule from "./header.module.scss"

const Header = ({ siteTitle }) => {

	let [isToggled, setIsToggled] = useState(false)

	useEffect(() => {
		// By default set the navigation to close
		setIsToggled(false)
	}, [])


	const toggleHandler = () => {
		setIsToggled(true)
	}

	return (
		<section className={headerModule["header__top-nav"]}>
		<div className={headerModule["header__top-nav__title"]}>
		  <Link to="/">Colin's World</Link>
		</div>
		<input id={headerModule["header__menu-toggle"]} type="checkbox" />
		<label className={headerModule["header__menu-button-container"]} htmlFor={headerModule["header__menu-toggle"]}>
			<div className={headerModule["header__menu-button"]} />
	  	</label>
		<ul className={headerModule["header__menu"]}>
		  <li>
			<Link to={`/blog/top%20destinations%20this%20year`} className={headerModule["header__menu__link"]}>
				2020 Top Destinations
				<div className={headerModule["header__span"]}>My Personal Recommendations</div>
			</Link>
		  </li>
		  <li>
			<Link to={`/blog/budget%20friendly%20countries`} className={headerModule["header__menu__link"]}>
				Budget Travel
				<div className={headerModule["header__span"]}>Do The Most with Every Penny</div>
			</Link>
		  </li>
		  <li>
			<Link to={`/blog/hidden%20gems`} className={headerModule["header__menu__link"]}>
				Hidden Gems
				<div className={headerModule["header__span"]}>Places You Haven't Heard Of</div>
			</Link>
		  </li>
		  <li>
		  	<Link to="/blog" className={headerModule["header__menu__link"]}>
				Blog
				<div className={headerModule["header__span"]}></div>
			</Link>
		  </li>
		</ul>
	  </section>
	)
}


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
