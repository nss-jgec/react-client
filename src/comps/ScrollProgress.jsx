import React from "react";
export default function ScrollBar(){
    const [progress, setProgress] = React.useState(0);
    window.onscroll = function() {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        setProgress((winScroll / height) * 100);
        console.log(progress);
    };
    return (
        <div className="h-2 w-full rounded-lg bg-gradient-to-r from-fuchsia-800 via-purple-500 to-blue-700">
            <div className="h-full bg-white float-right" style={{ width : `${100-progress}%`}}></div>
        </div>
    )
}