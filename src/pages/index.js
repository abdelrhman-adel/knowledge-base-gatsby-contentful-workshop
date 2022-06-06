import React from "react"
import CategoriesCards from "../components/CategoriesCards"
import Jumbotron from "../components/Jumbotron"
import Layout from "../layouts/Layout"

export default function Home() {
  return (
    <Layout>
      <Jumbotron />
      <section>
        <div className="container">
          <div className="sectionHeader">
            <h2 className="title">explore our categories</h2>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque vehicula fermentum odio in tristique.
            </p>
          </div>
          <CategoriesCards />
        </div>
      </section>
    </Layout>
  )
}
