import React from 'react'
import Item from './Item'

function Items({items, setItems}) {


    const addItem = () => {
        const newItem = {
            id: items.length + 1,
            description: '',
            quantity: 1,
            price: 0
        }

        setItems([...items, newItem])
    }

    const handleDelete = (id) => {
        const updatedItems = items.filter((item) => item.id != id)
        setItems(updatedItems)
    }

    const handleChange = (id, field, value) => {
        const updatedItems = items.map((item) => {
            if(item.id === id){
                return {...item, [field]: value}
            }
            return item
        })
        setItems(updatedItems)
    }

  return (
    <div className='section items'>
        <h2>Items</h2>
        <div>
            {items.map((item) => (
                <Item
                key={item.id}
                item={item}
                deleteItem={handleDelete}
                handleChange={handleChange}
                />
            ))}
        </div>
        <div>
            <button onClick={addItem}>Add Item</button>
        </div>
    </div>
  )
}

export default Items