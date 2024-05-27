import React, {useEffect, useState} from 'react';
import data from '../../data/pet_data.json';
import {PetData, RomanNumeral, RuneData} from "@/app/data/PetData";
import "../petcatchers.css";

type DropDownProps = {
    runes: RomanNumeral[];
    showDropDown: boolean;
    toggleDropDown: Function;
    runeSelection: Function;
};

const RuneLevelDropDown: React.FC<DropDownProps> = ({
                                               runes,
                                               runeSelection,
                                           }: DropDownProps): JSX.Element => {
    const [showDropDown, setShowDropDown] = useState<boolean>(false);

    /**
     * Handle passing the city name
     * back to the parent component
     *
     * @param rune  The selected city
     */
    const onClickHandler = (rune: RomanNumeral): void => {
        runeSelection(rune);
    };

    useEffect(() => {
        setShowDropDown(showDropDown);
    }, [showDropDown]);

    return (
        <div id="meow" className={showDropDown ? 'dropdown' : 'dropdown active'}>
            {runes.map(
                (rune: RomanNumeral, index: number): JSX.Element => {
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

export default RuneLevelDropDown;