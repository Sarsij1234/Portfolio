import React from 'react';
import java from "../../public/java.png";
import reactjs from "../../public/reactjs.png";

function Portfolio() {
    const cardItems = [
        {
            id: 1,
            logo: java,
            name: "Project-1",
            projectLink: "https://effervescent-beijinho-7f55a3.netlify.app/",
            sourceLink: "https://github.com/Sarsij1234/textUtlis.git"
        },
        {
            id: 2,
            logo: reactjs,
            name: "Project-2",
            projectLink: "https://poetic-truffle-60127e.netlify.app/",
            sourceLink: "https://github.com/Sarsij1234/Portfolio.git"
        }
    ];

    return (
        <div name="Portfolio" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 text-left">
            <div>
                <h1 className="text-3xl font-bold text-black underline">Portfolio</h1>
                <span className="underline">Featured Projects</span>
                <div className="grid grid-cols-1 md:grid-cols-4 md:gap-5 my-4">
                    {cardItems.map(({ id, logo, name, projectLink, sourceLink }) => (
                        <div className="md:w-[250px] md:h-[250px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300 bg-slate-500 my-3" key={id}>
                            <img src={logo} className="w-[120px] h-[120px] p-1 rounded-full border-[2px]" alt={name} />
                            <div>
                                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                                <p className="px-2 text-black">Html, Css, Javascript, Reactjs</p>
                            </div>
                            <div className="space-x-1 justify-around">
                                <a href={projectLink} target="_blank" rel="noopener noreferrer">
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">Link</button>
                                </a>
                                <a href={sourceLink} target="_blank" rel="noopener noreferrer">
                                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">Source Code</button>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <br /><br /><br /><br />
            <hr />
        </div>
    );
}

export default Portfolio;

