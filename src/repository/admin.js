import axios from "axios";
import { server } from "./apiConfig";

export async function getSchemaDefinitions() {
    const response = await axios.get(`${server.url}/api/admin/schema`);
    return response.data;
}

export async function createSchemaDefinition(
    schemaName,
    schemaVersion,
    schemaAttributes
) {
    const data = { schemaName, schemaVersion, schemaAttributes }

    const response = await axios.post(`${server.url}/api/admin/schema`, data);
    return response.data;
}

export async function sendEmailApproved(email, name) {
    const data = { email, name }
    const response = await axios.post(`${server.url}/api/admin`, data);
    return response.data;
}
