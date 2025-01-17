import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  return (
      <section id="about">
          <div>
              <h1 className="heading">
                  What&apos;s in my{" "}
                  <span className="text-purple">Spellbook</span>
              </h1>
          </div>
          <BentoGrid className="w-full py-20">
              {gridItems.map((item, i) => (
                  <BentoGridItem
                      id={item.id}
                      key={i}
                      title={item.title}
                      description={item.description}
                      // remove icon prop
                      // remove original classname condition
                      className={item.className}
                      img={item.img}
                      imgClassName={item.imgClassName}
                      titleClassName={item.titleClassName}
                      spareImg={item.spareImg}
                  />
              ))}
          </BentoGrid>
      </section>
  );
};

export default Grid;
