import React from 'react'
import Link from 'gatsby-link'
import renderHTML from 'react-render-html'
import marked from 'marked'

// const IndexPage = ({data}) => (
//   <div>
//     <h1>Hi people</h1>
//     <p>Welcome to your new Gatsby site.</p>
//     <p>Now go build something great.</p>
//     <Link to="/page-2/">Go to page 2</Link>
//   </div>
// )

class IndexPage extends React.Component {
  render() {
    console.log(this.props.data)
    const products = this.props.data.allContentfulProduct.edges.map(
      (edge, id) => {
        return (
          <div key={id}>
            <h2>{edge.node.productName.productName}</h2>
            <div className="description">
              {renderHTML(marked(edge.node.productDescription.productDescription))}
            </div>
          </div>
        )
      }
    )
    return (
      <div>
        <h1>Product</h1>
        {products}
      </div>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query ContentQuery {
    allContentfulProduct {
      edges {
        node {
          id
          productName {
            productName
          }
          productDescription {
            productDescription
          }
        }
      }
    }
  }
`
