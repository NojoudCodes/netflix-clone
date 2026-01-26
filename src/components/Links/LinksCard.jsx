import { Links } from './link'

function LinksCard() {
  return(
    <div className="flex flex-wrap justify-center mx-auto">
        { Links.map((link) => {
          return (
            <div key={ link.name } className="w-1/2 md:w-1/4 mb-4 px-2">
              <a 
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