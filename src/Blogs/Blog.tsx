import React, { Component } from 'react';
import './Blog.css';

export default class Blogs extends Component {
    render() {
        return (
            <div className="grid place-items-center ">
                <article className="blog">
                    <h1 className="text-2xl">February 2022 </h1>
                    <p>
                        This month we have worked on a project called Cinder, and we have been working on it for a while. We have also came up with new ideas like a Chemistry Automation game which will be similar to Factorio. Once we start working on the Chemistry game we will make DevLogs about the game and we will also make a blog about the game.
                        <br /><br />
                        The Chemistry game where you make chemicals out of chemicals you extract from the environment around you using a system that is nothing like real life. The system that we have made is a system based on the Charge and the Mass of the element. There is currently 5 elements that we have thought up of and they all have unique properties.
                        <br /><br />
                        You can emulate chemicals by using existing ones you have since an element is just based on Mass and Charge. So if you combine Caducus, which is a fragile material kind of like glass, and has a mass of 1 and a charge of 0, and Verto which has the property to invert Caducus into a Lantus like material when combined with Caducus. Lantus is a very strong material that can be used to make a lot of things. So if you combine Caducus and Verto you get Caducus Verto which is a very strong material just like Lantus. So you can make a chemical that emulates the properties of an element. There is also a purity to each material. An impure element will be plagued with it's inverse which the inverse is found out by swapping Charge and Mass values. So the impurity of Caducus is Industria (which has 0 Mass and 1 Charge). Industria is basically pure energy and will be used to power machinery later on in the game. For combining impure elements with pure elements it produces by products which you can use. We will represent impurities with an _[number] so Ca(ducus)_100 is 100% pure Caducus. We will just get rid of the _100 when it's 100% pure.
                        <br /><br />
                        So what will we get when you do Ca_50 + Ve? We will have to balance it out first because to get 100% pure Caducus we need 2 50% pures so we do 2Ca_50 + Ve. Now that we have done that when doing 2Ca_50 + Ve we get CaVe + In, so we can write this as 2Ca_50 + Ve -{'>'} CaVe + In. Now you might be wondering what if we do Ca + Ca, what will we get then? You can't do Ca + Ca because to bond elements together you need to have a charge and Caducus has no charge so it can't bond with it's self. That is all we have designed or though up for the Chemistry game so far. The Chemistry game is still a very new project.
                    </p>
                </article>
                <article className="blog">
                    <h1 className="text-2xl">Explaination</h1>
                    <p>
                        This is the first of maybe many blogs. These blogs will be documenting the progresses of projects, and a way to communicate what is happpening. It will also explain some of the trials we have had to go through and upcoming features and planned features we have for projects. So I hope to use this often. I will make a blog each month about the things that have happened during the month and the things that are going to be planned for the next month. These blogs will be released at the end of every month (hopefully).
                    </p>
                </article>
            </div>
        )
    }
}
