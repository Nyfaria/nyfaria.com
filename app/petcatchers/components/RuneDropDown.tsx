import React, {useEffect, useState} from 'react';
import data from '../../data/pet_data.json';
import {PetData, RuneData} from "@/app/data/PetData";
import "../petcatchers.css";

type DropDownProps = {
    runes: RuneData[];
    showDropDown: boolean;
    toggleDropDown: Function;
    runeSelection: Function;
};

const RuneDropDown: React.FC<DropDownProps> = ({
                                               runes,
                                               runeSelection,
                                           }: DropDownProps): JSX.Element => {
    const [showDropDown, setShowDropDown] = useState<boolean>(false);
    const petData = data.pets;
    /**
     * Handle passing the city name
     * back to the parent component
     *
     * @param rune  The selected city
     */
    const onClickHandler = (rune: RuneData): void => {
        runeSelection(rune);
    };

    useEffect(() => {
        setShowDropDown(showDropDown);
    }, [showDropDown]);

    return (
        <div id="meow" className={showDropDown ? 'dropdown' : 'dropdown active'}>
            {runes.map(
                (rune: RuneData, index: number): JSX.Element => {
                    return (
                        <p
                            className={"dropdown-selection"}
                            key={index}
                            onClick={(): void => {
                                onClickHandler(rune);
                            }}
                        >
                            {rune.name}
                        </p>
                    );
                }
            )}
        </div>
    );
};

export default RuneDropDown;
let opDown;
opDown;