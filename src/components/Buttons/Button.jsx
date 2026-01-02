
function Button({ path, style, btn , icon:Icon }) {
  return(
    <a 
      href={ path }
      className={`bg-red text-white rounded-md cursor-pointer ${ style }`}> 
        { Icon && <Icon /> }
        { btn }
      </a>
  )
}

export default Button