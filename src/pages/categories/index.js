import React from "react"
import CategoriesCards from "../../components/CategoriesCards"
import JumbotronPage from "../../components/JumbotronPage"
import Layout from "../../layouts/Layout"

export default function Categories() {
  return (
    <Layout>
      <JumbotronPage
        title="check out our categories"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              dapibus pretium varius."
      />
      <div className="container">
        <CategoriesCards />
      </div>
    </Layout>
  )
}
