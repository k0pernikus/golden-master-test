export interface ITask {
    execute(): Promise<string>;
}
