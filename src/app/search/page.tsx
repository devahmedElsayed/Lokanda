import { format } from "date-fns";
import Footer from "../componant/Footer"
import Header from "../componant/header/Header"
import { getSaerchResult } from "../componant/Utils/api";
import { SearchResultData } from "../types/app";
import ListingCard from "../componant/ListingCard";
import Map from "../componant/Map";

type searchParams={
  location:string
  startDate:string,endDate:string ,numOfGuest:string
}
const SearchResult =async ({searchParams:{location,startDate,endDate ,numOfGuest}}:{searchParams:searchParams}) => {
  let formatedStartDate ;
  let formatedEndDate ;
  if (startDate && endDate ) {
   formatedStartDate = format(new Date(startDate),"dd MMMM yy")
   formatedEndDate = format(new Date(endDate),"dd MMMM yy")
    
  }
  const range=`${formatedStartDate} - ${formatedEndDate}`
  const filters = [
    'Cancellation Flexibility',
    'Type of Place',
    'Price',
    'Rooms and Beds',
    'More filters',
  ];
  const searchResultData:SearchResultData=await getSaerchResult()
  console.log(searchResultData);
  
  return (
    <>
      <Header  placeholder={`${location} | ${range} |${numOfGuest} gustes`}/>
      <main>
        <section >
          <div className="container flex">
          <div className=" pt-14 pr-4 ">
          <p className="text-xs">
            300+ Stays -{range} - for {numOfGuest} gustes
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
            </h1>
            <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            {filters.map(filter =>(
              <button type="button" className="filter-btn" key={filter}>
                  {filter}
              </button>
            ) )}
          
            </div>
            <div>
            {searchResultData.map(listing =>(
              <ListingCard 
                key={listing.title}
                img={listing.img}
                title={listing.title}
                location={listing.location}
                description={listing.description}
                star={listing.star}
                price={listing.price}
                total={listing.total}                />
            ))}
            </div>
          </div>
            <div className="hidden xl:inline-flex xl:min-w-[600px]">
              <Map searchResultData={searchResultData}/>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  )
}

export default SearchResult