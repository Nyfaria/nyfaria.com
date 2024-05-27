import React, {useEffect, useState} from 'react';
import data from '../../data/pet_data.json';
import {PetData, RuneData} from "@/app/data/PetData";
import "../petcatchers.css";

type DropDownProps = {
    runes: number[];
    showDropDown: boolean;
    toggleDropDown: Function;
    runeSelection: Function;
};

const PetInfoDropDown: React.FC<DropDownProps> = ({
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
    const onClickHandler = (rune: number): void => {
        runeSelection(rune);
    };

    useEffect(() => {
        setShowDropDown(showDropDown);
    }, [showDropDown]);

    return (
        <div id="meow" className={showDropDown ? 'dropdown' : 'dropdown active'}>
            {runes.map(
                (rune: number, index: number): JSX.Element => {
                    return (
                        <p
                            className={"dropdown-selection"}
                            key={index}
                            onClick={(): void => {
                                onClickHandler(rune);
                            }}
                        >
                            {rune}
                        </p>
                    );
                }
            )}
        </div>
    );
};

export default PetInfoDropDown;