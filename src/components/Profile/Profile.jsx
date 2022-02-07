import React from 'react';
import MyPosts from './MyPosts/MyPosts';

/*Подключаем файл стилей*/
import s from "./Profile.module.css"


const Profile = () =>{
    return(

        <div >

            <div> <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyw1Q7OUaTbMV6O6EJC8oJIfIXGKAm1dh9YWOY62vkZ3jwQgHqHw850yxooDAmTbsav_A&usqp=CAU'></img> </div>

            <div>Ava + dds</div>
            

            <MyPosts/>

        </div>

    );
}

export default Profile; 