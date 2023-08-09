import LL , {Aj,Dog,Image, Image2} from "./Dogcard.js";


function App() {
  return (
    <div>
      hello
      <Dog/>
      <Dog/>
      <Dog/>
      <Aj/>
      <LL/>
      <Image name = "tiger"  image = "https://images.unsplash.com/photo-1682685797741-f0213d24418c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"/>
      <Image name = "lion" image = "https://images.unsplash.com/photo-1682685796002-e05458d61f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>

      <Image2 name ="hello badda" image = "https://images.unsplash.com/photo-1691156568477-7188f31e6f4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
    </div>
  )

}

export default App;
