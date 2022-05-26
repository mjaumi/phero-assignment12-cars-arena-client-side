import React from 'react';
import PageTitle from '../Shared/PageTitle/PageTitle';

const Blogs = () => {

    // rendering blogs component here
    return (
        <section className='my-40'>
            <PageTitle title={'Blogs'} />
            <div className='w-[95%] md:w-4/5 mx-auto'>
                <h2 className='md:text-left text-4xl font-medium text-primary'>Questions & Answers</h2>
                <div className='text-left border-2 border-primary mt-10 p-5'>
                    <h4 className='text-secondary text-xl font-semibold'>Q1. How will you improve the performance of a React Application?</h4>
                    <p className='text-neutral mt-3'><span className='font-semibold'>Answer:</span> React applications are efficient enough as it uses one way data binding and virtual DOM method. But we can still optimize it further. One of the processes is to keep component state local where possible. It will help us with memory management and thus optimizes the application. Another process is to memoizing react components. It prevents unnecessary re-renders and thus improves the efficiency of the application. There are some other processes too. One of them is to use lazy loading images in React. It helps optimizing an application which contains several images. Lazy loading helps the application to load image one by one rather than loading all at once and thus increases efficiency of the application. This is how we can optimize a react application.</p>
                </div>
                <div className='text-left border-2 border-primary mt-10 p-5'>
                    <h4 className='text-secondary text-xl font-semibold'>Q2. What are the different ways to manage a state in a React application?</h4>
                    <p className='text-neutral mt-3'><span className='font-semibold'>Answer:</span> There are roughly 4 types of states in a React application. They are, <span className='font-semibold'>Local States, Global States, Server States and URL States</span> We need to manage all kind of states in our react application. Such as, we can use useStates to manage local states. To manage global states we can  use useReducer. UseReducer can be used for local states also. Server states are the states that provides data from back-end. To manage server states, we need to fetch the the data first. We can use useEffect and useState to manage Server states and React Query can also be used for this which makes server state management a whole lot easier. To manage URL states we can use useHistory or UseLocation. These hooks come from React Router. This is how we can manage states in a React application.</p>
                </div>
                <div className='text-left border-2 border-primary mt-10 p-5'>
                    <h4 className='text-secondary text-xl font-semibold'>Q3. How does prototypical inheritance work?</h4>
                    <p className='text-neutral mt-3'><span className='font-semibold'>Answer:</span> Prototypical inheritance simply refers to the process of accessing an object's properties by another object. We can use a JavaScript prototype to add new properties and methods to an existing object constructor. We can also inherit those properties from a prototype. Prototypical inheritance allows us to reuse the properties and methods from one object to another through a reference pointer function. This is how prototypical inheritance works.</p>
                </div>
                <div className='text-left border-2 border-primary mt-10 p-5'>
                    <h4 className='text-secondary text-xl font-semibold'>Q4. Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts?</h4>
                    <p className='text-neutral mt-3'><span className='font-semibold'>Answer:</span> If we directly assign value to a useState hook then we will lose control on the state across all the components because doing so will not change the value of the state immediately. Rather, it will create a pending state transition and accessing it after calling the setter method will only return the present value. Moreover, if we call the setter method afterwards then it will update and replace the previous data. So, directly assigning values to useState will not be beneficial at all. That is why we should not update or assign value to a useState directly.</p>
                </div>
                <div className='text-left border-2 border-primary mt-10 p-5'>
                    <h4 className='text-secondary text-xl font-semibold'>Q5.  You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h4>
                    <p className='text-neutral mt-3'><span className='font-semibold'>Answer:</span>
                        <code>
                            const searchArray = [];
                            for (const element of array)
                            if(element.name.includes(searchText))
                            searchArray.push(element);
                        </code>
                        <br />
                        Now the searchArray contains the desired output.
                    </p>
                </div>
                <div className='text-left border-2 border-primary mt-10 p-5'>
                    <h4 className='text-secondary text-xl font-semibold'>Q6. What is a unit test? Why should write unit tests?</h4>
                    <p className='text-neutral mt-3'><span className='font-semibold'>Answer:</span> Unit testing is a software development process where an application is broken apart into small tastable parts called units. In this process each and every units are independently and individually tested if it is working or not. Unit testing is important because we can detect early flaws in our application if we done the testing correctly. This will save hours of bug fixing that may come in the future if the unit testing is not done. That's why unit testing is important.</p>
                </div>
            </div>
        </section>
    );
};

export default Blogs;