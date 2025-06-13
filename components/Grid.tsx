import { gridItems } from "@/constants";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

export default function Grid() {
    return <section id="about">
        <BentoGrid>
            {gridItems.map((item, i) => (
                <BentoGridItem
                    id={item.id}
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    className={item.className}
                    img={item.img}
                    imgClassName={item.imgClassName}
                    spareImg={item.spareImg}
                    titleClassName={item.titleClassName}
                />
            ))}
        </BentoGrid>
    </section>
}