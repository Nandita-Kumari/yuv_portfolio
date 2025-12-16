import React from "react";
import Navbar from "../components/Navbar";
import card1 from "../assets/cards/Card1.png"
import Hero_Second from "../components/Hero_Second";
import Hero from "../components/Hero";

export default function Home() {
 
  return (
    <div
      style={{
        backgroundColor: "#000000",
        minHeight: "100vh",
        color: "#ffffff",
      }}
    >
      <Navbar />
      <Hero/>
      <Hero_Second/>
      
    </div>
  );
}
