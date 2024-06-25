import Banner from "./componant/Banner";
import Explore from "./componant/Explore";
import Live from "./componant/Live";
import GreatestOutdoors from "./componant/GreatestOutdoors";
import Header from "./componant/header/Header";
import Footer from "./componant/Footer";

export default function Home() {
  return (
    <>
    <Header/>
       <main>
    <Banner/>
    <Explore/>
    <Live/>
    <GreatestOutdoors
          img='https://images.unsplash.com/photo-1609688669309-fc15db557633?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
          title='The Greatest Outdoors'
          desc='Wishlists curated by Airbnb'
          linkText='Get Inspired'
        />
  </main>
    <Footer/>
    </>
  );
}
