import React from "react"
import footerModule from "./footer.module.scss"

const Footer = () => {
    return (
        <footer className={footerModule["footer"]}>
            <div className={footerModule["footer-flex"]}>
                <div className={footerModule["footer-flex__site"]}>
                    <h3 className={footerModule["footer-flex__title"]}>Colin's World</h3>
                </div>
                <div className={footerModule["footer-flex__links"]}>
                    <ul className={footerModule["footer-flex__ul"]}>
                        <li>2020 Top Destinations</li>
                        <li>Budget Travel</li>
                        <li>Hidden Gems</li>
                        <li>Blog</li>
                        <li>Created By: <a href="http://leonyanagida.com" target="_blank" rel="noopener noreferrer">Leon Yanagida</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer