
function ButtonOutline({ style, btn, icon:Icon  }) {
  return(
    <button className={`border border-grey-200 rounded-md cursor-pointer ${ style }`}> 
    <Icon />
    { btn } </button>
  )
}

export default ButtonOutline