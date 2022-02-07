import React from 'react';

/*Подключаем файл стилей*/
import s from "./MyPosts.module.css"

//Импорт поста
import Post from './Post/Post';


const MyPosts = () =>{
    return(

            <div>
                Posts
                <div>
                    <textarea></textarea>
                    <button> Add post </button>
                </div>

                <div className = {s.posts}>
                    
                    <Post message = "Hi, how are you?"/>
                    <Post message = "My first post"/>
                    

                </div>
            
            </div>

    );
}

export default MyPosts; 