

function Post({file,url}) {
    console.log(file)
    return(
        <div key={file._id}>
            <audio controls>
                <source src={url+'/'+file.filename}  type="audio/ogg"/>
                <source src={url+'/'+file.filename}  type="audio/mpeg"/>
                <source src={url+'/'+file.filename}  type="audio/wav"/>
            </audio>
        </div>
    )
}






export default Post