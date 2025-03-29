import Image from "next/image";
import Navbar from "@/components/Navbar";
import ProfilePic from '../../public/83706955.jpg'
import {bgBlack} from "next/dist/lib/picocolors";


// export default function Home() {
//   return (
//       <div className="bg-white min-h-screen flex flex-col">
//           <Navbar/>
//           <section className="flex items-center justify-between px-16 py-10 flex-grow">
//               {/* Left Side: Text Content */}
//               <div className="w-1/2 flex items-center justify-center">
//                   <div className="space-y-6 max-w-[638px]">
//                       <h1 className="text-9xl font-serif text-black">Ming Xuan</h1>
//                       <h2 className="text-3xl font-serif text-black">Graduate Software Engineer</h2>
//                       <p className="text-2xl font-serif text-black">
//                           2025 Grad | Full-Stack Developer
//                       </p>
//                       <a
//                           href="#projects"
//                           className="inline-block bg-black text-white px-10 py-4 rounded-full text-2xl hover:bg-gray-800 transition"
//                       >
//                           View Projects
//                       </a>
//                   </div>
//               </div>
//
//               {/* Right Side: Profile Picture */}
//               <div className="w-1/2 flex items-center justify-center">
//                   <div className="w-[600px] h-[600px]">
//                       <Image
//                           src={ProfilePic}
//                           alt="Ming Xuan Profile Picture"
//                           width={600}
//                           height={600}
//                           className="object-cover"
//                       />
//                   </div>
//               </div>
//           </section>
//           <div>
//               <div className="bg-white py-24 sm:py-32">
//                   <div className="mx-auto max-w-7xl px-6 lg:px-8">
//                       <h2 className="text-center text-lg/8 font-semibold text-gray-900">Trusted by the world’s most
//                           innovative teams</h2>
//                       <div
//                           className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
//                           <img className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
//                                src="https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-gray-900.svg"
//                                alt="Transistor" width="158" height="48"/>
//                           <img className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
//                                src="https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-gray-900.svg"
//                                alt="Reform" width="158" height="48"/>
//                           <img className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
//                                src="https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-gray-900.svg"
//                                alt="Tuple" width="158" height="48"/>
//                           <img className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
//                                src="https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-gray-900.svg"
//                                alt="SavvyCal" width="158" height="48"/>
//                           <img
//                               className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
//                               src="https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-gray-900.svg"
//                               alt="Statamic" width="158" height="48"/>
//                       </div>
//                       <div
//                           className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
//                           <img className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
//                                src="https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-gray-900.svg"
//                                alt="Transistor" width="158" height="48"/>
//                           <img className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
//                                src="https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-gray-900.svg"
//                                alt="Reform" width="158" height="48"/>
//                           <img className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
//                                src="https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-gray-900.svg"
//                                alt="Tuple" width="158" height="48"/>
//                           <img className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
//                                src="https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-gray-900.svg"
//                                alt="SavvyCal" width="158" height="48"/>
//                           <img
//                               className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
//                               src="https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-gray-900.svg"
//                               alt="Statamic" width="158" height="48"/>
//                       </div>
//                   </div>
//               </div>
//           </div>
//       </div>
//   );
// }

