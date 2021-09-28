import { Button } from '@chakra-ui/button'
import { Image } from '@chakra-ui/image'
import { HStack, Stack } from '@chakra-ui/layout'
import { memo, VFC } from 'react'
import { useFileUpload } from 'use-file-upload'

export const Home: VFC = memo(() => {
  const [files, setSelectFiles] = useFileUpload()
  return (
    <Stack h='100vh' flex={1} justifyContent='center' alignItems='center' flexDirection='column'>
      <p>ホームページ</p>
      <HStack>
        <Button
          color='white'
          bg='blue.300'
          _hover={{ bgColor: 'blue.600' }}
          _focus={{ bgColor: 'blue.600' }}
          onClick={() => {
            setSelectFiles({ accept: 'image/*', multiple: true }, (files) => console.info(files))
          }}
        >
          select file
        </Button>
      </HStack>
      <HStack>
        {files &&
          Array.isArray(files) &&
          files.map((file) => (
            <div key={file.name}>
              {file.source && <Image src={file.source.toString()} alt='image' boxSize='400px' borderRadius='full' />}
            </div>
          ))}
      </HStack>
    </Stack>
  )
})
