import { useState } from 'react'
import { useQuery, gql } from '@apollo/client'
import LeftArrow from '../assets/leftArrow.svg'
import Butterfly from '../assets/Butterfly.svg'
import Filter from '../assets/filter.svg'
import Down from '../assets/down.svg'

const GET_BRAND_MODELS = gql`
    query FindBrandModels($findBrandModelsId: ID!, $sortBy: sortBy!) {
        findBrandModels(id: $findBrandModelsId, sortBy: $sortBy) {
            id
            image
            name
            price
            type
        }
    }
`

    function Models({brand, onBack}) {
        const [filterType, setFilterType] = useState('')
        const [searchTerm, setSearchTerm] = useState('')


        const DEFAULT_SORT = { field: "name", order: "ASC" }
        const {data, loading, error } = useQuery(
            GET_BRAND_MODELS,
            {
                variables: {
                    findBrandModelsId: brand.id,
                    sortBy: DEFAULT_SORT
                }
            }
        )

        if (loading) return <p>Loading models...</p>
        if (error) return <p>Error Loading the Models!</p>
        if (!data || !data.findBrandModels) {
        console.log("No models found. Data:", data);
        return <p>No models found.</p>;
    }
    const models = data.findBrandModels // here we have the models that we get from the query

    let filteredByType = filterType
        ? models.filter(m => m.type.toLowerCase() === filterType.toLowerCase())
        : models // if filterType is truthy, filtering by type happens, if filterType falsy all 'models' are shown

    let displayedModels = searchTerm
        ? filteredByType.filter(m => m.name.toLowerCase().includes(searchTerm.toLowerCase()))
        : filteredByType // if searchTerm is truthy, it filters 'filteredByType' by name,
                         // if filteredByType is falsy, it returns all models in filteredByType

    // Map over everything, if no filter is applied, that essentially means we map over 'models'
    // So, showw all models unless filterType or searchTerm are applied
    const modelsCollection = displayedModels.map(model => (
        <div key={model.id} className="models__item">
            <img src={model.image} alt={model.name} className="models__item-image" />
            <div className="models__name">{model.name}</div>
            <div className="models__price">${model.price}</div>
        </div>
    ))

    return (
        <section className="models">
            <button className="backToHomeBtn" onClick={onBack}>
                <img className="leftArrow-icon" src={LeftArrow} alt="Left Arrow Icon" />
                Back To Home
            </button>

            <div className="models-hero__section">
                <div className="models-hero__text">
                    <h2 className="models-hero__heading">
                        Play like a <span>Rock star</span>
                    </h2>
                    <p className="models-hero__paragraph">
                        With a legacy dating back to the 1950s, {brand.name} blends expert craftsmanship with cutting-edge innovation to deliver guitars that inspire creativity and elevate your performance. Trusted by top artists worldwide, {brand.name} guitars are built to play fast, sound bold, and stand out on any stage.
                    </p>
                </div>
                <div className="models-hero__images">
                    <img className="hero-images__guitar models-guitar" src={brand.image} alt="Brand logo" />
                    <div className="hero-images__logo__container models-logo_container">
                        <img className="hero-images__logo models-hero__logo" src={Butterfly} alt="Butterfly" />
                    </div>
                </div>
            </div>

            <div className="models-selection__section">
                <h3 className="models-selection__heading">
                    Check out the <span className="models-selection__highlight">Selection</span>
                </h3>
                <div className="models-selection__filters">
                    <select
                        className="models-filter__dropdown"
                        value={filterType}
                        onChange={e => setFilterType(e.target.value)}
                    >
                        <option value="">Filter by type</option>
                        <option value="Bass">Bass</option>
                        <option value="Acoustic">Acoustic</option>
                        <option value="Electric">Electric</option>
                    </select>
                    <input
                        className="models-search__input"
                        type="text"
                        placeholder="Search by name"
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            <main className="models-grid">
                {modelsCollection}
            </main>

            <div className="models-pagination">
                {/* Pagination controls here */}
            </div>
        </section>
    )
}

export default Models