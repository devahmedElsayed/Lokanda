import { LiveData } from "../types/app";
import LiveCard from "./LiveCard";
import { getLive } from "./Utils/api"

const Live =async () => {
    const liveData:LiveData=await getLive();
    console.log(liveData);
    
  return (
    <section className='pt-6' >
        <div className='container'>
            <div className="flex space-x-3 overflow-scroll no-scrollbar p-3 -ml-3">
            {liveData.map((item=>
                <LiveCard key={item.img}
                 img={item.img} 
                 title={item.title} />
            ))}
            </div>
        </div>

    </section>
  )
}

export default Live