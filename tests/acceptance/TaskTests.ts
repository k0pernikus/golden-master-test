import {expect} from "chai";
import * as fs from "mz/fs";
import {decorateTask} from "../../src/Task/decorateTask";
import {DummyTask} from "../../src/Task/DummyTask";
import {ITask} from "../../src/Task/ITask";

describe("Csv task generation", async () => {
    it("should generate a csv file", async () => {
        const expectedCsvContent = (await fs.readFile("./out/data.csv")).toString();

        const task: ITask = new DummyTask();
        const decoratedTask = decorateTask(task, "playback");
        const csvContent: string = await decoratedTask.execute();

        expect(csvContent).equals(expectedCsvContent);
    });
});
