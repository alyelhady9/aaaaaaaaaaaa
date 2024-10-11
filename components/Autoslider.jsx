import Image from "next/image"

export const Autoslider = ({images, duration}) => {
  return (
    <>
    <div className="flex slider h-72 mt-10 overflow-hidden">

        <div className="flex gap-5 cursor-pointer animate-swipe hover:[animation-play-state:paused]" style={{animationDuration: `${duration}s`}}>

            {
                [...images, ...images, ...images].map(({ src, title, author}) => (
                    <div className="flex flex-col items-start flex-shrink-0">
                        <Image src={src} alt={title} width={195} height={195} />
                        <span className="pt-2">{title}</span>
                        <span className="text-gray-400">{author}</span>
                    </div>

                ))
            }


        
        </div>
    </div>
    </>
  )
}
