import { useEffect, useState } from "react";
import { Box, Container, Flex, Heading, SimpleGrid, Spacer, Stack, Text } from "@chakra-ui/react";
import CustomButton from "../../components/Button";
import Loading from "../../components/Loading";
import { getSchemaDefinitions } from "../../repository/admin";

function SchemaDashboard() {
    const [schema, setSchema] = useState([]);
    const [loading, setLoading] = useState(true);

    async function getSchema() {
        let credentialDefinitions = await getSchemaDefinitions();
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
                    <Loading />
                ) : (
                    <>
                        <Flex>
                            <Spacer />
                            <Box pb={"5"}>
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
