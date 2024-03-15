import { Avatar, AvatarBadge } from '@chakra-ui/avatar'
import { Button } from '@chakra-ui/button'
import { useDisclosure } from '@chakra-ui/hooks'
import { Input } from '@chakra-ui/input'
import { Box, Stack, Text } from '@chakra-ui/layout'
import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay } from '@chakra-ui/modal'

export const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box bg={'blue.300'} w={'100%'} h={'max-content'} p={2}>
          <Stack onClick={onOpen} direction='row' spacing={4}>
              <Avatar size={'sm'} src='https://avatars.githubusercontent.com/u/65696357?v=4'>
                  <AvatarBadge boxSize='1.25em' bg='green.500' />
              </Avatar>
              <Text textAlign={'center'}>Pratic</Text>
          </Stack>
          <Drawer isOpen={isOpen} onClose={onClose} placement={'left'}>
              <DrawerOverlay />
              <DrawerContent>
                  <DrawerCloseButton />
                  <DrawerHeader>Create your account</DrawerHeader>

                  <DrawerBody>
                      <form
                          id='my-form'
                          onSubmit={(e) => {
                              e.preventDefault()
                              console.log('submitted')
                          }}
                      >
                          <Input name='nickname' placeholder='Type here...' />
                      </form>
                  </DrawerBody>

                  <DrawerFooter>
                      <Button type='submit' form='my-form'>
                          Save
                      </Button>
                  </DrawerFooter>
              </DrawerContent>
          </Drawer>
    </Box>
  )
}