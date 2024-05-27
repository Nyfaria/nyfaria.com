import React from 'react';

export interface PetData {
    Name: string;
    Damage: number;
    Coins: number;
    Tokens: number;
    Shells: number;
}
export interface PetInfo {
    shiny: boolean;
    pet: PetData;
    rune1: RuneData;
    rune1Level: RomanNumeral;
    rune2: RuneData;
    rune2Level: RomanNumeral;
    rune3: RuneData;
    rune3Level: RomanNumeral;
    level: number;
}

export interface RuneData {
    name: string;
    type: string;
    I: number;
    II: number;
    III: number;
    IV: number;
    V: number;
    VI: number;
    VII: number;
    VIII: number;
    IX: number;
    X: number;
}
export interface RomanNumeral {
    name: string;
    value: number;
}
