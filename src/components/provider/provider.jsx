import { createContext, useEffect, useState, useContext } from "react";
import { toast } from "react-toastify";

export const MyContext = createContext("null");

const MyProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");
  const [articles, setArticles] = useState([]);
  const [count, setCount] = useState(9);
  const [isLoading, setIsLoading] = useState(false);

  const getArticlesData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://dev.to/api/articles/latest?pages=1&per_page=${count}`
      );
      const data = await response.json();

      setArticles((prevArticles) => {
        console.log("prevArticles", prevArticles);
        const newArticles = data.filter(
          (articles) =>
            !prevArticles.some(
              (prevArticles) => prevArticles.id === articles.id
            )
        );
        return [...prevArticles, ...newArticles];
      });
      setIsLoading(false);
    } catch (error) {
      console.log("Error", error);
      setIsLoading(false);
      toast.success("Complete");
    }
  };
  useEffect(() => {
    getArticlesData();
  }, [count]);
  console.log("Articles Data", articles);

  return (
    <MyContext.Provider
      value={{
        searchValue,
        setSearchValue,
        articles,
        count,
        setCount,
        isLoading,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  return useContext(MyContext);
};

export default MyProvider;
