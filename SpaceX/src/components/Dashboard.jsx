import React, { useEffect, useState } from "react";
import { FaWikipediaW, FaYoutube, FaTwitter } from "react-icons/fa"; // Import icons
import services from "../services/api_services";
import Loader from "./Loader";

const LaunchCard = ({ setLoading }) => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Ensure loading is set before fetching
      try {
        const data = await services.Upcoming_launch();
        setDetails(data[0]);
        console.log("Upcoming launch data:", data[0]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching launch data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, [setLoading]); // Dependency array includes setLoading to avoid stale closures

  if (!details) {
    return <div>No launch details available.</div>;
  }

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
      <h2 className="text-lg font-bold mb-2">Upcoming launch</h2>
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

const PrevLaunch = ({ setLoading }) => {
  const [view, setView] = useState(null);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const data = await services.Previous_launch();
        setView(data[0]);
        console.log("Previous launch data:", data[0]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching previous launch data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, [setLoading]);

  if (!view) {
    return <div>No launch details available.</div>;
  }

  // Extracting required details from the API response
  const {
    mission_name,
    flight_number,
    launch_date_utc,
    rocket: { rocket_name },
    launch_site: { site_name },
    links: { mission_patch, wikipedia, video_link },
  } = view;

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

const StartLinkComp = ({ setLoading }) => {
  const [StarData, setStarData] = useState([]);

  useEffect(() => {
    setLoading(true);
    const fetchStarlinkData = async () => {
      try {
        const sol = await services.Starlink();
        setStarData(sol);
        setLoading(false);
        console.log("Starlink data:", sol);
      } catch (error) {
        console.error("Error fetching Starlink data:", error);
        setLoading(false);
      }
    };
    fetchStarlinkData();
  }, [setLoading]);

  if (!StarData.length) {
    return <div>No data of Starlink Satellite</div>;
  }

  return (
<div className="flex flex-col items-center justify-center bg-gray-900 text-white p-6 rounded-lg shadow-lg max-w-xs mx-auto bg-opacity-40 ">
      <div className="text-xl font-bold mb-2">Starlink</div>
      <div className="flex justify-center items-center mb-4">
        {/* Placeholder for the satellite icon */}
        <div className="bg-gray-700 p-4 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-10 h-10 text-white"
          >
            {/* Add any suitable satellite icon SVG here */}
            <path d="M21.984 8.016h-1.969v-1.969h1.969v1.969zm0-6.516q.797 0 1.383.586t.586 1.383v3.516h-1.969v-3.516h-3.516v-1.969h3.516zm-2.344 6.938l1.406 1.406-8.953 8.953-1.406-1.406zm3.422-9.422q1.594 0 2.727 1.133t1.133 2.727v3.984q0 .938-.797 1.781l-9.188 9.188q-.844.797-1.781.797h-3.984q-1.594 0-2.727-1.133t-1.133-2.727v-3.984q0-.938.797-1.781l9.188-9.188q.844-.797 1.781-.797h3.984zm-13.031 19.969h3.984q.469 0 .867-.188t.703-.516l.891-.891-8.953-8.953-.891.891q-.328.328-.516.703t-.188.867v3.984q0 1.172.82 1.992t1.992.82zm-5.016-4.969q.797 0 1.383.586t.586 1.383v3.516h3.516q.797 0 1.383.586t.586 1.383q0 .797-.586 1.383t-1.383.586h-3.516v3.516h-1.969v-3.516h-3.516q-.797 0-1.383-.586t-.586-1.383q0-.797.586-1.383t1.383-.586h3.516v-3.516h1.969zm5.016-7.031q1.031 0 1.758.727t.727 1.758q0 .703-.352 1.242t-.945.773l1.664 1.664q.328-.234.773-.352t.93-.117q1.031 0 1.758.727t.727 1.758q0 1.031-.727 1.758t-1.758.727q-1.031 0-1.758-.727t-.727-1.758q0-.703.352-1.242t.945-.773l-1.664-1.664q-.328.234-.773.352t-.93.117q-1.031 0-1.758-.727t-.727-1.758q0-1.031.727-1.758t1.758-.727zm-3 0q1.031 0 1.758.727t.727 1.758q0 .703-.352 1.242t-.945.773l1.664 1.664q.328-.234.773-.352t.93-.117q1.031 0 1.758.727t.727 1.758q0 1.031-.727 1.758t-1.758.727q-1.031 0-1.758-.727t-.727-1.758q0-.703.352-1.242t.945-.773l-1.664-1.664q-.328.234-.773.352t-.93.117q-1.031 0-1.758-.727t-.727-1.758q0-1.031.727-1.758t1.758-.727z" />
          </svg>
        </div>
      </div>
      <p className="text-center text-base font-medium">
        {`There are currently ${StarData.length} active Starlink satellites on the low Earth orbit.`}
      </p>
    </div>
  );
};

const Dashboard = () => {
  const [loading, setLoading] = useState(false);

  return (
      <div className="flex">
        {loading && <Loader />} {/* Conditionally render Loader based on loading state */}
        <div className="flex space-x-4">
          <LaunchCard setLoading={setLoading} />
          <PrevLaunch setLoading={setLoading} />
          <StartLinkComp setLoading={setLoading} />
        </div>
    </div>
  );
};

export default Dashboard;
