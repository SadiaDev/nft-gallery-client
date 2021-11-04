import React from 'react'
import {
  Typography,
  Container
} from '@mui/material'
import { useMediaQuery } from 'react-responsive'
import eclipse from '../../images/Eclipse1.jpeg'

const desktop = '200px'
const tablet = '100px'
const phone = '30px'

const About = () => {
  const isPhone = useMediaQuery({
    query: '(max-width: 600px)'
  })

  const isTablet = useMediaQuery({
    query: '(max-width: 1000px)'
  })

  let mobileStyle

  if (isPhone) {
    mobileStyle = phone
  } else if (isTablet) {
    mobileStyle = tablet
  } else {
    mobileStyle = desktop
  }

  return (
    <Container
      style={{
        height: '100vh',
        width: '100vw',
        paddingTop: '100px',
        paddingLeft: mobileStyle,
        paddingRight: mobileStyle,
        backgroundColor: 'white'
      }}>
      <div style={{ marginBottom: '20px' }}>
        <Typography
          style={{ fontWeight: '100', marginBottom: '25px' }}
          variant='h5'
          align='center'
          color='black'
          gutterBottom={true}>
          What is a Zyzygy?
        </Typography>
      </div>
      <div style={{ marginBottom: '35px' }}>
        <Typography
          style={{ fontWeight: '100' }}
          variant='p'
          align='center'
          color='black'
          gutterBottom={true}>
          A zyzygy is a rare fleeting moment in a gravitational system where 3
          celestial bodies come into perfect alignment. The best known examples
          of a zyzygy are the solar and lunar eclipses. Zyzygy Studios is an art
          gallery. Why are we naming our art gallery Zyzygy? We believe we are
          at the intersection point where two worlds are coming into alignment.
          The digital world of blockchain technology, with the digital scarcity
          we can achieve through non-fungible tokens (NFTs), and the real world
          of tangible touchable things like art, real estate, and property.
        </Typography>
      </div>
      <div>
        <img
          src={eclipse}
          style={{
            width: '100%',
            marginBottom: '35px'
          }}
        />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <Typography
          style={{ fontWeight: '100', marginTop: '25px' }}
          variant='p'
          align='center'
          color='black'
          gutterBottom>
          Our vision at Zyzygy Studios is to allow for the sale of art, and the
          ownership rights to that art to be deployed to a public blockchain
          such as ethereum. The transfer of ownership at any point in the future
          will be done by transferring this NFT to the new owner of that art.
          Built into that NFT contract is a royalty structure, and all the
          identifying information about the art piece itself. The artist and
          curator will receive royalties automatically when the art is bought
          and sold at any point, in perpetuity, as structured into the NFT
          contract. In other words, the code is law, and it is impossible to
          alter it once deployed to the blockchain. The art pieces will have a
          cryptographic QR code embedded into it which will display the NFT
          smart contract address.
        </Typography>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <Typography
          style={{ fontWeight: '100' }}
          variant='p'
          align='center'
          color='black'
          gutterBottom>
          For example Zyzygy Studios sells an art piece created by Bob. Jane
          buys this art piece from Zyzygy Studios with Ethereum (a popular
          crypto-currency with NFT and smart contract capability) and the
          transaction transfers the bill of sale to Jane, who now controls the
          ownership of Bob&apos;s art. The studio receives a royalty and initial
          percentage for the first sale. At some point in the future, Jane
          decides to liquidate some of her physical assets to buy some real
          estate, so she auctions Bob&rsquo;s art. Bob&apos;s art has
          appreciated in value significantly, so Jane will make a nice profit!
          Steve, the winner of the auction, will send Jane the amount of
          ethereum required to make the purchase, and when that ethereum is
          transferred to Jane, a small percentage will be automatically sent to
          Bob&apos;s ethereum address to cover his contractually agreed-upon
          royalty. And if Steve decides to auction Bob&apos;s art in the future,
          Bob and Zyzygy will again receive their royalties.
        </Typography>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <Typography
          style={{ fontWeight: '100' }}
          variant='p'
          align='center'
          color='black'
          gutterBottom>
          If it&apos;s also coded into the smart contract, Zyzygy studios can
          receive a small royalty either as a taper-off, or also in perpetuity.
          This can be decided when the contract is deployed to the blockchain
          and the NFT is issued.
        </Typography>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <Typography
          style={{ fontWeight: '100' }}
          variant='p'
          align='center'
          color='black'
          gutterBottom>
          There are however a few technical issues that need to be solved in
          order to prevent counterfeiting. There is nothing stopping someone
          from creating a copy of the art, and placing the same QR code on the
          counterfeit art piece. So the authenticity of the artwork will still
          need to be verified by 3rd parties. Until a foolproof system for this
          can be created, authenticity will either be on an honor code system,
          or need to be verified by an expert. In the example of real estate or
          land rights, this is not an issue because physical land or a house,
          cannot be &ldquo;faked&ldquo; in any way, so the ownership rights, or
          deeds, will simply be the NFT that stores all the ownership rights,
          which itself, cannot be altered or faked. But small-scale artwork can
          be faked, so this could present an opportunity for counterfeiting. Bad
          actors will be bad actors, so for now, authenticity will still be in
          question, in the same way that it is now, without the NFT ownership
          rights. The NFT will simply protect the artist&apos;s royalty rights
          by enforcing the contract automatically. If the sale of the art takes
          place, the royalties will be paid, no matter what.
        </Typography>
      </div>
      <div style={{ height: '100x', color: 'white' }}>content</div>
    </Container>
  )
}

export default About