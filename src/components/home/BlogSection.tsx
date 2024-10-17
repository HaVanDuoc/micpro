import React from "react";
import Container from "@/components/common/Container";
import AnimationFadeUpComponent from "@/components/animation/AnimationFadeUpComponent";
import TitleComponent from "../common/TitleComponent";
import ImageComponent from "../common/ImageComponent";
import utils from "@/utils";
import { BLOG_DATA } from "@/data/home";

const BlogSection = () => {
  const { title, blogs } = BLOG_DATA;

  return (
    <AnimationFadeUpComponent>
      <Container marginY>
        <TitleComponent
          title={title}
          heading="heading-2"
          highlight={[2]}
          colorHighlight="primary"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {blogs.map((blog) => (
            <div className="space-y-6 group cursor-pointer" key={blog.id}>
              <div className="rounded overflow-hidden">
                <ImageComponent
                  img={blog.img}
                  alt={utils.generateRandomAriaLabel("Blog__")}
                  className=" group-hover:scale-110 animation"
                />
              </div>

              <div className="flex items-center gap-3">
                <div className="sub-heading-3 bg-[#FFDB8F] rounded py-1 px-3">
                  {blog.type}
                </div>
                <div className="body-4 text-[#81879D]">{blog.createdAt}</div>
              </div>
              <div className="sub-heading-2 group-hover:text-primary animation">
                {blog.name}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </AnimationFadeUpComponent>
  );
};

export default BlogSection;
