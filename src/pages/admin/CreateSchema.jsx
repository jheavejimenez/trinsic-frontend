import React from "react";
import { Container, Heading, SimpleGrid, Stack, Text, useColorModeValue } from "@chakra-ui/react";

function CreateSchema() {
    return (
        <Container maxW={'1280px'} marginTop={'10vh'}>
            <SimpleGrid columns={3} spacing={5}>
                <Stack
                    boxShadow={'2xl'}
                    bg={useColorModeValue('white', 'gray.700')}
                    rounded={'xl'}
                    p={10}
                    spacing={8}
                    align={'center'}>
                    <Stack align={'right'} spacing={2}>
                        <Heading
                            fontSize={'3xl'}
                            color={useColorModeValue('gray.800', 'gray.200')}>
                            {"Competent person"}
                        </Heading>
                        <Text fontSize={'lg'} color={'gray.500'}>
                            {"Competent person"}
                                " Vituperatoribus utamur facilisi dicat cetero verear luptatum quaeque tota. " +
                                "Tristique ultricies ac saepe facilisi expetendis platea sagittis erroribus quidam." +
                                " Reque harum volumus volumus neglegentur movet penatibus."
                            }
                        </Text>
                    </Stack>
                </Stack>
            </SimpleGrid>
        </Container>
    )
}

export default CreateSchema;
