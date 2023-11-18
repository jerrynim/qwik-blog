import { component$, useStyles$ } from "@builder.io/qwik";
import { PostImage } from "@components/post";
import PageHeader from "../../../components/page-header";
import styles from "./index.css?inline";

export default component$(() => {
    useStyles$(styles);
    return (
        <>
            <PageHeader></PageHeader>
            <div class="contents">
                <p class="title">Zuix2 E2E 결과 페이지</p>
                <PostImage src="https://res.cloudinary.com/dij9kacx9/image/upload/v1700300897/e2e-sample_baufc0.png"></PostImage>
                <PostImage src="https://res.cloudinary.com/dij9kacx9/image/upload/v1700300898/e2e-onion_cz1sn9.png"></PostImage>
                <PostImage src="https://res.cloudinary.com/dij9kacx9/image/upload/v1700300899/e2e-swiper_rqqkzp.png"></PostImage>
                <p class="title">Zuix1 E2E 결과</p>
                <PostImage src="https://res.cloudinary.com/dij9kacx9/image/upload/v1674785815/lit-blog/zuix1-e2e_hblxun.png"></PostImage>
            </div>
        </>
    );
});
