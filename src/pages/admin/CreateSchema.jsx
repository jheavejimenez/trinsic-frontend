import React, { useEffect } from "react";
import { Box, Container, Flex, Heading, SimpleGrid, Spacer, Stack, Text } from "@chakra-ui/react";
import CustomButton from "../../components/Button";
import { credentialsClient } from "../../repository/apiConfig";

function CreateSchema() {
    const [schema, setSchema] = React.useState([]);

    async function getSchema() {
        let schemas = await credentialsClient.listSchemas();
        setSchema(schemas);
        return schemas;
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
                                <Text fontSize={'lg'} color={'gray.500'}>
                                    {" Vituperatoribus utamur facilisi dicat cetero verear luptatum quaeque tota. " +
                                        "Tristique ultricies ac saepe facilisi expetendis platea sagittis erroribus quidam." +
                                        " Reque harum volumus volumus neglegentur movet penatibus."
                                    }
                                </Text>
                            </Stack>
                        </Stack>
                    ))}
                </SimpleGrid>
            </Container>
        </>
    )
}

export default CreateSchema;
