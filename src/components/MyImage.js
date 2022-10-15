import { Image } from "react-native"

const MyImage = () => {
  return (
    <Image
      source={{
        uri: 'https://i.ytimg.com/vi/AsVQVKmI8pA/maxresdefault.jpg'
      }}
      style={{
        width: 200,
        height: 200,
        borderRadius: 12
      }}
    />
  )
}
export default MyImage
