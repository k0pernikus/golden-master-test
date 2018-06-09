import { ITask } from "./ITask";
import { MockMode } from "./NockDecorators/constants";
import { TaskMockPlaybackDecorator } from "./NockDecorators/TapePlaybackTaskDecorator";
import { TaskMockRecorder } from "./NockDecorators/TapeRecorderTaskDecorator";

export const decorateTaskWithMock = (task: ITask, mockMode: MockMode): ITask => {
    const path = "./tapes";
    const file = "recording.json";

    const msg = "Task running in:";
    switch (mockMode) {
        case "playback":
            console.warn(msg, "playback mode");
            return new TaskMockPlaybackDecorator(task, path, file);
        case "record":
            console.warn(msg, "recording mode");
            return new TaskMockRecorder(task, path, file);
        default:
            console.log(msg, "normal mode");
            return task;
    }
};
