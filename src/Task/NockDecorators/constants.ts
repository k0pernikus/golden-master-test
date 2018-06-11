export type MockMode = "playback" | "record" | "none";

// typescript does not allow iterating over String Types
export const mockModes: MockMode[] = ["none", "playback", "record"];

export const parseMockMode = (rawMockMode: string): MockMode => {
    if (mockModes.includes(rawMockMode as MockMode)) {
        return rawMockMode as MockMode;
    }

    const modes = mockModes.join(", ");
    const errorMsg = `Invalid mock mode provided, use one of these: ${modes}`;

    throw new Error(errorMsg);
};
