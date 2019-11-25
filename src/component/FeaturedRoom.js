import React, {Component} from 'react'
import {RoomContex} from '../Context'
import Loading from './Loading';
import Room from './Room';
import Title from './Title';

class FeaturedRoom extends Component {
    static contextType = RoomContex;
    render() {
        let {ngarkimi, karakteristikatDHomave:dhomatt} = this.context;
        dhomatt = dhomatt.map(dhom => {
            return <Room key={dhom.id} dhomatmain={dhom} />
        });
        return(
            <section className="featured-rooms"> 
                <Title title="featured rooms" />
                <div className="featured-rooms-center">
                    {ngarkimi ? <Loading /> : dhomatt}
                </div>
            </section>)
    }
}

export default FeaturedRoom