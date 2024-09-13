import React, { useEffect, useState } from "react";
import services from "../services/api_services";
import Loader from "./Loader";
import LaunchCard from "./LaunchCard";
import PrevLaunch from "./PrevLaunch";
import StartLinkComp from "./StarLinkComp";


const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [launch , setlaunch]  = useState(null)
  const [prev,setprev] =  useState(null)
  const [star, setstar] =  useState([])

  useEffect(()=>
  {
    const FetchAllData = async () =>
    {
      try {
        const [upcomingLaunch,prevLaunch,starLink] = await Promise.all([
          services.Upcoming_launch(),
          services.Previous_launch(),
          services.Starlink(),
        ]);

        setlaunch(upcomingLaunch[0]);
        setprev(prevLaunch[0])
        setstar(starLink)
      } catch (error) {
        console.log("this is error==>",error)
      } finally
      {
        setLoading(false)
      }
    }
     FetchAllData();
  },[])

  if(loading)
  {
    return <Loader/>;
  }

  return (
      <div className="flex">
        <div className="flex space-x-4">
          <LaunchCard details = {launch}/>
          <PrevLaunch details = {prev}/>
          <StartLinkComp data = {star}/>
        </div>
    </div>
  );
};

export default Dashboard;
