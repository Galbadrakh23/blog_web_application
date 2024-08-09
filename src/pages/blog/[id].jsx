import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { useRouter } from "next/router";

const ArticleDetail = () => {
  const { query } = useRouter();
  console.log("QR", query.id);
  const [articleDetail, setArticleDetail] = useState(null);

  const getArticleById = async (id) => {
    const res = await fetch(`https:/dev.to/api/articles/${id}`);
    const data = await res.json();
    setArticleDetail(data);
  };

  useEffect(() => {
    getArticleById(query.id);
  }, []);

  return (
    <div>
      <motion.div
        className="box"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      />
      <div className="max-w-2xl mx-auto">
        <div className="flex flex-col gap-4 mt-[100px]">
          <h1 className="text-2xl font-bold">{articleDetail?.title}</h1>
          <div className="flex gap-4 items-center">
            <img
              src={articleDetail?.user?.profile_image}
              className="w-8 h-8 rounded-full"
              alt=""
            />
            <span className="text-md font-work-sans capitalize">
              {articleDetail?.user?.name}
            </span>
            <span className="text-gray-500">
              {articleDetail?.readable_publish_date}
            </span>
          </div>
          <img
            className="w-full rounded-xl border"
            src={articleDetail?.cover_image}
            alt={articleDetail?.title}
          />
          <div
            className="blog-detail font-serif-4 text-base leading-7 mb-8"
            dangerouslySetInnerHTML={{ __html: articleDetail?.body_html }}
          />
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
