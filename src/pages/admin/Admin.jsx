import { Button, Flex, Table, TableContainer, Tbody, Td, Th, Thead, Tr, useColorModeValue, } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { getSumittedApplications, approveApplication } from "../../repository/admin";

function Admin() {
    const [certs, setCerts] = useState([]);

    useEffect(() => {
        async function fetchCerts() {
            const res = await getSumittedApplications()
            setCerts(res)
        }

        fetchCerts()
        let interval = setInterval(async () => {
            fetchCerts()
        }, 10000);
        return () => {
            clearInterval(interval); // need to clear the interval when the component unmounts to prevent memory leaks
        };
    }, []);

    const handleApprove = async (cert) => {
        const isApprove = true;

        await approveApplication(
            cert._id,
            cert.firstName,
            cert.lastName,
            cert.email,
            cert.course,
            isApprove,
        )
        console.log(cert._id)
    }


    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}
        >
            <TableContainer display={'block'}>
                <Table variant='striped' colorScheme='blue'>
                    <Thead>
                        <Tr>
                            <Th>First Name</Th>
                            <Th>Last Name</Th>
                            <Th>Email</Th>
                            <Th>Course</Th>
                            <Th>Action</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {certs.map((cert) => (
                            <Tr key={cert._id}>
                                <Td>{cert.firstName}</Td>
                                <Td>{cert.lastName}</Td>
                                <Td>{cert.email}</Td>
                                <Td>{cert.course}</Td>
                                <Td>
                                    <Button
                                        onClick={() => handleApprove(cert)}
                                        bg={'blue.400'}
                                        color={'white'}
                                        _hover={{
                                            bg: 'blue.500',
                                        }}>
                                        Approve
                                    </Button>
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </Flex>
    )
}

export default Admin;
