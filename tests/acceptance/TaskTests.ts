import { expect } from "chai";
import * as fs from "mz/fs";
import { CsvTask } from "../../src/Task/CsvTask";
import { decorateTaskWithMock } from "../../src/Task/decorateTaskWithMock";

describe("Csv Task", async () => {
    it("should generate a csv file matching the golden master", async () => {
        const expectedCsvContent = (await fs.readFile("./tests/acceptance/goldenMaster.csv")).toString();
        const task = decorateTaskWithMock(new CsvTask(), "playback");
        const csvContent: string = await task.execute();

        expect(csvContent).equals(expectedCsvContent);
    });
});
