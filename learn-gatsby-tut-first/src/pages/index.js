import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import AllRecipes from "../components/AllRecipes"
import Seo from "../components/SEO"

export default function Home() {
  return (
    <Layout>
      <Seo title={"HomePage"} description={"thgis is description"} />
      <main className="page">
        <header className="hero">
          <StaticImage src="../assets/images/main.jpeg" alt="eggs" className="hero-img" placeholder="tracedSVG"
                       layout="fullWidth" />
          <div className="hero-container">
            <div className="hero-text">
              <h1>Simply Recipes</h1>
              <h4>No Fluff Just recipes</h4>
            </div>
          </div>
        </header>
        <AllRecipes />
      </main>
    </Layout>
  )
}
