import React, { useEffect } from "react";
import { Box, Container, Flex, Heading, SimpleGrid, Spacer, Stack, Text } from "@chakra-ui/react";
import CustomButton from "../../components/Button";
import { credentialsClient } from "../../repository/apiConfig";

function SchemaDashboard() {
    const [schema, setSchema] = React.useState([]);

    async function getSchema() {
        let credentialDefinitions = await credentialsClient.listCredentialDefinitions();

        setSchema(credentialDefinitions);
        return credentialDefinitions;
    }

    useEffect(() => {
        getSchema();
    }, []);

    return (
        <>
            <Container maxW={'1280px'} marginTop={'10vh'}>
                <Flex>
                    <Spacer />
                    <Box>
                        <CustomButton title={"Add Schema"} path={"/add-schema"} />
                    </Box>
                </Flex>
                <SimpleGrid columns={3} spacing={5}>
                    {schema.map((schema, index) => (
                        <Stack
                            key={index}
                            boxShadow={'2xl'}
                            rounded={'xl'}
                            p={10}
                            spacing={8}
                            align={'center'}>
                            <Stack align={'right'} spacing={2}>
                                <Heading
                                    fontSize={'3xl'}
                                >
                                    {schema.name}
                                </Heading>
                                <Text fontSize={'md'} color={'gray.500'}>
                                    {`Revocable: ${schema.supportsRevocation}`}
                                </Text>
                                <Text fontSize={'md'} color={'gray.500'}>
                                    {`Schema ID: ${schema.schemaId}`}
                                </Text>
                            </Stack>
                        </Stack>
                    ))}
                </SimpleGrid>
            </Container>
        </>
    )
}

export default SchemaDashboard;
