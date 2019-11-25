import React from 'react'
import Room from './Room'

function RoomList({rooms}) {
    if(rooms.length === 0){
    return(
        <div className="empty-search">
            <h3>Unfortunately no rooms matched your search parameters</h3>
        </div>
        )
    }
    return(
        <>
        <section className="roomslist">
            <div className="roomslist-center">
                {rooms.map(dhom => {
                    return <Room key={dhom.id} dhomatmain={dhom} />;
                })}
            </div>
        </section>
        </>
    );
}

export default RoomList