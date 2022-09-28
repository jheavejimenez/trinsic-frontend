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

export async function createUser(email) {
    const data = { email }
    const response = await axios.post(`${server.url}/api/users`, data);
    return response.data = {
        id: response.data._id,
        email: response.data.email,

    };
}

export async function createCertificate(
    user,
    firstName,
    lastName,
    email,
    course
) {
    const data = {user, firstName, lastName, email, course, isApprove: false};

    return await axios.post(`${server.url}/api/certificates`, data);
}

