import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Center,
  Box,
} from "@chakra-ui/react";

export default function Register() {
  return (
    <>
      <Center mt={10}>
        <Box
          display='flex'
          justifyContent='center'
          flexDirection='column'
          alignItems='center'
          width='300px'
          border='1px solid black'
          p={5}
          mt={10}
          bg='gray.200'>
          <Center>
            <Box
              display='flex'
              justifyContent='center'
              flexDirection='column'
              alignItems='center'
              width='100%'>
              <FormControl id='nombre' mb={3}>
                <FormLabel>Nombre</FormLabel>
                <Input
                  type='text'
                  variant='outline'
                  borderColor='black'
                  backgroundColor='white !important'
                  width='250px'
                  _hover={{
                    borderColor: "black",
                    boxShadow: "0 0 0 1px black",
                  }}
                />
              </FormControl>

              <FormControl id='apellido' mb={3}>
                <FormLabel>Apellido</FormLabel>
                <Input
                  type='text'
                  variant='outline'
                  borderColor='black'
                  backgroundColor='white'
                  width='250px'
                  _hover={{
                    borderColor: "black",
                    boxShadow: "0 0 0 1px black",
                  }}
                  _focus={{ borderColor: "black" }}
                />
              </FormControl>

              <FormControl id='email' mb={3}>
                <FormLabel>Email address</FormLabel>
                <Input
                  type='email'
                  variant='outline'
                  borderColor='black'
                  backgroundColor='white'
                  width='250px'
                  _hover={{
                    borderColor: "black",
                    boxShadow: "0 0 0 1px black",
                  }}
                />
              </FormControl>

              <FormControl id='telefono' mb={3}>
                <FormLabel>Teléfono</FormLabel>
                <Input
                  type='tel'
                  variant='outline'
                  borderColor='black'
                  backgroundColor='white'
                  width='250px'
                  _hover={{
                    borderColor: "black",
                    boxShadow: "0 0 0 1px black",
                  }}
                />
              </FormControl>

              <FormControl id='contrasena' mb={3}>
                <FormLabel>Contraseña</FormLabel>
                <Input
                  type='password'
                  variant='outline'
                  borderColor='black'
                  backgroundColor='white'
                  width='250px'
                  _hover={{
                    borderColor: "black",
                    boxShadow: "0 0 0 1px black",
                  }}
                />
              </FormControl>

              <FormControl id='repite-contrasena' mb={3}>
                <FormLabel>Repite tu contraseña</FormLabel>
                <Input
                  type='password'
                  variant='outline'
                  borderColor='black'
                  backgroundColor='white'
                  width='250px'
                  _hover={{
                    borderColor: "black",
                    boxShadow: "0 0 0 1px black",
                  }}
                />
              </FormControl>

              <Button mt={3} colorScheme='teal'>
                Submit
              </Button>
            </Box>
          </Center>
        </Box>
      </Center>
    </>
  );
}
