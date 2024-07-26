import { testimonials } from "@/data"
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards"

const Clients = () => {
    return (
        <div className="py-20" id="testimonials">
            <h1 className="heading">Kind words form {''}
                <span className="text-purple">
                    Satisfied Clients
                </span>
            </h1>
            <div className="flex flex-col items-center my-5">
                <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center relative overflow-hidden">
                    <InfiniteMovingCards
                        items={testimonials}
                        direction="right"
                        speed="slow"
                    />
                </div>
            </div>
        </div>
    )
}

export default Clients