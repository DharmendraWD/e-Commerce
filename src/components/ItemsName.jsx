

const ItemsName = ({itemName})=>{
    return (
<span className="d-block text-center">{itemName.slice(0, 40)}</span> 
    )
}

export default ItemsName;