import mkdirpPromise from "mkdirp-promise";
import * as fs from "mz/fs";
import {ITask} from "../ITask";

const nock = require("nock");

export class TaskMockRecorder implements ITask {
    public constructor(private task: ITask,
                       private basePath: string,
                       private fileName: string) {
    }

    public async execute(): Promise<string> {
        console.log("record the responses");
        this.setupNock();
        const stream = await this.task.execute();
        await this.writeRecordFile();

        return Promise.resolve(stream);
    }

    private setupNock() {
        nock.recorder.rec({
                dont_print: true,
                enable_reqheaders_recording: true,
                output_objects: true,
            },
        );
    }

    private async writeRecordFile(): Promise<void> {
        const nockObjects = nock.recorder.play();
        await mkdirpPromise(this.basePath);
        const pathToFile = `${this.basePath}/${this.fileName}`;
        const fileContent = JSON.stringify(
            nockObjects,
            null,
            4,
        );

        await fs.writeFile(pathToFile, fileContent);
    }

}
