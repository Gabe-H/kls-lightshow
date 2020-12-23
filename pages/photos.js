import { Container } from 'react-bootstrap'
import Image from 'next/image'
import Banner from '../components/Banner'

export default function photos() {
  return (
    <>
    <Banner>Gallery</Banner>
    <Container>
      <Image
        src="/images/DSCF0094.JPG"
        alt="House photo 1"
        width={1110}
        height={740}
      />
      <Image
        src="/images/DSCF0091.JPG"
        alt="House photo 2"
        width={1110}
        height={740}
      />
      <Image
        src="/images/DSCF0089.JPG"
        alt="House photo 3"
        width={1110}
        height={740}
      />
      <Image
        src="/images/DSCF0104.JPG"
        alt="House photo 4"
        width={740}
        height={1110}
      />
    </Container>
    </>
  )
}