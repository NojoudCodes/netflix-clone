import { Links } from './link'

function LinksCard() {
  return(
    <div className="flex flex-wrap justify-center mx-auto">
        { Links.map((link) => {
          return (
            <div className="w-1/2 md:w-1/4 mb-4 px-2">
              <a 
                key={ link.name } 
                href={link.path}
                className="underline"
              >{ link.name }</a>
            </div>
          )
        })}
    </div>
  )
}

export default LinksCard