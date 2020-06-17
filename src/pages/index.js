import React, { useState } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { Gallery, GalleryImage } from "react-gesture-gallery"

import Spacer from "../components/spacer"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import indexModule from "./index.module.scss"

const IndexPage = () => {
	const [index, setIndex] = useState(0)

	const data = useStaticQuery(graphql`
		query {

			icon: file(relativePath: { eq: "images/gatsby-icon.png" }) {
				childImageSharp {
					fluid(maxWidth: 1000) {
					...GatsbyImageSharpFluid
					}
				}
			}

			icon2: file(relativePath: { eq: "images/gatsby-astronaut.png" }) {
				childImageSharp {
					fluid(maxWidth: 1000) {
					...GatsbyImageSharpFluid
					}
				}
			}

			icon3: file(relativePath: { eq: "images/test.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 1000) {
					...GatsbyImageSharpFluid
					}
				}
			}

			icon4: file(relativePath: { eq: "images/test2.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 1000) {
					...GatsbyImageSharpFluid
					}
				}
			}

			amalficoast: file(relativePath: { eq: "images/amalficoast.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 1000) {
					...GatsbyImageSharpFluid
					}
				}
			}

			shanghai: file(relativePath: { eq: "images/shanghai.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 1000) {
					...GatsbyImageSharpFluid
					}
				}
			}

			newyork: file(relativePath: { eq: "images/newyork.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 1000) {
					...GatsbyImageSharpFluid
					}
				}
			}

			switzerland: file(relativePath: { eq: "images/switzerland.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 1000) {
					...GatsbyImageSharpFluid
					}
				}
			}

			tokyo: file(relativePath: { eq: "images/tokyo.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 1000) {
					...GatsbyImageSharpFluid
					}
				}
			}

			tokyo2: file(relativePath: { eq: "images/tokyo2.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 1000) {
					...GatsbyImageSharpFluid
					}
				}
			}

			staubbachfalls: file(relativePath: { eq: "images/staubbachfalls.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 1000) {
					...GatsbyImageSharpFluid
					}
				}
			}

			zermatt: file(relativePath: { eq: "images/zermatt.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 1000) {
					...GatsbyImageSharpFluid
					}
				}
			}

			chinacity: file(relativePath: { eq: "images/chinacity.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 1000) {
					...GatsbyImageSharpFluid
					}
				}
			}

			chinacountry: file(relativePath: { eq: "images/chinacountry.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 1000) {
					...GatsbyImageSharpFluid
					}
				}
			}
			
			indonesia: file(relativePath: { eq: "images/indonesia.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 1000) {
					...GatsbyImageSharpFluid
					}
				}
			}
			
			riodejaneiro: file(relativePath: { eq: "images/riodejaneiro.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 1000) {
					...GatsbyImageSharpFluid
					}
				}
			}

			canmore: file(relativePath: { eq: "images/canmore.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 1000) {
					...GatsbyImageSharpFluid
					}
				}
			}

			florence: file(relativePath: { eq: "images/florence.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 1000) {
					...GatsbyImageSharpFluid
					}
				}
			}

			bangkok: file(relativePath: { eq: "images/bangkok.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 1000) {
					...GatsbyImageSharpFluid
					}
				}
			}

			hanoi: file(relativePath: { eq: "images/hanoi.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 1000) {
					...GatsbyImageSharpFluid
					}
				}
			}

			vienna: file(relativePath: { eq: "images/vienna.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 1000) {
					...GatsbyImageSharpFluid
					}
				}
			}

			greenland: file(relativePath: { eq: "images/greenland.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 1000) {
					...GatsbyImageSharpFluid
					}
				}
			}

			vancouver: file(relativePath: { eq: "images/vancouver.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 1000) {
					...GatsbyImageSharpFluid
					}
				}
			}

			mexicocity: file(relativePath: { eq: "images/mexicocity.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 1000) {
					...GatsbyImageSharpFluid
					}
				}
			}

			southcarolina: file(relativePath: { eq: "images/southcarolina.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 1000) {
					...GatsbyImageSharpFluid
					}
				}
			}

			missouri: file(relativePath: { eq: "images/missouri.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 1000) {
					...GatsbyImageSharpFluid
					}
				}
			}

			philippines: file(relativePath: { eq: "images/philippines.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 1000) {
					...GatsbyImageSharpFluid
					}
				}
			}

		}
	`)


	// NOTE TO SELF:
	// WHEN EDITING THE IMAGES, ALL IMAGES SHOULD BE THE SAME SIZE
	// ONLY CHANGE THE SIZE IN CSS
	const images = [
		{
			src: data.switzerland.childImageSharp.fluid.src,
			text: "The Most Budget Friendly Countries To Visit In 2020",
			id: "budgetfriendly"
		},
		{
			src: data.tokyo.childImageSharp.fluid.src,
			text: "Safest Countries For Tourists",
			id: "safeestcountries"
		},
		{
			src: data.indonesia.childImageSharp.fluid.src,
			text: "Top Destinations To Visit in 2020",
			id: "topdestinations"
		},
		{
			src: data.staubbachfalls.childImageSharp.fluid.src,
			text: "Top Places To Travel Alone in 2019",
			id: "alone"
		},
		{
			src: data.newyork.childImageSharp.fluid.src,
			text: "New York City Travel Guide",
			id: "newyork"
		},
		{
			src: data.mexicocity.childImageSharp.fluid.src,
			text: "Mexico City Travel Guide",
			id: "mexicocity"
		}
	  ]
	   

	  const imagesRecommendations = [
		{
			src: data.tokyo2.childImageSharp.fluid.src,
			text: "Tokyo, Japan",
			id: "japan1"
	   },
	   {
			src: data.florence.childImageSharp.fluid.src,
			text: "Florence, Italy",
			id: "florence"
	   },
	   {
			src: data.bangkok.childImageSharp.fluid.src,
			text: "Bangkok, Thailand",
			id: "bangkok"
	   },
	   {
			src: data.hanoi.childImageSharp.fluid.src,
			text: "Hanoi, Vietnam",
			id: "hanoi"
	   },
	   {
			src: data.vienna.childImageSharp.fluid.src,
			text: "Vienna, Austria",
			id: "vienna"
   	   }
	  ]

	return (
		<Layout>
			<SEO title="Home" />
			<div className={indexModule["index-hero"]}>
				<Gallery
					index={index}
					onRequestChange={i => {
					setIndex(i)
					}}
				>
					{images.map(img => (
						<div key={img.id}>
							<h2 className={indexModule["index-hero__text"]}>{img.text}</h2>
							<GalleryImage className={indexModule["index-flex__box__img"]} objectFit="contain" key={img.src} src={img.src} />
						</div>
					))}
				</Gallery>
			</div>
			<div className={indexModule["index-top__gallery"]}>
				<div className={indexModule["index-top__gallery__left"]}>
					<div className={indexModule["index-top__gallery__leftbox"]}>
						<h1 className={indexModule["index-top__gallery__title1"]}>The Most Budget Friendly Countries To Visit In 2020</h1>
						<Link to={`/blog/budget%20friendly%20countries`}>
							<Img 
								className={indexModule["index-top__gallery__img"]}
								fluid={data.philippines.childImageSharp.fluid} 
							/>
						</Link>
					</div>
					<div className={indexModule["index-top__gallery__leftbox"]}>
						<h1 className={indexModule["index-top__gallery__title3"]}>New York City Travel Guide</h1>
						<Link to={`/blog/new%20york%20new%20york%20travel%20guide`}>
							<Img 
								className={indexModule["index-top__gallery__img"]}
								fluid={data.newyork.childImageSharp.fluid} 
							/>
						</Link>
					</div>
					<div className={indexModule["index-top__gallery__leftbox"]}>
						<h1 className={indexModule["index-top__gallery__title2"]}>Mexico City Travel Guide</h1>
						<Link to={`/blog/mexico%20city%20travel%20guide`}>
							<Img 
								className={indexModule["index-top__gallery__img"]}
								fluid={data.mexicocity.childImageSharp.fluid} 
							/>
						</Link>
					</div>
				</div>
				<div className={indexModule["index-top__gallery__right"]}>
					<div className={indexModule["index-top__gallery__rightbox"]}>
						<h1 className={indexModule["index-top__gallery__title4"]}>The List Of The Safest Countries for Tourists</h1>
						<Link to={`/blog/safest%20countries%20for%20travel`}>
							<Img 
								className={indexModule["index-top__gallery__img"]}
								fluid={data.indonesia.childImageSharp.fluid} 
							/>
						</Link>
					</div>
					<div className={indexModule["index-top__gallery__rightbox"]}>
						<h1 className={indexModule["index-top__gallery__title5"]}>Top Destinations To Visit in 2020</h1>
						<Link to={`/blog/top%20destinations%20this%20year`}>
							<Img 
								className={indexModule["index-top__gallery__img"]}
								fluid={data.staubbachfalls.childImageSharp.fluid} 
							/>
						</Link>
					</div>
				</div>
			</div>
			<div className={indexModule["index-award"]}>
				<div className={indexModule["index-award__main"]}>
					<h1 className={indexModule["index-award__title"]}>And The Award Goes To...</h1>
					<p className={indexModule["index-award__titletext"]}>Best Place to Visit in 2020</p>
					<h3>Amalfi Coast, Italy</h3>
					<div className={indexModule["index-award__imgcont__mobile"]}>
						<p className={indexModule["index-award__img__text"]}>Village of Positano</p>
						<Img className={indexModule["index-award__img__mobile"]} fluid={data.amalficoast.childImageSharp.fluid} />
					</div>
					<p className={indexModule["index-award__maintext"]}>
					Italy's Amalfi Coast boasts a classic Mediterranean landscape, a sensual blend of both natural and cultural wonders. The breathtaking terrain includes dramatic coastline topography scattered with terraced vineyards, orchards, and pastures—often with enchanting views of the vibrant waters below.
					<br />
					<br />
					Kind climate, abundant resources, and natural beauty have drawn people to this coast for many centuries, and the Greeks, Romans, Normans, Saracens, Arab-Sicilians, and many others have left their mark. Amalfi communities often cluster along cliffs, their terraces blending into the rock to add their own picturesque charm to the natural beauty of the coast. Upon closer inspection, towns like Amalfi and Ravello are home to many examples of artistic and architectural excellence—not a surprise, since this stretch of the Sorrento Peninsula has long attracted famous artists of all stripes.
					</p>
					<Link to="/blog/Amalfi%20Coast%20Italy">
						<p className={indexModule["index-award__learnmore"]}>Learn More...</p>
					</Link>
					<div>
						<h3>Overall Scores:</h3>
						<ul className={indexModule["index-award__ul"]}>
							<li>Accomodation: 5/5</li>
							<li>Budget Friendly: 4/5</li>
							<li>Communication: 4/5</li>
							<li>Food: 5/5</li>
							<li>Safety: 5/5</li>
							<li>Site Seeing: 5/5</li>
							<li>Shopping: 4/5</li>
							<li>Transportation: 5/5</li>
						</ul>
					</div>
				</div>
				<div className={indexModule["index-award__imgcont__desktop"]}>
					<Link to="/blog/Amalfi%20Coast%20Italy">
						<div className={indexModule["index-award__imgcont__text"]}>Village of Positano</div>
						<Img className={indexModule["index-award__img__desktop"]} fluid={data.amalficoast.childImageSharp.fluid} />
					</Link>
				</div>
			</div>
			<Spacer customHeight={"4em"} />
			<div className={indexModule["index-recent"]}>
				<div>
					<p className={indexModule["index-recent__titletxt"]}>Insight On My Experience When Traveling</p>
					<h1 className={indexModule["index-recent__title"]}>Recent Travel Blogs</h1>
					<div className={indexModule["index-recent__boxcontainer"]}>
						<div className={indexModule["index-recent__box"]}>
							<Link to="/blog/%20winterthur%20switzerland%20travel%20guide">
								<Img className={indexModule["index-recent__img"]} fluid={data.switzerland.childImageSharp.fluid} />
							</Link>
							<div className={indexModule["index-recent__star"]}>
								<span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
							</div>
							<p className={indexModule["index-recent__country"]}>Country: Switzerland</p>
							<h3 className={indexModule["index-recent__travel"]}>Travel Guide to Winterthur</h3>
							<p className={indexModule["index-recent__traveltext"]}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id turpis rhoncus pellentesque nec vivamus. Feugiat sed ac pellentesque quis.
							</p>
							<Link className={indexModule["index-recent__travel__learnmore"]} to="/blog/%20winterthur%20switzerland%20travel%20guide">
								Learn More...
							</Link>						
						</div>
						<div className={indexModule["index-recent__box"]}>
							<Link to="/blog/greenland%20travel%20guide">
								<Img className={indexModule["index-recent__img"]} fluid={data.greenland.childImageSharp.fluid} />
							</Link>
							<div className={indexModule["index-recent__star"]}>
								<span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
							</div>
							<p className={indexModule["index-recent__country"]}>Country: Greenland</p>
							<h3 className={indexModule["index-recent__travel"]}>Summer Vacation in Greenland</h3>
							<p className={indexModule["index-recent__traveltext"]}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id turpis rhoncus pellentesque nec vivamus. Feugiat sed ac pellentesque quis.
							</p>
							<Link className={indexModule["index-recent__travel__learnmore"]} to="/blog/greenland%20travel%20guide">
								Learn More...
							</Link>
						</div>
						<div className={indexModule["index-recent__box"]}>
							<Link to="/blog/vancouver%20canada%20travel%20guide">
								<Img className={indexModule["index-recent__img"]} fluid={data.vancouver.childImageSharp.fluid} />
							</Link>
							<div className={indexModule["index-recent__star"]}>
								<span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
							</div>
							<p className={indexModule["index-recent__country"]}>Country: Canada</p>
							<h3 className={indexModule["index-recent__travel"]}>Our Vancouver Trip In 2020</h3>
							<p className={indexModule["index-recent__traveltext"]}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id turpis rhoncus pellentesque nec vivamus. Feugiat sed ac pellentesque quis.
							</p>
							<Link className={indexModule["index-recent__travel__learnmore"]} to="/blog/vancouver%20canada%20travel%20guide">
								Learn More...
							</Link>
						</div>
						<div className={indexModule["index-recent__box"]}>
							<Link to="/blog">
								<h2 className={indexModule["index-recent__viewmore"]}>
									View 
									<br />
									More
								</h2>
								<Img 
									className={indexModule["index-recent__img__viewmore"]}
									fluid={data.icon3.childImageSharp.fluid}
									alt="view more"
								/>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className={indexModule["index-recent__recommendations"]}>
				<div className={indexModule["index-recent__recommendations__titlebox"]}>
					<h1 className={indexModule["index-recent__recommendations__title"]}>Personal Recommendations</h1>
					<p className={indexModule["index-recent__recommendations__text"]}>These Destinations Are My Top Choices When It Comes To Travel</p>
				</div>
				<div className={indexModule["index-recent__recommendations__gallery__mobile"]}>
					<Gallery
						index={index}
						onRequestChange={i => {
						setIndex(i)
					}}>
						{imagesRecommendations.map(img => (
							<div key={img.id}>
								<h2 className={indexModule["index-recent__recommendations__gallery__text"]}>{img.text}</h2>
								<GalleryImage className={indexModule["index-flex__box__img"]} key={img.src} src={img.src} />
							</div>
						))}
					</Gallery>
				</div>
				<div className={indexModule["index-recent__recommendations__gallery__desktop"]}>
					<div className={indexModule["index-recent__recommendations__gallery-d__box"]}>
						<h1 className={indexModule["index-recent__recommendations__gallery-d__title"]}>Tokyo, Japan</h1>
						<Link to={`/blog/tokyo%20travel%20guide`}>
							<Img className={indexModule["index-recent__recommendations__gallery-d__img"]} fluid={data.tokyo2.childImageSharp.fluid} />
						</Link>
					</div>
					<div className={indexModule["index-recent__recommendations__gallery-d__box"]}>
						<h1 className={indexModule["index-recent__recommendations__gallery-d__title"]}>Florence, Italy</h1>
						<Link to={`/blog/florence%20italy%20travel%20guide`}>
							<Img className={indexModule["index-recent__recommendations__gallery-d__img"]} fluid={data.florence.childImageSharp.fluid} />
						</Link>
					</div>
					<div className={indexModule["index-recent__recommendations__gallery-d__box"]}>
						<h1 className={indexModule["index-recent__recommendations__gallery-d__title"]}>Bangkok, Thailand</h1>
						<Link to={`/blog/bangkok%20thailand%20travel%20guide`}>
							<Img className={indexModule["index-recent__recommendations__gallery-d__img"]} fluid={data.bangkok.childImageSharp.fluid} />
						</Link>
					</div>
					<div className={indexModule["index-recent__recommendations__gallery-d__box"]}>
						<h1 className={indexModule["index-recent__recommendations__gallery-d__title"]}>Hanoi, Vietnam</h1>
						<Link to={`/blog/hoi%20an%20vietnam%20travel%20guide`}>
							<Img className={indexModule["index-recent__recommendations__gallery-d__img"]} fluid={data.hanoi.childImageSharp.fluid} />
						</Link>
					</div>
					<div className={indexModule["index-recent__recommendations__gallery-d__box"]}>
						<h1 className={indexModule["index-recent__recommendations__gallery-d__title"]}>Vienna, Austria</h1>
						<Link to={`/blog/vienna%20austria%20travel%20guide`}>
							<Img className={indexModule["index-recent__recommendations__gallery-d__img"]} fluid={data.vienna.childImageSharp.fluid} />
						</Link>
					</div>
				</div>
			</div>
			<div className={indexModule["index-weekend__desktop"]}>
				<div className={indexModule["index-weekend__desktop__titlebox"]}>
					<h1 className={indexModule["index-weekend-d__title"]}>The "Weekend" Vacation</h1>
					<p className={indexModule["index-weekend-d__text"]}>There is more than enough to do just in these American cities alone</p>
				</div>
				<div className={indexModule["index-weekend-d__container"]}>
					<div className={indexModule["index-weekend-d__box"]}>
						<div className={indexModule["index-weekend-d__boxtext"]}>
							<h3 className={indexModule["index-weekend-d__boxtitle"]}>New York, New York</h3>
							<p className={indexModule["index-weekend-d__boxquote"]}>Voted the Summer Vacation Spot of the Year</p>
						</div>
						<Link to={`/blog/new%20york%20new%20york%20travel%20guide`}>
							<Img 
								className={indexModule["index-weekend-d__img"]} 
								fluid={data.indonesia.childImageSharp.fluid} 
							/>
						</Link>
					</div>
					<div className={indexModule["index-weekend-d__box"]}>
						<div className={indexModule["index-weekend-d__boxtext"]}>
							<h3 className={indexModule["index-weekend-d__boxtitle"]}>New Orleans, Louisiana</h3>
							<p className={indexModule["index-weekend-d__boxquote"]}>Voted the Summer Vacation Spot of the Year</p>
						</div>
						<Link to={`/blog/new%20orleans%20louisiana%20travel%20guide`}>
							<Img 
								className={indexModule["index-weekend-d__img"]} 
								fluid={data.newyork.childImageSharp.fluid}
							/>
						</Link>
					</div>
					<div className={indexModule["index-weekend-d__box"]}>
						<div className={indexModule["index-weekend-d__boxtext"]}>
							<h3 className={indexModule["index-weekend-d__boxtitle"]}>Charleston, South Carolina</h3>
							<p className={indexModule["index-weekend-d__boxquote"]}>Voted the Summer Vacation Spot of the Year</p>
						</div>
						<Link to={`/blog/charleston%20south%20carolina%20travel%20guide`}>
							<Img 
								className={indexModule["index-weekend-d__img"]} 
								fluid={data.southcarolina.childImageSharp.fluid} 
							/>
						</Link>
					</div>
					<div className={indexModule["index-weekend-d__box"]}>
						<div className={indexModule["index-weekend-d__boxtext"]}>
							<h3 className={indexModule["index-weekend-d__boxtitle"]}>St. Louis, Missouri</h3>
							<p className={indexModule["index-weekend-d__boxquote"]}>Voted the Summer Vacation Spot of the Year</p>
						</div>
						<Link to={`/blog/st%20louis%20missouri%20travel%20guide`}>
							<Img 
								className={indexModule["index-weekend-d__img"]} 
								fluid={data.missouri.childImageSharp.fluid} 
							/>
						</Link>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default IndexPage
