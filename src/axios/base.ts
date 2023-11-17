import axios from "axios";

axios.defaults.baseURL = process.env.SERVER_URL;

export default axios;

// try {
//     data = api
// } catch (e) {
//     handlerError (e)
// }
