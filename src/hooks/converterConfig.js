export const categories = {
    Temperature: ["F", "C", "K"],
    Length: ["Foot", "Yard", "Meter"],
};

export const converters = {
    Temperature: {
        defaultValues: {
            category: "Temperature",
            fromUnit: "F",
            fromValue: 32,
            toUnit: "C",
            toValue: 0,
        },
        C: {
            toBase: (v) => v,
            fromBase: (v) => v,
        },
        F: {
            toBase: (v) => (v - 32) * (5 / 9),
            fromBase: (v) => (v * 9) / 5 + 32,
        },
        K: {
            toBase: (v) => v - 273.15,
            fromBase: (v) => v + 273.15,
        }
    },
    Length: {
        defaultValues: {
            category: "Length",
            fromUnit: "Foot",
            fromValue: 1,
            toUnit: "Yard",
            toValue: 0.333333,
        },
        Meter: {
            toBase: (v) => v,
            fromBase: (v) => v,
        },
        Foot: {
            toBase: (v) => v / 3.28084,
            fromBase: (v) => v * 3.28084,
        },
        Yard: {
           toBase: (v) => v / 1.094,
           fromBase: (v) => v * 1.094, 
        }
    }
}