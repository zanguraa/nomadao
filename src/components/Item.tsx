import React from 'react'
import styled from 'styled-components'
import NFT1 from "../assets/nfts/nft1.avif"
import { ItemProps } from '../types/item'

const Item = ({title, description, picture}: ItemProps) => {
  return (
    <ItemContainer>
<LeftSide>
  <NftImg src={NFT1} alt="nft" />
  </LeftSide> <RightSide>
    <h2>
      {title}
    </h2>
    <p>
{description}
    </p>
  </RightSide>
    </ItemContainer>
  )
}

export default Item

const ItemContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 30px;
@media screen and (min-width: 1440px) {
    max-width: 1440px;
    min-width: 1440px;
    
  }
`
const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const NftImg = styled.img`
  width: 100%;
  max-width: 400px;
  max-height: 300px;
`

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
  h2{
    font-weight: 900;
    font-size: 30px;
    text-transform: uppercase;
  }
  p{
    font-size: 18px;
    line-height: 27px;
    color: #2e2d2d;
    margin: 30px 0 50px;
  }
`