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
                        {/* <table className="table w-full ">

                            <thead>
                                <tr>
                                    <th></th>
                                    <th>JavaScript</th>
                                    <th>Node.js</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <th></th>
                                    <td>It is an accessible, bridge, parsed, lightweight, reactive, and web apps programming language.</td>
                                    <td>It's a bridge, open-source Js runtime environment for executing Js on the server.</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th></th>
                                    <td>It's a programming language, after all. Any browser with a competent browser engine will operate.</td>
                                    <td>It's a JavaScript translator and environment that includes some valuable libraries for JavaScript programming.</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th></th>
                                    <td>It's most commonly used on client-side servers.</td>
                                    <td>It's mainly popular on the server-side.</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th></th>
                                    <td>The node community does not care about JavaScript.</td>
                                    <td>All node projects represent the JavaScript community.</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th></th>
                                    <td>It's made for creating network-centric apps.</td>
                                    <td>It's made for real-time data-intensive apps that run on multiple platforms.</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th></th>
                                    <td>It's a new release of the ECMA script that works on the C++-based V8 engine.</td>
                                    <td>C++, C, and JavaScript are used.</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th></th>
                                    <td>TypedJS, RamdaJS, and other JavaScript frameworks are examples.</td>
                                    <td>Nodejs modules include Lodash and Express. All of these modules must be imported from npm.</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table> */}
                    </div>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-5">
                <div className="collapse-title text-xl font-medium bg-slate-700 text-white">
                    How does NodeJS handle multiple requests at the same time?
                </div>
                <div className="collapse-content text-start">
                    <strong>NodeJS receives multiple client requests and places them into EventQueue.</strong>
                    <span className='flex align-middle'>

                        <p className=' ml-2'><strong>1.</strong> Iterative - Incoming requests will go on a queue and be processed sequentially in the main loop. A interrupt handler, poll point in the loop, or a separate thread will accept incoming requests and append them to the queue as they arrive.</p>
                    </span> <br />
                    <span className='flex align-middle'>

                        <p className=' ml-2'><strong>2.</strong> Multi-threading - The main loop will accept requests as they arrive and spawn a child thread to deal with it.</p>
                    </span> <br />
                    <span className='flex align-middle'>

                        <p className=' ml-2'><strong>3.</strong> Multi-tasking - At startup the main line code will spawn a number of child processes, either copies of the primary server task or dedicated processor tasks. That number may be fixed or may be auto-ramping to spawn additional children as needed to handle the load. The main loop will then accept requests as they arrive and add them to a queue for one of the child processes either round robin or to the first child that is free. If requests arrive faster than the children can process them the main loop will either queue them for later processing as children free up or ramp up the number of children.</p>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Blogs;