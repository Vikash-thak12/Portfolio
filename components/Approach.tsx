"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/CanvasRevealEffect";

const Approach = () => {
    return (
        <section className="w-full py-20">
            <h1 className="heading">My <span className="text-purple">Approach</span></h1>
            <div className="my-20 flex flex-col lg:flex-row items-center justify-center gap-4">
                <Card 
                title="Planning & Strategy" 
                icon={<AceternityIcon order="Phase 1" />}
                description="Planning and strategy are crucial steps in the web application development process. This phase involves defining the project's scope, goals, and requirements. It starts with gathering information about the target audience, business objectives, and market trends. During this phase, you create a detailed project plan, including timelines, resources, and budget. You also decide on the technology stack and architecture that best suits the application's needs. By thoroughly understanding the project requirements and setting clear goals, you lay a strong foundation for the development process, ensuring that all stakeholders are aligned and that the project is set up for success."
                >
                    <CanvasRevealEffect
                        animationSpeed={5.1}
                        containerClassName="bg-emerald-900"
                    />
                </Card>
                <Card 
                title="Development & Progress Updates" 
                icon={<AceternityIcon order="Phase 2" />}
                description="The development and progress updates phase is where the actual coding and creation of the web application take place. This stage is typically divided into iterative cycles or sprints, especially if you're following an Agile methodology. Developers write code, create features, and integrate functionalities according to the plan established in the previous phase. Regular progress updates are essential to keep all team members and stakeholders informed. These updates can include daily stand-up meetings, sprint reviews, and demos of the current application state. This continuous communication helps to identify and resolve issues early, adapt to changes, and ensure that the project stays on track. It's also a time for rigorous testing to detect and fix bugs, ensuring the application meets the quality standards and functions as expected."
                >
                    <CanvasRevealEffect
                        animationSpeed={3}
                        containerClassName="bg-black"
                        colors={[
                            [236, 72, 153],
                            [232, 121, 249],
                        ]}
                        dotSize={2}
                    />
                    {/* Radial gradient for the cute fade */}
                    <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
                </Card>
                <Card 
                title="Deployment & Launch" 
                icon={<AceternityIcon order="Phase 3" />}
                description="The deployment and launch phase marks the culmination of all the planning, development, and testing efforts. During this phase, the web application is prepared for live deployment. This involves setting up the production environment, configuring servers, and ensuring that all aspects of the application are secure and optimized for performance. Before the official launch, a final round of testing, including user acceptance testing (UAT), is conducted to ensure that the application meets all requirements and is ready for end-users. Once everything is verified, the application is deployed to the live environment. Post-launch, it's crucial to monitor the application's performance, gather user feedback, and provide support for any issues that may arise. Continuous maintenance and updates are necessary to keep the application running smoothly and to incorporate new features and improvements based on user feedback and changing needs."
                >
                    <CanvasRevealEffect
                        animationSpeed={3}
                        containerClassName="bg-sky-600"
                        colors={[[125, 211, 252]]}
                    />
                </Card>
            </div>
        </section>
    );
}

const Card = ({
    title,
    description,
    icon,
    children,
}: {
    title: string;
    description: string,
    icon: React.ReactNode;
    children?: React.ReactNode;
}) => {
    const [hovered, setHovered] = React.useState(false);
    return (
        <div 
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="rounded-2xl border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-[30rem] cursor-pointer"
        >
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="h-full w-full absolute inset-0"
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="relative z-20 flex flex-col items-center justify-center h-full">
                <div className="absolute text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
                    {icon}
                </div>
                <h2 className="text-center dark:text-white text-2xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
                    {title}
                </h2>
                <p className="dark:text-white text-center px-5 opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 line-clamp-6">
                    {description}
                </p>
            </div>
        </div>
    );
};

const AceternityIcon = ({ order }: { order: string }) => {
    return (
        <div>
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-10 py-5 text-2xl font-medium text-white backdrop-blur-3xl">
                    {order}
                </span>
            </button>
        </div>
    );
};

export const Icon = ({ className, ...rest }: any) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={className}
            {...rest}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
        </svg>
    );
};

export default Approach