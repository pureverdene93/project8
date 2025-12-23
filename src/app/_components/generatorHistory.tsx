"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useEffect } from "react";

type Article = {
  title: string;
  id: string;
};

export const GeneratorHistoy = () => {
  const router = useRouter();
  const [articleData, setArticleData] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    setLoading(true);
    const controller = new AbortController();
    const timeOutId = setTimeout(() => {
      controller.abort();
    }, 5000);
    try {
      const data = await (
        await fetch(`/api/getArticlesByUserId?userId=test1`, {
          method: "GET",
          signal: controller.signal,
        })
      ).json();
      setArticleData(data.articles);
    } catch (err: any) {
      if (err.name === "AbortError") {
        console.error("Fetch timeOut");
      } else {
        console.error(err, "client error");
      }
    } finally {
      clearTimeout(timeOutId);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-5">
      {loading === true ? (
        <div className="flex flex-col gap-5">
          <Skeleton className="h-[21px] w-[100px]" />
          <Skeleton className="h-6 w-[200px] pl-2" />
          <Skeleton className="h-6 w-[200px] pl-2" />
          <Skeleton className="h-6 w-[200px] pl-2" />
          <Skeleton className="h-6 w-[200px] pl-2" />
          <Skeleton className="h-6 w-[200px] pl-2" />
          <Skeleton className="h-6 w-[200px] pl-2" />
        </div>
      ) : (
        <div className="flex flex-col gap-1">
          <p className="font-normal text-[14px] text-zinc-400">Today</p>
          {articleData.map((data, index) => {
            return (
              <button
                className="font-medium text-[16px] text-black w-[268px] text-start justify-start flex pl-2 cursor-pointer"
                key={index}
                onClick={() => router.push(`/history/${data.id}`)}
              >
                {data.title}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
