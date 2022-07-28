import { useEffect, useState } from "react";

// 'https://firebasestorage.googleapis.com/v0/b/uploadingmyimages.appspot.com/o/videos%2F2022-07-16%2011-46-36.mp4?alt=media&token=e9ee2ec2-992a-46be-8d45-d6516e7d3714', 'https://firebasestorage.googleapis.com/v0/b/uploadingmyimages.appspot.com/o/videos%2F2022-07-16%2011-48-27.mp4?alt=media&token=fe1367d0-519c-4ebf-a4d5-a6ddacdf4a2f', 'https://firebasestorage.googleapis.com/v0/b/uploadingmyimages.appspot.com/o/videos%2F2022-07-23%2013-03-03.mp4?alt=media&token=c65927d5-30e6-432b-bd21-5eeb70bc4382'

const Video = () => {

    const [article, setArticle] = useState([]);
    const [caption, setCaption] = useState('');
    const [videos, setVideos] = useState('');
    const [mapper, setMapper] = useState(1);
    const [youtubeLink, setYoutubeLink] = useState('https://www.youtube.com/embed/');

    useEffect (() => {
        fetch('http://127.0.0.1:8000/api/items/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then (resp => resp.json())
        .then ((resp) => {setArticle(resp)})
        .catch (error => console.log(error))
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        caption.split(' ')
        .map((e) => {
            article.map((r) => {
                if (e === r.word) {console.log(1); setVideos(current => current + ` ${r.link}`)}
            })
        })
        
        document.querySelector('#youtube-video').load()

    }

    useEffect (() => {
        console.log(videos.split(' '))
        document.querySelector('#video').load()
    }, [videos])

    const handleEnded = () => {
        setMapper(current => current + 1)
        document.querySelector('#video').load()
        if (mapper === videos.length) {
            setVideos('')
        }
    }

    return (

        <div className="">

            <div className="">
                <form onSubmit={(e) => {handleSubmit(e)}}>
                    <input id="link-input" class='youtube-link' type='text' placeholder="Youtube Link Here..." 
                    onChange={(e) => {
                        setYoutubeLink(e.target.value)
                    }}/>
                    <input id="link-input" type='text' required placeholder="Insert Text Here..." onChange={(e) => {
                            setCaption(e.target.value)
                        }}/>
                    <ul id="link-submit">
                        <li><input id="link-submit" type='submit' /></li>
                        <li onClick={() => {
                            document.querySelector('.lds-ring').classList.remove('loading-show');
                        }}><div id="link-submit" className="lds-ring"><div></div><div></div><div></div><div></div></div></li>
                    </ul>
                </form>
            </div>

            <div className="video-container">
                <video id='video' controls autoPlay onEnded={() => {handleEnded()}}>
                    <source src={videos.split(' ')[mapper]} />
                </video>
                <iframe className='youtube-video' width="560" height="315" src={youtubeLink + '?controls=0'} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

        </div>
    )
};

export default Video;

