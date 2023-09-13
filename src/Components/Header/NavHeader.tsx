import { HStack, Link } from '@chakra-ui/react'
import { AiOutlineMenu } from 'react-icons/ai'

export default function NavHeader() {

    let links=[
        {name:"Amazon mini",link:"/amazonmini"},
        {name:"Best Sellers",link:"/best-seller"},
        {name:"Mobiles",link:"/mobiles"},
        {name:"Today's Deals",link:"/deals"},
        {name:"New Releases",link:"/new"},
    ]

  return (
      <HStack as="nav" p="2" pl="4" gap="6" fontSize={13} style={{ backgroundColor: "#232F3E",color:"white" }}>
          <HStack gap="1" as="button">
              <i style={{fontSize:"18px"}}><AiOutlineMenu /></i>
              <span>All</span>
          </HStack>
          {links.map((link,index)=>
              <Link key={index} href={link.link} >{link.name}</Link>
          )}
      </HStack>
  )
}
