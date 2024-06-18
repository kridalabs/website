import { faCube } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const renderGridElements = () => {
    const elements: React.ReactNode[] = []
    for (let i = 0; i < 128; i++) {
        elements.push(<div key={i} className='bg-serviceRight w-2 h-2 rounded'></div>)
    }
    return elements
}
export const Services = () => {

    return (
        <>
            <div id='services'></div>
            <div className='w-full lg:hidden xl:flex  flex-col py-12 p-5 space-y-2 xl:flex-row  '>
                <div className='left  sm:hidden lg:hidden xl:p-7 xl:w-1/4 xl:z-20 xl:flex xl:flex-row xl:items-center   '>
                    <div className=' bg-servicesLeft p-5 w-40 h-36  space-y-10 rounded-tl-[90px]'>
                        <h1 className='text-4xl text-wrap w-80 ml-[52px] m-auto z-10 font-semibold'>How we can help your Business </h1>
                        <p className='w-[450px] ml-[52px] '>
                            {/* <ul className="list-disc list-inside">
                                <li><strong>Conceptualization:</strong> Refining your business idea to align with market needs.</li>
                                <li><strong>Market Research:</strong> Analyzing market trends and competition to identify opportunities.</li>
                                <li><strong>Technical Feasibility:</strong> Assessing the technological requirements and resources needed for implementation.</li>
                                <li><strong>Budgeting and Timelines:</strong> Estimating costs and timelines for project completion.</li>
                            </ul> */}
                        </p>
                        <div className='grid grid-rows-8 grid-flow-col gap-3 ml-[52px] z-0'  >
                            {renderGridElements()}
                        </div>
                    </div>
                </div>
                <div className='xl:hidden text-black font-bold m-auto flex items-center justify-center text-2xl '>How we can help you </div>
                <div className='xl:hidden text-gray-400 text-wrap font-light'>We build websites, mobile applications and elaborate online business services.</div>
                <div className='lg:hidden flex flex-wrap space-x-4 justify-center space-y-4'>
                    <div className='card bg-white  rounded-3xl z-10 w-[250px] flex flex-col justify-start space-y-3 items-center p-10 shadow-md'>
                        <div className='bg-white p-4 rounded-2xl mb-5 '><FontAwesomeIcon icon={faCube} size='4x' /></div>
                        <div className='text-3xl m-auto w-[210px] font-semibold'>Graphics and Design</div>
                        <p className='m-auto w-[190px] text-gray-600'>Attractive designs and solutions tailored to your unique needs.</p>
                    </div>
                    <div className='card bg-white  rounded-3xl z-10 w-[250px] flex flex-col justify-start space-y-3 items-center p-10 shadow-md'>
                        <div className='bg-yellow-300 p-4 rounded-2xl mb-5 '><FontAwesomeIcon icon={faCube} size='4x' /></div>
                        <div className='text-3xl m-auto w-[210px] font-semibold'>App Development </div>
                        <p className='m-auto w-[190px] text-gray-600'>We can provide mobile application with seamless interface and services.</p>
                    </div>
                    <div className='card bg-white  rounded-3xl z-10 w-[250px] flex flex-col justify-start space-y-3 items-center  p-10 shadow-md'>
                        <div className='bg-pink-400 p-4 rounded-2xl mb-5'><FontAwesomeIcon icon={faCube} size='4x' /></div>
                        <div className='text-3xl m-auto w-[210px] font-semibold'>Web Development</div>
                        <p className='m-auto w-[190px] text-gray-600'>We provide you web services and attractive design.</p>
                    </div>
                    <div className='card bg-white  rounded-3xl z-10 w-[250px] flex flex-col justify-center space-y-3 items-center  p-10 shadow-md'>
                        <div className='bg-green-300 p-4 rounded-2xl mb-5'><FontAwesomeIcon icon={faCube} size='4x' /></div>
                        <div className='text-3xl m-auto w-[210px] font-semibold'>Digital Marketing</div>
                        <p className='m-auto w-[190px]  text-gray-600'>We provide service of Digital Marketing to keep your business relevent in field.</p>
                    </div>
                </div>


                <div className='right  lg:hidden z-10 sm:hidden xl:block w-full '>
                    <div className='bg-serviceRight my-28  h-[560px] rounded-tl-[150px]'>
                        <div className='flex flex-row justify-center space-x-16'>
                            <div className='flex flex-col space-y-3 -mt-10 xxxl:w-auto'>
                                <div className='card bg-white  rounded-3xl z-10 w-[250px] flex flex-col justify-start space-y-3 items-center p-10 shadow-2xl'>
                                    <div className='bg-white p-4 rounded-2xl mb-5 '><FontAwesomeIcon icon={faCube} size='4x' /></div>
                                    <div className='text-3xl m-auto w-[210px] font-semibold'>Graphics and Design</div>
                                    <p className='m-auto w-[190px] text-gray-600'>Attractive designs and solutions tailored to your unique needs.</p>
                                </div>
                                <div className='card bg-white  rounded-3xl z-10 w-[250px] flex flex-col justify-start space-y-3 items-center p-10 shadow-2xl'>
                                    <div className='bg-yellow-300 p-4 rounded-2xl mb-5 '><FontAwesomeIcon icon={faCube} size='4x' /></div>
                                    <div className='text-3xl m-auto w-[210px] font-semibold'>Web Development</div>
                                    <p className='m-auto w-[190px] text-gray-600'>We provide you web services and attractive design.</p>
                                </div>
                            </div>
                            <div className='flex flex-col space-y-3 -mt-24'>
                                <div className='card bg-white  rounded-3xl z-10 w-[250px] flex flex-col justify-start space-y-3 items-center  p-10 shadow-2xl'>
                                    <div className='bg-pink-400 p-4 rounded-2xl mb-5'><FontAwesomeIcon icon={faCube} size='4x' /></div>
                                    <div className='text-3xl m-auto w-[210px] font-semibold'>App Development</div>
                                    <p className='m-auto w-[190px] text-gray-600'>We can provide mobile application with seamless interface and services.</p>
                                </div>
                                <div className='card bg-white  rounded-3xl z-10 w-[250px] flex flex-col justify-center space-y-3 items-center  p-10 shadow-2xl'>
                                    <div className='bg-green-300 p-4 rounded-2xl mb-5'><FontAwesomeIcon icon={faCube} size='4x' /></div>
                                    <div className='text-3xl m-auto w-[210px] font-semibold'>Digital Marketing</div>
                                    <p className='m-auto w-[190px] text-gray-600'>We provide service of Digital Marketing to keep your business relevent in field.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}
