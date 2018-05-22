import {storeCsv} from "../csv/storeCsv";
import {decorateTask} from "../Task/decorateTask";
import {CsvTask} from "../Task/CsvTask";
import {ITask} from "../Task/ITask";
import {
    MockMode,
    mockModes,
    parseMockMode,
} from "../Task/NockDecorators/constants";

console.log(mockModes.join(", "));

const program = require("commander");

program
    .version("1.0.0")
    .description("Task runner. Consumes a restful API and constructs a CSV file out of them")
    .option(
        "-m, --mock-mode [mock]",
        "use the pre-recorded mocks",
        "none",
    );

program.parse(process.argv);

const mockMode: MockMode = parseMockMode(program.mockMode);

console.log(mockMode);

const run = async (): Promise<void> => {
    const task: ITask = new CsvTask();
    const decoratedTask = decorateTask(task, mockMode);
    const fileContent = await decoratedTask.execute();
    return storeCsv(fileContent);
};

run()
    .then(() => {
        console.log("CSV created");
    })
    .catch(console.error);
