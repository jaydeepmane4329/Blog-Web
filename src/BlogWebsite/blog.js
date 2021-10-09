import firebaseDb from './firebaseConfig';
import {useState,useEffect} from 'react';
import BlogData from './blogData';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './style.css';



function Blog(){

    const intialValues ={
        title : '',
        name : '',
        description: '',
        myblog : '',
        date : new Date().toDateString(),
    }
      
const [inputText, setInputText] = useState(intialValues);
const [blogData,setBlogData] = useState({})
const [currentId,setCurrentId] = useState('')


useEffect(() => {
    if(currentId ===''){
        setInputText({
            ...intialValues
        })
    }else{
        setInputText(blogData[currentId])
    }
},[])

useEffect(() => {
      firebaseDb.child('blogs').on('value',snapShot => {
          if(snapShot.val() !=null){
             setBlogData({...snapShot.val()})
          }
      })
}, [])

function handleChange(event){
    const {name,value} = event.target;
    setInputText({
        ...inputText,
        [name] : value
    });
}

function addOrEdit(blogs){
    if(currentId === ''){
    firebaseDb.child('blogs').push(
        blogs,
        err => {
            if(err){
                console.log(err)
            }
    })
}else{
    firebaseDb.child(`blogs/${currentId}`).set(
        blogs,
        err => {
            if(err){
                console.log(err)
            }
        }
    )
}
}

function onDelete(key){
  if(window.confirm('are You sure?')){
      firebaseDb.child(`blogs/${key}`).remove()
  }
}


    return(
        <div >
            <h1> Write Your Blog</h1>
            <div className='blog'>
            <div class="form-group">
    <label for="name">Title</label>
    <input type="text" class="form-control" id="exampleInputEmail1"  name='title' value={inputText.title} onChange={handleChange} aria-describedby="emailHelp" placeholder="Title"/>
  </div>
  <div class="form-group">
    <label for="name">Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1"  name='name' value={inputText.name} onChange={handleChange} aria-describedby="emailHelp" placeholder="Your Name"/>
  </div>
  <div class="form-group">
    <label for="name">Description</label>
    <input type="text" class="form-control" id="exampleInputEmail1"  name='description' value={inputText.description} onChange={handleChange} aria-describedby="emailHelp" placeholder="Description"/>
  </div>
  <div class="form-group">
    <label for="text">Blog</label>
    <textarea type='text' class="form-control" rows='5'  name='myblog' value={inputText.myblog} onChange={handleChange}  id="exampleInputPassword1" placeholder="Your Blog"/>
  </div>
  <input type="submit" value={currentId ==='' ? 'submit' : 'update'} onClick={() => {addOrEdit(inputText)}} class="btn btn-primary"/>
  </div>
        
         <BlogData currentID ={setCurrentId} Delete = {onDelete} data ={blogData}/>
       </div>
    )
}
export default Blog;