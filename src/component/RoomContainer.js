import React from 'react'
import RoomFilter from './RoomFilter'
import RoomList from './RoomList'

import {WithRoomConsumer} from '../Context'
import Loading from './Loading'

function RoomContainer({konteksti}) {
    const { dhomat, sortimiDhomav, ngarkimi} = konteksti
    if(ngarkimi){
        return <Loading />
        }
        return(
            <>
                <RoomFilter rooms={dhomat} />
                <RoomList rooms={sortimiDhomav}/>
            </>
            );
}

export default WithRoomConsumer(RoomContainer)



















// import React from 'react'
// import RoomFilter from './RoomFilter'
// import RoomList from './RoomList'

// import {RoomConsumer} from '../Context'
// import Loading from './Loading'

// function RoomContainer() {
//     return(
//         <RoomConsumer>
//             {value => {
//                 const { ngarkimi, sortimiDhomav, dhomat} = value
//                 if(ngarkimi){
//                     return <Loading />
//                 }
//             return(
//                 <div>
//                     Hello from RoomContainer
//                     <RoomFilter rooms={dhomat} />
//                     <RoomList rooms={sortimiDhomav}/>
//                 </div>
//                 );
//             }}
//         </RoomConsumer>
//     )
// }

// export default RoomContainer