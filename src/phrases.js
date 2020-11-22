const phrases = {
    1: {
        id: 1,
        options: {
            // Options for different stake levels
            actions: ["raise", "lower"],
            // At which stakes this phrase is available
            availableStakes: [1, 2, 3, 4, 5],
            stakes: {
                1: 1,
                2: 3,
                3: 5,
                4: 10,
                5: 20
            }
        },
        say: ``,
        devices: ["Thermostat"]
    }
}

export default phrases;