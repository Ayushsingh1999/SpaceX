const services = {}

services.fetch_rocket_data = async () => {
  const rocket_api_url = "https://api.spacexdata.com/v3/rockets";
  try {
    const res = await fetch(rocket_api_url);

    const rocket_data = await res.json();

    return rocket_data;
  } catch (err) {
    console.log("this is the error", err);
  }
};

services.Upcoming_launch = async ()=>
{
  const up_launch = `https://api.spacexdata.com/v3/launches/upcoming`
  
  const res = await fetch(up_launch)

  const new_data =  await res.json();

  return new_data;
}

services.Previous_launch = async () =>
{
  const pl_launch = 'https://api.spacexdata.com/v3/launches/past'

  const res = await fetch(pl_launch)

  const new_data = await res.json()

  return new_data;
}



services.Starlink = async () =>
{
  const Starlink_link = 'https://api.spacexdata.com/v4/starlink'
  try {

    const res =  await fetch(Starlink_link)

    const data =  await res.json();

    return data;
  } catch (error) {
    console.log("this is the error",error)
  }
}



export default services;
