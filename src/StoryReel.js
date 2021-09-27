import React from 'react';
import Story from './Story';
import './StoryReel.css';
function StoryReel() {
    return (
        <div className="storyReel"> 
            <Story
            image="https://media.istockphoto.com/photos/first-person-point-of-view-of-a-woman-paddling-on-a-stand-up-paddle-picture-id1288844330?b=1&k=20&m=1288844330&s=170667a&w=0&h=nckXG0H5kPDbgDpC8iTObsiqG7Jwt6CeLuJ2WxdOTp4="
            profileSrc="https://manojnath.tech/3.jpg"
            title="Manoj"
             />
             <Story
            image="https://images.unsplash.com/photo-1627755867600-50b7fd15dd3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            profileSrc="https://images.unsplash.com/profile-1627784199571-e1e62255a764image?dpr=2&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff"
            title="Nick"
             />
             <Story
            image="https://images.unsplash.com/photo-1629245435337-0f55a7aea41c?ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTF8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            profileSrc="https://images.unsplash.com/profile-1626649809631-202e41e9dfae?dpr=2&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff"
            title="Andrius"
             />
             <Story
            image="https://images.unsplash.com/photo-1627680344713-4e0ee1a7a161?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
            profileSrc="https://images.unsplash.com/profile-1627680278314-5eee9f3f1b90image?dpr=2&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff"
            title="Lerone"
             />
              <Story
            image="https://images.unsplash.com/photo-1618442767238-0c2cc9203d58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            profileSrc="https://images.unsplash.com/profile-1625178439068-aec68f7cc575image?dpr=2&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff"
            title="David"
             />

        </div>
    );
};

export default StoryReel;
