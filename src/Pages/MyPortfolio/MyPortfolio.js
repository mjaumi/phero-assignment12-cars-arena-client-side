import React from 'react';
import PageTitle from '../Shared/PageTitle/PageTitle';

const MyPortfolio = () => {

    // rendering my portfolio component here
    return (
        <section>
            <PageTitle title={'My Portfolio'} />
            <div className='my-40 w-[95%] md:w-4/5 mx-auto text-left'>
                <div>
                    <h2 className='text-primary font-bold text-3xl md:text-5xl'>Milhan Joardar Aumi</h2>
                    <h6 className='text-secondary md:text-xl'>Professional Front-end Developer</h6>
                    <p className='text-sm md:text-base text-neutral'>Email: mjaumi2864@gmail.com</p>
                    <p className='text-neutral'><small>From Dhaka, Bangladesh.</small></p>
                </div>
                <div className='mt-20'>
                    <h3 className='text-2xl md:text-4xl font-semibold text-primary'>Educational Background</h3>
                    <div className='mt-5'>
                        <h4 className='text-secondary font-semibold text-xl md:text-3xl'>Ahsanullah University of Science & Technology</h4>
                        <h6 className='text-neutral md:text-lg'>Undergraduate Degree in Computer Science & Engineering</h6>
                        <p className='text-neutral'><small>January, 2019 - Present</small></p>
                    </div>
                </div>
                <div className='mt-20'>
                    <h3 className='text-2xl md:text-4xl font-semibold text-primary'>My Skill Set</h3>
                    <div className='mt-5'>
                        <h4 className='text-secondary font-semibold text-lg md:text-2xl'>HTML5, CSS3, Git, Github, Bootstrap, Tailwind CSS, JavaScript, EcmaScript6,  React.JS, ExpressJS, Node.JS, MongoDB, Firebase, Heroku, Figma</h4>
                    </div>
                </div>
                <div className='mt-20'>
                    <h3 className='text-2xl md:text-4xl font-semibold text-primary'>My Projects</h3>
                    <div className='mt-5 flex flex-col md:flex-row'>
                        <h4 className='text-secondary w-fit font-semibold text-lg md:text-2xl underline hover:opacity-60 duration-300 hover:scale-125'><a href='https://byteware-warehouse-management.web.app' target='_blank' rel='noreferrer'>ByteWare</a></h4>
                        <h4 className='md:ml-14 text-secondary w-fit font-semibold text-lg md:text-2xl underline hover:opacity-60 duration-300 hover:scale-125'><a href='https://aumi-tuition-care.web.app' target='_blank' rel='noreferrer'>Aumi Tuition Care</a></h4>
                        <h4 className='md:ml-14 text-secondary w-fit font-semibold text-lg md:text-2xl underline hover:opacity-60 duration-300 hover:scale-125'><a href='https://review-hub-018698.netlify.app' target='_blank' rel='noreferrer'>ReviewHub</a></h4>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyPortfolio;