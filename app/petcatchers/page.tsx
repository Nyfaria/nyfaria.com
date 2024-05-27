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

const Page = () => {
    const {state} = useSideBarState();
    const {state1,setState1} = usePetInfoState1();
    const {state2,setState2} = usePetInfoState2();
    const {state3,setState3} = usePetInfoState3();
    const {state4,setState4} = usePetInfoState4();
    const {state5,setState5} = usePetInfoState5();
    const {state6,setState6} = usePetInfoState6();
    const {state7,setState7} = usePetInfoState7();
    const {state8,setState8} = usePetInfoState8();

    const setPetData1 = (data: PetData) => {
        setState1(current => ({...current, pet: data}));
    }
    const setPetData2 = (data: PetData) => {
        setState2(current => ({...current, pet: data}));
    }
    const setPetData3 = (data: PetData) => {
        setState3(current => ({...current, pet: data}));
    }
    const setPetData4 = (data: PetData) => {
        setState4(current => ({...current, pet: data}));
    }
    const setPetData5 = (data: PetData) => {
        setState5(current => ({...current, pet: data}));
    }
    const setPetData6 = (data: PetData) => {
        setState6(current => ({...current, pet: data}));
    }
    const setPetData7 = (data: PetData) => {
        setState7(current => ({...current, pet: data}));
    }
    const setPetData8 = (data: PetData) => {
        setState8(current => ({...current, pet: data}));
    }
    const setRune1_1 = (data: RuneData) => {
        setState1(current => ({...current, rune1: data}));
    }
    const setRune1_2 = (data: RuneData) => {
        setState1(current => ({...current, rune2: data}));
    }
    const setRune1_3 = (data: RuneData) => {
        setState1(current => ({...current, rune3: data}));
    }
    const setRune2_1 = (data: RuneData) => {
        setState2(current => ({...current, rune1: data}));
    }
    const setRune2_2 = (data: RuneData) => {
        setState2(current => ({...current, rune2: data}));
    }
    const setRune2_3 = (data: RuneData) => {
        setState2(current => ({...current, rune3: data}));
    }
    const setRune3_1 = (data: RuneData) => {
        setState3(current => ({...current, rune1: data}));
    }
    const setRune3_2 = (data: RuneData) => {
        setState3(current => ({...current, rune2: data}));
    }
    const setRune3_3 = (data: RuneData) => {
        setState3(current => ({...current, rune3: data}));
    }
    const setRune4_1 = (data: RuneData) => {
        setState4(current => ({...current, rune1: data}));
    }
    const setRune4_2 = (data: RuneData) => {
        setState4(current => ({...current, rune2: data}));
    }
    const setRune4_3 = (data: RuneData) => {
        setState4(current => ({...current, rune3: data}));
    }
    const setRune5_1 = (data: RuneData) => {
        setState5(current => ({...current, rune1: data}));
    }
    const setRune5_2 = (data: RuneData) => {
        setState5(current => ({...current, rune2: data}));
    }
    const setRune5_3 = (data: RuneData) => {
        setState5(current => ({...current, rune3: data}));
    }
    const setRune6_1 = (data: RuneData) => {
        setState6(current => ({...current, rune1: data}));
    }
    const setRune6_2 = (data: RuneData) => {
        setState6(current => ({...current, rune2: data}));
    }
    const setRune6_3 = (data: RuneData) => {
        setState6(current => ({...current, rune3: data}));
    }
    const setRune7_1 = (data: RuneData) => {
        setState7(current => ({...current, rune1: data}));
    }
    const setRune7_2 = (data: RuneData) => {
        setState7(current => ({...current, rune2: data}));
    }
    const setRune7_3 = (data: RuneData) => {
        setState7(current => ({...current, rune3: data}));
    }
    const setRune8_1 = (data: RuneData) => {
        setState8(current => ({...current, rune1: data}));
    }
    const setRune8_2 = (data: RuneData) => {
        setState8(current => ({...current, rune2: data}));
    }
    const setRune8_3 = (data: RuneData) => {
        setState8(current => ({...current, rune3: data}));
    }

    return (
        <div className={state.collapsed ? "home-open" : "home-close"}>
            <h2>Pet Catchers</h2>
            <div className={"home-desc"}>
                <p>Calculator</p>
                <PetInfoDisplay petDataSelection={setPetData1} runeData1Selection={setRune1_1}
                                runeData2Selection={setRune1_2} runeData3Selection={setRune1_3}/>
                <PetInfoDisplay petDataSelection={setPetData2} runeData1Selection={setRune2_1}
                                runeData2Selection={setRune2_2} runeData3Selection={setRune2_3}/>
                <PetInfoDisplay petDataSelection={setPetData3} runeData1Selection={setRune3_1}
                                runeData2Selection={setRune3_2} runeData3Selection={setRune3_3}/>
                <PetInfoDisplay petDataSelection={setPetData4} runeData1Selection={setRune4_1}
                                runeData2Selection={setRune4_2} runeData3Selection={setRune4_3}/>
                <PetInfoDisplay petDataSelection={setPetData5} runeData1Selection={setRune5_1}
                                runeData2Selection={setRune5_2} runeData3Selection={setRune5_3}/>
                <PetInfoDisplay petDataSelection={setPetData6} runeData1Selection={setRune6_1}
                                runeData2Selection={setRune6_2} runeData3Selection={setRune6_3}/>
                <PetInfoDisplay petDataSelection={setPetData7} runeData1Selection={setRune7_1}
                                runeData2Selection={setRune7_2} runeData3Selection={setRune7_3}/>
                <PetInfoDisplay petDataSelection={setPetData8} runeData1Selection={setRune8_1}
                                runeData2Selection={setRune8_2} runeData3Selection={setRune8_3}/>
            </div>
        </div>
    );
}
export default Page;