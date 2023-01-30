import React from "react";
import {BrowserRouter, Routes, Route, NavLink, useParams} from 'react-router-dom';

function App () {
    return (
        <BrowserRouter>
            <div>
                <h1>Hello Router</h1>
                <ul>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='topics'>Topics</NavLink></li>
                    <li><NavLink to='contact'>Contact</NavLink></li>
                </ul>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path='topics/*' element={<Topics />} />
                    <Route path='contact' element={<Contact />} />
                    <Route path='/*' element={<NotFound />} />
                </Routes>
            </div>
        
        </BrowserRouter>
    )
}

function Home () {
    return (
        <div>
            <h2>Home</h2>
            <p>Home is.....</p>
        </div>
    ) 
}

const contents = [
    {id:1, title:'HTML', comp:<Topic1 />},
    {id:2, title:'CSS', comp : <Topic2 />},
    {id:3, title:'JS', comp: <Topic3 />},
]

function Topics () {
    const lis = [];
    for(let i = 0; i < contents.length; i++){
        lis.push(
            <li key={contents[i].id}>
                <NavLink to={'topics/' + contents[i].id} >{contents[i].title}</NavLink>
            </li>
        )
    }

    return (
        <div>
                <ul>
                    {lis}
                </ul>
                <Routes>
                    <Route path="topics/:topic_id" element={<Topic />}></Route>
                </Routes>
            </div>
    ) 
}

function Topic1(){
    return (
        <div>
            <h3>HTML</h3>
            <p>HTML is...</p>
        </div>
    )
}
function Topic2(){
    return (
        <div>
            <h3>CSS</h3>
            <p>CSS is...</p>
        </div>
    )
}
function Topic3(){
    return (
        <div>
            <h3>JS</h3>
            <p>JS is...</p>
        </div>
    )
}

function Topic () {
    var params = useParams();
    var topic_id = params.topic_id;
    var selected_comp = {comp : <NotFound />};
    for(let i = 0; i < contents.length; i++){
        if (contents[i].id === Number(topic_id)) {
            selected_comp = contents[i];
            break;
        }
    }
    return (
        <div>
            {selected_comp.comp}
        </div>
    )
}
function Contact () {
    return (
        <div>
            <h2>Contact</h2>
            <p>Contact is.....</p>
        </div>
    ) 
}

function NotFound () {
    return (
        <div>
            <h2>Error: 404</h2>
            <p>Page Not Found</p>
        </div>
    ) 
}

export default App;