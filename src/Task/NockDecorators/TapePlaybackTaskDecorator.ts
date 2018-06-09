import nock = require("nock");
import { ITask } from "../ITask";

export class TaskMockPlaybackDecorator implements ITask {
    private path: string;

    public constructor(private task: ITask, basePath: string, file: string) {
        this.path = `${basePath}/${file}`;
    }

    public async execute(): Promise<string> {
        console.log(`Loading mocks from path:${this.path}`);
        nock.load(this.path);
        nock.recorder.play();

        return this.task.execute();
    }
}
