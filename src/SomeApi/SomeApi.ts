import { SomeApiPost } from "./Interface";

const rp = require("request-promise");

export class SomeApi {
    private readonly postEndpoint = "https://jsonplaceholder.typicode.com/posts/";

    public async fetchPost(id: number): Promise<SomeApiPost> {
        const uri = this.postEndpoint + id;
        return rp.get({ uri, json: true });
    }
}
