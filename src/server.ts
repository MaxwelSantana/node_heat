import { serverHttp } from "./app";

const port = 4000;
serverHttp.listen(port, () => console.log(`Running on port ${port}`));
