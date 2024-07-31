function Box(props){
  return(
    <div>
      <h1 className="mb-1">{props.name} *</h1>
<textarea required
  rows={props.rows}
  className="focus:bg-green-100  hover:border-green-500 border-2 border-black rounded p-4 w-full resize-none"
></textarea>    </div>
  )

}

export default Box