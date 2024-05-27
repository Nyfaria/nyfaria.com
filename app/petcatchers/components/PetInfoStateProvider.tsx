'use client'
import React, {createContext, useState, useContext, Dispatch, SetStateAction} from "react";
import {PetInfo} from "@/app/data/PetData";


const PetInfoStateContext1 = createContext({
    state1: {} as Partial<PetInfo>,
    setState1: {} as Dispatch<SetStateAction<Partial<PetInfo>>>,
});

const PetInfoStateContext2 = createContext({
    state2: {} as Partial<PetInfo>,
    setState2: {} as Dispatch<SetStateAction<Partial<PetInfo>>>,
});
const PetInfoStateContext3 = createContext({
    state3: {} as Partial<PetInfo>,
    setState3: {} as Dispatch<SetStateAction<Partial<PetInfo>>>,
});
const PetInfoStateContext4 = createContext({
    state4: {} as Partial<PetInfo>,
    setState4: {} as Dispatch<SetStateAction<Partial<PetInfo>>>,
});
const PetInfoStateContext5 = createContext({
    state5: {} as Partial<PetInfo>,
    setState5: {} as Dispatch<SetStateAction<Partial<PetInfo>>>,
});
const PetInfoStateContext6 = createContext({
    state6: {} as Partial<PetInfo>,
    setState6: {} as Dispatch<SetStateAction<Partial<PetInfo>>>,
});
const PetInfoStateContext7 = createContext({
    state7: {} as Partial<PetInfo>,
    setState7: {} as Dispatch<SetStateAction<Partial<PetInfo>>>,
});
const PetInfoStateContext8 = createContext({
    state8: {} as Partial<PetInfo>,
    setState8: {} as Dispatch<SetStateAction<Partial<PetInfo>>>,
});

const PetInfoStateProvider = ({
                                  children, value = {pet: {}, rune1: {}, rune1Level: {},rune2:{}, rune2Level: {}, rune3: {}, rune3Level: {}, level: 1} as PetInfo,
                              }: {
    children: React.ReactNode;
    value?: Partial<PetInfo>;
}) => {
    const [state1, setState1] = useState(value);
    const [state2, setState2] = useState(value);
    const [state3, setState3] = useState(value);
    const [state4, setState4] = useState(value);
    const [state5, setState5] = useState(value);
    const [state6, setState6] = useState(value);
    const [state7, setState7] = useState(value);
    const [state8, setState8] = useState(value);
    return (
        <PetInfoStateContext1.Provider value={{state1, setState1}}>
            <PetInfoStateContext2.Provider value={{state2, setState2}}>
                <PetInfoStateContext3.Provider value={{state3, setState3}}>
                    <PetInfoStateContext4.Provider value={{state4, setState4}}>
                        <PetInfoStateContext5.Provider value={{state5, setState5}}>
                            <PetInfoStateContext6.Provider value={{state6, setState6}}>
                                <PetInfoStateContext7.Provider value={{state7, setState7}}>
                                    <PetInfoStateContext8.Provider value={{state8, setState8}}>
                                        {children}
                                    </PetInfoStateContext8.Provider>
                                </PetInfoStateContext7.Provider>
                            </PetInfoStateContext6.Provider>
                        </PetInfoStateContext5.Provider>
                    </PetInfoStateContext4.Provider>
                </PetInfoStateContext3.Provider>
            </PetInfoStateContext2.Provider>
        </PetInfoStateContext1.Provider>
    );
};

const usePetInfoState1 = () => {
    const context = useContext(PetInfoStateContext1)
    if (!context) {
        throw new Error("usePetInfoState must be used within a PetInfoStateContext");
    }
    return context;
};
const usePetInfoState2 = () => {
    const context = useContext(PetInfoStateContext2)
    if (!context) {
        throw new Error("usePetInfoState must be used within a PetInfoStateContext");
    }
    return context;
}
const usePetInfoState3 = () => {
    const context = useContext(PetInfoStateContext3)
    if (!context) {
        throw new Error("usePetInfoState must be used within a PetInfoStateContext");
    }
    return context;
}
const usePetInfoState4 = () => {
    const context = useContext(PetInfoStateContext4)
    if (!context) {
        throw new Error("usePetInfoState must be used within a PetInfoStateContext");
    }
    return context;
}
const usePetInfoState5 = () => {
    const context = useContext(PetInfoStateContext5)
    if (!context) {
        throw new Error("usePetInfoState must be used within a PetInfoStateContext");
    }
    return context;
}
const usePetInfoState6 = () => {
    const context = useContext(PetInfoStateContext6)
    if (!context) {
        throw new Error("usePetInfoState must be used within a PetInfoStateContext");
    }
    return context;
}
const usePetInfoState7 = () => {
    const context = useContext(PetInfoStateContext7)
    if (!context) {
        throw new Error("usePetInfoState must be used within a PetInfoStateContext");
    }
    return context;
}
const usePetInfoState8 = () => {
    const context = useContext(PetInfoStateContext8)
    if (!context) {
        throw new Error("usePetInfoState must be used within a PetInfoStateContext");
    }
    return context;
}

export {
    PetInfoStateProvider,
    usePetInfoState1,
    usePetInfoState2,
    usePetInfoState3,
    usePetInfoState4,
    usePetInfoState5,
    usePetInfoState6,
    usePetInfoState7,
    usePetInfoState8
};