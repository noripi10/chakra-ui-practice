import { memo, VFC } from 'react'
import { Box, Image, Stack, Text } from '@chakra-ui/react'

type Props = {
  id: number
  imageUrl: string
  userName: string
  fullName: string
  onClick: (id: number) => void
}

export const UserCard: VFC<Props> = memo(({ id, imageUrl, userName, fullName, onClick }) => {
  return (
    <Box
      w='260px'
      h='260px'
      bg='white'
      borderRadius='10px'
      shadow='md'
      p={4}
      _hover={{ opacity: 0.8, cursor: 'pointer' }}
      onClick={() => onClick(id)}
    >
      <Stack textAlign='center'>
        <Image boxSize='160px' borderRadius='full' alt='soccer' m='auto' src={imageUrl} />
        <Text fontSize='lg' fontWeight='bold'>
          {userName}
        </Text>
        <Text fontSize='sm' color='gray'>
          {fullName}
        </Text>
      </Stack>
    </Box>
  )
})
