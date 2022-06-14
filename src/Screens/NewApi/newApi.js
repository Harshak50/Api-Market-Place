import React, { useState } from 'react';
import './newApi.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
var Spinner = require('react-spinkit');
const NewAPI = () => {

  const navigate = new useNavigate()
  const[loading,setLoading] = useState(false)
  const[input,setInput]=useState({
    apiName:"",
    apiEndPoint:"",
    description:"",
    author:"",
    public:false,
    email:"",
    imageUrl:""
  })

  const onChangeInput = (event)=>{
    const name = event.target.name;
    const value = event.target.value;
    const newdata = { ...input, [name]: value };
    setInput(newdata);
  }


const onSubmitHandler = async(event)=>{
  event.preventDefault()
  setLoading(true)
  const config = {
    headers: {
        "Content-type": "application/json",
    },
};
  const response = await axios.post("https://authjwtexpress.herokuapp.com/apis/createApi",{
    apiName:input.apiName,
    apiEndPoint:input.apiEndPoint,
    description:input.description,
    author:input.author,
    public:input.public,
    email:input.email,
    imageUrl:input.imageUrl
  }, config);
  if(response){
    navigate('/myapis')
    setLoading(false);
  }
  else{
    console.log("Error")
  }
  setLoading(false)
}

  return (
  <div className='container'>
    <div  className='modal-input-container' >
    <div className='modal-title'>
      <p>Add new API</p>
    </div>
    <div>
      <form onSubmit={onSubmitHandler}>
      <input type="text" placeholder='API Name'onChange={onChangeInput} name='apiName' value={input.apiName}  className='inputs' />
      <input type="text" placeholder='API End Point'onChange={onChangeInput} name='apiEndPoint' value={input.apiEndPoint}  className='inputs' />
      <input type="text" placeholder='Description'onChange={onChangeInput} name='description' value={input.description} className='inputs' />
      <input type="text" placeholder='Public'onChange={onChangeInput} name='public' value={input.public} className='inputs' />
      <input type="text" placeholder='Author'onChange={onChangeInput} name='author' value={input.author} className='inputs' />
      <input type="text" placeholder='Image Url'onChange={onChangeInput} name='imageUrl' value={input.imageUrl} className='inputs' />
      <input type="text" placeholder='email'onChange={onChangeInput} name='email' value={input.email} className='inputs' />
      <button
                        className="btn-1 btn"
                        onClick={onSubmitHandler}
                        type="submit"
                    >
                        {loading ? (
                            <Spinner
                                name="three-bounce"
                                color="#fff"
                                style={{ margin: "auto", transform: "scale(0.5)" }}
                            />
                        ) : (
                            <p style={{ color: "#fff" }}>
                                {" "}
                                Add Api +
                            </p>
                        )}
                    </button>
      </form>
    </div>
    </div>
  </div>)
};

export default NewAPI;
