
function ProgramCard({ title, paragraph, img, styleOne, styleTwo }){
  return(
    <div className="flex justify-center items-center gap-5 px-20">
      <div className={`w-546 ${ styleOne }`}>
        <h3 className="text-5xl font-bold">{ title }</h3>
        <p className="text-2xl mt-3">{ paragraph }</p>
      </div>
      <div className={`w-546 ${ styleTwo }`}>
        <img src={ img } alt="program image" />
      </div>
    </div>
  )
}

export default ProgramCard