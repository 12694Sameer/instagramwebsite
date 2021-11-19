import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom';
import M from 'materialize-css';

const CraetePost = () => {
    const history = useHistory()
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [image, setImage] = useState("")
    const [url, setUrl] = useState("")

    useEffect(() => {
        if (url) {
            fetch("/createpost", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem("jwt")
                },
                body: JSON.stringify({
                    title,
                    body,
                    pic: url
                })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.error) {
                        M.toast({ html: data.error, classes: "#c62828 red darken-3" })
                    }
                    else {
                        M.toast({ html: "created post success", classes: "#43a047 green darken-1" })
                        history.push('/')
                    }
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }, [url])
    const postDetails = () => {
        // const data = new FormData()
        // data.append("file", image);
        // data.append("upload_preset", "omnizeimages");
        // data.append("cloud_name", "samtechnical")
        // fetch("https://api.cloudinary.com/v1_1/samtechnical/image/upload", {
        //     method: "post",
        //     body: data
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         setUrl(data.url)
        //     })
        //     .catch(err => {
        //         console.log(err)
        //     })
        console.log(localStorage.getItem("jwt"))
        console.log(localStorage.getItem("user"))


    }

    return (
        <div className="card input-filed" style={{
            margin: "30px auto",
            maxWidth: "500px",
            padding: "20px",
            textAlign: "center"
        }}>
            <input
                type="text"
                placeholder="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="text"
                placeholder="body"
                value={body}
                onChange={(e) => setBody(e.target.value)}
            />
            <div className="file-field input-field">
                <div className="btn #64b5f6 blue darken-1">
                    <span>Upload Image</span>
                    <input
                        type="file"
                        multiple
                        onChange={(e) => setImage(e.target.files[0])}
                    />
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path validate" type="text" placeholder="Upload one or more files" />
                </div>
            </div>
            <button className="btn waves-effect waves-light #64b5f6 blue darken-1"
                onClick={() => postDetails()}
            >
                SUBMIT POST
                </button>
        </div>
    )

}

export default CraetePost;