import React from 'react';
import "./Sidebar.css";
import snehilfyz from './snehilfyz.png';
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { getTokenFromResponse } from "./spotify";
import { useDataLayerValue } from "./DataLayer";

console.log(snehilfyz);


function Sidebar() {
    const [{ playlists }, dispatch] = useDataLayerValue();
    console.log(playlists);

    return (
        <div className="sidebar">
         <img className='sidebar_logo' src={snehilfyz}/>
         <SidebarOption Icon={HomeIcon} title="Home" />
         <SidebarOption Icon={SearchIcon} title="Search" />
         <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
         <br />
         <strong className="sidebar__title">PLAYLISTS</strong>
         <hr />
         {playlists?.items?.map(playlist => (
             <SidebarOption title={playlist.name} />
         ))}
        </div>
    );
}

export default Sidebar;
