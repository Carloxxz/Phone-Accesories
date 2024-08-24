import Image from "next/image"

type HeadContentProps = {
    title: string
    description: string
    image: string
}

export const HeadContent = ({ title, description, image }: HeadContentProps) => {
    return (
        <>
            <div className="mx-auto flex flex-col md:flex-row items-center space-x-0 md:space-x-16 px-4">
                <div className="flex-1 p-6">
                    <div className="max-w-2xl">
                        <h1 className="text-3xl lg:text-5xl font-bold leading-tight">
                            {title}
                        </h1>
                        <p className="mt-4 text-lg font-normal">
                            {description}
                        </p>
                        <div className="flex mt-10 w-44 items-center space-x-3 py-3 px-6 bg-indigo-600 text-white rounded-lg transition-all duration-400 transform hover:scale-105 cursor-pointer hover:shadow-lg">
                            <button className="text-lg text-md">Más productos</button>
                        </div>
                    </div>
                </div>
                <div className="flex-1 flex justify-center items-center mt-10 md:mt-0">
                    <Image
                        className="rounded-lg"
                        src="https://images.unsplash.com/photo-1483058712412-4245e9b90334"
                        alt="Landing Page Image"
                        width={500}
                        height={500}
                    />
                </div>
            </div>
        </>
    )
}
