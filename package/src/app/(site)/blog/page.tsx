import React from "react";

import HeroSub from "@/components/SharedComponent/HeroSub";
import Volunteer from "@/components/SharedComponent/Volunteer";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Blog | Endeavor",
};

const BlogPage = () => {
    return (
        <>
            <HeroSub
                title="Blog"
            />
            <Volunteer />
        </>
    );
};

export default BlogPage;