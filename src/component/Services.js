import React, {Component} from 'react'
import Title from './Title'
import {FaCocktail, FaHiking, FaShuttleVan, FaCoffee} from 'react-icons/fa'

class Services extends Component {
    state={
        Services:[{
            icon: <FaCocktail/>,
            title: "Free Coctail",
            info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
        },
        {
            icon: <FaHiking/>,
            title: "Endless Hiking",
            info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
        },
        {
            icon: <FaShuttleVan/>,
            title: "Free Shuttle",
            info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
        },
        {
            icon: <FaCoffee/>,
            title: "Coffe Is Good",
            info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
        }]
    }
    

    render() {
        return(
                <section className ="services">
                    <Title title="Services" />
                    <div className ="services-center">
                        {this.state.Services.map((item,index) => {
                            return <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        })}
                    </div>
                </section>
        )
    }
}

export default Services
