import './style2.css'

function BlogData(props){
    return(
        <div>
            <h1>BLOG</h1>
        <div className='blog-website'>
             
             {
                 Object.keys(props.data).map(id => {
                     return(
                        <div className='blog-box' key ={id}>
                             <p>Title : {props.data[id].title}</p>
                             <p>Blogger Name :{props.data[id].name}</p>
                             <p>Description : {props.data[id].description}</p>
                             <p>Blog : {props.data[id].myblog}</p>
                             <p>Created Date : {props.data[id].date}</p>
                             <span ><i onClick={() => {props.Delete(id)}} class="fas fa-trash-alt"></i></span>
                             <span ><i  onClick={() => {props.currentID(id)}} class="fas fa-edit"></i></span>
                        </div>
                     )
                 })
                
             }
        </div>
        </div>
    )
}
export default BlogData;
