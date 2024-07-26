import { projects } from "@/data"
import { PinContainer } from "./ui/3d-pin"
import { FaLocationArrow } from "react-icons/fa"


const RecentProjects = () => {
    return (
        <div className="py-10" id="projects">
            <h1 className="heading">A Small Collection of {''}
                <span className="text-purple">
                    Recent Projects
                </span>
            </h1>
            <div className="flex flex-wrap items-center justify-center px-4 gap-x-24 gap-y10 mt-10 ">
                {projects.map(({ id, title, des, img, iconLists, link }) => (
                    <div key={id} className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] lg:min-w-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw] px-5  rounded-lg">
                        <PinContainer title={link} href={link} className="px-5">
                            <div className="px-5 relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh]">
                                <div className="relative w-full h-full overflow-hidden lg:rounded-2xl bg-[#13162d]">
                                    <img src="/bg.png" alt="bg-img" />
                                </div>
                                <img src={img} alt={title} className="z-10 absolute top-10 border-yellow-100" />
                            </div>
                            <h1 className="my-5 font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                                {title}
                            </h1>
                            <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                                {des}
                            </p>
                            <div className="flex items-center justify-between mt-7 mb-3">
                                <div className="flex items-center">
                                    {
                                        iconLists.map((icon, index) => (
                                            <div key={icon} className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex items-center justify-center"
                                                style={{
                                                    transform: `translateX(-${5 * index * 2}px)`
                                                }}>
                                                <img src={icon} alt={icon} className="p-2" />
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className="flex items-center justify-center gap-3 border lg:p-3 rounded-2xl bg-black-100">
                                    <p className="text-purple md:text-sm">Check Live Site</p>
                                    <FaLocationArrow />
                                </div>
                            </div>
                        </PinContainer>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RecentProjects