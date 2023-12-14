import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
const OurTeam = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-white py-10 ">
            <div className="flex flex-col">
                <div className="flex flex-col mt-8">
                    <div className="container max-w-7xl px-4 mx-auto">
                        <div className="flex flex-wrap justify-center text-center mb-24">
                            <div className="w-full lg:w-6/12 px-4">
                                <h1 className="text-purple-500 text-4xl font-bold mb-8">
                                    Meet Our Team Member
                                </h1>
                                <p className="text-gray-700 text-lg font-light">
                                    With over 100 years of combined experience, weve got a well-seasoned team at the helm.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-wrap">
                        <div className="w-full md:w-6/12 lg:w-4/12 mb-6 px-6 sm:px-6 lg:px-4">
                                <div className="flex flex-col">

                                    <a href="#" className="mx-auto">
                                        <img className="w-80 rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                            src="https://images.unsplash.com/photo-1634896941598-b6b500a502a7?fit=clamp&w=400&h=400&q=80" />
                                    </a>
                                    <div className="text-center mt-6">

                                        <h1 className="text-gray-900 text-xl font-bold mb-1">
                                            Denice Jagna
                                        </h1>
                                        <div className="text-gray-700 font-light mb-2">
                                            Tired & M. Specialist
                                        </div>
                                        <div className="flex items-center justify-center opacity-50 hover:opacity-100
                                    transition-opacity duration-300">

                                            <a href="#" className="flex items-center rounded-full hover:bg-purple-200 h-10 w-10">
                                                <FaLinkedin className="mdi mdi-linkedin text-indigo-500 mx-auto " />
                                            </a>
                                            <a href="#" className="flex items-center rounded-full hover:bg-purple-200 h-10 w-10">
                                                <FaTwitter className="mdi mdi-twitter text-blue-300 mx-auto" />
                                            </a>
                                            <a href="#" className="flex items-center rounded-full hover:bg-purple-200 h-10 w-10">
                                                <FaInstagram className="mdi mdi-instagram text-orange-400 mx-auto" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full md:w-6/12 lg:w-4/12 mb-6 px-6 sm:px-6 lg:px-4">
                                <div className="flex flex-col">

                                    <a href="#" className="mx-auto">
                                        <img className="w-80 rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                            src="https://images.unsplash.com/photo-1634896941598-b6b500a502a7?fit=clamp&w=400&h=400&q=80" />
                                    </a>
                                    <div className="text-center mt-6">

                                        <h1 className="text-gray-900 text-xl font-bold mb-1">
                                            Denice Jagna
                                        </h1>
                                        <div className="text-gray-700 font-light mb-2">
                                            Tired & M. Specialist
                                        </div>
                                        <div className="flex items-center justify-center opacity-50 hover:opacity-100
                                    transition-opacity duration-300">

<a href="#" className="flex items-center rounded-full hover:bg-purple-200 h-10 w-10">
                                                <FaLinkedin className="mdi mdi-linkedin text-indigo-500 mx-auto " />
                                            </a>
                                            <a href="#" className="flex items-center rounded-full hover:bg-purple-200 h-10 w-10">
                                                <FaTwitter className="mdi mdi-twitter text-blue-300 mx-auto" />
                                            </a>
                                            <a href="#" className="flex items-center rounded-full hover:bg-purple-200 h-10 w-10">
                                                <FaInstagram className="mdi mdi-instagram text-orange-400 mx-auto" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-6/12 lg:w-4/12 mb-6 px-6 sm:px-6 lg:px-4">
                                <div className="flex flex-col">

                                    <a href="#" className="mx-auto">
                                        <img className="w-80 rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                            src="https://images.unsplash.com/photo-1634193295627-1cdddf751ebf?fit=clamp&w=400&h=400&q=80" />
                                    </a>
                                    <div className="text-center mt-6">

                                        <h1 className="text-gray-900 text-xl font-bold mb-1">
                                            Kenji Milton
                                        </h1>
                                        <div className="text-gray-700 font-light mb-2">
                                            Team Memeber
                                        </div>
                                        <div className="flex items-center justify-center opacity-50 hover:opacity-100
                                    transition-opacity duration-300">

<a href="#" className="flex items-center rounded-full hover:bg-purple-200 h-10 w-10">
                                                <FaLinkedin className="mdi mdi-linkedin text-indigo-500 mx-auto " />
                                            </a>
                                            <a href="#" className="flex items-center rounded-full hover:bg-purple-200 h-10 w-10">
                                                <FaTwitter className="mdi mdi-twitter text-blue-300 mx-auto" />
                                            </a>
                                            <a href="#" className="flex items-center rounded-full hover:bg-purple-200 h-10 w-10">
                                                <FaInstagram className="mdi mdi-instagram text-orange-400 mx-auto" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;