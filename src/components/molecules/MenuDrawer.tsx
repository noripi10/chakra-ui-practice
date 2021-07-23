import { memo, VFC } from 'react'
import { Drawer, DrawerOverlay, DrawerContent, DrawerBody, Button } from '@chakra-ui/react'

type Props = {
  isOpen: boolean
  onClose: () => void
  onClickHome: () => void
  onClickUserManagement: () => void
  onClickSetting: () => void
}

export const MenuDrawer: VFC<Props> = memo(
  ({ onClose, isOpen, onClickHome, onClickSetting, onClickUserManagement }) => {
    return (
      <Drawer placement='left' size='xs' onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerBody p={0} bg='gray.100'>
              <Button w='100%' onClick={onClickHome} bg='' mt={8} mb={2}>
                ホーム
              </Button>
              <Button w='100%' onClick={onClickUserManagement} bg='' mb={2}>
                ユーザー一覧
              </Button>
              <Button w='100%' onClick={onClickSetting} bg='' mb={2}>
                設定
              </Button>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    )
  }
)
