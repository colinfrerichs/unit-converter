export const categories = {
    Temperature: ["F", "C", "K"],
    Length: ["Foot", "Yard", "Meter"],
};

export const converters = {
    Temperature: {
        left: {
            unit: "F",
            value: 32,
        },
        right: {
            unit: "C",
            value: 0,
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
        left: {
            unit: "Foot",
            value: 1
        },
        right: {
            unit: "Yard",
            value: 0.333333,
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