import React from "react";
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Stack,
    Text,
    useColorModeValue
} from "@chakra-ui/react";
import { credentialsClient } from "../../repository/apiConfig";

function AddSchema() {
    const [schemaName, setSchemaName] = React.useState('');
    const [schemaVersion, setSchemaVersion] = React.useState('');
    const [schemaAttributes, setSchemaAttributes] = React.useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        let schemaId = ({
            name: schemaName,
            version: schemaVersion,
            attributeNames: [...schemaAttributes]
        });
        console.log(schemaId);
    }

    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Box
                    rounded={'lg'}
                    boxShadow={'lg'}
                    p={8}>
                    <form onSubmit={handleSubmit}>
                        <Stack spacing={4}>
                            <FormControl>
                                <FormLabel>Schema Name</FormLabel>
                                <Input
                                    autoComplete={"off"}
                                    placeholder='Schema Name'
                                    value={schemaName}
                                    onChange={(e) => setSchemaName(e.target.value)}
                                />
                                <FormLabel>Schema Version</FormLabel>
                                <Input
                                    autoComplete={"off"}
                                    placeholder='Schema Version'
                                    value={schemaVersion}
                                    onChange={(e) => setSchemaVersion(e.target.value)}
                                />
                                <FormLabel>Schema Attributes</FormLabel>
                                <Input
                                    autoComplete={"off"}
                                    placeholder='Schema Attributes'
                                    value={schemaAttributes}
                                    onChange={(e) => setSchemaAttributes(e.target.value)}
                                />
                            </FormControl>
                            <Stack spacing={10}>
                                <Button
                                    type={'submit'}
                                    bg={'blue.400'}
                                    color={'white'}
                                    _hover={{
                                        bg: 'blue.500',
                                    }}>
                                    Add Schema
                                </Button>
                            </Stack>
                        </Stack>
                    </form>
                </Box>
            </Stack>
        </Flex>
    );
}