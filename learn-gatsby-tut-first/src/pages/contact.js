import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import RecipeList from "../components/RecipeList"

const Contact = ({ data: { allContentfulRecipe: { nodes: recipes } } }) => {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article>
            <h3>Want to get in touch?</h3>
            <p>
              Pork belly godard you probably haven't heard of them prism knausgaard, wolf cardigan selfies tacos irony.
              Stumptown XOXO tousled +1. Cronut hexagon dreamcatcher thundercats try-hard fanny pack pitchfork. Truffaut
              vexillologist biodiesel, pickled sriracha green juice deep v snackwave swag blue bottle hexagon air plant.
              Lumbersexual VHS wolf, scenester fanny pack freegan jianbing everyday carry pug shaman health goth
              pitchfork.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis cumque dolorem dolores et minima modi
              nihil nisi nostrum sapiente veritatis! Commodi, dignissimos et facere iusto laudantium officia officiis
              omnis unde.
            </p>
            <p>
              Literally pinterest fingerstache DIY lyft. Listicle hella enamel pin, yr kitsch pug hashtag sartorial.
              Vape
              occupy DIY, organic banh mi poutine small batch waistcoat pitchfork pug flexitarian gastropub hot chicken
              franzen offal. Cornhole dreamcatcher tattooed beard scenester flexitarian flannel church-key craft beer.
              Retro YOLO paleo, godard waistcoat banh mi lo-fi glossier crucifix tacos portland affogato normcore
              thundercats trust fund.
            </p>
          </article>
          <article>
            <form className="form contact-form"
                  action="https://formspree.io/f/xgeryrrg"
                  method="POST">
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" />
              </div>

              <div className="form-row">
                <label htmlFor="email">your email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">message</label>
                <textarea name="message" id="message" />
                <button type="submit" className="btn block">Submit</button>
              </div>
            </form>
          </article>
        </section>
        <section className="featured-recipes">
          <h5>Look At This Awesomesouce!</h5>
          <RecipeList recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
    {
        allContentfulRecipe(
            sort: {fields: title, order: ASC}
            filter: {featured: {eq: true}}
        ) {
            nodes {
                title
                prepTime
                cookTime
                image {
                    gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
                }
                id
            }
        }
    }
`

export default Contact
