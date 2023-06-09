import {PlanetContainer, Image, Name, Description} from './styledComponets'

const PlanetItem = props => {
  const {planetDetails} = props
  const {name, imageUrl, description} = planetDetails

  return (
    <PlanetContainer>
      <Image src={imageUrl} alt={`planet ${name}`} />
      <Name>{name}</Name>
      <Description>{description}</Description>
    </PlanetContainer>
  )
}

export default PlanetItem
