import React, {useEffect, useState} from 'react';
import data from '../../data/pet_data.json';
import {PetData} from "@/app/data/PetData";
import "../petcatchers.css";

type DropDownProps = {
    pets: PetData[];
    showDropDown: boolean;
    toggleDropDown: Function;
    petDataSelection: Function;
};

const PetInfoDropDown: React.FC<DropDownProps> = ({
                                               pets,
                                               petDataSelection,
                                           }: DropDownProps): JSX.Element => {
    const [showDropDown, setShowDropDown] = useState<boolean>(false);
    const petData = data.pets;
    /**
     * Handle passing the city name
     * back to the parent component
     *
     * @param petData1  The selected city
     */
    const onClickHandler = (petData1: PetData): void => {
        petDataSelection(petData1);
    };

    useEffect(() => {
        setShowDropDown(showDropDown);
    }, [showDropDown]);

    return (
        <div id="meow" className={showDropDown ? 'dropdown' : 'dropdown active'}>
            {pets.map(
                (petInfo: PetData, index: number): JSX.Element => {
                    return (
                        <p
                            className={"dropdown-selection"}
                            key={index}
                            onClick={(): void => {
                                onClickHandler(petInfo);
                            }}
                        >
                            {petInfo.Name}
                        </p>
                    );
                }
            )}
        </div>
    );
};

export default PetInfoDropDown;