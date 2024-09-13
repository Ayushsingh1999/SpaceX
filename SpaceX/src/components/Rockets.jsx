import React, { useEffect, useState } from "react";
import services from "../services/api_services";
import Loader from "./Loader";


const Rockets = () => {
    const [rocket,setrocket] = useState([]);
    const [loading,setloading] = useState(false);

    useEffect(()=>
    {
     const fetchData = async () =>
     {
        const data = await services.fetch_rocket_data();
        setrocket(data);
        setloading(false)
     }
     fetchData();
    },[])

    console.log("data",rocket)

    return (
        loading?<Loader/>:(
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {rocket.slice(0,3).map((rock) => (
            <div key={rock.rocket_id} className="bg-gray-800 bg-opacity-60 text-white p-4 rounded h-96">
              <h2 className="text-xl font-bold mt-2 pb-4">{rock.rocket_name}</h2>
              <img
                src={rock.flickr_images[0]}
                alt={rock.rocket_name}
                className="w-full h-64 object-cover rounded"
              />
              <p className={`p-1 mt-4 rounded ${rock.active ? 'bg-green-500' : 'bg-yellow-500'}`}>
                Status: {rock.active ? "Active" : "In Development"}
              </p>
            </div>
          ))}
        </div>
        )
      );
};

export default Rockets;
