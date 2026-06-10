import { useState } from "react";
import { converters, categories } from "./converterConfig";

/*
    I had to learn this. Initially I was writing all of the conversions, which was very messy and complex.

    This normalization pattern takes any temperature and uses C as the intermediary to get to the desired value.

    toBase: converts the unit to C
    fromBase: converts the unit from C to the unit we want.
    
    So we are using C as our normalization for every temp.

    If we convert C -> F, first we get toBase, which is easy, we just return the value we are passed.
    Next, we get fromBase which takes our baseValue, which is now in C, and converts it to F. 

    This works because every formula is meant to go from C to something else or convert something else into C first.

    We could do this with currency too, make every currency convert to USD (for example), and then convert that to everything else.
*/
export const useConverter = (initialValue = {
    category: "Temperature",
    fromUnit: "F",
    fromValue: 32,
    toUnit: "C",
    toValue: 0,
}) => {
    const [ state, setState ] = useState(initialValue);

    const convert = ({
        category,
        fromUnit,
        fromValue,
        toUnit,
    }) => {
        const categoryConverters = converters[category];

        if (!categoryConverters) return;

        const baseValue = categoryConverters[fromUnit]?.toBase(fromValue); // This part takes the unit, so if we have F, we convert F -> C using toBase.
        const toValue = categoryConverters[toUnit]?.fromBase(baseValue); // If we are trying to get to K, now we have F in C, which we then use the fromBase in K that converts C -> K.

        setState({
            category,
            fromUnit,
            fromValue,
            toUnit,
            toValue,
        });
    }

    const updateCategory = (category) => {
        setState(converters[category].defaultValues)
    }

    const updateUnits = (value) => {} 

    /*
        Update inputs, then the last thing you do is call convert().

        This will call convert.
    */
    const updateInputs = (input, value) => {}

    return {
        state,
        categories,
        updateCategory,
        updateInputs,
        updateUnits,
    };
}
