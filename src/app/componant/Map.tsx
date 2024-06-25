'use client'
import { useState } from 'react'
import MapGl,{Marker,Popup} from 'react-map-gl'
import { ListingCardItem, SearchResultData } from '../types/app'
import { getCenter } from 'geolib'
import 'mapbox-gl/dist/mapbox-gl.css';
import { FaLocationDot } from "react-icons/fa6";
const Map = ({searchResultData}:{searchResultData:SearchResultData}) => {
  const [selectedLocation,setSelectedLocation]=useState<ListingCardItem | null>(null)
  const coordinates =searchResultData.map(listing=>({
    longitude:listing.long,
    latitude:listing.lat,
  }))
  
 
  const center = getCenter(coordinates) as {
    longitude: number;
    latitude: number;
  };

  const [viewport,setViewport]=useState({
    width:'100%',
    height:'100%',
    zoom:11,
    longitude:center.longitude,
    latitude:center.latitude,
  })
  return (
    <MapGl {...viewport}
     mapStyle='mapbox://styles/ahmedelsayed1/clx7w74wj01xu01pn61ti61gt'
     mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_KEY}
     onMove={(nextviewport)=> setViewport((prev)=>{
      return{
        ...prev,
        longitude:nextviewport.viewState.longitude,
        latitude:nextviewport.viewState.latitude,
      };
     })}
    >
      {searchResultData.map(listing=>(
        <div key={listing.long}>
          <Marker longitude={listing.long} latitude={listing.lat}>
            <div onClick={()=> setSelectedLocation(listing)} className='animate-bounce'>
            <FaLocationDot className='text-red-400 text-xl'/>

            </div>
          </Marker>
          {selectedLocation?.long === listing.long ? 
          <Popup closeOnClick={false} onClose={()=>setSelectedLocation(null)}
          longitude={listing.long}
          latitude={listing.lat}
          >
            {listing.title}
            </Popup>
          :null}
        </div>
      ))}
     </MapGl>
  );
};

export default Map;