
function ProgramCard({ title, paragraph, img, style, styleOne, styleTwo }){
  return(
    <div className={`flex flex-col xl:flex-row justify-center items-center gap-5 px-5 xl:px-20 ${style}`}>
      <div className={`text-center xl:text-left xl:w-546 ${ styleOne }`}>
        <h3 className="text-3xl xl:text-5xl font-bold">{ title }</h3>
        <p className="text-base xl:text-2xl mt-3">{ paragraph }</p>
      </div>
      <div className={`xl:w-546 ${ styleTwo }`}>
        <img src={ img } alt="program image" />
      </div>
    </div>
  )
}

export default ProgramCard