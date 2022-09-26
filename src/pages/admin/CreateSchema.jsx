import React from "react";
import { Button, Heading, Stack, Text, useColorModeValue } from "@chakra-ui/react";

function CreateSchema() {
    return (
        <Stack
            boxShadow={'2xl'}
            bg={useColorModeValue('white', 'gray.700')}
            rounded={'xl'}
            p={10}
            spacing={8}
            align={'center'}>
            <Stack align={'right'} spacing={2}>
                <Heading
                    textTransform={'uppercase'}
                    fontSize={'3xl'}
                    color={useColorModeValue('gray.800', 'gray.200')}>
                    Congratulations
                </Heading>
                <Text fontSize={'lg'} color={'gray.500'}>
                    {"Competent person"}
                </Text>
                <Text fontSize={'lg'} color={'gray.500'}>
                    {"Appareat maecenas mattis bibendum cubilia at adversarium. " +
                        "Eripuit magnis viris viverra dapibus nihil nonumy est tota." +
                        " Vituperatoribus utamur facilisi dicat cetero verear luptatum quaeque tota. " +
                        "Tristique ultricies ac saepe facilisi expetendis platea sagittis erroribus quidam." +
                        " Reque harum volumus volumus neglegentur movet penatibus."
                    }
                </Text>
            </Stack>
        </Stack>
    )
}

export default CreateSchema;
