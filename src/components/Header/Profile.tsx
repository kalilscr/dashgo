import { Flex, Text, Box, Avatar } from '@chakra-ui/react';

export function Profile() {
    return (
        <Flex align="center">
            <Box mr="4" textAlign="right">
                <Text>John Doe</Text>
                <Text color="gray.300" fontSize="small">
                    JohnDoe@generic.com
                </Text>
            </Box>

            <Avatar size="md" name="John Doe" src="" />
        </Flex>        
    );
}