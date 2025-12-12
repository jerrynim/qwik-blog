import { component$, useStyles$ } from "@builder.io/qwik";
import { Link, useContent, useLocation } from "@builder.io/qwik-city";
import styles from "./index.css?inline";

interface PostSeriesProps {
  title: string;
}

const PostSeries = component$(({ title }: PostSeriesProps) => {
  useStyles$(styles);
  const content = useContent();
  const location = useLocation();
  const menu = content.menu?.items?.find((item) => item.text === title);
  if (!menu) {
    return null;
  }
  return (
    <div class="post-series" aria-hidden="true">
      <div class="post-series-title">{title}</div>
      <ol class="post-series-item-wrapper">
        {menu?.items?.map((item, index) => {
          const isCurrentPage = location.url.pathname.includes(item.href!);
          return (
            <Link
              scroll={false}
              class={
                isCurrentPage ? "selected-post-series-item" : "post-series-item"
              }
              href={isCurrentPage ? undefined : item.href}
              key={index}
            >
              {item.text}
            </Link>
          );
        })}
      </ol>
    </div>
  );
});
export default PostSeries;
