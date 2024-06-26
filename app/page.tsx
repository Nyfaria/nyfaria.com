'use client'
import React from "react";
import {useSideBarState} from "./components/SidebarStateProvider";


export default function Home() {
  const {state} = useSideBarState();
  return (
      <div className={state.collapsed ? "home-open" : "home-close"}>
        <h2>Home</h2>
        <div className={"home-desc"}>
          <p>Welcome to Modding with Nyfaria!</p>
          <p>Nyfaria, also known as Anthony Jones, is a well-known figure in the modding community. He creates and maintains a variety of popular mods that enhance the gameplay experience by adding new features and mechanics. Some of his notable mods include:</p>
          <ol type={"1"}>
            <li>Nyf&apos;s Spiders - This mod improves the behavior of spider, allowing them to climb walls and ceilings more realistically. </li>
            <li>Nyf&apos;s Quivers - This mod introduces Quivers with different capacities and various functionalities such as toggling between different types of arrows.</li>
          </ol>
          <p>Nyfaria is active on platforms like GitHub and Discord, where he shares his work and collaborates with other developers. His contributes to the Minecraft modding community have made him a respected and influential figure among players and fellow Modders alike.</p>
          <p>-ChatGPT</p>
        </div>
      </div>
  );
}
