import { motion } from 'framer-motion';
import Image from 'next/image';

const ExperienceCard = ({ title, company, period, description, imageUrl, isReversed }) => {
    // Different animation variants for left and right elements
    const imageVariants = {
        hidden: {
            opacity: 0,
            x: isReversed ? 50 : -50
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const contentVariants = {
        hidden: {
            opacity: 0,
            x: isReversed ? -50 : 50
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                delay: 0.2
            }
        }
    };

    return (
        <div className="w-full my-12 md:my-24">
            <div className={`container mx-auto px-4 flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-stretch gap-6 md:gap-12 lg:gap-16`}>
                {/* Image container */}
                <motion.div
                    className="w-full md:w-1/2 flex items-center mb-8 md:mb-0"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={imageVariants}
                >
                    <div className="w-full max-w-md mx-auto rounded-xl overflow-hidden shadow-lg bg-white h-[350px] flex items-center justify-center">
                        <div className="p-4 w-full h-full flex items-center justify-center">
                            <div className="relative w-full h-full flex items-center justify-center">
                                <Image
                                    src={imageUrl}
                                    alt={`${company} - ${title}`}
                                    width={500}
                                    height={300}
                                    className="object-contain max-h-[300px] rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Content container */}
                <motion.div
                    className="w-full md:w-1/2 flex items-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={contentVariants}
                >
                    <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg w-full h-[350px] overflow-y-auto">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{title}</h3>
                        <h4 className="text-xl md:text-2xl font-semibold text-gray-700 mb-2">{company}</h4>
                        <p className="text-lg text-gray-600 mb-4">{period}</p>
                        <p className="text-gray-700 text-justify">{description}</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

const ExperienceSection = () => {
    const experienceData = [
        {
            title: "Software Engineering Intern",
            company: "WAZP 3D",
            period: "Jan 2024 - Apr 2024",
            description: "Designed, developed, and deployed a real-time webhook-based notification system for industrial 3D printers using Supabase, Google Cloud, and SvelteKit. Created automated email and SMS notifications to alert technicians about printer status changes. Implemented asynchronous processing to reduce blocking operations in the notification pipeline and optimized cloud resource allocation with serverless functions. Established a robust cloud infrastructure that maintained high uptime while enabling horizontal scaling to support growing webhook traffic.",
            imageUrl: "/dev1.svg", // Using your existing image from projects
            isReversed: false
        },
        {
            title: "Software Engineer Intern",
            company: "BitPeak",
            period: "August 2022 - Nov 2022",
            description: "Worked with Spring Boot to resolve critical bugs in a Java enterprise application, significantly reducing system crashes and improving application uptime. Optimized backend API response time by refactoring inefficient database queries and implementing caching for frequent requests. Implemented automated unit testing to reduce deployment errors and improve software reliability. Collaborated with a team of developers using pair programming to refactor legacy code for better maintainability. Provided hardware support and system maintenance to ensure high uptime for office devices and production servers",
            imageUrl: "/dev2.svg", // Using your existing image from projects
            isReversed: true
        }
    ];

    // Create a wave divider component for section transitions
    const WaveDivider = ({ inverted = false, fromColor = "#ffffff", toColor = "#F5F5F5" }) => (
        <div className="w-full h-24" style={{ backgroundColor: fromColor }}>
            <svg
                viewBox="0 0 1440 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                className="w-full h-full"
                style={{ transform: inverted ? 'rotate(180deg)' : 'none' }}
            >
                <path
                    d="M0 100 C360 0 1080 0 1440 100 L1440 100 L0 100 Z"
                    fill={toColor}
                />
            </svg>
        </div>
    );

    const titleVariants = {
        hidden: { opacity: 0, y: -30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: "easeOut"
            }
        }
    };

    return (
        <>
            {/* Wave divider before experience section */}
            <WaveDivider fromColor="#f9fafb" toColor="white" />

            <section id="experience" className="py-12 md:py-16 white">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="mb-12 text-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={titleVariants}
                    >
                        <h2 className="mb-2 text-5xl font-bold text-gray-900">Experience</h2>
                        <p className="text-xl text-gray-700">My professional journey in the tech industry.</p>
                    </motion.div>

                    <div>
                        {experienceData.map((experience, index) => (
                            <ExperienceCard
                                key={index}
                                {...experience}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Wave divider after experience section */}
            {/*<WaveDivider inverted={true} fromColor="#F5F5F5" toColor="#ffffff" />*/}
        </>
    );
};

export default ExperienceSection;