export default function Home() {
    return (
        <div className="bg-white flex flex-col">
            <Navbar />
            <section className="flex items-center justify-between px-16 min-h-screen">
                {/* Left Side: Text Content */}
                <div className="w-1/2 flex items-center justify-center">
                    <div className="space-y-6 max-w-[638px]">
                        <h1 className="text-9xl font-serif text-black flex space-x-4">
                            <span>Ming</span>
                            <span>Xuan</span>
                        </h1>
                        <h2 className="text-3xl font-serif text-black">Graduate Software Engineer</h2>
                        <p className="text-2xl font-serif text-black">
                            2025 Grad | Full-Stack Developer
                        </p>
                        <a
                            href="#projects"
                            className="inline-block bg-black text-white px-10 py-4 rounded-full text-2xl hover:bg-gray-800 transition"
                        >
                            View Projects
                        </a>
                    </div>
                </div>

                {/* Right Side: Profile Picture */}
                <div className="w-1/2 flex items-center justify-center">
                    <div className="w-[600px] h-[600px]">
                        <Image
                            src={ProfilePic}
                            alt="Ming Xuan Profile Picture"
                            width={600}
                            height={600}
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Bottom Section */}
            <section className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <h2 className="text-center text-4xl font-semibold text-gray-900">
                        Tooling and Techs
                    </h2>
                    <div className={"border border-black p-6 mt-10"}>
                        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                            <div className="col-span-2 lg:col-span-1 flex items-center justify-center">
                                <div className="w-[158px] h-[48px]">
                                    <img
                                        className="w-full h-full object-contain"
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9Lnm0K-Cbz4eTj44xNdkW0c1dk4Jl2Xe1qw&s"
                                        alt="React"
                                    />
                                </div>
                            </div>
                            <div className="col-span-2 lg:col-span-1 flex items-center justify-center">
                                <div className="w-[158px] h-[48px]">
                                    <img
                                        className="w-full h-full object-contain"
                                        src="https://cdn.worldvectorlogo.com/logos/nextjs-13.svg"
                                        alt="NextJS"
                                    />
                                </div>
                            </div>
                            <div className="col-span-2 lg:col-span-1 flex items-center justify-center">
                                <div className="w-[158px] h-[48px]">
                                    <img
                                        src="https://www.shareicon.net/download/2015/08/30/93006_logo.svg"
                                        alt="Python"
                                        className="w-full h-full scale-370 object-contain"
                                    />
                                </div>
                            </div>
                            <div className="col-span-2 sm:col-start-2 lg:col-span-1 flex items-center justify-center">
                                <div className="w-[158px] h-[48px] flex items-center justify-center">
                                    <span className="text-gray-900 text-5xl font-semibold">JAVA</span>
                                </div>
                            </div>
                            <div
                                className="col-span-2 col-start-2 sm:col-start-auto lg:col-span-1 flex items-center justify-center">
                                <div className="w-[158px] h-[48px]">
                                    <img
                                        className="w-full h-full scale-170 object-contain"
                                        src="https://blog.appseed.us/content/images/2021/08/icons-flask-x500w.png"
                                        alt="Flask"
                                    />
                                </div>
                            </div>
                        </div>
                        <div
                            className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                            <div className="col-span-2 lg:col-span-1 flex items-center justify-center">
                                <div className="w-[158px] h-[48px]">
                                    <img
                                        className="w-full h-full scale-130 object-contain"
                                        src="https://pypi-camo.freetls.fastly.net/f6cae0b8a7814abdafd9c6de99569205b1fcc307/68747470733a2f2f666173746170692e7469616e676f6c6f2e636f6d2f696d672f6c6f676f2d6d617267696e2f6c6f676f2d7465616c2e706e67"
                                        alt="FastAPI"
                                    />
                                </div>
                            </div>
                            <div className="col-span-2 lg:col-span-1 flex items-center justify-center">
                                <div className="w-[158px] h-[48px]">
                                    <img
                                        className="w-full h-full scale-160 object-contain"
                                        src="https://webapp.io/blog/content/images/2021/03/logo-title-opengraph.png"
                                        alt="Jenkins"
                                    />
                                </div>
                            </div>
                            <div className="col-span-2 lg:col-span-1 flex items-center justify-center">
                                <div className="w-[158px] h-[48px]">
                                    <img
                                        className="w-full h-full scale-130 object-contain"
                                        src="https://ml.globenewswire.com/Resource/Download/3c75ee39-4180-4dae-b43f-91b61934d852"
                                        alt="Docker"
                                    />
                                </div>
                            </div>
                            <div className="col-span-2 sm:col-start-2 lg:col-span-1 flex items-center justify-center">
                                <div className="w-[158px] h-[48px]">
                                    <img
                                        className="w-full h-full scale-125 object-contain"
                                        src="https://www.opentext.com/assets/images/partners/opentext-aws-logo-cover-416x274.png"
                                        alt="AWS"
                                    />
                                </div>
                            </div>
                            <div
                                className="col-span-2 col-start-2 sm:col-start-auto lg:col-span-1 flex items-center justify-center">
                                <div className="w-[158px] h-[48px]">
                                    <img
                                        className="w-full h-full object-contain"
                                        src="https://www.ovhcloud.com/sites/default/files/styles/large_screens_1x/public/2022-03/black.png"
                                        alt="MongoDB"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}