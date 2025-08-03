import { useQuery, gql } from '@apollo/client'

const GET_BRANDS = gql`
    query GetBrands {
        findAllBrands {
            id
            image
        }
    }
`

const Brands = ({onSelect}) => {
    const { data, loading, error } = useQuery(GET_BRANDS)
    
    if (loading) return <p>Loading brands…</p>;
    if (error)   return <p>Ups, something went wrong while loading the data.</p>;

    const brandsCollection = data.findAllBrands.map(brand => {
        return (
            <div
                key={brand.id} 
                className="brand"
                onClick={()=> onSelect(brand)}
            >
                <img src={brand.image} alt={`Brand logo`} />
            </div>
        )
    })

    return (
        <section className="brands">
            <div className="brands-text">
                <h2 className="brands-text__heading">Featuring the <span className="best-brands">Best Brands</span></h2>
                <p className="brands-text__paragraph">Select your preferred brand and explore our exquisite collection.</p>
            </div>
            <div className="brands-collection">
                {brandsCollection}
            </div>
        </section>
    )
}

export default Brands