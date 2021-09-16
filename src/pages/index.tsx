import { Input } from '../components/Form/input'
import { Flex, Button, Stack } from '@chakra-ui/react'

export default function SignIn() {
  return (
    <Flex 
      width="100vw" 
      height="100vh" 
      alignItems="center" 
      justifyContent="center"
    >

      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        background="gray.800"
        padding="8" // 2rem -- 32px
        borderRadius={8} // 8px
        flexDirection="column"
      >
        <Stack spacing="4">
          <Input name="email" type="email" label="E-mail" />
          <Input name="password" type="password" label="Senha" />
        </Stack>

        <Button 
          type="submit" 
          marginTop="6" /*1.5rem -- 24px */ 
          colorScheme="pink"
        >
            Entrar
        </Button>
      </Flex>

    </Flex>
  )
}
