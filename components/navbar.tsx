import Image from 'next/image'
import galaxy from '../images/galaxy.png'
export default function Navbar() {
  return (
    <>
      <Image
        src={galaxy}
        alt="Picture of a far away galaxy"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
      {/* <Image
        src="/me.png"
        alt="Picture of the author"
        width={500}
        height={500}
      /> */}
      <hr />
    </>
  )
}