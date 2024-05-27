import React, {useState} from "react";
import PetInfoDropDown from "./PetInfoDropDown";
import data from "../../data/pet_data.json";
import runes from "../../data/rune_stats.json";
import {PetData, PetInfo, RomanNumeral, RuneData} from "@/app/data/PetData";
import "../petcatchers.css";
import RuneDropDown from "@/app/petcatchers/components/RuneDropDown";
import numerals from "../../data/roman_numerals.json";
import RuneLevelDropDown from "@/app/petcatchers/components/RuneLevelDropDown";
import NumberDropDown from "@/app/petcatchers/components/NumberDropDown";
import {IoMdArrowDropdown, IoMdArrowDropup, IoMdArrowUp} from "react-icons/io";

interface PetInfoDisplayProps {
    state: Function;
    petInfoSelection: Function;
}

const PetInfoDisplay: React.FC<PetInfoDisplayProps> = (props): JSX.Element => {
    const [showDropDown, setShowDropDown] = useState<boolean>(false);
    const [showRuneDropDown1, setShowRuneDropDown1] = useState<boolean>(false);
    const [showRuneLevelDD1, setRuneLevelDD1] = useState<boolean>(false);
    const [showRuneDropDown2, setShowRuneDropDown2] = useState<boolean>(false);
    const [showRuneLevelDD2, setRuneLevelDD2] = useState<boolean>(false);
    const [showRuneDropDown3, setShowRuneDropDown3] = useState<boolean>(false);
    const [showRuneLevelDD3, setRuneLevelDD3] = useState<boolean>(false);
    const [isShiny, setIsShiny] = useState<boolean>(false);

    const [showPetLevelDD, setShowPetLevelDD] = useState<boolean>(false);

    const [selectedData, setSelectedData] = useState<PetInfo>({
        shiny: false,
        pet: {Name: "None", Damage: 0, Coins: 0} as PetData,
        rune1: {
            name: "None",
            type: "None",
            I: 0,
            II: 0,
            III: 0,
            IV: 0,
            V: 0,
            VI: 0,
            VII: 0,
            VIII: 0,
            IX: 0,
            X: 0
        } as RuneData,
        rune1Level: {name: "I", value: 1} as RomanNumeral,
        rune2: {
            name: "None",
            type: "None",
            I: 0,
            II: 0,
            III: 0,
            IV: 0,
            V: 0,
            VI: 0,
            VII: 0,
            VIII: 0,
            IX: 0,
            X: 0
        } as RuneData,
        rune2Level: {name: "I", value: 1} as RomanNumeral,
        rune3: {
            name: "None",
            type: "None",
            I: 0,
            II: 0,
            III: 0,
            IV: 0,
            V: 0,
            VI: 0,
            VII: 0,
            VIII: 0,
            IX: 0,
            X: 0
        } as RuneData,
        rune3Level: {name: "I", value: 1} as RomanNumeral,
        level: 1,
    } as PetInfo);
    const getPets = () => {
        //write data to log
        // console.log(data);
        let dataList: PetData[] = [];
        dataList.push({Name: "None", Damage: 0, Coins: 0} as PetData)
        for (let i = 0; i < data.pets.length; i++) {
            dataList.push(data.pets[i] as PetData);
        }
        return dataList;
    }
    const getRunes = () => {
        let dataList: RuneData[] = [];
        dataList.push({
            name: "None",
            type: "None",
            I: 0,
            II: 0,
            III: 0,
            IV: 0,
            V: 0,
            VI: 0,
            VII: 0,
            VIII: 0,
            IX: 0,
            X: 0
        } as RuneData);
        for (let i = 0; i < runes.runes.length; i++) {
            dataList.push(runes.runes[i] as RuneData);
        }
        return dataList
    }
    const getNumerals = () => {
        return numerals.numerals as RomanNumeral[];
    }
    const getPetLevels = () => {
        let levels = [];
        for (let i = 1; i < 26; i++) {
            levels.push(i);
        }
        return levels;
    }

    /**
     * Toggle the drop down menu
     */
    const toggleDropDown = () => {
        setShowDropDown(!showDropDown);
    };
    const toggleRuneDropDown1 = () => {
        setShowRuneDropDown1(!showRuneDropDown1);
    }
    const toggleRuneDropDown2 = () => {
        setShowRuneDropDown2(!showRuneDropDown2);
    }
    const toggleRuneDropDown3 = () => {
        setShowRuneDropDown3(!showRuneDropDown3);
    }
    const toggleRuneLevelDD1 = () => {
        setRuneLevelDD1(!showRuneLevelDD1);
    }
    const toggleRuneLevelDD2 = () => {
        setRuneLevelDD2(!showRuneLevelDD2);
    }
    const toggleRuneLevelDD3 = () => {
        setRuneLevelDD3(!showRuneLevelDD3);
    }
    const togglePetLevelDD = () => {
        setShowPetLevelDD(!showPetLevelDD);
    }

    /**
     * Hide the drop down menu if click occurs
     * outside of the drop-down element.
     *
     * @param event  The mouse event
     */
    const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>): void => {
        if (event.currentTarget === event.target) {
            setShowDropDown(false);
        }
    };

    /**
     * Callback function to consume the
     * city name from the child component
     *
     * @param petData  The selected city
     */
    const petSelection = (petData: PetData): void => {
        setSelectedData(current => ({
            ...current,
            pet: petData,
        }));
        props.petInfoSelection(props.state, 'pet', petData);
    };
    const setShinyData = (shiny: boolean): void => {
        setSelectedData(current => ({
            ...current,
            shiny: shiny,
        }));
        props.petInfoSelection(props.state, 'shiny', shiny);
    }
    const rune1Selection = (runeData: RuneData): void => {
        setSelectedData(current => ({
            ...current,
            rune1: runeData,
        }));
        props.petInfoSelection(props.state, 'rune1', runeData);
    };
    const rune2Selection = (runeData: RuneData): void => {
        setSelectedData(current => ({
            ...current,
            rune2: runeData,
        }));
        props.petInfoSelection(props.state, 'rune2', runeData);
    };
    const rune3Selection = (runeData: RuneData): void => {
        setSelectedData(current => ({
            ...current,
            rune3: runeData,
        }));
        props.petInfoSelection(props.state, 'rune3', runeData);
    };
    const rune1LevelSelection = (runeLevel: RomanNumeral): void => {
        setSelectedData(current => ({
            ...current, rune1Level: runeLevel,
        }));
        props.petInfoSelection(props.state, 'rune1Level', runeLevel);
    }
    const rune2LevelSelection = (runeLevel: RomanNumeral): void => {
        setSelectedData(current => ({
            ...current, rune2Level: runeLevel,
        }));
        props.petInfoSelection(props.state, 'rune2Level', runeLevel);
    }
    const rune3LevelSelection = (runeLevel: RomanNumeral): void => {
        setSelectedData(current => ({
            ...current, rune3Level: runeLevel,
        }));
        props.petInfoSelection(props.state, 'rune3Level', runeLevel);
    }
    const petLevelSelection = (level: number): void => {
        setSelectedData(current => ({
            ...current, level: level,
        }));
        props.petInfoSelection(props.state, 'level', level);
    }
    const calculateDamage = (): number => {
        let damage = selectedData.pet.Damage;
        let level = selectedData.level;
        if (level > 1) {
            let blah = level - 1;
            let blahBlah = damage * (1 / 24);
            damage += blah * blahBlah;
        }
        if (selectedData.rune1.name === "Deadly") {
            switch (selectedData.rune1Level.name) {
                case "I":
                    damage *= selectedData.rune1.I;
                    break;
                case "II":
                    damage *= selectedData.rune1.II;
                    break;
                case "III":
                    damage *= selectedData.rune1.III;
                    break;
                case "IV":
                    damage *= selectedData.rune1.IV;
                    break;
                case "V":
                    damage *= selectedData.rune1.V;
                    break;
                case "VI":
                    damage *= selectedData.rune1.VI;
                    break;
                case "VII":
                    damage *= selectedData.rune1.VII;
                    break;
                case "VIII":
                    damage *= selectedData.rune1.VIII;
                    break;
                case "IX":
                    damage *= selectedData.rune1.IX;
                    break;
                case "X":
                    damage *= selectedData.rune1.X;
                    break;
            }
        }
        if (selectedData.rune2.name === "Deadly") {
            switch (selectedData.rune2Level.name) {
                case "I":
                    damage *= selectedData.rune2.I;
                    break;
                case "II":
                    damage *= selectedData.rune2.II;
                    break;
                case "III":
                    damage *= selectedData.rune2.III;
                    break;
                case "IV":
                    damage *= selectedData.rune2.IV;
                    break;
                case "V":
                    damage *= selectedData.rune2.V;
                    break;
                case "VI":
                    damage *= selectedData.rune2.VI;
                    break;
                case "VII":
                    damage *= selectedData.rune2.VII;
                    break;
                case "VIII":
                    damage *= selectedData.rune2.VIII;
                    break;
                case "IX":
                    damage *= selectedData.rune2.IX;
                    break;
                case "X":
                    damage *= selectedData.rune2.X;
                    break;
            }
        }
        if (selectedData.rune3.name === "Deadly") {
            switch (selectedData.rune3Level.name) {
                case "I":
                    damage *= selectedData.rune3.I;
                    break;
                case "II":
                    damage *= selectedData.rune3.II;
                    break;
                case "III":
                    damage *= selectedData.rune3.III;
                    break;
                case "IV":
                    damage *= selectedData.rune3.IV;
                    break;
                case "V":
                    damage *= selectedData.rune3.V;
                    break;
                case "VI":
                    damage *= selectedData.rune3.VI;
                    break;
                case "VII":
                    damage *= selectedData.rune3.VII;
                    break;
                case "VIII":
                    damage *= selectedData.rune3.VIII;
                    break;
                case "IX":
                    damage *= selectedData.rune3.IX;
                    break;
                case "X":
                    damage *= selectedData.rune3.X;
                    break;
            }
        }
        if (isShiny) {
            damage *= 2;
        }
        return Math.round(damage) as number;
    }
    const calculatCoins = (): number => {
        let coins = selectedData.pet.Coins;
        let level = selectedData.level;
        if (level > 1) {
            let blah = level - 1;
            let blahBlah = coins * (1 / 24);
            coins += blah * blahBlah;
        }
        if (selectedData.rune1.name === "Looting") {
            switch (selectedData.rune1Level.name) {
                case "I":
                    coins *= selectedData.rune1.I;
                    break;
                case "II":
                    coins *= selectedData.rune1.II;
                    break;
                case "III":
                    coins *= selectedData.rune1.III;
                    break;
                case "IV":
                    coins *= selectedData.rune1.IV;
                    break;
                case "V":
                    coins *= selectedData.rune1.V;
                    break;
                case "VI":
                    coins *= selectedData.rune1.VI;
                    break;
                case "VII":
                    coins *= selectedData.rune1.VII;
                    break;
                case "VIII":
                    coins *= selectedData.rune1.VIII;
                    break;
                case "IX":
                    coins *= selectedData.rune1.IX;
                    break;
                case "X":
                    coins *= selectedData.rune1.X;
                    break;
            }
        }

        if (selectedData.rune2.name === "Looting") {
            switch (selectedData.rune2Level.name) {
                case "I":
                    coins *= selectedData.rune2.I;
                    break;
                case "II":
                    coins *= selectedData.rune2.II;
                    break;
                case "III":
                    coins *= selectedData.rune2.III;
                    break;
                case "IV":
                    coins *= selectedData.rune2.IV;
                    break;
                case "V":
                    coins *= selectedData.rune2.V;
                    break;
                case "VI":
                    coins *= selectedData.rune2.VI;
                    break;
                case "VII":
                    coins *= selectedData.rune2.VII;
                    break;
                case "VIII":
                    coins *= selectedData.rune2.VIII;
                    break;
                case "IX":
                    coins *= selectedData.rune2.IX;
                    break;
                case "X":
                    coins *= selectedData.rune2.X;
                    break;
            }
        }

        if (selectedData.rune3.name === "Looting") {
            switch (selectedData.rune3Level.name) {
                case "I":
                    coins *= selectedData.rune3.I;
                    break;
                case "II":
                    coins *= selectedData.rune3.II;
                    break;
                case "III":
                    coins *= selectedData.rune3.III;
                    break;
                case "IV":
                    coins *= selectedData.rune3.IV;
                    break;
                case "V":
                    coins *= selectedData.rune3.V;
                    break;
                case "VI":
                    coins *= selectedData.rune3.VI;
                    break;
                case "VII":
                    coins *= selectedData.rune3.VII;
                    break;
                case "VIII":
                    coins *= selectedData.rune3.VIII;
                    break;
                case "IX":
                    coins *= selectedData.rune3.IX;
                    break;
                case "X":
                    coins *= selectedData.rune3.X;
                    break;
            }
        }
        if (isShiny) {
            coins *= 2;
        }
        return Math.round(coins) as number;
    }
    const calculateTokens = (): number => {
        let tokens = selectedData.pet.Tokens ? selectedData.pet.Tokens : 0;
        let level = selectedData.level;
        if (level > 1) {
            let blah = level - 1;
            let blahBlah = tokens * (1 / 24);
            tokens += blah * blahBlah;
        }
        if (selectedData.rune1.name === "Token") {
            switch (selectedData.rune1Level.name) {
                case "I":
                    tokens *= selectedData.rune1.I;
                    break;
                case "II":
                    tokens *= selectedData.rune1.II;
                    break;
                case "III":
                    tokens *= selectedData.rune1.III;
                    break;
                case "IV":
                    tokens *= selectedData.rune1.IV;
                    break;
                case "V":
                    tokens *= selectedData.rune1.V;
                    break;
                case "VI":
                    tokens *= selectedData.rune1.VI;
                    break;
                case "VII":
                    tokens *= selectedData.rune1.VII;
                    break;
                case "VIII":
                    tokens *= selectedData.rune1.VIII;
                    break;
                case "IX":
                    tokens *= selectedData.rune1.IX;
                    break;
                case "X":
                    tokens *= selectedData.rune1.X;
                    break;
            }
        }
        if (selectedData.rune2.name === "Token") {
            switch (selectedData.rune2Level.name) {
                case "I":
                    tokens *= selectedData.rune2.I;
                    break;
                case "II":
                    tokens *= selectedData.rune2.II;
                    break;
                case "III":
                    tokens *= selectedData.rune2.III;
                    break;
                case "IV":
                    tokens *= selectedData.rune2.IV;
                    break;
                case "V":
                    tokens *= selectedData.rune2.V;
                    break;
                case "VI":
                    tokens *= selectedData.rune2.VI;
                    break;
                case "VII":
                    tokens *= selectedData.rune2.VII;
                    break;
                case "VIII":
                    tokens *= selectedData.rune2.VIII;
                    break;
                case "IX":
                    tokens *= selectedData.rune2.IX;
                    break;
                case "X":
                    tokens *= selectedData.rune2.X;
                    break;
            }
        }
        if (selectedData.rune3.name === "Token") {
            switch (selectedData.rune3Level.name) {
                case "I":
                    tokens *= selectedData.rune3.I;
                    break;
                case "II":
                    tokens *= selectedData.rune3.II;
                    break;
                case "III":
                    tokens *= selectedData.rune3.III;
                    break;
                case "IV":
                    tokens *= selectedData.rune3.IV;
                    break;
                case "V":
                    tokens *= selectedData.rune3.V;
                    break;
                case "VI":
                    tokens *= selectedData.rune3.VI;
                    break;
                case "VII":
                    tokens *= selectedData.rune3.VII;
                    break;
                case "VIII":
                    tokens *= selectedData.rune3.VIII;
                    break;
                case "IX":
                    tokens *= selectedData.rune3.IX;
                    break;
                case "X":
                    tokens *= selectedData.rune3.X;
                    break;
            }
        }
        if (isShiny) {
            tokens *= 2;
        }
        return Math.round(tokens) as number;
    }
    const calculateShells = (): number => {
        let shells = selectedData.pet.Shells ? selectedData.pet.Shells : 0;
        let level = selectedData.level;
        if (level > 1) {
            let blah = level - 1;
            let blahBlah = shells * (1 / 24);
            shells += blah * blahBlah;
        }
        if (isShiny) {
            shells *= 2;
        }
        return Math.round(shells) as number;
    }
    return (
        <div className={"pet-info-display"}>
            <div className={"pet-info-bar"}>
                <div className={"pet-info-shiny"}>Shiny</div>
                <div className={"pet-info-lvl"}>Lvl</div>
                <div className={"pet-info-pet"}>Pet</div>
                <div className={"pet-info-rune"}>Rune 1</div>
                <div className={"pet-info-lvl"}>Lvl</div>
                <div className={"pet-info-rune"}>Rune 2</div>
                <div className={"pet-info-lvl"}>Lvl</div>
                <div className={"pet-info-rune"}>Rune 3</div>
                <div className={"pet-info-lvl"}>Lvl</div>
                <div className={"pet-info-damage"}>Damage</div>
                <div className={"pet-info-tokens"}>Coins</div>
                <div className={"pet-info-coins"}>Tokens</div>
                <div className={"pet-info-shells"}>Shells</div>
            </div>
            <div className={"pet-info-row"}>
                <div className={"pet-info-row-shiny"}><input
                    className={"shiny-checkbox"}
                    type={"checkbox"}
                    checked={isShiny}
                    onChange={(): void => {
                        setIsShiny(!isShiny)
                        setShinyData(!isShiny)
                    }
                    }
                /></div>
                <div className={showPetLevelDD ? "pet-info-row-lvl active" : "pet-info-row-lvl"}
                     onClick={(): void => togglePetLevelDD()}
                >
                    <div className={"dropdown-selected"}>{selectedData.level}{!showDropDown ?
                        <IoMdArrowDropdown size={26} className={"float-right"}/> :
                        <IoMdArrowDropup size={26} className={"float-right"}/>}</div>
                    {showPetLevelDD && (
                        <NumberDropDown runes={getPetLevels()} runeSelection={petLevelSelection}
                                        showDropDown={false} toggleDropDown={togglePetLevelDD}/>
                    )}
                </div>
                <div
                    className={showDropDown ? "petselector active" : "petselector"}
                    onClick={(): void => toggleDropDown()}
                >
                    <div className={"dropdown-selected"}>{selectedData.pet.Name} {!showDropDown ?
                        <IoMdArrowDropdown size={26} className={"float-right"}/> :
                        <IoMdArrowDropup size={26} className={"float-right"}/>}</div>
                    {showDropDown && (
                        <PetInfoDropDown pets={getPets()} showDropDown={false}
                                         toggleDropDown={(): void => toggleDropDown()}
                                         petDataSelection={petSelection}/>
                    )}
                </div>
                <div className={showRuneDropDown1 ? "pet-info-row-rune active" : "pet-info-row-rune"}
                     onClick={(): void => toggleRuneDropDown1()}
                >
                    <div className={"dropdown-selected"}>{selectedData.rune1.name}{!showDropDown ?
                        <IoMdArrowDropdown size={26} className={"float-right"}/> :
                        <IoMdArrowDropup size={26} className={"float-right"}/>}</div>
                    {showRuneDropDown1 && (
                        <RuneDropDown runes={getRunes()} showDropDown={false}
                                      toggleDropDown={(): void => toggleRuneDropDown1()}
                                      runeSelection={rune1Selection}/>
                    )}
                </div>
                <div className={showRuneLevelDD1 ? "pet-info-row-lvl active" : "pet-info-row-rune"}
                     onClick={(): void => toggleRuneLevelDD1()}
                >
                    <div className={"dropdown-selected"}>{selectedData.rune1Level.name}{!showDropDown ?
                        <IoMdArrowDropdown size={26} className={"float-right"}/> :
                        <IoMdArrowDropup size={26} className={"float-right"}/>}</div>
                    {showRuneLevelDD1 && (
                        <RuneLevelDropDown runes={getNumerals()} runeSelection={rune1LevelSelection}
                                           showDropDown={false} toggleDropDown={toggleRuneLevelDD1}/>
                    )}
                </div>
                <div className={showRuneDropDown2 ? "pet-info-row-rune active" : "pet-info-row-rune"}
                     onClick={(): void => toggleRuneDropDown2()}
                >
                    <div className={"dropdown-selected"}>{selectedData.rune2.name}{!showDropDown ?
                        <IoMdArrowDropdown size={26} className={"float-right"}/> :
                        <IoMdArrowDropup size={26} className={"float-right"}/>}</div>
                    {showRuneDropDown2 && (
                        <RuneDropDown runes={getRunes()} showDropDown={false}
                                      toggleDropDown={(): void => toggleRuneDropDown2()}
                                      runeSelection={rune2Selection}/>
                    )}
                </div>
                <div className={showRuneLevelDD2 ? "pet-info-row-lvl active" : "pet-info-row-rune"}
                     onClick={(): void => toggleRuneLevelDD2()}
                >
                    <div className={"dropdown-selected"}>{selectedData.rune2Level.name}{!showDropDown ?
                        <IoMdArrowDropdown size={26} className={"float-right"}/> :
                        <IoMdArrowDropup size={26} className={"float-right"}/>}</div>
                    {showRuneLevelDD2 && (
                        <RuneLevelDropDown runes={getNumerals()} runeSelection={rune2LevelSelection}
                                           showDropDown={false} toggleDropDown={toggleRuneLevelDD2}/>
                    )}
                </div>
                <div className={showRuneDropDown3 ? "pet-info-row-rune active" : "pet-info-row-rune"}
                     onClick={(): void => toggleRuneDropDown3()}
                >
                    <div className={"dropdown-selected"}>{selectedData.rune3.name}{!showDropDown ?
                        <IoMdArrowDropdown size={26} className={"float-right"}/> :
                        <IoMdArrowDropup size={26} className={"float-right"}/>}</div>
                    {showRuneDropDown3 && (
                        <RuneDropDown runes={getRunes()} showDropDown={false}
                                      toggleDropDown={(): void => toggleRuneDropDown3()}
                                      runeSelection={rune3Selection}/>
                    )}
                </div>
                <div className={showRuneLevelDD3 ? "pet-info-row-lvl active" : "pet-info-row-rune"}
                     onClick={(): void => toggleRuneLevelDD3()}
                >
                    <div className={"dropdown-selected"}>{selectedData.rune3Level.name}{!showDropDown ?
                        <IoMdArrowDropdown size={26} className={"float-right"}/> :
                        <IoMdArrowDropup size={26} className={"float-right"}/>}</div>
                    {showRuneLevelDD3 && (
                        <RuneLevelDropDown runes={getNumerals()} runeSelection={rune3LevelSelection}
                                           showDropDown={false} toggleDropDown={toggleRuneLevelDD3}/>
                    )}
                </div>
                <div className={"pet-info-row-damage"}>{calculateDamage()}</div>
                <div className={"pet-info-row-damage"}>{calculatCoins()}</div>
                <div className={"pet-info-row-damage"}>{calculateTokens()}</div>
                <div className={"pet-info-row-damage"}>{calculateShells()}</div>
            </div>
        </div>
    );
};


export default PetInfoDisplay;