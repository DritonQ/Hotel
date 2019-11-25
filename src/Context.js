import React, {Component} from 'react'
// import items from './data';
import client from './Contentful'


const RoomContex = React.createContext()

class RoomProvider extends Component {
    // state = {
    //     mirsevini: 'Anila',
    //     mbiemri: 'Qerimi'
    // }
    // render() {
    //     return(
            // <RoomContex.Provider value ={{mirsevini: this.state.mirsevini}} >
        state = {
            dhomat: [],
            sortimiDhomav: [],
            karakteristikatDHomave: [],
            ngarkimi: true,
            type: "all",
            capacity: 1,
            price: 0,
            minPrice: 0,
            maxPrice: 0,
            minSize: 0,
            maxSize: 0,
            breakfast: false,
            pets: false
        }
        // getData
        getData = async () => {
            try {
                let response = await client.getEntries({
                    content_type: "toniHotelResort",
                    // order: '-sys.createdAt,sys.id'
                    order: "fields.price"
                    
                });
                console.log(response)
                let dhomat = this.formatData(response.items);
                let karakteristikatDHomave = dhomat.filter(dhom => dhom.featured === true);
                let maxPrice = Math.max(...dhomat.map(dhomprice => dhomprice.price ));
                let maxSize = Math.max(...dhomat.map(dhomsize => dhomsize.size));
                this.setState({
                    dhomat,
                    karakteristikatDHomave, 
                    sortimiDhomav:dhomat, 
                    ngarkimi:false,
                    price: maxPrice,
                    maxPrice,
                    maxSize
                })
            } catch (error) {
                console.log(error);
            }
        }
        componentDidMount() {
            this.getData()
            
        }

        formatData(items){
            let tempItem = items.map(item => {
                let id = item.sys.id;
                let images = item.fields.images.map(image => image.fields.file.url);
                let dhomatkryesore = {...item.fields, images, id};
                return dhomatkryesore
            })
            return tempItem
        }

        getRoom = (slug) => {
            let tempRooms = [...this.state.dhomat];
            const dhom = tempRooms.find(dhom => dhom.slug===slug);
            return dhom;
        }
        handleChange = e => {
            const target = e.target;
            const name = e.target.name;
            const value = target.type === 'checkbox' ? target.checked : target.value;
            this.setState({
                [name]: value
            }, this.roomFilters)
        }

        roomFilters = () => {
            let { dhomat, type, capacity, price, minSize, maxSize, breakfast, pets } = this.state
        // all the rooms
        let tempRooms = [...dhomat];
            // tranforme value 
        capacity = parseInt(capacity);
        price = parseInt(price);
        // filter by type
        if(type !== 'all'){
            tempRooms = tempRooms.filter(room => room.type === type )
        }
        // filter of capacity
        if(capacity !== 1) {
            tempRooms = tempRooms.filter(room => room.capacity >= capacity)
        }
        // filter by price
        tempRooms = tempRooms.filter(room => room.price <= price);
        // filter by size
        tempRooms = tempRooms.filter(room => room.size >= minSize && room.size <= maxSize);
        // filter by breakfast
        if(breakfast){
            tempRooms = tempRooms.filter(room => room.breakfast === true)
            console.log(tempRooms)
        }

        // filter by pets
        if(pets){
            tempRooms = tempRooms.filter(room => room.pets === true)
        }
        // changing state
        this.setState({
            sortimiDhomav: tempRooms
        })
    }
        render() {
            return(
            <RoomContex.Provider value ={{...this.state, getRoom: this.getRoom, handleChange: this.handleChange}} >
                {this.props.children}
            </RoomContex.Provider>
        )
    }
}

export function WithRoomConsumer(Component) {
    return function ConsumerWrapper(props) {
        return <RoomConsumer>
            {value => <Component {...props} konteksti={value} />}
        </RoomConsumer>
    }
}

const RoomConsumer = RoomContex.Consumer;

export{RoomProvider, RoomConsumer, RoomContex}