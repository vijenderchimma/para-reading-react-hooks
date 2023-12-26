// Write your code here
import {useState} from 'react'
import {
  MainContainer,
  MainHeading,
  Paragraph,
  Button,
  Description,
  Image,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props

  const [description, setDescription] = useState(true)

  const onClickBtn = () => {
    setDescription(prev => !prev)
  }

  console.log(description)

  return (
    <MainContainer>
      <MainHeading>React Hooks</MainHeading>
      <Paragraph>Hooks are a new addition to React</Paragraph>
      <Image
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      {description ? (
        <Description>{reactHooksDescription.slice(0, 170)}</Description>
      ) : (
        <Description>{reactHooksDescription}</Description>
      )}
      {description ? (
        <Button onClick={onClickBtn}>Read More</Button>
      ) : (
        <Button onClick={onClickBtn}>Read Less</Button>
      )}
    </MainContainer>
  )
}

export default ReadMore
