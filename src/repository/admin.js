import axios from "axios";
import { server } from "./apiConfig";

export async function getSchemaDefinitions() {
    const response = await axios.get(`${server.url}/api/schema`);
    return response.data;
}