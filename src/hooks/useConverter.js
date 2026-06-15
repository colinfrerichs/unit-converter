import { useState } from "react";
import { converters, categories } from "./converterConfig";

const opposite = {
    left: "right",
    right: "left",
};

export const useConverter = (initialValue = {
    category: "Temperature",
    left: {
        unit: "F",
        value: 32,
    },
    right: {
        unit: "C",
        value: 0,
    }
}) => {
    const [ state, setState ] = useState(initialValue);

    const convert = (sourceUnit, targetUnit, value) => { 
        const baseValue = converters[state.category][sourceUnit].toBase(value);
        const derivedValue = converters[state.category][targetUnit].fromBase(baseValue);

        return derivedValue;
     }

    const updateCategory = (category) => {
        setState({
            category,
            left: converters[category].left,
            right: converters[category].right,
        });
    }

    const updateUnits = (side, unit) => {
        const sourceSide = opposite[side];
        const sourceUnit = state[sourceSide].unit;

        setState(prev => ({
            ...prev,
            [side]: {
                unit,
                value: convert(sourceUnit, unit, prev[sourceSide].value)
            },
        }));
    } 

    const updateInputs = (side, value) => {
        const sourceSide = side;
        const targetSide = opposite[side];

        const sourceUnit = state[sourceSide].unit;
        const targetUnit = state[targetSide].unit;

        setState(prev => ({
            ...prev,
            [sourceSide]: {
                ...prev[sourceSide],
                value,
            },
            [targetSide]: {
                ...prev[targetSide],
                value: convert(sourceUnit, targetUnit, value),
            }
        }));
    }

    return {
        categories,
        state,
        updateCategory,
        updateInputs,
        updateUnits,
    };
}
