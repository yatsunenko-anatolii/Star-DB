import React from 'react'



import './Item_List.css'


 const  ItemList = (props) => {

  const {data, onItemSelected, children: renderLabel} = props

      const items = data.map((item) => {

          const { id } = item
          const  label  = renderLabel(item)

          return (
              <li
                  key={id}
                  onClick={() => onItemSelected(id)}>
                  {label}
              </li>
          )
      })


     return (
             <div className="Item_list">
                 <ul>
                     {items}
                 </ul>
             </div>
         )

}


export default ItemList