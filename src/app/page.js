import Image from "next/image";
import Navbar from "@/components/Navbar";
import ProfilePic from '../../public/83706955.jpg'


export default function Home() {
  return (
      <div className="bg-white min-h-screen flex flex-col">
          <Navbar/>
          {/*<section className="flex items-center justify-between px-16 pt-24">*/}
          {/*    /!* Left Side: Text Content *!/*/}
          {/*    <div className="w-1/2 flex items-center justify-center">*/}
          {/*        <div className="space-y-6 max-w-[638px]">*/}
          {/*            <h1 className="text-9xl font-serif text-black">Ming Xuan</h1>*/}
          {/*            <h2 className="text-3xl font-serif text-black">Graduate Software Engineer</h2>*/}
          {/*            <p className="text-2xl font-serif text-black">*/}
          {/*                2025 Grad | Full-Stack Developer*/}
          {/*            </p>*/}
          {/*            <a*/}
          {/*                href="#projects"*/}
          {/*                className="inline-block bg-black text-white px-10 py-4 rounded-full text-2xl hover:bg-gray-800 transition"*/}
          {/*            >*/}
          {/*                View Projects*/}
          {/*            </a>*/}
          {/*        </div>*/}
          {/*    </div>*/}

          {/*    /!* Right Side: Profile Picture *!/*/}
          {/*    <div className="w-1/2 flex items-center justify-center">*/}
          {/*        <div className="w-[488px] h-[488px]">*/}
          {/*            <Image*/}
          {/*                src={ProfilePic}*/}
          {/*                alt="Ming Xuan Profile Picture"*/}
          {/*                width={488}*/}
          {/*                height={488}*/}
          {/*                className="object-cover"*/}
          {/*            />*/}
          {/*        </div>*/}
          {/*    </div>*/}
          {/*</section>*/}

          <section className="flex items-center justify-between px-16 py-10 flex-grow">
              {/* Left Side: Text Content */}
              <div className="w-1/2 flex items-center justify-center">
                  <div className="space-y-6 max-w-[638px]">
                      <h1 className="text-9xl font-serif text-black">Ming Xuan</h1>
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
      </div>
  );
}
