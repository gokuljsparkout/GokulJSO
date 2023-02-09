import Item from "./Item.js"

const PackingList = ()=>(
  <section>
    <h1>Gokul J's Packing List</h1>
    <u1>
      <Item isPacked={true} name='Books'/>
      <Item isPacked={true} name='Pen' />
    </u1>
  </section>
)
export default PackingList