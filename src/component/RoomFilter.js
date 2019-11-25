import React from 'react'
import {useContext} from 'react'
import {RoomContex} from '../Context'
import Title from './Title'

// get unique value
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}

function RoomFilter({rooms}) {
    const konteksti = useContext(RoomContex);
    const {
        handleChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets
        } = konteksti;
        // get unique types
        let types = getUnique(rooms,'type');
        // add all
        types= ['all', ...types];
        // map to jsx
        types = types.map((item,index) => {
            return <option key={index} value={item}>{item}</option>
        });
        let people = getUnique(rooms, 'capacity');
        people = people.map((item, index) => {
            return <option key={index} value={item}>{item}</option>
        })
            return(
        <section className="filter-container">
            <Title title="search rooms" />
            <form className="filter-form" >
            {/* select type */}
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
                        {types}
                    </select>
                </div>
            {/* and select type */}
            {/* guest type */}
                <div className="form-group">
                    <label htmlFor="capacity">Guest</label>
                    <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}>
                        {people}
                    </select>
                </div>
            {/* and guest type */}
            {/* room price */}
                    <div className="form-group">
                    <label htmlFor="price">Room Price {price}</label>
                    <input name="price" type="range" id="price" min={minPrice} max={maxPrice} className="form-control"
                     value={price} onChange={handleChange} />
                </div>
            {/* size */}
            {/* room price */}
                    <div className="form-group">
                        <label htmlFor="size">Room Size {price}</label>
                        <div className="size-inputs">
                            <input name="minSize" type="number" id="size" className="size-input"
                            value={minSize} onChange={handleChange} />
                            <input name="maxSize" type="number" id="size" className="size-input"
                            value={maxSize} onChange={handleChange} />
                        </div>
                    </div>
            {/* romm price */}
            {/* extras */}
                    <div className="form-group">
                        <div className="single-extra">
                            <input type='checkbox' name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange} />
                            <label htmlFor="breakfast">breakfast</label>
                        </div>
                        <div className="single-extra">
                            <input type='checkbox' name="pets" id="pets" checked={pets} onChange={handleChange} />
                            <label htmlFor="pets">pets</label>
                        </div>
                    </div>
            {/* extras */}
            </form>
        </section>
    )
}

export default RoomFilter