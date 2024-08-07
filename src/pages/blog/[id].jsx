import React, { useEffect, useState } from "react";

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
      <div>
        <div
          className="blog-detail"
          dangerouslySetInnerHTML={{ __html: articleDetail?.body_html }}
        />
      </div>
    </div>
  );
};

export default ArticleDetail;
