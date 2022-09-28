import axios from "axios";

export async function getSchemaDefinitions() {
    const response = await axios.get(`${server.url}/api/schema`);
    return response.data;
}