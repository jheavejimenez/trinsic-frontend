import { Box, Button, Flex, FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";
import { getSchemaDefinitions } from "../../repository/admin";

function AddSchema() {
    const [schemaName, setSchemaName] = useState('');
    const [schemaVersion, setSchemaVersion] = useState('');
    const [schemaAttributes, setSchemaAttributes] = useState([]);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);

            await getSchemaDefinitions(
                schemaName,
                schemaVersion,
                schemaAttributes.split(',').map((attribute) => attribute.trim())
            )

            setLoading(false);
            navigate('/admin/schema');
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <Flex
                    minH={'100vh'}
                    align={'center'}
                    justify={'center'}
                >
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
                                            placeholder='Attribute A, Attribute B'
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
            )}
        </>
    );
}

export default AddSchema;
