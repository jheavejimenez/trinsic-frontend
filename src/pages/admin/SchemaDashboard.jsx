import React, { useEffect } from "react";
import { Box, Center, Container, Flex, Heading, SimpleGrid, Spacer, Spinner, Stack, Text } from "@chakra-ui/react";
import CustomButton from "../../components/Button";
import { credentialsClient } from "../../repository/apiConfig";

function SchemaDashboard() {
    const [schema, setSchema] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    async function getSchema() {
        let credentialDefinitions = await credentialsClient.listCredentialDefinitions();
        setLoading(false);
        setSchema(credentialDefinitions);
        return credentialDefinitions;
    }

    useEffect(() => {
        getSchema();
    }, []);

    return (
        <>
            <Container maxW={'1280px'} marginTop={'10vh'}>
                {loading ? (
                    <Center>
                        <Spinner
                            thickness='4px'
                            speed='0.65s'
                            emptyColor='gray.200'
                            color='blue.500'
                            size='xl'
                        />
                    </Center>
                ) : (
                    <>
                        <Flex>
                            <Spacer />
                            <Box>
                                <CustomButton title={"Add Schema"} path={"/admin/add-schema"} />
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
                    </>
                )}
            </Container>
        </>
    )
}

export default SchemaDashboard;
