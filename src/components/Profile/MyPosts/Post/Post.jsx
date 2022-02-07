import React from 'react';

/*Подключаем файл стилей*/
import s from "./Post.module.css"


const Post = (props) =>{
    return(


       <div className = {s.item}>
            <img src='https://moe.shikimori.one/system/user_images/original/741620/1317822.jpg'></img>
            { props.message }
        </div>

    );
}

export default Post; 