import React, {Component} from 'react'
import defaultBcg from '../images/room-1.jpeg'
// import Hero from '../component/Hero'
import Banner from '../component/Banner'
import {Link} from 'react-router-dom'
import {RoomContex} from '../Context'
import StyledHero from '../component/StyledHero'

class SingleRoom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg
        }
    }
    static contextType = RoomContex 
    // componentDidMount() {}
    render() {
        const {getRoom} = this.context;
        const room = getRoom(this.state.slug);
        if(!room){
            return(<div className="error">
                <h3>no such room could be found</h3>
                <Link to="/rooms" className="btn-primary">
                    Back to room
                </Link>
            </div>)
        }
        const { name, description, capacity, size, price, extras, breakfast, pets, images} = room;

        const[mainImage, ...defaultImg] = images;
        return( 
            <>
            <StyledHero img={mainImage || this.state.defaultBcg} >
                <Banner title={`${name} room`}>
                    <Link to="/rooms" className="btn-primary">
                        Back to Rooms
                    </Link>
                </Banner>
            </StyledHero>
            <section className="single-room">
                <div className="single-room-images">
                    {defaultImg.map((item,index) =>{
                       return <img key={index} src={item} alt={name} />
                    })}
                </div>
                <div className="single-room-info">
                    <article className="desc">
                        <h3>details</h3>
                        <p>{description}</p>
                    </article>
                    <article className="info">
                        <h3>info</h3>
                        <h6>Price : ${price}</h6>
                        <h6>size : {size} SQFT</h6>
                        <h6>Max capacity: {" "}
                        {capacity > 1 ? `${capacity} people`: `${capacity} people`}</h6>
                        <h6>{pets? "Pets Allowed":"Not Allow"}</h6>
                        <h6>{breakfast && "Free Breackfast included "}</h6>
                    </article>
                    <article className="room-extras">
                        <h6>Extras</h6>
                        <ul className="extras">
                            {extras.map((item, index) => {
                                return <li key={index} >-{item}</li>
                            })}
                        </ul>
                    </article>
                </div>
            </section>
            </>
            )
    }
}

export default SingleRoom