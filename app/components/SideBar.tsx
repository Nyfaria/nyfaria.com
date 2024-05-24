'use client'
import React, {FC} from 'react';
import useState from 'react';
import {FaHome} from "react-icons/fa";
import {IoSchoolSharp} from "react-icons/io5";
import {BiSolidDownArrow, BiSolidLeftArrow, BiSolidRightArrow, BiSolidUpArrow} from "react-icons/bi";
import {TbBrandMinecraft} from "react-icons/tb";
import {useSideBarState, SideBarStateInterface} from "./SidebarStateProvider";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/navigation";



const SideBar=() => {
    const router = useRouter();
    const {setState} = useSideBarState();
    const {state} = useSideBarState();
    const [tutorialsCollapsed, setTutCollapsed] = React.useState(true);
    const [projectsCollapsed, setProjCollapsed] = React.useState(true);
    const doClick = (data: Partial<SideBarStateInterface>) => {
        setState((prev) => ({...prev, ...data}));
    }
    const onTutClick = () => setTutCollapsed(!tutorialsCollapsed)
    const onProjClick = () => setProjCollapsed(!projectsCollapsed)
    let onHandleClick = () => doClick({collapsed: !state.collapsed})
    const goHome = () => {}
    const goOneTwelve = () => {}
    const goOneTwenty = () => {}
    const goSolo = () => {}
    const goTeam = () => {}
    return (
        <div className="App">
            <div className={state.collapsed ? "sidebar-open" : "collapsed"}>
                <Image className={"sidebar-logo"} src={"/images/icon.png"} width={100}height={100} alt="logo"/>
                <div className={"sidebar-title"}>Modding with Nyfaria</div>
                <div className={"line-1"}></div>
                <div className={"sidebar-option"}
                     onClick={() => router.push("/")}>
                    <FaHome/>Home
                </div>
                <div className={tutorialsCollapsed ? "sidebar-tutorials-close" : "sidebar-tutorials-open"}>
                    <div className={"sidebar-option"} onClick={onTutClick}>
                        <IoSchoolSharp/>Tutorials {!tutorialsCollapsed ? <BiSolidUpArrow className={"float-right"}/> :
                        <BiSolidDownArrow className={"float-right"}/>}
                    </div>
                    <div className={!tutorialsCollapsed ? "sidebar-sub-option sidebar-option-hover" : "collapsed"}
                         onClick={() => router.push("/1_12_2_modding_tutorials")}
                         id={"sidebar-tutorials"}>1.12.2 Modding
                    </div>
                    <div className={!tutorialsCollapsed ? "sidebar-sub-option" : "collapsed"}
                         onClick={() => router.push("/1_20_modding_tutorials")}
                         id={"sidebar-tutorials"}>1.20.1 Modding
                    </div>
                </div>

                <div className={projectsCollapsed ? "sidebar-projects-close" : "sidebar-projects-open"}>
                    <div className={"sidebar-option"} onClick={onProjClick}>
                        <TbBrandMinecraft/>Projects {!projectsCollapsed ?
                        <BiSolidUpArrow className={"float-right"}/> :
                        <BiSolidDownArrow className={"float-right"}/>}
                    </div>
                    <div className={!projectsCollapsed ? "sidebar-sub-option sidebar-option-hover" : "collapsed"}
                         onClick={() => router.push("/solo_projects")}
                         id={"sidebar-tutorials"}>Solo/Collab Projects
                    </div>
                    <div className={!projectsCollapsed ? "sidebar-sub-option" : "collapsed"}
                         onClick={() => router.push("/group_projects")}
                         id={"sidebar-tutorials"}> Team Projects
                    </div>
                </div>
                <div className={"socials"}>
                    <a className={"link"} target={"_blank"} href={"https://discord.gg/WbNYM68Bkt"}>
                        <Image className={"social"} id={"discord"}
                               width={40} height={40}
                             src={'/images/discord_icon.png'} alt={"discord"}/>
                    </a>

                    <a className="link" target="_blank" href="https://twitter.com/TheNyfaria">
                        <Image className="social" id="twitter" alt={"twitter"}
                               width={40} height={40}
                             src={"/images/twitter_icon.png"}/>
                    </a>

                    <a className="link" target="_blank" href="https://github.com/Nyfaria">
                        <Image className="social" id="github" alt={"github"}
                               width={40} height={40}
                             src={"/images/github_icon.png"}/>
                    </a>
                </div>
            </div>

            <div onClick={onHandleClick}
                 className={state.collapsed ? "sidebar-button-open" : "sidebar-button-close"}>{state.collapsed ?
                <BiSolidLeftArrow className={"vertical-center"}/> : <BiSolidRightArrow className={"vertical-center"}/>}
            </div>
        </div>
    );
}
export default SideBar;