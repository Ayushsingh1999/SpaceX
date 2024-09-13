import { FaWikipediaW, FaYoutube, FaTwitter } from "react-icons/fa"; // Import icons

const PrevLaunch = ({ details }) => {
  
    // Extracting required details from the API response
    const {
      mission_name,
      flight_number,
      launch_date_utc,
      rocket: { rocket_name },
      launch_site: { site_name },
      links: { mission_patch, wikipedia, video_link },
    } = details;
  
    return (
      <div className="flex flex-col items-center bg-gray-800 text-white p-6 bg-opacity-40 rounded-lg shadow-lg max-w-sm mx-4">
        <h2 className="text-lg font-bold mb-2">Previous launch</h2>
        <div className="w-24 h-24 bg-gray-900 rounded-md flex items-center justify-center mb-4">
          <img src={mission_patch || "/rocket-logo.png"} alt="Rocket Logo" className="w-16 h-16" />
        </div>
  
        <div className="text-center mb-4">
          <p className="text-sm font-semibold">MISSION NAME</p>
          <h3 className="text-xl font-bold">{mission_name || "N/A"}</h3>
        </div>
  
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <p className="text-sm font-semibold">ROCKET</p>
            <h4 className="text-lg font-bold">{rocket_name || "N/A"}</h4>
          </div>
          <div>
            <p className="text-sm font-semibold">FLIGHT NUMBER</p>
            <h4 className="text-lg font-bold">{flight_number || "N/A"}</h4>
          </div>
        </div>
  
        <div className="text-center mb-4">
          <p className="text-sm font-semibold">TIME (UTC)</p>
          <h4 className="text-lg font-bold">{new Date(launch_date_utc).toLocaleString() || "N/A"}</h4>
        </div>
  
        <div className="text-center mb-4">
          <p className="text-sm font-semibold">LAUNCHPAD</p>
          <h4 className="text-lg font-bold">{site_name || "N/A"}</h4>
        </div>
  
        <div className="flex justify-center gap-6">
          <a
            href={wikipedia || "https://wikipedia.org"}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaWikipediaW size={30} />
          </a>
          <a
            href={video_link || "https://youtube.com"}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaYoutube size={30} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaTwitter size={30} />
          </a>
        </div>
      </div>
    );
  };

  
export default PrevLaunch;