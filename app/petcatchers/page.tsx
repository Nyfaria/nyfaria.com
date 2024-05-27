'use client'
import React from 'react';
import {useSideBarState} from "../components/SidebarStateProvider";
import {MdArrowDropDown} from "react-icons/md";
import PetInfoDisplay from "@/app/petcatchers/components/PetInfoDisplay";
import "./petcatchers.css";
import {
    PetInfoStateProvider,
    usePetInfoState1,
    usePetInfoState2,
    usePetInfoState3,
    usePetInfoState4,
    usePetInfoState5,
    usePetInfoState6,
    usePetInfoState7,
    usePetInfoState8
} from "@/app/petcatchers/components/PetInfoStateProvider";
import {PetData, PetInfo, RuneData} from "@/app/data/PetData";
import {PetDataPanel} from "@/app/petcatchers/components/PetDataPanel";

const Page = () => {
    const {state} = useSideBarState();
    const {state1,setState1
    } = usePetInfoState1();
    const {state2,setState2} = usePetInfoState2();
    const {state3,setState3} = usePetInfoState3();
    const {state4,setState4} = usePetInfoState4();
    const {state5,setState5} = usePetInfoState5();
    const {state6,setState6} = usePetInfoState6();
    const {state7,setState7} = usePetInfoState7();
    const {state8,setState8} = usePetInfoState8();

    const updatePetInfo = (setState: React.Dispatch<React.SetStateAction<PetInfo>>, dataKey: string, data: any) => {
        setState(current => ({...current, [dataKey]: data}));
    }
    return (
        <div className={state.collapsed ? "home-open" : "home-close"}>
            <h2>Pet Catchers</h2>
            <div className={"home-desc"}>
                <p>Calculator</p>
                <PetInfoDisplay petInfoSelection={updatePetInfo} state={setState1} />
                <PetInfoDisplay petInfoSelection={updatePetInfo} state={setState2} />
                <PetInfoDisplay petInfoSelection={updatePetInfo} state={setState3} />
                <PetInfoDisplay petInfoSelection={updatePetInfo} state={setState4} />
                <PetInfoDisplay petInfoSelection={updatePetInfo} state={setState5} />
                <PetInfoDisplay petInfoSelection={updatePetInfo} state={setState6} />
                <PetInfoDisplay petInfoSelection={updatePetInfo} state={setState7} />
                <PetInfoDisplay petInfoSelection={updatePetInfo} state={setState8} />
                <PetDataPanel/>
            </div>
        </div>
    );
}
export default Page;