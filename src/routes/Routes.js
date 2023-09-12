import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "../view/Onboarding/Landing";
import RegisterAsArtist from "../view/Onboarding/Register/RegisterAsArtist/RegisterAsArtist";
import ArtistLogin from "../view/Onboarding/Login/ArtistLogin/ArtistLogin";
import RegisterAsListener from "../view/Onboarding/Register/ListenerRegister/RegisterAsListener";
import Overview from "../view/Dashboard/Overview/Overview";
import Music from "../view/Dashboard/Music/Music";
import AddMusic from "../view/Dashboard/Music/AddMusic/AddMusic";
import SplitRoyalties from "../view/Dashboard/Music/SplitRoyalties/SplitRoyalties";
import Analytics from "../view/Dashboard/Analytics/Analytics";
import Earnings from "../view/Dashboard/Earnings/Earnings";
import Profile from "../view/Dashboard/Profile/Profile";
import ListenerOverview from "../view/Dashboard/Listener/Overview";
import Favorites from "../view/Dashboard/Listener/Favorites";
import Tokens from "../view/Dashboard/Listener/Token/Tokens";
// import Conversation from "../view/Conversation/Conversation";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/registration-artist" element={<RegisterAsArtist />} />
      <Route path="/registration-listener" element={<RegisterAsListener />} />
      <Route path="/login-artist" element={<ArtistLogin />} />
      <Route path="/dashboard/overview" element={<Overview />} />
      <Route path="/dashboard/analytics" element={<Analytics />} />
      <Route path="/dashboard/earnings" element={<Earnings />} />
      <Route path="/dashboard/profile" element={<Profile />} />
      <Route path="/dashboard/music" element={<Music />} />
      <Route path="/dashboard/music/add-music" element={<AddMusic />} />
      <Route path="/listener/dashboard/overview" element={<ListenerOverview />} />
      <Route path="/listener/dashboard/fav" element={<Favorites />} />
      <Route path="/listener/dashboard/tokens" element={<Tokens />} />
      <Route
        path="/dashboard/music/split-royalties"
        element={<SplitRoyalties />}
      />
    </Routes>
  );
};

export default AppRoutes;
