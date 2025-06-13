import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import { Globe } from "./Globe";
import { GlobeDemo } from "./GridGlobe";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 relative md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto"
        // className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  id,
  img,
  imgClassName,
  spareImg,
  titleClassName,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id: number;
  img: string;
  imgClassName: string;
  spareImg: string;
  titleClassName: string;
}) => {
  return (
    <div
      className={cn(
        `group/bento relative shadow-input row-span-1 overflow-hidden
         flex flex-col justify-between space-y-4 rounded-xl border border-neutral-200 bg-white p-4 
         transition
         ${
           id === 1
             ? "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]"
             : ""
         } 
         ${id === 2 ? "lg:col-span-2 md:col-span-3 md:row-span-2" : ""}
         ${id === 3 ? "lg:col-span-2 md:col-span-3 md:row-span-2" : ""}
         ${id === 4 ? "lg:col-span-2 md:col-span-3 md:row-span-1" : ""}
         ${id === 5 ? "md:col-span-3 md:row-span-2" : ""}
         ${id === 6 ? "lg:col-span-2 md:col-span-3 md:row-span-1" : ""}
         duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none`
        // className,
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center h-full"}`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover, object-center")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className={`object-cover object-center w-full h-full`}
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 flex items-center justify-center text-white font-bold" />
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            `group-hover bento:translate-x-2 transition duration-200 
          relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10`
          )}
        >
          <div
            className="font-sans font-extralight text-[#c1c2d3]
          text-sm md:xs lg:text-base z-10"
          >
            {description}
          </div>
          <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
            {title}
          </div>
        </div>
        
        {id === 2 && <GlobeDemo/>}
        
        {id === 3 && (
          <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:right-2">

          </div>
        )}
      </div>
    </div>
  );
};
