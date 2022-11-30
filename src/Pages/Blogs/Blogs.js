import React from 'react';
import useTitle from '../../Hooks/UseTitle';

const Blogs = () => {
    useTitle('Blogs')

    return (
        <div className=' my-12 mx-10 shadow-2xl p-10 rounded-md'>

            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium  bg-slate-700 text-white">
                    What are the different ways to manage a state in a React application?
                </div>
                <div className="collapse-content">
                    <div className="overflow-x-auto">
                        <strong>There are four main types of state you need to properly manage in your React apps:</strong>
                        <ul itemType='1'>
                            <li>1. Local state</li>
                            <li>2. Global state</li>
                            <li>3. Server state</li>
                            <li>4. URL state</li>
                        </ul>
                        <div>
                            <p><span className=' font-bold'>1. Local (UI) state – </span>Local state is data we manage in one or another component. Local state is most often managed in React using the useState hook. For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs.</p>
                        </div>
                        <div>
                            <p><span className=' font-bold'>2. Global (UI) state – </span> Global state is data we manage across multiple components. Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least. A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application. Sometimes state we think should be local might become global.</p>
                        </div>
                        <div>
                            <p><span className=' font-bold'>3. Server state – </span> Data that comes from an external server that must be integrated with our UI state. Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state. There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state. Fortunately there are tools such as SWR and React Query that make managing server state much easier.</p>
                        </div>
                        <div>
                            <p><span className=' font-bold'>4. URL state – </span> Data that exists on our URLs, including the pathname and query parameters. URL state is often missing as a category of state, but it is an important one.
                                In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL! There are undoubtedly more pieces of state that we could identify, but these are the major categories worth focusing on for most applications you build.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-5">
                <div className="collapse-title text-xl font-medium  bg-slate-700 text-white">
                    What is a unit test? Why should we write unit tests?
                </div>
                <div className="collapse-content text-start">
                    <p>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p> <br />

                    <p>They enable you to catch bugs early in the development process. Automated unit tests help a great deal with regression testing. They detect code smells in your codebase. For example, if you're having a hard time writing unit tests for a piece of code, it might be a sign that your function is too complex.</p>

                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-5">
                <div className="collapse-title text-xl font-medium  bg-slate-700 text-white">
                    What is the difference between javascript and NodeJS?
                </div>
                <div className="collapse-content text-start">
                    <div className="overflow-x-auto mx-auto text-center">
                        <img src="https://d2ms8rpfqc4h24.cloudfront.net/uploads/2021/02/Comparative-Analysis-of-Angularjs-vs-ReactJs-vs-VueJs.jpg" alt="" />

                    </div>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-5">
                <div className="collapse-title text-xl font-medium bg-slate-700 text-white">
                    How does prototypical inheritance work?
                </div>
                <div className="collapse-content text-start">

                    <span className='flex align-middle'>

                        <p className=' ml-2'>Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.</p>
                    </span> <br />
                    <img src="https://media.geeksforgeeks.org/wp-content/uploads/20200520193336/Untitled-Diagram108.png" alt="" />

                </div>
            </div>
        </div>
    );
};

export default Blogs;