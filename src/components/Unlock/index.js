// Write your code here
import {useState} from 'react'
import {AppContainer, LockImage, Paragraph, Button} from './styledComponents'

const Unlock = () => {
  const [isLocked, toggleLock] = useState(true)

  const onClickButton = () => {
    toggleLock(prev => !prev)
  }

  const imageUrl = isLocked
    ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'

  const altText = isLocked ? 'lock' : 'unlock'
  const textContent = isLocked
    ? 'Your Device is Locked'
    : 'Your Device is Unlocked'

  return (
    <AppContainer>
      <LockImage src={imageUrl} alt={altText} />
      <Paragraph>{textContent}</Paragraph>
      <Button type="button" onClick={onClickButton}>
        {isLocked ? 'Unlock' : 'Lock'}
      </Button>
    </AppContainer>
  )
}


export default Unlock
