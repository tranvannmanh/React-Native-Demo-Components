import { ImageBackground } from "react-native"
import MyImage from "./MyImage"

const MyImagebackground = () => {
  return (
    <ImageBackground
      source={{
        uri: 'https://m.media-amazon.com/images/I/41wN1fhFL6L.jpg'
      }}
      resizeMode='cover'
      blurRadius={5}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <MyImage />
    </ImageBackground >
  )
}
export default MyImagebackground
