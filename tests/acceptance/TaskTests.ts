import {expect} from "chai";
import * as fs from "mz/fs";
import {CsvTask} from "../../src/Task/CsvTask";
import {decorateTask} from "../../src/Task/decorateTask";
import {ITask} from "../../src/Task/ITask";

describe("Csv Task", async () => {
    it("should generate a csv file matching the golden master", async () => {
        const expectedCsvContent = (await fs.readFile("./tests/acceptance/goldenMaster.csv")).toString();

        const task: ITask = new CsvTask();
        const decoratedTask = decorateTask(task, "playback");
        const csvContent: string = await decoratedTask.execute();

        expect(csvContent).equals(expectedCsvContent);
    });
});
