import React,{useState,useRef} from 'react'

// import image from '../images/user.jpg'

export default function LandingPage(){

    const [userName,setUserName] = useState('User Name')
    const [userImage,setUserImage] = useState('')
    const [change,setChange] = useState(false)
    const [upload,setUpload] = useState(false)
    const inputFile = useRef(null)

    const handleChange = e => setUserName(e.target.value)
    const handleClick = () => setChange(prev=>!prev)
    const handleDone = () => setChange(prev=>!prev)
    const handleUpload = (e) => {
        const { files } = e.target;
        if (files && files.length) {
        const filename = files[0].name;

        var parts = filename.split(".");
        const fileType = parts[parts.length - 1];
        console.log("fileType", fileType);

        setUserImage(files[0]);
        }
    }
    const onButtonClick = () => {
        inputFile.current.click();
        setUpload(prev=>!prev);
    }

    return(
        <div className='container home'>
            <div className='username'>
                <h3>{userName}</h3>
                {!change && <button onClick={handleClick}>Change</button>}
                {change && <div className='name-input'>
                    <input value={userName} placeholder='Username' onChange={handleChange}/>
                    <button onClick={handleDone}>Done</button>
                </div>}
            </div>
            <div className='userimage'>
                <img src={userImage} alt="Image of user"/>
                <button onClick={onButtonClick}>Upload</button>
                {upload && <div className='image-input'>
                    <input type='file' onChange={handleUpload} ref={inputFile}/>
                </div>}
            </div>
        </div>
    )
}