import * as _ from "lodash/fp";
import { SomeApiPost } from "../SomeApi/Interface";
import { SomeApi } from "../SomeApi/SomeApi";
import { ITask } from "./ITask";

export class CsvTask implements ITask {
    public async execute(): Promise<string> {
        const api = new SomeApi();
        const range: number[] = _.range(1, 101);

        const promises = range.map(i => {
            return api.fetchPost(i);
        });

        const posts = await Promise.all(promises);

        const csvLines = posts.map((post: SomeApiPost) => {
            const { id, title } = post;
            return [id, title].join(",");
        });

        return csvLines.join("\n");
    }
}
