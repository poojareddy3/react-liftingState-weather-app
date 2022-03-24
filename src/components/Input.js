function Input(props) {
   return(
        <div className="searchDiv">
        {/* search bar, input with button */}
        <input type="text" placeholder="Enter zipcode" onChange={props.onChange}/>
        <button type="submit" onClick={props.onClick} >Search</button>
        </div> 
    )
}

export default Input