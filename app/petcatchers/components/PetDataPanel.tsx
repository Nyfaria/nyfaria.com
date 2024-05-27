"use client";
import React from 'react';
import {
    usePetInfoState1,
    usePetInfoState2,
    usePetInfoState3,
    usePetInfoState4, usePetInfoState5, usePetInfoState6, usePetInfoState7, usePetInfoState8
} from "@/app/petcatchers/components/PetInfoStateProvider";
import {PetInfo} from "@/app/data/PetData";

export const PetDataPanel = () => {
    const {state1} = usePetInfoState1();
    const {state2} = usePetInfoState2();
    const {state3} = usePetInfoState3();
    const {state4} = usePetInfoState4();
    const {state5} = usePetInfoState5();
    const {state6} = usePetInfoState6();
    const {state7} = usePetInfoState7();
    const {state8} = usePetInfoState8();
    const [auburnDamageBoost, setAuburnDamageBoost] = React.useState<boolean>(false);
    const [sunsetDamageBoost, setSunsetDamageBoost] = React.useState<boolean>(false);
    const [magmaDamageBoost, setMagmaDamageBoost] = React.useState<boolean>(false);
    const [atlantis1DamageBoost, setAtlantis1DamageBoost] = React.useState<boolean>(false);
    const [atlantis2DamageBoost, setAtlantis2DamageBoost] = React.useState<boolean>(false);
    const [battleStewDamageBoost, setBattleStewDamageBoost] = React.useState<boolean>(false);
    const [mellowCoinsBoost, setMellowCoinsBoost] = React.useState<boolean>(false);
    const [frostyCoinsBoost, setFrostyCoinsBoost] = React.useState<boolean>(false);
    const [sunsetCoinsBoost, setSunsetCoinsBoost] = React.useState<boolean>(false);
    const [treasureEventCoinsBoost, setTreasureEventCoinsBoost] = React.useState<boolean>(false);
    const [coinElixirCoinsBoost, setCoinElixirCoinsBoost] = React.useState<boolean>(false);
    const [tokenEventTokensBoost, setTokenEventTokensBoost] = React.useState<boolean>(false);
    const [tokenElixirTokensBoost, setTokenElixirTokensBoost] = React.useState<boolean>(false);
    const [shellEventShellsBoost, setShellEventShellsBoost] = React.useState<boolean>(false);

    const calculateDamage = (selectedData: PetInfo): number => {
        let damage = selectedData.pet.Damage ? selectedData.pet.Damage : 0;
        let baseDamage = damage;
        if (auburnDamageBoost) {
            damage += (baseDamage * 1.1) - baseDamage;
        }
        if (sunsetDamageBoost) {
            damage += (baseDamage * 1.25) - baseDamage;
        }
        if (magmaDamageBoost) {
            damage += (baseDamage * 1.25) - baseDamage;
        }
        if (atlantis1DamageBoost) {
            damage += (baseDamage * 1.1) - baseDamage;
        }
        if (atlantis2DamageBoost) {
            damage += (baseDamage * 1.1) - baseDamage;
        }
        if (battleStewDamageBoost) {
            damage += (baseDamage * 1.25) - baseDamage;
        }
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
        if (selectedData.shiny) {
            damage *= 2;
        }
        return damage as number;
    }
    const calculatCoins = (selectedData: PetInfo): number => {
        let coins = selectedData.pet.Coins ? selectedData.pet.Coins : 0;
        let baseCoins = coins;
        if (mellowCoinsBoost) {
            coins += (baseCoins * 1.25) - baseCoins;
        }
        if (frostyCoinsBoost) {
            coins += (baseCoins * 1.25) - baseCoins;
        }
        if (sunsetCoinsBoost) {
            coins += (baseCoins * 1.5) - baseCoins;
        }
        if (treasureEventCoinsBoost) {
            coins += (baseCoins * 2) - baseCoins;
        }
        if (coinElixirCoinsBoost) {
            coins += (baseCoins * 1.25) - baseCoins;
        }
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
        if (selectedData.shiny) {
            coins *= 2;
        }
        return coins as number;
    }
    const calculateTokens = (selectedData: PetInfo): number => {
        let tokens = selectedData.pet.Tokens ? selectedData.pet.Tokens : 0;
        let baseTokens = tokens;
        if (tokenEventTokensBoost) {
            tokens += (baseTokens * 2) - baseTokens;
        }
        if (tokenElixirTokensBoost) {
            tokens += (baseTokens * 1.25) - baseTokens;
        }
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
        if (selectedData.shiny) {
            tokens *= 2;
        }
        return tokens as number;
    }
    const calculateShells = (selectedData: PetInfo): number => {
        let shells = selectedData.pet.Shells ? selectedData.pet.Shells : 0;
        let level = selectedData.level;
        if (level > 1) {
            let blah = level - 1;
            let blahBlah = shells * (1 / 24);
            shells += blah * blahBlah;
        }
        if (selectedData.shiny) {
            shells *= 2;
        }
        return shells as number;
    }
    return (
        <div className={"pet-data-panel"}>
            <div className={"pet-data-panel-stats"}>
                <div className={"pet-data-panel-damage"}>
                    Damage: {calculateDamage(state1) + calculateDamage(state2) + calculateDamage(state3) + calculateDamage(state4) + calculateDamage(state5) + calculateDamage(state6) + calculateDamage(state7) + calculateDamage(state8)}
                </div>
                <div className={"pet-data-panel-coins"}>
                    Coins: {calculatCoins(state1) + calculatCoins(state2) + calculatCoins(state3) + calculatCoins(state4) + calculatCoins(state5) + calculatCoins(state6) + calculatCoins(state7) + calculatCoins(state8)}
                </div>
                <div className={"pet-data-panel-tokens"}>
                    Tokens: {calculateTokens(state1) + calculateTokens(state2) + calculateTokens(state3) + calculateTokens(state4) + calculateTokens(state5) + calculateTokens(state6) + calculateTokens(state7) + calculateTokens(state8)}
                </div>
                <div className={"pet-data-panel-shells"}>
                    Shells: {calculateShells(state1) + calculateShells(state2) + calculateShells(state3) + calculateShells(state4) + calculateShells(state5) + calculateShells(state6) + calculateShells(state7) + calculateShells(state8)}
                </div>
            </div>
            <div className={"pet-data-panel-damage-boosts"}>
                <div>
                    <input type={"checkbox"} checked={auburnDamageBoost} onChange={(): void => {
                        setAuburnDamageBoost(!auburnDamageBoost)
                    }}/>Auburn Damage Boost
                </div>
                <div>
                    <input type={"checkbox"} checked={sunsetDamageBoost} onChange={(): void => {
                        setSunsetDamageBoost(!sunsetDamageBoost)
                    }}/>Sunset Damage Boost
                </div>
                <div>
                    <input type={"checkbox"} checked={magmaDamageBoost} onChange={(): void => {
                        setMagmaDamageBoost(!magmaDamageBoost)
                    }}/>Magma Damage Boost
                </div>
                <div>
                    <input type={"checkbox"} checked={atlantis1DamageBoost} onChange={(): void => {
                        setAtlantis1DamageBoost(!atlantis1DamageBoost)
                    }}/>Atlantis Damage Boost 1
                </div>
                <div>
                    <input type={"checkbox"} checked={atlantis2DamageBoost} onChange={(): void => {
                        setAtlantis2DamageBoost(!atlantis2DamageBoost)
                    }}/>Atlantis Damage Boost 2
                </div>
            </div>
            <div className={"pet-data-panel-coins-boosts"}>
                <div>
                    <input type={"checkbox"} checked={mellowCoinsBoost} onChange={(): void => {
                        setMellowCoinsBoost(!mellowCoinsBoost)
                    }}/>Mellow Coins Boost
                </div>
                <div>
                    <input type={"checkbox"} checked={frostyCoinsBoost} onChange={(): void => {
                        setFrostyCoinsBoost(!frostyCoinsBoost)
                    }}/>Frosty Coins Boost
                </div>
                <div>
                    <input type={"checkbox"} checked={sunsetCoinsBoost} onChange={(): void => {
                        setSunsetCoinsBoost(!sunsetCoinsBoost)
                    }}/>Sunset Coins Boost
                </div>
                <div>
                    <input type={"checkbox"} checked={treasureEventCoinsBoost} onChange={(): void => {
                        setTreasureEventCoinsBoost(!treasureEventCoinsBoost)
                    }}/>Treasure Event
                </div>
                <div>
                    <input type={"checkbox"} checked={coinElixirCoinsBoost} onChange={(): void => {
                        setCoinElixirCoinsBoost(!coinElixirCoinsBoost)
                    }}/>Coin Elixir
                </div>
            </div>
            <div className={"pet-data-panel-other-boosts"}>
                <div>
                    <input type={"checkbox"} checked={tokenEventTokensBoost} onChange={(): void => {
                        setTokenEventTokensBoost(!tokenEventTokensBoost)
                    }}/>Token Event
                </div>
                <div>
                    <input type={"checkbox"} checked={tokenElixirTokensBoost} onChange={(): void => {
                        setTokenElixirTokensBoost(!tokenElixirTokensBoost)
                    }}/>Token Elixir
                </div>
                <div>
                    <input type={"checkbox"} checked={shellEventShellsBoost} onChange={(): void => {
                        setShellEventShellsBoost(!shellEventShellsBoost)
                    }}/>Shell Event
                </div>
            </div>
        </div>
    );
}