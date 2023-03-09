import{componentQrl as w,inlinedQrl as h,useStylesScopedQrl as J,Slot as Q,useStylesQrl as te,useSignal as ne,useLexicalScope as ee,_wrapSignal as W,_IMMUTABLE as e,useContext as ae,jsx as Ye,SkipRender as Pn,useServerData as Hn,useStore as G,_weakSerialize as $n,useContextProvider as q,useTaskQrl as Dn,useOnDocument as Tn,implicit$FirstArg as De,createContextId as re,noSerialize as Xe,useEnvData as On,_deserializeData as Zn,getLocale as Vn,withLocale as Ie}from"@builder.io/qwik";import{jsxs as a,jsx as t,Fragment as S}from"@builder.io/qwik/jsx-runtime";import{z as ze}from"zod";const Rn=`.post-header{display:flex;height:68px;padding:0 42px;align-items:center}a{font-size:0}
`,Fn=w(h(()=>a("svg",{width:"146",height:"34",viewBox:"0 0 146 34",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t("path",{d:"M2.016 20.564C3.072 23.708 5.112 25.28 8.136 25.28C10.176 25.28 11.592 24.704 12.384 23.552C13.2 22.376 13.608 20.768 13.608 18.728L13.608 0.799998H14.688L14.688 18.728C14.688 23.816 12.504 26.36 8.136 26.36C6.072 26.36 4.476 25.844 3.348 24.812C2.244 23.78 1.368 22.364 0.72 20.564H2.016ZM35.5286 23.876C34.2086 25.532 32.0486 26.36 29.0486 26.36C26.0486 26.36 23.9006 25.508 22.6046 23.804C21.3086 22.1 20.6606 19.352 20.6606 15.56C20.6606 11.768 21.3086 9.02 22.6046 7.316C23.9006 5.612 26.0486 4.76 29.0486 4.76C32.5286 4.76 34.8926 5.9 36.1406 8.18L27.3206 15.56L25.6286 15.56L34.7366 7.964C33.6806 6.548 31.7846 5.84 29.0486 5.84C27.8486 5.84 26.8406 5.972 26.0246 6.236C25.2086 6.476 24.4526 6.944 23.7566 7.64C23.0846 8.312 22.5806 9.308 22.2446 10.628C21.9086 11.924 21.7406 13.568 21.7406 15.56C21.7406 17.552 21.9086 19.208 22.2446 20.528C22.5806 21.824 23.0846 22.82 23.7566 23.516C24.4526 24.188 25.2086 24.656 26.0246 24.92C26.8406 25.16 27.8486 25.28 29.0486 25.28C31.7846 25.28 33.6806 24.572 34.7366 23.156L35.5286 23.876ZM50.0673 15.524L54.9633 26H53.7753L48.7353 15.2C48.7833 15.176 48.9873 15.08 49.3473 14.912C49.7313 14.72 49.9953 14.588 50.1393 14.516C50.2833 14.42 50.5233 14.264 50.8593 14.048C51.1953 13.832 51.4473 13.628 51.6153 13.436C51.7833 13.22 51.9633 12.98 52.1553 12.716C52.3713 12.428 52.5273 12.116 52.6233 11.78C52.7193 11.42 52.7673 11.036 52.7673 10.628C52.7673 9.116 52.0473 8 50.6073 7.28C49.1673 6.56 47.3793 6.2 45.2433 6.2H42.3633L42.3633 26H41.2833L41.2833 5.12H45.2433C48.0753 5.12 50.2113 5.612 51.6513 6.596C53.1153 7.58 53.8473 8.924 53.8473 10.628C53.8473 11.732 53.4753 12.716 52.7313 13.58C51.9873 14.42 51.0993 15.068 50.0673 15.524ZM68.6298 15.524L73.5258 26H72.3378L67.2978 15.2C67.3458 15.176 67.5498 15.08 67.9098 14.912C68.2938 14.72 68.5578 14.588 68.7018 14.516C68.8458 14.42 69.0858 14.264 69.4218 14.048C69.7578 13.832 70.0098 13.628 70.1778 13.436C70.3458 13.22 70.5258 12.98 70.7178 12.716C70.9338 12.428 71.0898 12.116 71.1858 11.78C71.2818 11.42 71.3298 11.036 71.3298 10.628C71.3298 9.116 70.6098 8 69.1698 7.28C67.7298 6.56 65.9418 6.2 63.8058 6.2H60.9258L60.9258 26H59.8458L59.8458 5.12H63.8058C66.6378 5.12 68.7738 5.612 70.2138 6.596C71.6778 7.58 72.4098 8.924 72.4098 10.628C72.4098 11.732 72.0378 12.716 71.2938 13.58C70.5498 14.42 69.6618 15.068 68.6298 15.524ZM79.6683 5.12L93.6003 5.12L85.1403 25.1L85.1403 33.2H84.0603L84.0603 25.1L75.6003 5.12L76.7523 5.12L84.6003 23.588L91.9803 6.2L79.6683 6.2V5.12ZM97.6388 26V5.12H98.7188L110.455 24.02V5.12L111.535 5.12V26H110.455L98.7188 7.064V26L97.6388 26ZM118.381 5.12H119.461V26H118.381V5.12ZM129.675 24.92L143.571 24.92V6.632L135.471 14.732L127.371 6.632V26L126.291 25.964V5.12H127.371L135.471 13.22L143.571 5.12H144.651V26L129.675 25.964V24.92Z",fill:"url(#paint0_linear)"}),t("path",{d:"M2.016 20.564L2.48998 20.4048L2.37551 20.064H2.016V20.564ZM12.384 23.552L11.9732 23.267L11.972 23.2687L12.384 23.552ZM13.608 0.799998V0.299998H13.108V0.799998H13.608ZM14.688 0.799998H15.188V0.299998H14.688V0.799998ZM3.348 24.812L3.00654 25.1773L3.01049 25.1809L3.348 24.812ZM0.72 20.564L0.72 20.064H0.00858684L0.249556 20.7334L0.72 20.564ZM1.54202 20.7232C2.09256 22.3623 2.91455 23.6353 4.03281 24.4971C5.15488 25.3617 6.53356 25.78 8.136 25.78L8.136 24.78C6.71444 24.78 5.56112 24.4123 4.64319 23.7049C3.72145 22.9947 2.99544 21.9097 2.48998 20.4048L1.54202 20.7232ZM8.136 25.78C10.2601 25.78 11.8729 25.178 12.796 23.8353L11.972 23.2687C11.3111 24.23 10.0919 24.78 8.136 24.78L8.136 25.78ZM12.7948 23.837C13.6888 22.5486 14.108 20.8283 14.108 18.728H13.108C13.108 20.7077 12.7112 22.2034 11.9732 23.267L12.7948 23.837ZM14.108 18.728L14.108 0.799998H13.108L13.108 18.728H14.108ZM13.608 1.3H14.688V0.299998H13.608V1.3ZM14.188 0.799998L14.188 18.728H15.188L15.188 0.799998H14.188ZM14.188 18.728C14.188 21.212 13.6532 22.9817 12.6706 24.1263C11.7005 25.2563 10.2213 25.86 8.136 25.86V26.86C10.4187 26.86 12.2155 26.1917 13.4294 24.7777C14.6308 23.3783 15.188 21.332 15.188 18.728H14.188ZM8.136 25.86C6.15255 25.86 4.69312 25.365 3.68551 24.4431L3.01049 25.1809C4.25888 26.323 5.99145 26.86 8.136 26.86V25.86ZM3.68944 24.4467C2.65672 23.4814 1.81855 22.1394 1.19044 20.3946L0.249556 20.7334C0.917454 22.5886 1.83128 24.0786 3.00656 25.1773L3.68944 24.4467ZM0.72 21.064H2.016V20.064H0.72L0.72 21.064ZM35.5286 23.876L35.9196 24.1877L36.2117 23.8212L35.865 23.506L35.5286 23.876ZM22.6046 23.804L23.0026 23.5013L22.6046 23.804ZM22.6046 7.316L22.2067 7.01331L22.6046 7.316ZM36.1406 8.18L36.4615 8.56347L36.7763 8.30003L36.5792 7.93993L36.1406 8.18ZM27.3206 15.56V16.06H27.5022L27.6415 15.9435L27.3206 15.56ZM25.6286 15.56L25.3084 15.176L24.2484 16.06H25.6286V15.56ZM34.7366 7.964L35.0569 8.34798L35.4205 8.04469L35.1374 7.66509L34.7366 7.964ZM26.0246 6.236L26.1658 6.71585L26.1785 6.71172L26.0246 6.236ZM23.7566 7.64L23.4031 7.28644L23.7566 7.64ZM22.2446 10.628L22.7286 10.7535L22.7292 10.7513L22.2446 10.628ZM22.2446 20.528L21.7601 20.6513L21.7606 20.6535L22.2446 20.528ZM23.7566 23.516L23.3969 23.8633L23.403 23.8696L23.4093 23.8757L23.7566 23.516ZM26.0246 24.92L25.8707 25.3959L25.8835 25.3997L26.0246 24.92ZM34.7366 23.156L35.073 22.786L34.6652 22.4154L34.3358 22.8571L34.7366 23.156ZM35.1376 23.5643C33.9474 25.0576 31.9629 25.86 29.0486 25.86V26.86C32.1343 26.86 34.4699 26.0064 35.9196 24.1877L35.1376 23.5643ZM29.0486 25.86C26.1382 25.86 24.1699 25.0362 23.0026 23.5013L22.2067 24.1067C23.6313 25.9798 25.959 26.86 29.0486 26.86V25.86ZM23.0026 23.5013C21.807 21.9294 21.1606 19.3175 21.1606 15.56H20.1606C20.1606 19.3865 20.8102 22.2706 22.2067 24.1067L23.0026 23.5013ZM21.1606 15.56C21.1606 11.8025 21.807 9.19062 23.0026 7.61868L22.2067 7.01331C20.8102 8.84938 20.1606 11.7335 20.1606 15.56H21.1606ZM23.0026 7.61868C24.1699 6.08383 26.1382 5.26 29.0486 5.26V4.26C25.959 4.26 23.6313 5.14016 22.2067 7.01331L23.0026 7.61868ZM29.0486 5.26C32.417 5.26 34.5713 6.35429 35.702 8.42007L36.5792 7.93993C35.214 5.44571 32.6402 4.26 29.0486 4.26V5.26ZM35.8198 7.79653L26.9998 15.1765L27.6415 15.9435L36.4615 8.56347L35.8198 7.79653ZM27.3206 15.06L25.6286 15.06V16.06L27.3206 16.06V15.06ZM25.9489 15.944L35.0569 8.34798L34.4164 7.58001L25.3084 15.176L25.9489 15.944ZM35.1374 7.66509C33.9443 6.06522 31.8538 5.34 29.0486 5.34V6.34C31.7155 6.34 33.4169 7.03078 34.3358 8.26291L35.1374 7.66509ZM29.0486 5.34C27.8155 5.34 26.7519 5.47519 25.8707 5.76028L26.1785 6.71172C26.9294 6.46881 27.8817 6.34 29.0486 6.34V5.34ZM25.8835 5.75632C24.9755 6.0234 24.1489 6.54066 23.4031 7.28644L24.1102 7.99355C24.7564 7.34734 25.4418 6.9286 26.1657 6.71568L25.8835 5.75632ZM23.4031 7.28644C22.6457 8.04377 22.1092 9.13318 21.7601 10.5047L22.7292 10.7513C23.0521 9.48282 23.5235 8.58023 24.1102 7.99355L23.4031 7.28644ZM21.7606 10.5025C21.4102 11.8542 21.2406 13.5441 21.2406 15.56H22.2406C22.2406 13.5919 22.4071 11.9938 22.7286 10.7535L21.7606 10.5025ZM21.2406 15.56C21.2406 17.5763 21.4103 19.2772 21.7601 20.6513L22.7292 20.4047C22.407 19.1388 22.2406 17.5277 22.2406 15.56H21.2406ZM21.7606 20.6535C22.1103 22.0024 22.6464 23.086 23.3969 23.8633L24.1163 23.1687C23.5228 22.554 23.0509 21.6456 22.7286 20.4025L21.7606 20.6535ZM23.4093 23.8757C24.1531 24.5938 24.9735 25.1054 25.8707 25.3957L26.1785 24.4443C25.4438 24.2066 24.7522 23.7822 24.1039 23.1563L23.4093 23.8757ZM25.8835 25.3997C26.7599 25.6574 27.8188 25.78 29.0486 25.78V24.78C27.8785 24.78 26.9214 24.6626 26.1657 24.4403L25.8835 25.3997ZM29.0486 25.78C31.8538 25.78 33.9443 25.0548 35.1374 23.4549L34.3358 22.8571C33.4169 24.0892 31.7155 24.78 29.0486 24.78V25.78ZM34.4003 23.526L35.1923 24.246L35.865 23.506L35.073 22.786L34.4003 23.526ZM50.0673 15.524L49.8652 15.0667L49.3981 15.2731L49.6143 15.7357L50.0673 15.524ZM54.9633 26V26.5H55.7489L55.4163 25.7883L54.9633 26ZM53.7753 26L53.3222 26.2114L53.4569 26.5L53.7753 26.5V26ZM48.7353 15.2L48.5117 14.7528L48.0764 14.9704L48.2822 15.4114L48.7353 15.2ZM49.3473 14.912L49.5588 15.3653L49.5709 15.3592L49.3473 14.912ZM50.1393 14.516L50.3629 14.9632L50.3907 14.9493L50.4166 14.932L50.1393 14.516ZM50.8593 14.048L51.1297 14.4686L50.8593 14.048ZM51.6153 13.436L51.9916 13.7653L52.0011 13.7544L52.01 13.743L51.6153 13.436ZM52.1553 12.716L51.7552 12.416L51.7509 12.4219L52.1553 12.716ZM52.6233 11.78L53.1041 11.9174L53.1064 11.9088L52.6233 11.78ZM50.6073 7.28L50.8309 6.83278L50.6073 7.28ZM42.3633 6.2V5.7H41.8633V6.2H42.3633ZM42.3633 26V26.5H42.8633V26H42.3633ZM41.2833 26H40.7833V26.5H41.2833V26ZM41.2833 5.12V4.62H40.7833V5.12H41.2833ZM51.6513 6.596L51.3692 7.00883L51.3724 7.01097L51.6513 6.596ZM52.7313 13.58L53.1056 13.9115L53.1102 13.9063L52.7313 13.58ZM49.6143 15.7357L54.5103 26.2117L55.4163 25.7883L50.5203 15.3123L49.6143 15.7357ZM54.9633 25.5H53.7753V26.5H54.9633V25.5ZM54.2284 25.7886L49.1884 14.9886L48.2822 15.4114L53.3222 26.2114L54.2284 25.7886ZM48.9589 15.6472C48.9991 15.6271 49.1942 15.5352 49.5587 15.3651L49.1358 14.4589C48.7803 14.6248 48.5675 14.7249 48.5117 14.7528L48.9589 15.6472ZM49.5709 15.3592C49.9549 15.1672 50.2189 15.0352 50.3629 14.9632L49.9157 14.0688C49.7717 14.1408 49.5077 14.2728 49.1237 14.4648L49.5709 15.3592ZM50.4166 14.932C50.5569 14.8385 50.7938 14.6845 51.1297 14.4686L50.5889 13.6274C50.2528 13.8435 50.0097 14.0015 49.8619 14.1L50.4166 14.932ZM51.1297 14.4686C51.4855 14.2398 51.7804 14.0065 51.9916 13.7653L51.239 13.1067C51.1141 13.2495 50.9051 13.4242 50.5889 13.6274L51.1297 14.4686ZM52.01 13.743C52.1818 13.522 52.3651 13.2776 52.5597 13.0101L51.7509 12.4219C51.5615 12.6824 51.3848 12.918 51.2206 13.129L52.01 13.743ZM52.5553 13.016C52.8068 12.6807 52.9908 12.3138 53.104 11.9174L52.1425 11.6426C52.0638 11.9182 51.9358 12.1753 51.7553 12.416L52.5553 13.016ZM53.1064 11.9088C53.2146 11.503 53.2673 11.0754 53.2673 10.628H52.2673C52.2673 10.9966 52.2239 11.337 52.1402 11.6512L53.1064 11.9088ZM53.2673 10.628C53.2673 9.78953 53.0665 9.03551 52.6474 8.38594C52.2295 7.73817 51.614 7.22434 50.8309 6.83278L50.3837 7.72721C51.0406 8.05566 51.5051 8.45983 51.8071 8.92806C52.1081 9.39449 52.2673 9.95447 52.2673 10.628H53.2673ZM50.8309 6.83278C49.3026 6.06863 47.4326 5.7 45.2433 5.7V6.7C47.3259 6.7 49.032 7.05136 50.3837 7.72721L50.8309 6.83278ZM45.2433 5.7H42.3633V6.7H45.2433V5.7ZM41.8633 6.2L41.8633 26H42.8633L42.8633 6.2H41.8633ZM42.3633 25.5H41.2833V26.5H42.3633V25.5ZM41.7833 26L41.7833 5.12H40.7833L40.7833 26H41.7833ZM41.2833 5.62H45.2433V4.62H41.2833V5.62ZM45.2433 5.62C48.0318 5.62 50.0495 6.10704 51.3692 7.00882L51.9334 6.18318C50.3731 5.11696 48.1187 4.62 45.2433 4.62V5.62ZM51.3724 7.01097C52.704 7.906 53.3473 9.0974 53.3473 10.628H54.3473C54.3473 8.75059 53.5266 7.25399 51.9302 6.18102L51.3724 7.01097ZM53.3473 10.628C53.3473 11.608 53.0211 12.4772 52.3524 13.2537L53.1102 13.9063C53.9295 12.9548 54.3473 11.856 54.3473 10.628H53.3473ZM52.357 13.2485C51.6609 14.0343 50.8318 14.6396 49.8652 15.0667L50.2694 15.9813C51.3668 15.4964 52.3136 14.8057 53.1056 13.9115L52.357 13.2485ZM68.6298 15.524L68.4277 15.0667L67.9606 15.2731L68.1768 15.7357L68.6298 15.524ZM73.5258 26V26.5H74.3114L73.9788 25.7883L73.5258 26ZM72.3378 26L71.8847 26.2114L72.0193 26.5H72.3378V26ZM67.2978 15.2L67.0742 14.7528L66.6389 14.9704L66.8447 15.4114L67.2978 15.2ZM67.9098 14.912L68.1213 15.3653L68.1334 15.3592L67.9098 14.912ZM68.7018 14.516L68.9254 14.9632L68.9532 14.9493L68.9791 14.932L68.7018 14.516ZM69.4218 14.048L69.6922 14.4686L69.4218 14.048ZM70.1778 13.436L70.5541 13.7653L70.5636 13.7544L70.5725 13.743L70.1778 13.436ZM70.7178 12.716L70.3177 12.416L70.3134 12.4219L70.7178 12.716ZM71.1858 11.78L71.6666 11.9174L71.6689 11.9088L71.1858 11.78ZM69.1698 7.28L69.3934 6.83278L69.1698 7.28ZM60.9258 6.2V5.7H60.4258V6.2H60.9258ZM60.9258 26V26.5H61.4258V26H60.9258ZM59.8458 26H59.3458V26.5H59.8458V26ZM59.8458 5.12V4.62H59.3458V5.12H59.8458ZM70.2138 6.596L69.9317 7.00883L69.9349 7.01097L70.2138 6.596ZM71.2938 13.58L71.6681 13.9115L71.6727 13.9063L71.2938 13.58ZM68.1768 15.7357L73.0728 26.2117L73.9788 25.7883L69.0828 15.3123L68.1768 15.7357ZM73.5258 25.5H72.3378V26.5H73.5258V25.5ZM72.7909 25.7886L67.7509 14.9886L66.8447 15.4114L71.8847 26.2114L72.7909 25.7886ZM67.5214 15.6472C67.5616 15.6271 67.7567 15.5352 68.1212 15.3651L67.6983 14.4589C67.3428 14.6248 67.13 14.7249 67.0742 14.7528L67.5214 15.6472ZM68.1334 15.3592C68.5174 15.1672 68.7814 15.0352 68.9254 14.9632L68.4782 14.0688C68.3342 14.1408 68.0702 14.2728 67.6862 14.4648L68.1334 15.3592ZM68.9791 14.932C69.1194 14.8385 69.3563 14.6845 69.6922 14.4686L69.1514 13.6274C68.8153 13.8435 68.5722 14.0015 68.4244 14.1L68.9791 14.932ZM69.6922 14.4686C70.048 14.2398 70.3429 14.0065 70.5541 13.7653L69.8015 13.1067C69.6766 13.2495 69.4676 13.4242 69.1514 13.6274L69.6922 14.4686ZM70.5725 13.743C70.7443 13.522 70.9276 13.2776 71.1221 13.0101L70.3134 12.4219C70.124 12.6824 69.9473 12.918 69.7831 13.129L70.5725 13.743ZM71.1178 13.016C71.3693 12.6807 71.5533 12.3138 71.6665 11.9174L70.705 11.6426C70.6263 11.9182 70.4983 12.1753 70.3178 12.416L71.1178 13.016ZM71.6689 11.9088C71.7771 11.503 71.8298 11.0754 71.8298 10.628H70.8298C70.8298 10.9966 70.7865 11.337 70.7027 11.6512L71.6689 11.9088ZM71.8298 10.628C71.8298 9.78953 71.629 9.03551 71.2099 8.38594C70.792 7.73817 70.1765 7.22434 69.3934 6.83278L68.9462 7.72721C69.6031 8.05566 70.0676 8.45983 70.3696 8.92806C70.6706 9.39449 70.8298 9.95447 70.8298 10.628H71.8298ZM69.3934 6.83278C67.8651 6.06863 65.9951 5.7 63.8058 5.7V6.7C65.8885 6.7 67.5945 7.05136 68.9462 7.72721L69.3934 6.83278ZM63.8058 5.7H60.9258V6.7H63.8058V5.7ZM60.4258 6.2L60.4258 26H61.4258L61.4258 6.2H60.4258ZM60.9258 25.5H59.8458V26.5H60.9258V25.5ZM60.3458 26L60.3458 5.12H59.3458L59.3458 26H60.3458ZM59.8458 5.62H63.8058V4.62H59.8458V5.62ZM63.8058 5.62C66.5943 5.62 68.612 6.10704 69.9317 7.00882L70.4959 6.18318C68.9356 5.11696 66.6813 4.62 63.8058 4.62V5.62ZM69.9349 7.01097C71.2665 7.906 71.9098 9.0974 71.9098 10.628H72.9098C72.9098 8.75059 72.0891 7.25399 70.4927 6.18102L69.9349 7.01097ZM71.9098 10.628C71.9098 11.608 71.5836 12.4772 70.9149 13.2537L71.6727 13.9063C72.492 12.9548 72.9098 11.856 72.9098 10.628H71.9098ZM70.9195 13.2485C70.2234 14.0343 69.3943 14.6396 68.4277 15.0667L68.8319 15.9813C69.9293 15.4964 70.8761 14.8057 71.6681 13.9115L70.9195 13.2485ZM79.6683 5.12V4.62H79.1683V5.12H79.6683ZM93.6003 5.12L94.0607 5.31495L94.355 4.62L93.6003 4.62V5.12ZM85.1403 25.1L84.6799 24.905L84.6403 24.9985V25.1H85.1403ZM85.1403 33.2V33.7H85.6403V33.2H85.1403ZM84.0603 33.2H83.5603V33.7H84.0603V33.2ZM84.0603 25.1H84.5603V24.9985L84.5207 24.905L84.0603 25.1ZM75.6003 5.12V4.62H74.8456L75.1399 5.31495L75.6003 5.12ZM76.7523 5.12L77.2125 4.92445L77.0831 4.62H76.7523V5.12ZM84.6003 23.588L84.1401 23.7836L84.6006 24.8671L85.0605 23.7833L84.6003 23.588ZM91.9803 6.2L92.4405 6.39535L92.7357 5.7H91.9803V6.2ZM79.6683 6.2H79.1683V6.7H79.6683V6.2ZM79.6683 5.62L93.6003 5.62V4.62L79.6683 4.62V5.62ZM93.1399 4.92504L84.6799 24.905L85.6007 25.295L94.0607 5.31495L93.1399 4.92504ZM84.6403 25.1L84.6403 33.2H85.6403L85.6403 25.1H84.6403ZM85.1403 32.7H84.0603V33.7H85.1403V32.7ZM84.5603 33.2L84.5603 25.1H83.5603L83.5603 33.2H84.5603ZM84.5207 24.905L76.0607 4.92504L75.1399 5.31495L83.5999 25.295L84.5207 24.905ZM75.6003 5.62L76.7523 5.62V4.62L75.6003 4.62V5.62ZM76.2921 5.31555L84.1401 23.7836L85.0605 23.3924L77.2125 4.92445L76.2921 5.31555ZM85.0605 23.7833L92.4405 6.39535L91.52 6.00465L84.14 23.3927L85.0605 23.7833ZM91.9803 5.7L79.6683 5.7V6.7L91.9803 6.7V5.7ZM80.1683 6.2V5.12H79.1683V6.2H80.1683ZM97.6387 26H97.1387V26.5H97.6387V26ZM97.6387 5.12V4.62H97.1387V5.12H97.6387ZM98.7188 5.12L99.1435 4.85624L98.9968 4.62H98.7188V5.12ZM110.455 24.02L110.03 24.2838L110.955 25.773V24.02H110.455ZM110.455 5.12V4.62H109.955V5.12H110.455ZM111.535 5.12H112.035V4.62H111.535V5.12ZM111.535 26V26.5H112.035V26H111.535ZM110.455 26L110.03 26.2634L110.176 26.5H110.455V26ZM98.7188 7.064L99.1437 6.8006L98.2188 5.30812V7.064H98.7188ZM98.7188 26V26.5H99.2188V26H98.7188ZM98.1387 26V5.12H97.1387V26L98.1387 26ZM97.6387 5.62H98.7188V4.62H97.6387V5.62ZM98.294 5.38376L110.03 24.2838L110.88 23.7562L99.1435 4.85624L98.294 5.38376ZM110.955 24.02V5.12H109.955V24.02H110.955ZM110.455 5.62L111.535 5.62V4.62L110.455 4.62V5.62ZM111.035 5.12V26H112.035V5.12L111.035 5.12ZM111.535 25.5H110.455V26.5H111.535V25.5ZM110.88 25.7366L99.1437 6.8006L98.2938 7.3274L110.03 26.2634L110.88 25.7366ZM98.2188 7.064V26H99.2188V7.064H98.2188ZM98.7188 25.5L97.6387 25.5V26.5H98.7188V25.5ZM118.381 5.12V4.62H117.881V5.12H118.381ZM119.461 5.12H119.961V4.62H119.461V5.12ZM119.461 26V26.5H119.961V26H119.461ZM118.381 26H117.881V26.5H118.381V26ZM118.381 5.62H119.461V4.62H118.381V5.62ZM118.961 5.12V26H119.961V5.12H118.961ZM119.461 25.5H118.381V26.5H119.461V25.5ZM118.881 26V5.12H117.881V26H118.881ZM129.675 24.92V24.42H129.175V24.92H129.675ZM143.571 24.92V25.42H144.071V24.92H143.571ZM143.571 6.632H144.071V5.42489L143.218 6.27845L143.571 6.632ZM135.471 14.732L135.118 15.0856L135.471 15.4391L135.825 15.0856L135.471 14.732ZM127.371 6.632L127.725 6.27845L126.871 5.42489V6.632H127.371ZM127.371 26L127.354 26.4997L127.871 26.5169V26H127.371ZM126.291 25.964H125.791V26.4476L126.274 26.4637L126.291 25.964ZM126.291 5.12V4.62H125.791V5.12H126.291ZM127.371 5.12L127.725 4.76645L127.578 4.62H127.371V5.12ZM135.471 13.22L135.118 13.5736L135.471 13.9271L135.825 13.5736L135.471 13.22ZM143.571 5.12V4.62H143.364L143.218 4.76645L143.571 5.12ZM144.651 5.12H145.151V4.62H144.651V5.12ZM144.651 26L144.65 26.5L145.151 26.5012V26H144.651ZM129.675 25.964H129.175V26.4628L129.674 26.464L129.675 25.964ZM129.675 25.42L143.571 25.42V24.42L129.675 24.42V25.42ZM144.071 24.92V6.632H143.071V24.92H144.071ZM143.218 6.27845L135.118 14.3784L135.825 15.0856L143.925 6.98555L143.218 6.27845ZM135.825 14.3784L127.725 6.27845L127.018 6.98555L135.118 15.0856L135.825 14.3784ZM126.871 6.632V26H127.871V6.632H126.871ZM127.388 25.5003L126.308 25.4643L126.274 26.4637L127.354 26.4997L127.388 25.5003ZM126.791 25.964V5.12H125.791V25.964H126.791ZM126.291 5.62H127.371V4.62H126.291V5.62ZM127.018 5.47355L135.118 13.5736L135.825 12.8664L127.725 4.76645L127.018 5.47355ZM135.825 13.5736L143.925 5.47355L143.218 4.76645L135.118 12.8664L135.825 13.5736ZM143.571 5.62H144.651V4.62H143.571V5.62ZM144.151 5.12V26H145.151V5.12H144.151ZM144.652 25.5L129.676 25.464L129.674 26.464L144.65 26.5L144.652 25.5ZM130.175 25.964V24.92H129.175V25.964H130.175Z",fill:"url(#paint1_linear)"}),a("defs",{children:[a("linearGradient",{id:"paint0_linear",x1:"149",y1:"14",x2:"-1.35167e-06",y2:"14",gradientUnits:"userSpaceOnUse",children:[t("stop",{"stop-color":"#4074BA"}),t("stop",{offset:"1","stop-color":"#88CBDB"})]}),a("linearGradient",{id:"paint1_linear",x1:"5.55068e-07",y1:"14",x2:"149",y2:"14",gradientUnits:"userSpaceOnUse",children:[t("stop",{"stop-color":"#88CBDB"}),t("stop",{offset:"1","stop-color":"#4074BA"})]})]})]},"Wl_0"),"s_fr4zJ00uIEU")),ke=w(h(()=>(J(h(Rn,"s_umB07CJMvcs")),t("div",{class:"post-header",children:a("a",{href:"https://github.com/jerrynim",target:"_blank",children:[t(Fn,{},"Ow_0"),"jerrynim-Logo"]})},"Ow_1")),"s_RAB30MYh0qM")),Bn=w(h(()=>a(S,{children:[t(ke,{},"c0_0"),t(Q,{},"c0_1")]},"c0_2"),"s_0t600JfWuXk")),qn=async({redirect:o,request:r})=>{o(301,r.url.replace("/post","/posts"))},Nn=Object.freeze(Object.defineProperty({__proto__:null,default:Bn,onGet:qn},Symbol.toStringTag,{value:"Module"})),In=w(h(()=>a(S,{children:[t(ke,{},"Dg_0"),t(Q,{},"Dg_1")]},"Dg_2"),"s_dkHll5WdDL8")),zn=Object.freeze(Object.defineProperty({__proto__:null,default:In},Symbol.toStringTag,{value:"Module"})),Un=`nav{display:flex;flex-direction:column}.route-path{width:fit-content;font-size:16px;margin-bottom:8px}
`,Qn=w(h(()=>(te(h(Un,"s_HJlN0JSVBFw")),a("div",{children:[t(ke,{},"5q_0"),t("h1",{children:"제리님 블로그"}),"only for organic search"]},"5q_1")),"s_odGOBTNxKM0")),Wn=Object.freeze(Object.defineProperty({__proto__:null,default:Qn},Symbol.toStringTag,{value:"Module"})),Jn=`.post-buy-me-coffee{display:block;margin-top:20px}.buy-me-a-coffee{display:flex}a{display:block;width:150px;font-size:0}img{display:inline-block;width:150px}
`,Yn=w(h(()=>(J(h(Jn,"s_1EiuOAzqvAo")),t("div",{class:"post-buy-me-coffee",children:a("a",{href:"https://www.buymeacoffee.com/jerrynim",target:"_blank",children:["buy me a coffee",t("img",{width:"150",height:"42",src:"/static/buy-me-a-coffee.svg",alt:""})]})},"y0_0")),"s_xZWm02bwtYg")),Xn=`.post-body{display:block;width:100%;max-width:680px;padding-bottom:100px;margin:auto auto 60px;font-size:16px;line-height:1.5;color:var(--grey)}@media (max-width: 700px){.post-body{width:auto;padding:0 20px;font-size:16px}}ul{position:relative;margin:12px 0;padding-left:14px}ol{position:relative;margin:12px 0;padding-left:20px}code{padding:3px 4px;background-color:var(--lightgrey);color:var(--main)}.li{display:block;margin-bottom:12px}li:before{content:"";height:8px;margin:9px 0 0;width:8px;background:var(--grey);border-radius:50%;left:0;position:absolute}
`,H=w(h(()=>(te(h(Xn,"s_0r9kjc5nuX8")),a("div",{class:"post-body",children:[t(Q,{},"0H_0"),t(Yn,{},"0H_1")]},"0H_2")),"s_N8EQ0YvmeM0")),Kn=`.post-code{display:block;position:relative;margin:12px 0;font-size:14px}.filename{color:var(--black);font-size:16px;font-weight:700}code{display:block;overflow:scroll;padding:16px!important;background-color:var(--lightgrey)!important;scrollbar-width:none}code::-webkit-scrollbar{width:0;height:0}button{display:none;position:absolute;top:16px;right:16px;background-color:transparent;cursor:pointer;color:var(--main);border:1px solid;padding:3px 8px;font-size:13px;border-radius:4px}button:hover{background-color:#ffffffb3}
`,Gn=`code[class*=language-],pre[class*=language-]{color:#000;background:none;text-shadow:0 1px white;font-family:Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace;font-size:1em;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none}pre[class*=language-]::-moz-selection,pre[class*=language-] ::-moz-selection,code[class*=language-]::-moz-selection,code[class*=language-] ::-moz-selection{text-shadow:none;background:#b3d4fc}pre[class*=language-]::selection,pre[class*=language-] ::selection,code[class*=language-]::selection,code[class*=language-] ::selection{text-shadow:none;background:#b3d4fc}@media print{code[class*=language-],pre[class*=language-]{text-shadow:none}}pre[class*=language-]{padding:1em;margin:.5em 0;overflow:auto}:not(pre)>code[class*=language-],pre[class*=language-]{background:#f5f2f0}:not(pre)>code[class*=language-]{padding:.1em;border-radius:.3em;white-space:pre}.token.comment,.token.prolog,.token.doctype,.token.cdata{color:#708090}.token.punctuation{color:#999}.token.namespace{opacity:.7}.token.property,.token.tag,.token.boolean,.token.number,.token.constant,.token.symbol,.token.deleted{color:#905}.token.selector,.token.attr-name,.token.string,.token.char,.token.builtin,.token.inserted{color:#690}.token.operator,.token.entity,.token.url,.language-css .token.string,.style .token.string{color:#9a6e3a;background:hsla(0,0%,100%,.5)}.token.atrule,.token.attr-value,.token.keyword{color:#07a}.token.function,.token.class-name{color:#dd4a68}.token.regex,.token.important,.token.variable{color:#e90}.token.important,.token.bold{font-weight:700}.token.italic{font-style:italic}.token.entity{cursor:help}pre[class*=language-].line-numbers{position:relative;padding-left:3.8em;counter-reset:linenumber}pre[class*=language-].line-numbers>code{position:relative;white-space:inherit}.line-numbers .line-numbers-rows{position:absolute;pointer-events:none;top:0;font-size:100%;left:-3.8em;width:3em;letter-spacing:-1px;border-right:1px solid #999;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.line-numbers-rows>span{display:block;counter-increment:linenumber}.line-numbers-rows>span:before{content:counter(linenumber);color:#999;display:block;padding-right:.8em;text-align:right}.command-line-prompt{border-right:1px solid #999;display:block;float:left;font-size:100%;letter-spacing:-1px;margin-right:1em;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.command-line-prompt>span:before{color:#999;content:" ";display:block;padding-right:.8em}.command-line-prompt>span[data-user]:before{content:"[" attr(data-user) "@" attr(data-host) "] $"}.command-line-prompt>span[data-user=root]:before{content:"[" attr(data-user) "@" attr(data-host) "] #"}.command-line-prompt>span[data-prompt]:before{content:attr(data-prompt)}
`;var ea=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{},k=function(o){var r=/\blang(?:uage)?-([\w-]+)\b/i,c=0,g={},s={manual:o.Prism&&o.Prism.manual,disableWorkerMessageHandler:o.Prism&&o.Prism.disableWorkerMessageHandler,util:{encode:function l(p){return p instanceof d?new d(p.type,l(p.content),p.alias):Array.isArray(p)?p.map(l):p.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(l){return Object.prototype.toString.call(l).slice(8,-1)},objId:function(l){return l.__id||Object.defineProperty(l,"__id",{value:++c}),l.__id},clone:function l(p,f){var y,m;switch(f=f||{},s.util.type(p)){case"Object":if(m=s.util.objId(p),f[m])return f[m];for(var x in y={},f[m]=y,p)p.hasOwnProperty(x)&&(y[x]=l(p[x],f));return y;case"Array":return m=s.util.objId(p),f[m]?f[m]:(y=[],f[m]=y,p.forEach(function(M,E){y[E]=l(M,f)}),y);default:return p}},getLanguage:function(l){for(;l&&!r.test(l.className);)l=l.parentElement;return l?(l.className.match(r)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(y){var l=(/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(y.stack)||[])[1];if(l){var p=document.getElementsByTagName("script");for(var f in p)if(p[f].src==l)return p[f]}return null}},isActive:function(l,p,f){for(var y="no-"+p;l;){var m=l.classList;if(m.contains(p))return!0;if(m.contains(y))return!1;l=l.parentElement}return!!f}},languages:{plain:g,plaintext:g,text:g,txt:g,extend:function(l,p){var f=s.util.clone(s.languages[l]);for(var y in p)f[y]=p[y];return f},insertBefore:function(l,p,f,y){var m=(y=y||s.languages)[l],x={};for(var M in m)if(m.hasOwnProperty(M)){if(M==p)for(var E in f)f.hasOwnProperty(E)&&(x[E]=f[E]);f.hasOwnProperty(M)||(x[M]=m[M])}var Z=y[l];return y[l]=x,s.languages.DFS(s.languages,function(z,de){de===Z&&z!=l&&(this[z]=x)}),x},DFS:function l(p,f,y,m){m=m||{};var x=s.util.objId;for(var M in p)if(p.hasOwnProperty(M)){f.call(p,M,p[M],y||M);var E=p[M],Z=s.util.type(E);Z!=="Object"||m[x(E)]?Z!=="Array"||m[x(E)]||(m[x(E)]=!0,l(E,f,M,m)):(m[x(E)]=!0,l(E,f,null,m))}}},plugins:{},highlightAll:function(l,p){s.highlightAllUnder(document,l,p)},highlightAllUnder:function(l,p,f){var y={callback:f,container:l,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};s.hooks.run("before-highlightall",y),y.elements=Array.prototype.slice.apply(y.container.querySelectorAll(y.selector)),s.hooks.run("before-all-elements-highlight",y);for(var m,x=0;m=y.elements[x++];)s.highlightElement(m,p===!0,y.callback)},highlightElement:function(l,p,f){var y=s.util.getLanguage(l),m=s.languages[y];l.className=l.className.replace(r,"").replace(/\s+/g," ")+" language-"+y;var x=l.parentElement;x&&x.nodeName.toLowerCase()==="pre"&&(x.className=x.className.replace(r,"").replace(/\s+/g," ")+" language-"+y);var M={element:l,language:y,grammar:m,code:l.textContent};function E(z){M.highlightedCode=z,s.hooks.run("before-insert",M),M.element.innerHTML=M.highlightedCode,s.hooks.run("after-highlight",M),s.hooks.run("complete",M),f&&f.call(M.element)}if(s.hooks.run("before-sanity-check",M),(x=M.element.parentElement)&&x.nodeName.toLowerCase()==="pre"&&!x.hasAttribute("tabindex")&&x.setAttribute("tabindex","0"),!M.code)return s.hooks.run("complete",M),void(f&&f.call(M.element));if(s.hooks.run("before-highlight",M),M.grammar)if(p&&o.Worker){var Z=new Worker(s.filename);Z.onmessage=function(z){E(z.data)},Z.postMessage(JSON.stringify({language:M.language,code:M.code,immediateClose:!0}))}else E(s.highlight(M.code,M.grammar,M.language));else E(s.util.encode(M.code))},highlight:function(l,p,f){var y={code:l,grammar:p,language:f};return s.hooks.run("before-tokenize",y),y.tokens=s.tokenize(y.code,y.grammar),s.hooks.run("after-tokenize",y),d.stringify(s.util.encode(y.tokens),y.language)},tokenize:function(l,p){var f=p.rest;if(f){for(var y in f)p[y]=f[y];delete p.rest}var m=new u;return b(m,m.head,l),function x(M,E,Z,z,de,N){for(var oe in Z)if(Z.hasOwnProperty(oe)&&Z[oe]){var Y=Z[oe];Y=Array.isArray(Y)?Y:[Y];for(var I=0;I<Y.length;++I){if(N&&N.cause==oe+","+I)return;var B=Y[I],ie=B.inside,ue=!!B.lookbehind,ge=!!B.greedy,Le=B.alias;if(ge&&!B.pattern.global){var le=B.pattern.toString().match(/[imsuy]*$/)[0];B.pattern=RegExp(B.pattern.source,le+"g")}for(var me=B.pattern||B,R=z.next,U=de;R!==E.tail&&!(N&&U>=N.reach);U+=R.value.length,R=R.next){var se=R.value;if(E.length>M.length)return;if(!(se instanceof d)){var X,he=1;if(ge){if(!(X=_(me,U,M,ue)))break;var be=X.index,Sn=X.index+X[0].length,K=U;for(K+=R.value.length;K<=be;)R=R.next,K+=R.value.length;if(K-=R.value.length,U=K,R.value instanceof d)continue;for(var pe=R;pe!==E.tail&&(K<Sn||typeof pe.value=="string");pe=pe.next)he++,K+=pe.value.length;he--,se=M.slice(U,K),X.index-=U}else if(!(X=_(me,0,se,ue)))continue;var be=X.index,fe=X[0],we=se.slice(0,be),Ne=se.slice(be+fe.length),xe=U+se.length;N&&xe>N.reach&&(N.reach=xe);var ye=R.prev;we&&(ye=b(E,ye,we),U+=we.length),v(E,ye,he);var An=new d(oe,ie?s.tokenize(fe,ie):fe,Le,fe);if(R=b(E,ye,An),Ne&&b(E,R,Ne),1<he){var Me={cause:oe+","+I,reach:xe};x(M,E,Z,R.prev,U,Me),N&&Me.reach>N.reach&&(N.reach=Me.reach)}}}}}}(l,m,p,m.head,0),function(x){for(var M=[],E=x.head.next;E!==x.tail;)M.push(E.value),E=E.next;return M}(m)},hooks:{all:{},add:function(l,p){var f=s.hooks.all;f[l]=f[l]||[],f[l].push(p)},run:function(l,p){var f=s.hooks.all[l];if(f&&f.length)for(var y,m=0;y=f[m++];)y(p)}},Token:d};function d(l,p,f,y){this.type=l,this.content=p,this.alias=f,this.length=0|(y||"").length}function _(l,p,f,y){l.lastIndex=p;var m=l.exec(f);if(m&&y&&m[1]){var x=m[1].length;m.index+=x,m[0]=m[0].slice(x)}return m}function u(){var l={value:null,prev:null,next:null},p={value:null,prev:l,next:null};l.next=p,this.head=l,this.tail=p,this.length=0}function b(l,p,f){var y=p.next,m={value:f,prev:p,next:y};return p.next=m,y.prev=m,l.length++,m}function v(l,p,f){for(var y=p.next,m=0;m<f&&y!==l.tail;m++)y=y.next;(p.next=y).prev=p,l.length-=m}if(o.Prism=s,d.stringify=function l(p,f){if(typeof p=="string")return p;if(Array.isArray(p)){var y="";return p.forEach(function(Z){y+=l(Z,f)}),y}var m={type:p.type,content:l(p.content,f),tag:"span",classes:["token",p.type],attributes:{},language:f},x=p.alias;x&&(Array.isArray(x)?Array.prototype.push.apply(m.classes,x):m.classes.push(x)),s.hooks.run("wrap",m);var M="";for(var E in m.attributes)M+=" "+E+'="'+(m.attributes[E]||"").replace(/"/g,"&quot;")+'"';return"<"+m.tag+' class="'+m.classes.join(" ")+'"'+M+">"+m.content+"</"+m.tag+">"},!o.document)return o.addEventListener&&(s.disableWorkerMessageHandler||o.addEventListener("message",function(l){var p=JSON.parse(l.data),f=p.language,y=p.code,m=p.immediateClose;o.postMessage(s.highlight(y,s.languages[f],f)),m&&o.close()},!1)),s;var j=s.util.currentScript();function C(){s.manual||s.highlightAll()}if(j&&(s.filename=j.src,j.hasAttribute("data-manual")&&(s.manual=!0)),!s.manual){var V=document.readyState;V==="loading"||V==="interactive"&&j&&j.defer?document.addEventListener("DOMContentLoaded",C):window.requestAnimationFrame?window.requestAnimationFrame(C):window.setTimeout(C,16)}return s}(ea);typeof module<"u"&&module.exports&&(module.exports=k),typeof global<"u"&&(global.Prism=k);k.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/,name:/[^\s<>'"]+/}},cdata:/<!\[CDATA\[[\s\S]*?\]\]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},k.languages.markup.tag.inside["attr-value"].inside.entity=k.languages.markup.entity,k.languages.markup.doctype.inside["internal-subset"].inside=k.languages.markup,k.hooks.add("wrap",function(o){o.type==="entity"&&(o.attributes.title=o.content.replace(/&amp;/,"&"))}),Object.defineProperty(k.languages.markup.tag,"addInlined",{value:function(o,r){var c={};c["language-"+r]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:k.languages[r]},c.cdata=/^<!\[CDATA\[|\]\]>$/i;var g={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:c}};g["language-"+r]={pattern:/[\s\S]+/,inside:k.languages[r]};var s={};s[o]={pattern:RegExp("(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)".replace(/__/g,function(){return o}),"i"),lookbehind:!0,greedy:!0,inside:g},k.languages.insertBefore("markup","cdata",s)}}),Object.defineProperty(k.languages.markup.tag,"addAttribute",{value:function(o,r){k.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(`(^|["'\\s])(?:`+o+`)\\s*=\\s*(?:"[^"]*"|'[^']*'|[^\\s'">=]+(?=[\\s>]))`,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[r,"language-"+r],inside:k.languages[r]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),k.languages.html=k.languages.markup,k.languages.mathml=k.languages.markup,k.languages.svg=k.languages.markup,k.languages.xml=k.languages.extend("markup",{}),k.languages.ssml=k.languages.xml,k.languages.atom=k.languages.xml,k.languages.rss=k.languages.xml;(function(o){var r=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;o.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+r.source+`|(?:[^\\\\\r
()"']|\\\\[^])*)\\)`,"i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+r.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+r.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:r,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},o.languages.css.atrule.inside.rest=o.languages.css;var c=o.languages.markup;c&&(c.tag.addInlined("style","css"),c.tag.addAttribute("style","css"))})(k);k.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/};k.languages.javascript=k.languages.extend("clike",{"class-name":[k.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),k.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,k.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:k.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:k.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:k.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:k.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:k.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),k.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:k.languages.javascript}},string:/[\s\S]+/}}}),k.languages.markup&&(k.languages.markup.tag.addInlined("script","javascript"),k.languages.markup.tag.addAttribute("on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)","javascript")),k.languages.js=k.languages.javascript;(function(o){var r="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",c={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},g={bash:c,environment:{pattern:RegExp("\\$"+r),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+r),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|x[0-9a-fA-F]{1,2}|u[0-9a-fA-F]{4}|U[0-9a-fA-F]{8})/};o.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+r),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:g},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:c}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:g},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:g.entity}}],environment:{pattern:RegExp("\\$?"+r),alias:"constant"},variable:g.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|aptitude|apt-cache|apt-get|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:if|then|else|elif|fi|for|while|in|case|esac|function|select|do|done|until)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|break|cd|continue|eval|exec|exit|export|getopts|hash|pwd|readonly|return|shift|test|times|trap|umask|unset|alias|bind|builtin|caller|command|declare|echo|enable|help|let|local|logout|mapfile|printf|read|readarray|source|type|typeset|ulimit|unalias|set|shopt)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:true|false)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},c.inside=o.languages.bash;for(var s=["comment","function-name","for-or-select","assign-left","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],d=g.variable[1].inside,_=0;_<s.length;_++)d[s[_]]=o.languages.bash[s[_]];o.languages.shell=o.languages.bash})(k);k.languages.go=k.languages.extend("clike",{string:{pattern:/(["'`])(?:\\[\s\S]|(?!\1)[^\\])*\1/,greedy:!0},keyword:/\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,boolean:/\b(?:_|iota|nil|true|false)\b/,number:/(?:\b0x[a-f\d]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[-+]?\d+)?)i?/i,operator:/[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,builtin:/\b(?:bool|byte|complex(?:64|128)|error|float(?:32|64)|rune|string|u?int(?:8|16|32|64)?|uintptr|append|cap|close|complex|copy|delete|imag|len|make|new|panic|print(?:ln)?|real|recover)\b/}),delete k.languages.go["class-name"];(function(o){o.languages.typescript=o.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/}),o.languages.typescript.keyword.push(/\b(?:abstract|as|declare|implements|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete o.languages.typescript.parameter;var r=o.languages.extend("typescript",{});delete r["class-name"],o.languages.typescript["class-name"].inside=r,o.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:r}}}}),o.languages.ts=o.languages.typescript})(k);(function(){if(typeof k<"u"&&typeof document<"u"){var o="line-numbers",r=/\n(?!$)/g,c=k.plugins.lineNumbers={getLine:function(d,_){if(d.tagName==="PRE"&&d.classList.contains(o)){var u=d.querySelector(".line-numbers-rows");if(u){var b=parseInt(d.getAttribute("data-start"),10)||1,v=b+(u.children.length-1);_<b&&(_=b),v<_&&(_=v);var j=_-b;return u.children[j]}}},resize:function(d){s([d])},assumeViewportIndependence:!0},g=void 0;window.addEventListener("resize",function(){c.assumeViewportIndependence&&g===window.innerWidth||(g=window.innerWidth,s(Array.prototype.slice.call(document.querySelectorAll("pre."+o))))}),k.hooks.add("complete",function(d){if(d.code){var _=d.element,u=_.parentNode;if(u&&/pre/i.test(u.nodeName)&&!_.querySelector(".line-numbers-rows")&&k.util.isActive(_,o)){_.classList.remove(o),u.classList.add(o);var b,v=d.code.match(r),j=v?v.length+1:1,C=new Array(j+1).join("<span></span>");(b=document.createElement("span")).setAttribute("aria-hidden","true"),b.className="line-numbers-rows",b.innerHTML=C,u.hasAttribute("data-start")&&(u.style.counterReset="linenumber "+(parseInt(u.getAttribute("data-start"),10)-1)),d.element.appendChild(b),s([u]),k.hooks.run("line-numbers",d)}}}),k.hooks.add("line-numbers",function(d){d.plugins=d.plugins||{},d.plugins.lineNumbers=!0})}function s(d){if((d=d.filter(function(u){var b=function(v){return v?window.getComputedStyle?getComputedStyle(v):v.currentStyle||null:null}(u)["white-space"];return b==="pre-wrap"||b==="pre-line"})).length!=0){var _=d.map(function(u){var b=u.querySelector("code"),v=u.querySelector(".line-numbers-rows");if(b&&v){var j=u.querySelector(".line-numbers-sizer"),C=b.textContent.split(r);j||((j=document.createElement("span")).className="line-numbers-sizer",b.appendChild(j)),j.innerHTML="0",j.style.display="block";var V=j.getBoundingClientRect().height;return j.innerHTML="",{element:u,lines:C,lineHeights:[],oneLinerHeight:V,sizer:j}}}).filter(Boolean);_.forEach(function(u){var b=u.sizer,v=u.lines,j=u.lineHeights,C=u.oneLinerHeight;j[v.length-1]=void 0,v.forEach(function(V,l){if(V&&1<V.length){var p=b.appendChild(document.createElement("span"));p.style.display="block",p.textContent=V}else j[l]=C})}),_.forEach(function(u){for(var b=u.sizer,v=u.lineHeights,j=0,C=0;C<v.length;C++)v[C]===void 0&&(v[C]=b.children[j++].getBoundingClientRect().height)}),_.forEach(function(u){var b=u.sizer,v=u.element.querySelector(".line-numbers-rows");b.style.display="none",b.innerHTML="",u.lineHeights.forEach(function(j,C){v.children[C].style.height=j+"px"})})}}})();(function(){if(typeof k<"u"&&typeof document<"u"){var o=/(?:^|\s)command-line(?:\s|$)/,r="command-line-prompt",c="".startsWith?function(d,_){return d.startsWith(_)}:function(d,_){return d.indexOf(_)===0};k.hooks.add("before-highlight",function(d){var _=s(d);if(!_.complete&&d.code){var u=d.element.parentElement;if(u&&/pre/i.test(u.nodeName)&&(o.test(u.className)||o.test(d.element.className))){var b=d.element.querySelector("."+r);b&&b.remove();var v=d.code.split(`
`);_.numberOfLines=v.length;var j=_.outputLines=[],C=u.getAttribute("data-output"),V=u.getAttribute("data-filter-output");if(C!==null)C.split(",").forEach(function(p){var f=p.split("-"),y=parseInt(f[0],10),m=f.length===2?parseInt(f[1],10):y;if(!isNaN(y)&&!isNaN(m)){y<1&&(y=1),m>v.length&&(m=v.length),m--;for(var x=--y;x<=m;x++)j[x]=v[x],v[x]=""}});else if(V)for(var l=0;l<v.length;l++)c(v[l],V)&&(j[l]=v[l].slice(V.length),v[l]="");d.code=v.join(`
`)}else _.complete=!0}else _.complete=!0}),k.hooks.add("before-insert",function(d){var _=s(d);if(!_.complete){for(var u=d.highlightedCode.split(`
`),b=_.outputLines||[],v=0,j=b.length;v<j;v++)b.hasOwnProperty(v)&&(u[v]=b[v]);d.highlightedCode=u.join(`
`)}}),k.hooks.add("complete",function(d){if(function(m){return"command-line"in(m.vars=m.vars||{})}(d)){var _=s(d);if(!_.complete){var u,b=d.element.parentElement;o.test(d.element.className)&&(d.element.className=d.element.className.replace(o," ")),o.test(b.className)||(b.className+=" command-line");var v=_.numberOfLines||0,j=y("data-prompt","");j!==""?u=g('<span data-prompt="'+j+'"></span>',v):u=g('<span data-user="'+y("data-user","user")+'" data-host="'+y("data-host","localhost")+'"></span>',v);var C=document.createElement("span");C.className=r,C.innerHTML=u;for(var V=_.outputLines||[],l=0,p=V.length;l<p;l++)if(V.hasOwnProperty(l)){var f=C.children[l];f.removeAttribute("data-user"),f.removeAttribute("data-host"),f.removeAttribute("data-prompt")}d.element.insertBefore(C,d.element.firstChild),_.complete=!0}}function y(m,x){return(b.getAttribute(m)||x).replace(/"/g,"&quot")}})}function g(d,_){for(var u="",b=0;b<_;b++)u+=d;return u}function s(d){var _=d.vars=d.vars||{};return _["command-line"]=_["command-line"]||{}}})();const n=w(h(o=>{J(h(Kn,"s_xpHfw0IVdtQ")),te(h(Gn,"s_9nD1QfxsUmk"));const r=ne(),c=ne("copied!!"),g=o.code.trim().replaceAll("&backtick;","`").replaceAll("&dollar;","$"),s=h(()=>{const[u]=ee();u.value.style.display="block"},"s_bxsb0FLEhM0",[r]),d=h(()=>{const[u]=ee();u.value.style.display="none"},"s_lJW0iFnOZxE",[r]),_=h(()=>{const[u,b]=ee(),v=document.createElement("textarea");document.body.appendChild(v),v.value=b.code,v.select(),document.execCommand("copy"),document.body.removeChild(v),setTimeout(()=>{u.value="copy"},2e3)},"s_tdIu60M2rm0",[c,o]);return a("div",{class:"post-code",onMouseEnter$:s,onMouseLeave$:d,children:[o.filename&&t("p",{class:"filename",children:W(o,"filename")},"nG_0"),t("button",{type:"button",id:"copy-button",style:`top: ${o.filename?"46px":"16px"};`,onClick$:_,ref:r,children:"copy"}),t("code",{class:`language-${o.language??"typescript"}`,dangerouslySetInnerHTML:k.highlight(g,k.languages[o.language??"typescript"],o.language??"typescript")})],[e]:{children:!1}},"nG_1")},"s_DCuCyW7GEVg")),ta=`.post-date{float:right;color:var(--grey);padding-top:11px}@media (max-width: 700px){.post-date{padding-top:0}}
`,O=w(h(()=>(J(h(ta,"s_AX0ze0v2STI")),t("div",{class:"post-date",children:t(Q,{},"Bu_0")},"Bu_1")),"s_PfEofmyIzac")),oa=`hr{display:flex;justify-content:center;align-items:center;height:30px;margin:20px 0;border:0}hr:before{content:" ";width:260px;height:1px;background-color:var(--silver)}hr:after{content:"Jerrynim";position:absolute;width:140px;background-color:#fff;text-align:center;font-size:21px;font-family:Mansalva;color:var(--silver)}
`;h(()=>(J(h(oa,"s_EWeedRmJJkQ")),t("hr",{},"3U_0")),"s_wk1CGITMvLg");const na=`.post-head{display:block;width:100%;max-width:680px;margin:auto auto 48px}h1{color:var(--black);margin:0 0 20px;font-size:40px;font-weight:700}@media (max-width: 700px){.post-head{width:auto;padding:0 20px;margin-bottom:20px}h1{font-size:32px}}
`,$=w(h(()=>(te(h(na,"s_wIACso0OaA0")),t("div",{class:"post-head",children:t(Q,{},"Jk_0")},"Jk_1")),"s_Zhww5RSNqso")),aa=`.PostHeadImage-wrapper{position:relative;display:block;width:100%;padding-bottom:30%;margin-bottom:80px}@media (max-width: 700px){.PostHeadImage-wrapper{margin-bottom:20px}}div{width:100%;height:100%;position:absolute;background-attachment:fixed;background-repeat:no-repeat;background-position:0 68px;background-size:contain}
`,Ue=["https://res.cloudinary.com/dij9kacx9/image/upload/v1634978785/a-frame_gtk4je.jpg","https://res.cloudinary.com/dij9kacx9/image/upload/v1639296340/lit-blog/closure_fjqvyd.jpg","https://res.cloudinary.com/dij9kacx9/image/upload/v1631084015/lit-blog/balloon_nosppg.jpg","https://res.cloudinary.com/dij9kacx9/image/upload/v1640683677/lit-blog/semi_qqxojj.jpg","https://res.cloudinary.com/dij9kacx9/image/upload/v1628066597/lit-blog/lit-post-head_tjswjn.jpg","https://res.cloudinary.com/dij9kacx9/image/upload/v1640702976/lit-blog/key_fzonmy.jpg","https://res.cloudinary.com/dij9kacx9/image/upload/v1640095781/lit-blog/nono_knwr4l.jpg","https://res.cloudinary.com/dij9kacx9/image/upload/v1633620056/lit-blog/semantic_wlbgsb.jpg","https://res.cloudinary.com/dij9kacx9/image/upload/v1628066597/lit-blog/lit-post-head_tjswjn.jpg","https://res.cloudinary.com/dij9kacx9/image/upload/v1635330118/lit-blog/route_fjzln0.jpg","https://res.cloudinary.com/dij9kacx9/image/upload/v1633615729/lit-blog/vanila_azzeyy.jpg","https://res.cloudinary.com/dij9kacx9/image/upload/v1627115456/lit-blog/Desktop_-_3_yx69ez.jpg","https://res.cloudinary.com/dij9kacx9/image/upload/v1646623154/lit-blog/Desktop_-_6_a9c6iv.jpg","https://res.cloudinary.com/dij9kacx9/image/upload/v1646623155/lit-blog/Desktop_-_4_mex9pw.jpg","https://res.cloudinary.com/dij9kacx9/image/upload/v1646623155/lit-blog/Desktop_-_9_byznng.jpg","https://res.cloudinary.com/dij9kacx9/image/upload/v1646623155/lit-blog/Desktop_-_10_fdjrvv.jpg","https://res.cloudinary.com/dij9kacx9/image/upload/v1646623155/lit-blog/Desktop_-_7_nkgpxv.jpg","https://res.cloudinary.com/dij9kacx9/image/upload/v1646623156/lit-blog/Desktop_-_14_narsbb.jpg","https://res.cloudinary.com/dij9kacx9/image/upload/v1646623156/lit-blog/Desktop_-_13_qfiiaj.jpg","https://res.cloudinary.com/dij9kacx9/image/upload/v1646623156/lit-blog/Desktop_-_16_swyn3i.jpg","https://res.cloudinary.com/dij9kacx9/image/upload/v1646623156/lit-blog/Desktop_-_18_aintim.jpg","https://res.cloudinary.com/dij9kacx9/image/upload/v1646623156/lit-blog/Desktop_-_17_uluu1z.jpg","https://res.cloudinary.com/dij9kacx9/image/upload/v1646623155/lit-blog/Desktop_-_12_uzlnkb.jpg","https://res.cloudinary.com/dij9kacx9/image/upload/v1646623156/lit-blog/Desktop_-_11_tvwgsv.jpg","https://res.cloudinary.com/dij9kacx9/image/upload/v1646623155/lit-blog/Desktop_-_15_yeywqe.jpg","https://res.cloudinary.com/dij9kacx9/image/upload/v1646623156/lit-blog/Desktop_-_20_jlvtpu.jpg","https://res.cloudinary.com/dij9kacx9/image/upload/v1646623156/lit-blog/Desktop_-_22_wq6td6.jpg","https://res.cloudinary.com/dij9kacx9/image/upload/v1646623156/lit-blog/Desktop_-_19_vo3zuw.jpg","https://res.cloudinary.com/dij9kacx9/image/upload/v1646623157/lit-blog/Desktop_-_30_hw2te8.jpg","https://res.cloudinary.com/dij9kacx9/image/upload/v1646623157/lit-blog/Desktop_-_25_xe4ksy.jpg","https://res.cloudinary.com/dij9kacx9/image/upload/v1646623157/lit-blog/Desktop_-_23_pspzcz.jpg","https://res.cloudinary.com/dij9kacx9/image/upload/v1646623157/lit-blog/Desktop_-_26_wght7t.jpg","https://res.cloudinary.com/dij9kacx9/image/upload/v1646623157/lit-blog/Desktop_-_31_rfmthe.jpg","https://res.cloudinary.com/dij9kacx9/image/upload/v1646623157/lit-blog/Desktop_-_28_hmlxal.jpg","https://res.cloudinary.com/dij9kacx9/image/upload/v1646623157/lit-blog/Desktop_-_29_oefu3x.jpg","https://res.cloudinary.com/dij9kacx9/image/upload/v1646623157/lit-blog/Desktop_-_32_fn1u8s.jpg","https://res.cloudinary.com/dij9kacx9/image/upload/v1646623157/lit-blog/Desktop_-_33_jxkrqk.jpg","https://res.cloudinary.com/dij9kacx9/image/upload/v1646623158/lit-blog/Desktop_-_35_lxtxpf.jpg","https://res.cloudinary.com/dij9kacx9/image/upload/v1646623157/lit-blog/Desktop_-_27_rc0oxq.jpg","https://res.cloudinary.com/dij9kacx9/image/upload/v1646623157/lit-blog/Desktop_-_34_v7igfp.jpg","https://res.cloudinary.com/dij9kacx9/image/upload/v1646623158/lit-blog/Desktop_-_36_njetbd.jpg","https://res.cloudinary.com/dij9kacx9/image/upload/v1646623158/lit-blog/Desktop_-_37_emu0zw.jpg","https://res.cloudinary.com/dij9kacx9/image/upload/v1646623158/lit-blog/Desktop_-_38_zip8pg.jpg","https://res.cloudinary.com/dij9kacx9/image/upload/v1646623158/lit-blog/Desktop_-_41_ja1wly.jpg","https://res.cloudinary.com/dij9kacx9/image/upload/v1646623157/lit-blog/Desktop_-_24_aklixc.jpg","https://res.cloudinary.com/dij9kacx9/image/upload/v1646623158/lit-blog/Desktop_-_40_wnhcko.jpg","https://res.cloudinary.com/dij9kacx9/image/upload/v1646623159/lit-blog/Desktop_-_47_s96koq.jpg","https://res.cloudinary.com/dij9kacx9/image/upload/v1646623158/lit-blog/Desktop_-_43_lp8jfg.jpg","https://res.cloudinary.com/dij9kacx9/image/upload/v1646623158/lit-blog/Desktop_-_45_wenm6r.jpg","https://res.cloudinary.com/dij9kacx9/image/upload/v1646623158/lit-blog/Desktop_-_46_q3k5tg.jpg","https://res.cloudinary.com/dij9kacx9/image/upload/v1646623159/lit-blog/Desktop_-_39_okpwyp.jpg","https://res.cloudinary.com/dij9kacx9/image/upload/v1646623159/lit-blog/unsplash_HBABoZYH0yI_dw5r9p.jpg","https://res.cloudinary.com/dij9kacx9/image/upload/v1646623159/lit-blog/unsplash_Sd6RpQexItw_zprkha.jpg","https://res.cloudinary.com/dij9kacx9/image/upload/v1646623159/lit-blog/unsplash_OBmBHmrc3pw_zm6v0l.jpg"],ra=()=>Ue[Math.round(Math.random()*Ue.length)].replace("/upload/","/upload/q_auto/").replace(".jpg",".webp"),D=w(h(o=>(J(h(aa,"s_gXT70XcQgrI")),t("div",{class:"PostHeadImage-wrapper",children:t("div",{style:`background-image: url(${o.src?o.src.replace(".jpg",".webp"):ra()});`})},"xg_0")),"s_Ux0DJcogdug")),ia=`.post-image{display:block;margin:20px 0}span{color:var(--grey)}a{cursor:zoom-in;display:block;text-align:center;margin:auto;width:100%;max-width:680px}img{width:100%}
`,P=w(h(o=>{J(h(ia,"s_xxwAQtF4j0k"));const r=o.src.replace("/upload/",`/upload/w_${o.width||680}/`).replace(".jpg",".webp");return a("div",{class:"post-image",children:[t("a",{href:r,target:"_blank",rel:"noreferrer",children:t("img",{src:r,get alt(){return o.alt},[e]:{alt:W(o,"alt")}})}),t("span",{children:W(o,"alt")})]},"o9_0")},"s_H0bR2aVuEsM")),la=`.post-link{display:inline-block;color:var(--main)}.hidden-text{width:0;height:0;opacity:0;font-size:0}p{color:var(--main)!important}a:hover{color:var(--main)}
`,L=w(h(o=>(J(h(la,"s_cmAMHw7gUGs")),a("a",{get href(){return o.href},target:"_blank",rel:"noreferrer",class:"post-link",children:[t("p",{class:"hidden-text",children:W(o,"href")}),t(Q,{},"vK_0")],[e]:{href:W(o,"href")}},"vK_1")),"s_0sby2d1wVgk")),sa=`.post-tag-wrapper{display:inline-block;padding:0;margin:0}.post-tag{display:inline-block;margin-right:6px;margin-bottom:0;padding:6px 12px;border:1px solid var(--main);border-radius:8px;color:var(--main);font-size:14px}.post-tag:before{content:none}
`,T=w(h(o=>{var c;te(h(sa,"s_cONmBTp2wFk"));const r=(c=o.tags)==null?void 0:c.split(" ");return t("ul",{class:"post-tag-wrapper",children:r==null?void 0:r.map(g=>a("li",{class:"post-tag",children:["#",g]},"Xw_0"))},"Xw_1")},"s_feh4JWrArbc")),ca=w(h(o=>a("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#0b1a1e",...o,children:[t("path",{d:"M0 0h24v24H0V0z",fill:"none"}),t("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"})]},"lz_0"),"s_1JJEiQmTgVs")),da=`h2:hover svg{visibility:visible;opacity:1}h2{display:flex;cursor:pointer;align-items:center;position:relative;font-size:30px;font-weight:700;color:var(--black);transition:var(--transition);word-break:break-all;margin-top:30px;margin-bottom:20px;width:fit-content}h2:hover{text-decoration:underline}.subtitle{position:relative;font-size:24px;font-weight:700;color:var(--black);transition:var(--transition);word-break:break-all;margin-top:20px;margin-bottom:10px}.copy-icon{margin-left:6px;vertical-align:middle;transition:var(--transition);opacity:0;visibility:hidden}
`,i=w(h(o=>{te(h(da,"s_JASLTljJcho"));const r=h(()=>{const[c]=ee(),g=document.createElement("textarea");document.body.appendChild(g),g.value=`${window.location.href}#${encodeURI(c.subtitle||c.title)}`,g.select(),document.execCommand("copy"),document.body.removeChild(g);const s=new CustomEvent("toast-up",{composed:!0,detail:{text:"클립보드에 복사되었습니다."}});window.dispatchEvent(s)},"s_R1PgTgwVfmY",[o]);return a("h2",{class:o.subtitle&&"subtitle",get id(){return o.title},onClick$:r,children:[o.subtitle||o.title,t(ca,{class:"copy-icon",[e]:{class:e}},"mI_0")],[e]:{id:W(o,"title"),children:!1}},"mI_1")},"s_YF4Y0nk4P8I")),pa=`.PostBlockquote{position:relative;display:block;margin:12px 0;padding:3px 0;color:var(--black)}blockquote:before{position:absolute;top:0;left:-12px;width:3px;height:100%;content:" ";background-color:var(--typescript)}
`,F=w(h(()=>(J(h(pa,"s_ijpk4Lt0Zd0")),t("blockquote",{class:"PostBlockquote",children:t(Q,{},"y6_0")},"y6_1")),"s_SLhOAJ0yFbE")),ua=!0,ga='((s,a,i,r)=>{i=(e,t)=>{t=document.querySelector("[q\\\\:base]"),t&&a.active&&a.active.postMessage({type:"qprefetch",base:t.getAttribute("q:base"),...e})},document.addEventListener("qprefetch",e=>{const t=e.detail;a?i(t):t.bundles&&s.push(...t.bundles)}),navigator.serviceWorker.register("/service-worker.js").then(e=>{r=()=>{a=e,i({bundles:s})},e.installing?e.installing.addEventListener("statechange",t=>{t.target.state=="activated"&&r()}):e.active&&r()}).catch(e=>console.error(e))})([])',Te=re("qc-s"),Oe=re("qc-c"),Ze=re("qc-ic"),Ve=re("qc-h"),Re=re("qc-l"),Fe=re("qc-n"),Ke=re("qc-a"),$i=w(h(()=>{const o=ae(Ze);if(o.value&&o.value.length>0){const r=o.value.length;let c=null;for(let g=r-1;g>=0;g--)c=Ye(o.value[g].default,{children:c,[e]:{children:!1}});return c}return Pn},"RouterOutlet_component_AKetNByE5TM")),Qe=new WeakMap,je=Symbol(),ma=Symbol(),_e=new Map,Ge="qaction",ha=async(o,r,c,g)=>{if(Array.isArray(o))for(const s of o){const d=s[0].exec(g);if(d){const _=s[1],u=fa(s[2],d),b=s[4],v=new Array(_.length),j=[],C=ba(r,g);let V;return _.forEach((l,p)=>{We(l,j,f=>v[p]=f,c)}),We(C,j,l=>V=l==null?void 0:l.default,c),j.length>0&&await Promise.all(j),[u,v,V,b]}}return null},We=(o,r,c,g)=>{if(typeof o=="function"){const s=Qe.get(o);if(s)c(s);else{const d=o();typeof d.then=="function"?r.push(d.then(_=>{g!==!1&&Qe.set(o,_),c(_)})):d&&c(d)}}},ba=(o,r)=>{if(o){r=r.endsWith("/")?r:r+"/";const c=o.find(g=>g[0]===r||r.startsWith(g[0]+(r.endsWith("/")?"":"/")));if(c)return c[1]}},fa=(o,r)=>{const c={};if(o)for(let g=0;g<o.length;g++){const s=(r==null?void 0:r[g+1])??"",d=s.endsWith("/")?s.slice(0,-1):s;c[o[g]]=decodeURIComponent(d)}return c},ya=(o,r,c,g)=>{const s=Be(),_={head:s,withLocale:u=>Ie(g,u),resolveValue:u=>{const b=u.__qrl.getHash();if(u.__brand==="server_loader"&&!(b in o.loaders))throw new Error("You can not get the returned data of a loader that has not been executed for this request.");const v=o.loaders[b];if(v instanceof Promise)throw new Error("Loaders returning a function can not be refered to in the head function.");return v},...r};for(let u=c.length-1;u>=0;u--){const b=c[u]&&c[u].head;b&&(typeof b=="function"?Je(s,Ie(g,()=>b(_))):typeof b=="object"&&Je(s,b))}return _.head},Je=(o,r)=>{typeof r.title=="string"&&(o.title=r.title),Ce(o.meta,r.meta),Ce(o.links,r.links),Ce(o.styles,r.styles),Object.assign(o.frontmatter,r.frontmatter)},Ce=(o,r)=>{if(Array.isArray(r))for(const c of r){if(typeof c.key=="string"){const g=o.findIndex(s=>s.key===c.key);if(g>-1){o[g]=c;continue}}o.push(c)}},Be=()=>({title:"",meta:[],links:[],styles:[],frontmatter:{}}),_a=()=>ae(Oe),Di=()=>ae(Ve),qe=()=>ae(Re),va=()=>ae(Fe),ka=()=>ae(Ke),La=()=>Xe(On("qwikcity")),Ae=o=>o.pathname+o.search+o.hash,ve=(o,r)=>new URL(o,r.href),wa=(o,r)=>o.origin===r.origin,xa=(o,r)=>o.pathname===r.pathname,Ma=(o,r,c)=>{let g=r??"";return c&&(g+=(g?"&":"?")+Ge+"="+encodeURIComponent(c.id)),o+(o.endsWith("/")?"":"/")+"q-data.json"+g},ja=(o,r)=>{const c=o.href;if(typeof c=="string"&&c.trim()!==""&&typeof o.target!="string")try{const g=ve(c,r),s=ve("",r);if(wa(g,s))return Ae(g)}catch(g){console.error(g)}return null},Ca=(o,r,c)=>{if(o.prefetch===!0&&r){const g=ve(r,c);if(!xa(g,ve("",c)))return""}return null},Ea=o=>{typeof document<"u"&&document.dispatchEvent(new CustomEvent("qprefetch",{detail:o}))},et=async(o,r,c)=>{const g=o.pathname,s=o.search,d=Ma(g,s,c);let _;if(c||(_=_e.get(d)),Ea({links:[g]}),!_){const u=Sa(c);c&&(c.data=void 0),_=fetch(d,u).then(b=>{const v=new URL(b.url);if(v.origin!==location.origin||!Aa(v.pathname)){location.href=v.href;return}if((b.headers.get("content-type")||"").includes("json"))return b.text().then(j=>{const C=Zn(j);if(!C){location.href=o.href;return}if(r&&_e.delete(d),C.redirect)location.href=C.redirect;else if(c){const V=C.loaders[c.id];c.resolve({status:b.status,result:V})}return C});location.href=o.href}),c||_e.set(d,_)}return _.then(u=>(u||_e.delete(d),u))},Sa=o=>{const r=o==null?void 0:o.data;if(r)return r instanceof FormData?{method:"POST",body:r}:{method:"POST",body:JSON.stringify(r),headers:{"Content-Type":"application/json, charset=UTF-8"}}},Aa=o=>o.endsWith(Pa),Pa="/q-data.json",Ti=w(h(()=>{const o=La();if(!(o!=null&&o.params))throw new Error("Missing Qwik City Env Data");const r=Hn("url");if(!r)throw new Error("Missing Qwik URL Env Data");const c=new URL(r),g=G({url:c,href:c.href,pathname:c.pathname,query:c.searchParams,params:o.params,isNavigating:!1}),s=$n(G(o.response.loaders)),d=ne(Ae(c)),_=G(Be),u=G({headings:void 0,menu:void 0}),b=ne(),v=o.response.action,j=v?o.response.loaders[v]:void 0,C=ne(j?{id:v,data:o.response.formData,output:{result:j,status:o.response.status}}:void 0),V=h(async l=>{const[p,f,y]=ee(),m=f.value;if(l){if(m===l)return;f.value=l}else f.value="",f.value=m;const x=new URL(f.value,y.url);et(x),ha(jn,Cn,En,x.pathname),p.value=void 0,y.isNavigating=!0},"QwikCityProvider_component_goto_fX0bDjeJa0E",[C,d,g]);return q(Oe,u),q(Ze,b),q(Ve,_),q(Re,g),q(Fe,V),q(Te,s),q(Ke,C),Dn(h(({track:l})=>{const[p,f,y,m,x,M,E,Z]=ee();async function z(){const[N,oe]=l(()=>[E.value,p.value]),Y=Vn("");let I=new URL(N,Z.url),B,ie=null;if(ie=x.loadedRoute,B=x.response,ie){const[ue,ge,Le]=ie,le=ge,me=le[le.length-1];Z.url=I,Z.href=I.href,Z.pathname=I.pathname,Z.params={...ue},Z.query=I.searchParams,E.untrackedValue=Ae(I);const R=ya(B,Z,le,Y);f.headings=me.headings,f.menu=Le,y.value=Xe(le),m.links=R.links,m.meta=R.meta,m.styles=R.styles,m.title=R.title,m.frontmatter=R.frontmatter}}const de=z();if(ua)return de},"QwikCityProvider_component_useTask_02wMImzEAbk",[C,u,b,_,o,s,d,g])),t(Q,{},"qY_0")},"QwikCityProvider_component_TxCFOy819ag"));h(o=>{const r=o.url??"http://localhost/",c=new URL(r),g=G({url:c,href:c.href,pathname:c.pathname,query:c.searchParams,params:o.params??{},isNavigating:!1}),s=ne({}),d=h(async v=>{throw new Error("Not implemented")},"QwikCityMockProvider_component_goto_BUbtvTyvVRE"),_=G(Be),u=G({headings:void 0,menu:void 0}),b=ne();return q(Oe,u),q(Ze,b),q(Ve,_),q(Re,g),q(Fe,d),q(Te,s),t(Q,{},"qY_1")},"QwikCityMockProvider_component_WmYC5H00wtI");const Ha=w(h(o=>{const r=va(),c=qe(),g=o.href,s={...o},d=ja(s,c),_=Ca(o,d,c);return s["preventdefault:click"]=!!d,s.href=d||g,Tn("qinit",h(()=>{window[je]||(window[je]=()=>{window[ma]||location.reload()},setTimeout(()=>{addEventListener("popstate",window[je])},0))},"Link_component_useOnDocument_u0YVoxt2aTY")),t("a",{...s,onClick$:h(()=>{const[u,b,v]=ee();u&&v(b.href)},"Link_component_a_onClick_kzjavhDI3L0",[d,s,r]),"data-prefetch":_,onMouseOver$:h((u,b)=>Ee(b),"Link_component_a_onMouseOver_yiXwCC0m3jY"),onFocus$:h((u,b)=>Ee(b),"Link_component_a_onFocus_PrXIxv2vNXY"),onQVisible$:h((u,b)=>Ee(b,!0),"Link_component_a_onQVisible_EpaZ5qQ4Lg4"),children:t(Q,{},"AD_0")},"AD_1")},"Link_component_8gdLBszqbaM")),Ee=(o,r)=>{o&&o.href&&o.hasAttribute("data-prefetch")&&(Se||(Se=innerWidth),(!r||r&&Se<520)&&et(new URL(o.href)))};let Se=0;const Oi=()=>Ye("script",{dangerouslySetInnerHTML:ga}),$a=(o,r)=>{const c=o.getHash();function g(){const s=qe(),d=ka(),_={actionPath:`?${Ge}=${c}`,isRunning:!1,status:void 0,value:void 0,formData:void 0},u=G(()=>{const b=d.value;if(b&&(b==null?void 0:b.id)===c){const v=b.data;if(v instanceof FormData&&(_.formData=v),b.output){const{status:j,result:C}=b.output;_.status=j,_.value=C}}return _});return _.run=h((b={})=>{throw ee(),new Error(`Actions can not be invoked within the server during SSR.
Action.run() can only be called on the browser, for example when a user clicks a button, or submits a form.`)},"actionQrl_action_8eAhmK7N0n0",[d,c,s,u]),u}return g.__brand="server_action",g.__schema=r,g.__qrl=o,g.use=g,typeof globalThis._qwikActionsMap>"u"&&(globalThis._qwikActionsMap=new Map),globalThis._qwikActionsMap.set(o.getHash(),g),g};De($a);const Da=o=>{const r=o.getHash();function c(){return ae(Te,g=>{if(!(r in g))throw new Error(`Loader was used in a path where the 'loader$' was not declared.
    This is likely because the used loader was not exported in a layout.tsx or index.tsx file of the existing route.
    For more information check: https://qwik.builder.io/qwikcity/loader`);return W(g,r)})}return c.__brand="server_loader",c.__qrl=o,c.use=c,c};De(Da);const Ta=async o=>{{let r=await o.resolve();return typeof r=="function"&&(r=r(ze)),ze.object(r)}};De(Ta);const Oa=`.post-series{width:100%;margin-top:32px;background-color:#fcfeff;border-radius:4px;box-shadow:0 0 1px #00000040}.post-series-title{color:var(--black);padding:12px 12px 8px;font-size:18px;font-weight:700;border-bottom:1px solid #e7e7e7}.post-series-item-wrapper{display:flex;margin:0;padding:12px 12px 12px 20px;flex-direction:column;gap:8px}.selected-post-series-item{font-size:15px;font-weight:700;text-decoration:underline;color:var(--main);align-self:flex-start}.post-series-item{font-size:15px;color:var(--main);align-self:flex-start}
`,ce=w(h(o=>{var s,d,_;te(h(Oa,"s_800wn8xnU8c"));const r=_a(),c=qe(),g=(d=(s=r.menu)==null?void 0:s.items)==null?void 0:d.find(u=>u.text===o.title);return g?a("div",{class:"post-series",children:[t("div",{class:"post-series-title",children:W(o,"title")}),t("ol",{class:"post-series-item-wrapper",children:(_=g==null?void 0:g.items)==null?void 0:_.map((u,b)=>{const v=c.pathname.includes(u.href);return t(Ha,{class:v?"selected-post-series-item":"post-series-item",href:v?void 0:u.href,children:W(u,"text"),[e]:{class:e}},b)})})]},"UD_0"):null},"s_OvLLIxDhabE")),Za=`.title{font-size:24px}.contents{max-width:680px;margin:auto}
`,Va=w(h(()=>(te(h(Za,"s_aNWrpDGks6U")),a(S,{children:[t(ke,{},"L2_0"),a("div",{class:"contents",children:[t("p",{class:"title",children:"Zuix2 E2E 구성도"}),t(P,{src:"https://res.cloudinary.com/dij9kacx9/image/upload/v1674781890/lit-blog/zuix-e2e_gdawtr.png",[e]:{src:e}},"L2_1"),t("p",{class:"title",children:"Zuix2 E2E 결과 페이지"}),t(P,{src:"https://res.cloudinary.com/dij9kacx9/image/upload/v1674782128/lit-blog/zuix2-e2e-result_egmupe.png",[e]:{src:e}},"L2_2"),t("p",{class:"title",children:"Zuix1 E2E 결과"}),t(P,{src:"https://res.cloudinary.com/dij9kacx9/image/upload/v1674785815/lit-blog/zuix1-e2e_hblxun.png",[e]:{src:e}},"L2_3")]})]},"L2_4")),"s_yRgwZ1adWH4")),Ra=Object.freeze(Object.defineProperty({__proto__:null,default:Va},Symbol.toStringTag,{value:"Module"})),Fa=w(h(()=>a("div",{children:[t("p",{children:"주로 사용"}),a("p",{children:["react, next.js, typescript, qwik, lit, graphql, typeorm, prisma, yarn workspace, react-native, serverless farmework, 각종 pipeline"," "]}),t("p",{children:"사용 해봄"}),t("p",{children:"lerna, go, nestjs,fastlane"}),t("p",{children:"맛보기"}),t("p",{children:"맛 볼 예정"})]},"IT_0"),"s_fBdRRKiJlT0")),Ba=Object.freeze(Object.defineProperty({__proto__:null,default:Fa},Symbol.toStringTag,{value:"Module"})),qa={title:"A-Frame Entity 한글 번역",meta:[{property:"keywords",content:"A-Frame 한글 번역"}]},Na=w(h(()=>a(S,{children:[t(D,{src:"https://res.cloudinary.com/dij9kacx9/image/upload/v1634978785/a-frame_gtk4je.jpg",[e]:{src:e}},"0Q_0"),a($,{children:[t("h1",{children:"A-Frame Entity 한글 번역"}),t(T,{tags:"A-Frame 한글 번역",[e]:{tags:e}},"0Q_1"),t(O,{children:"2021-10-23"},"0Q_2")]},"0Q_3"),a(H,{children:["A-Frame은 ",t("code",{children:"<a-entity>"})," 엘리먼트를 통해 엔티티를 표현한다.",t(L,{href:"https://aframe.io/docs/1.2.0/introduction/entity-component-system.html",children:"entity-component-system pattern",[e]:{href:e}},"0Q_4"),"에서 정의한대로, 엔티티는 외관, 행동, 기능을 제공하기 위한 컴포넌트를 플러그인하는 플레이스홀더 오브젝트입니다.",t("br",{}),t("br",{}),"A-Frame에서는 엔티티는 본질적으로 positon, rotation,scale 구성요소와 연결됩니다.",t(i,{subtitle:"Example",[e]:{subtitle:e}},"0Q_5"),"아래의 엔티티를 보도록 하겠습니다. 이 자체로는 외형, 행동, 기능이 없습니다. 이것은 아무것도 하지 않습니다.",t(n,{code:"<a-entity>",language:"html",[e]:{code:e,language:e}},"0Q_6"),"우리는 컴포넌트를 렌더하거나 무언가를 하게만들기위해 컴포넌트에 접근할 수 있습니다. 모양이나 외형을 주기 위해서, 우리는 geometry나 material 컴포넌트에 접근 할 수 있습니다.",t(n,{code:tt,language:"html",[e]:{code:e,language:e}},"0Q_7"),"혹은 빛을 내기 위해 우리는 light 컴포넌트를 추가로 붙일 수 있습니다.",t(i,{subtitle:"엔티티 검색",[e]:{subtitle:e}},"0Q_8"),"DOM API를 사용하여 간단하게 검색을 할 수 있습니다.",t(n,{code:ot,language:"html",[e]:{code:e,language:e}},"0Q_9"),t(n,{code:"var el = document.querySelector('#mario');",language:"typescript",[e]:{code:e,language:e}},"0Q_10"),"엔티티가 있으면, 우리는 아래의 상세 메서드나 프로퍼티에 접근 할 수 있습니다.",t(i,{title:"Properties",[e]:{title:e}},"0Q_11"),t(i,{subtitle:"components",[e]:{subtitle:e}},"0Q_12"),t("code",{children:"<a-entity>.components"})," 는 엔티티에 접근 가능한 객체입니다. 이것은 각 컴포넌트의 data,state,함수들을 포함하여 엔티티의 컴포넌트에 접근하도록 해줍니다.",t("br",{}),t("br",{}),"예를 들어 엔티티의 three.js 카메라 객체나 material 객체를 가져오고 싶다면, 해당 컴포넌트에 접근할 수 있습니다.",t(n,{code:nt,language:"typescript",[e]:{code:e,language:e}},"0Q_13"),"만약 컴포넌트가 API를 노출하는경우, 메소드를 호출할 수 있습니다.",t(n,{code:"document.querySelector('a-entity[sound]').components.sound.pause();",language:"typescript",[e]:{code:e,language:e}},"0Q_14"),t(i,{subtitle:"hasLoaded",[e]:{subtitle:e}},"0Q_15"),"엔터티가 컴포넌트를 연결하고 초기화했는지 여부입니다. 엔터티가 준비된 후 코드가 실행되도록 하는 가장 좋은 방법은 구성 요소 내에 코드를 배치하는 것입니다.",t(i,{subtitle:"isPlaying",children:"isPlaying",[e]:{subtitle:e}},"0Q_16"),"엔터티가 활성 상태이고 재생 중인지 여부입니다. 엔티티를 일시 중지하면 isPlaying가 false 가 됩니다",t(i,{subtitle:"object3D",children:"object3D",[e]:{subtitle:e}},"0Q_17"),t("code",{children:"<a-entity>.object3D"})," 는 three.js Ojbect3D 표현에 대한 참조입니다. 더 구체적으로, object3D 는 cameras, meshes, lights, sounds와 같은 THREE.Object3D의 다양한 타입들을 포함하는 THREE.Group객체가 됩니다.",t(n,{code:at,language:"typescript",[e]:{code:e,language:e}},"0Q_18"),"object3DMap을 이용해 Object3D 의 다양한 타입에 접근할 수 있습니다.",t(i,{subtitle:"object3DMap",[e]:{subtitle:e}},"0Q_19"),"엔티티의 object3DMap 객체는 THREE.Object3D 컴포넌트가 설정 한 다양한 유형 (예: 카메라, 메쉬, 조명, 사운드)에 대한 액세스를 제공하는 개체입니다 .",t("br",{}),"geometry 및 light 컴포넌트가 연결된 엔티티의 경우, object3DMap 은 다음과 같습니다.",t(n,{code:rt,language:"typescript",[e]:{code:e,language:e}},"0Q_20"),"setObject3D 와 removeObject3D 를 이용하여 THREE.Object3D들의 엔티티 셋을 관리할 수 있습니다.",t(i,{subtitle:"sceneEl",children:"sceneEl",[e]:{subtitle:e}},"0Q_21"),"엔티티는 scene 엘리먼트의 참조를 가지고 있습니다.",t(n,{code:it,language:"typescript",[e]:{code:e,language:e}},"0Q_22"),t(i,{subtitle:"Methods",children:"Methods",[e]:{subtitle:e}},"0Q_23"),t(i,{subtitle:"addState",children:"addState (stateName)",[e]:{subtitle:e}},"0Q_24"),"addState는 엔티티에 state를 푸쉬합니다. 그러면 stateadded 이벤트가 발생하고, .is 를 사용하여 state 를 확인할 수 있습니다.",t(n,{code:lt,language:"typescript",[e]:{code:e,language:e}},"0Q_25"),t(i,{subtitle:"destroy()",[e]:{subtitle:e}},"0Q_26"),"컴포넌트와 해당 데이터를 지우는것 처럼같은 엔티티와 관련된 메모리를 정리합니다.",t(i,{subtitle:"emit (name, detail, bubbles)",[e]:{subtitle:e}},"0Q_27"),"emit 은 엔티티에서 커스텀 DOM 이벤트를 실행합니다. 예를들어, trigger an animation: 를 실행할 수 있습니다.",t(n,{code:st,language:"typescript",[e]:{code:e,language:e}},"0Q_28"),"이벤트의 두번째 인자로 데이터나 상세를 전달할 수 있습니다.",t(n,{code:"entity.emit('collide', { target: collidingEntity });",language:"typescript",[e]:{code:e,language:e}},"0Q_29"),"이벤트는 기본적으로 버블을 일으킵니다. bubble: 값에 false 를 전달해 버블을 막을 수 있습니다.",t(n,{code:"entity.emit('sink', null, false);",language:"typescript",[e]:{code:e,language:e}},"0Q_30"),t(i,{subtitle:"flushToDOM (recursive)",[e]:{subtitle:e}},"0Q_31"),"flushToDOM 은 컴포넌트의 데이터를 수동으로 직렬화하고 돔을 업데이트 합니다.Read more about",t(L,{href:"https://aframe.io/docs/1.2.0/components/debug.html#component-to-dom-serialization",children:"component-to-DOM serialization",[e]:{href:e}},"0Q_32"),".",t(i,{subtitle:"getAttribute (componentName)",[e]:{subtitle:e}},"0Q_33"),"getAttribute 파싱된 컴포넌트 데이터(믹스인 및 기본값 포함)를 검색합니다.",t(n,{code:ct,language:"typescript",[e]:{code:e,language:e}},"0Q_34"),"만약 componentName이 등록된 컴포넌트의 이름이 아니라면. getAttribute는 일반적으로 다음처럼 작동합니다.",t(n,{code:dt,language:"typescript",[e]:{code:e,language:e}},"0Q_35"),t(i,{subtitle:"getDOMAttribute (componentName)",[e]:{subtitle:e}},"0Q_36"),"getDOMAttribute 는 돔이나 setAttribute에 의해 명시적으로 정의된 파싱된 컴포넌트 데이터만 검색합니다. 만약 componentName이 등록된 컴포넌트라면, getDOMAttribute 는 오직 파싱된 객체로 HMLT에 존재하는 컴포넌트 데이터만 리턴합니다. getDOMAttribute 은 getAttribute의 부분폼 입니다. 반환되는 컴포넌트 데이터가 적용된 mixins 나 기본값을 포함하지 않음으로서",t("br",{}),"위의 getAttribute 예제와 비교해보겠습니다.",t(n,{code:pt,language:"typescript",[e]:{code:e,language:e}},"0Q_37"),t(i,{subtitle:"getObject3D (type)",[e]:{subtitle:e}},"0Q_38"),"getObject3D은 object3DMap의 타입에 참조된 THREE.Object3D 자식을 바라봅니다.",t(n,{code:ut,language:"typescript",[e]:{code:e,language:e}},"0Q_39"),t(i,{subtitle:"pause ()",[e]:{subtitle:e}},"0Q_40"),"pause() 는 컴포넌트나 애니메이션에 의해 정의된 동적 행위를 정지합니다. 엔티티를 정지할때, 애니메이션을 정지하고 각 컴포넌트에 있는 Component.pause()를 호출합니다. 컴포넌트는 일시 중지 시 발생하는 일을 구현하기로 결정하며, 이는 종종 이벤트 리스너를 제거합니다. 엔터티를 pause()일시 중지하면 엔터티가 자식 엔터티를 호출 합니다.",t(n,{code:gt,language:"typescript",[e]:{code:e,language:e}},"0Q_41"),"예를들어 일시 중지 시",a(L,{href:"https://aframe.io/docs/1.2.0/components/look-controls.html",children:["look-control"," "],[e]:{href:e}},"0Q_42"),"컴포넌트는 입력을 수신하는 이벤트 핸들러를 제거합니다.",t(i,{subtitle:"play ()",[e]:{subtitle:e}},"0Q_43"),"play() 는 컴포넌트나 애니메이션에 의해 정의돈 동적 행위를 시작합니다. 이것은 .DOM이 엔티티에 접근할때 자동으로 호출됩니다. 엔티티 play()할때, 엔티티는 각 자식 엔티티의 play()를 호출합니다.",t("br",{}),"예를들어,재생중인",t(L,{href:"https://aframe.io/docs/1.2.0/components/sound.html",children:"sound component",[e]:{href:e}},"0Q_44"),"는 사운드 재생을 시작합니다.",t(i,{subtitle:"setAttribute (componentName, value, [propertyValue | clobber])",[e]:{subtitle:e}},"0Q_45"),"만약 componentName가 등록된 컴포넌트가 안거나 single-property 컴포넌트이라면 setAttribute 보통 다음처럼 작동합니다.",t(n,{code:"entity.setAttribute('visible', false);",language:"typescript",[e]:{code:e,language:e}},"0Q_46"),"만약 componentName이 등록된 컴포넌트임에도, 값을 위해 특별한 파싱을 다룰수도 있습니다. 예를들어",t(L,{href:"https://aframe.io/docs/1.2.0/components/position.html",children:"position component",[e]:{href:e}},"0Q_47"),"는 single-property 컴포넌트인데, 이 property 타입 파서는 객체를 받도록 해줍니다.",t(n,{code:mt,language:"typescript",[e]:{code:e,language:e}},"0Q_48"),t(i,{subtitle:"Updating Multi-Property Component Data",[e]:{subtitle:e}},"0Q_49"),"multi-property 컴포넌트의 데이터를 업데이트하기 위해선,componentName에 등록된 컴포넌트의 이름을 넣을 수 있고, 값으로 property 객체를 전달할 수 있습니다.string 또한 가능합니다(예,type: spot; distance: 30),하지만 객체는 A-frame이 파싱에하는일을 줄여줍니다.",t(n,{code:ht,language:"typescript",[e]:{code:e,language:e}},"0Q_50"),"혹은 multi-property 컴포넌트의 개별의 프로퍼티를 업데이트하기위해, 등록된 컴포넌트의 componentName 과 두번째 인자로 프로퍼티의 이름, 세번째 인자로 프로퍼티의 값을 줄 수 있습니다.",t(n,{code:bt,language:"typescript",[e]:{code:e,language:e}},"0Q_51"),"배열 프로퍼티 타입들은 특별하게 작동합니다:",a("ul",{children:[t("li",{children:"배열은 변경 가능합니다. 배열에 대한 변경 사항이 컴포넌트에서 볼 수 있도록 참조로 할당됩니다."}),t("li",{children:"배열 유형 속성에 대한 업데이트는 컴포넌트의 update메서드를 트리거 하거나 이벤트를 내 보내지 않습니다 ."})]}),t(i,{subtitle:"Putting Multi-Property Component Data",[e]:{subtitle:e}},"0Q_52"),"만약 .setAttribute의 세번째 인자로 true값을 주게되면, 지정되지 않은 속성이 재설정되고 클로버됩니다",t(n,{code:ft,language:"typescript",[e]:{code:e,language:e}},"0Q_53"),t(i,{subtitle:"setObject3D (type, obj)",[e]:{subtitle:e}},"0Q_54"),"setBoject3D 는 전달된 obj를 등록합니다. THREE.Object3D, 엔티티의 object3DMap 아래의 타입. A-frame은 엔티티 루트 object3D 의 자식으로 obj를 더합니다. 엔티티 는 setObject3D 가 호출 될 때 이벤트 세부 정보 object3dset와 함께 type이벤트를 실행합니다.",t(n,{code:yt,language:"typescript",[e]:{code:e,language:e}},"0Q_55"),t(i,{subtitle:"removeAttribute (componentName, propertyName)",[e]:{subtitle:e}},"0Q_56"),"componentName이 등록된 컴포넌트의 이름이고, DOM에서 속성을 제거하면서,removeAttribute 는 또한 엔티티로부터 컴포넌트를 분리하고, 컴포넌트의 remove 생명주기 메소드를 실행합니다.",t(n,{code:_t,language:"typescript",[e]:{code:e,language:e}},"0Q_57"),"propertyName이 주어지면, removeAttribute 는 propertyName속성의 기본 값을 초기화합니다.",t(n,{code:vt,language:"typescript",[e]:{code:e,language:e}},"0Q_58"),t(i,{subtitle:"removeObject3D (type)",[e]:{subtitle:e}},"0Q_59"),"removeObject3D 엔티티의 THREE.Group의 타입에의해 정의된 객체를 제거하고 scene 또한 그렇게합니다. 이것은 엔티티의 object3DMap 를 업데이트합니다. 타입의 값을 null로 설정합니다. 이것은 보통 컴포넌트로부터 호출됩니다. 종종 헨들러를 제거하면서",t(n,{code:kt,language:"typescript",[e]:{code:e,language:e}},"0Q_60"),t(i,{subtitle:"removeState (stateName)",[e]:{subtitle:e}},"0Q_61"),"removeState 는 엔티티로부터 state를 제거합니다. stateremoved 이벤트를 실행하고, .is를 이용해 state를 확인할 수 있습니다.",t(n,{code:Lt,language:"typescript",[e]:{code:e,language:e}},"0Q_62"),t(i,{subtitle:"Listening for Component Changes",[e]:{subtitle:e}},"0Q_63"),"componentchanged를 사용해 엔티티의 변화를 감지할 수 있습니다.",t(n,{code:wt,language:"typescript",[e]:{code:e,language:e}},"0Q_64"),t(i,{subtitle:"Listening for Child Elements Being Attached and Detached",[e]:{subtitle:e}},"0Q_65"),"child-attached 와 child-detached 이벤트를 이용해 엔티티에 scene이 연결되고 해지되는 것을 감지할 수 있습니다.",t(n,{code:xt,language:"typescript",[e]:{code:e,language:e}},"0Q_66")]},"0Q_67")]},"0Q_68"),"s_mNxoQPh57TU")),tt='<a-entity geometry="primitive: box" material="color: red">',ot='<a-entity id="mario"></a-entity>',nt=`var camera = document.querySelector('a-entity[camera]').components.camera.camera;
var material = document.querySelector('a-entity[material]').components.material.material;`,at=`// Gaining access to the internal three.js scene graph.
var groupObject3D = document.querySelector('a-entity').object3D;
console.log(groupObject3D.parent);
console.log(groupObject3D.children);`,rt=`{
    light: <THREE.Light Object>,
    mesh: <THREE.Mesh Object>
  }`,it=`var sceneEl = document.querySelector('a-scene');
var entity = sceneEl.querySelector('a-entity');
console.log(entity.sceneEl === sceneEl);  // >> true.`,lt=`entity.addEventListener('stateadded', function (evt) {
    if (evt.detail === 'selected') {
      console.log('Entity now selected!');
    }
  });
  
  entity.addState('selected');
  entity.is('selected');  // >> true`,st=`// <a-entity animation="property: rotation; to: 0 360 0; startEvents: rotate">
entity.emit('rotate');`,ct=`// <a-entity geometry="primitive: box; width: 3">

entity.getAttribute('geometry');
// >> {primitive: "box", depth: 2, height: 2, width: 3, ...}

entity.getAttribute('geometry').primitive;
// >> "box"

entity.getAttribute('geometry').height;
// >> 2

entity.getAttribute('position');
// >> {x: 0, y: 0, z: 0}`,dt=`// <a-entity data-position="0 1 1">

entity.getAttribute('data-position');
// >> "0 1 1"`,pt=`// <a-entity geometry="primitive: box; width: 3">

entity.getDOMAttribute('geometry');
// >> { primitive: "box", width: 3 }

entity.getDOMAttribute('geometry').primitive;
// >> "box"

entity.getDOMAttribute('geometry').height;
// >> undefined

entity.getDOMAttribute('position');
// >> undefined`,ut=`AFRAME.registerComponent('example-mesh', {
    init: function () {
      var el = this.el;
      el.setObject3D('mesh', new THREE.Mesh());
      el.getObject3D('mesh');  // Returns THREE.Mesh that was just created.
    }
  });`,gt=`// <a-entity id="spinning-jumping-ball">
entity.pause();`,mt=`entity.setAttribute('position', { x: 1, y: 2, z: 3 });
`,ht=`// Only the properties passed in the object will be overwritten.
entity.setAttribute('light', {
  type: 'spot',
  distance: 30,
  intensity: 2.0
});`,bt=`// All previous properties for the material component (besides the color)  will be unaffected.
entity.setAttribute('material', 'color', 'crimson');`,ft=`// All previous properties for the light component will be removed and overwritten.
entity.setAttribute('light', {
  type: 'spot',
  distance: 30,
  intensity: 2.0
}, true);`,yt=`AFRAME.registerComponent('example-orthogonal-camera', {
    update: function () {
      this.el.setObject3D('camera', new THREE.OrthogonalCamera());
    }
  });`,_t=`entity.removeAttribute('geometry');  // Detach the geometry component.
  entity.removeAttribute('sound');  // Detach the sound component.`,vt=`entity.setAttribute('material', 'color', 'blue');  // The color is blue.
  entity.removeAttribute('material', 'color');  // Reset the color to the default value, white.`,kt=`AFRAME.registerComponent('example-light', {
    update: function () {
      this.el.setObject3D('light', new THREE.Light());
      // Light is now part of the scene.
      // object3DMap.light is now a THREE.Light() object.
    },
  
    remove: function () {
      this.el.removeObject3D('light');
      // Light is now removed from the scene.
      // object3DMap.light is now null.
    }
  });`,Lt=`entity.addEventListener('stateremoved', function (evt) {
    if (evt.detail.state === 'selected') {
      console.log('Entity no longer selected.');
    }
  });
  
  entity.addState('selected');
  entity.is('selected');  // >> true
  
  entity.removeState('selected');
  entity.is('selected');  // >> false`,wt=`entity.addEventListener('componentchanged', function (evt) {
    if (evt.detail.name === 'position') {
      console.log('Entity has moved to', evt.target.getAttribute('position'), '!');
    }
  });`,xt=`entity.addEventListener('child-attached', function (evt) {
    if (evt.detail.el.tagName.toLowerCase() === 'a-box') {
      console.log('a box element has been attached');
    };
  });`,Ia=Object.freeze(Object.defineProperty({__proto__:null,code1:tt,code10:dt,code11:pt,code12:ut,code13:gt,code14:mt,code15:ht,code16:bt,code17:ft,code18:yt,code19:_t,code2:ot,code20:vt,code21:kt,code22:Lt,code23:wt,code24:xt,code3:nt,code4:at,code5:rt,code6:it,code7:lt,code8:st,code9:ct,default:Na,head:qa},Symbol.toStringTag,{value:"Module"})),za={title:"자바스크립트 클로저 closure",meta:[{property:"keywords",content:"자바스크립트 클로저 closure"}]},Ua=w(h(()=>a(S,{children:[t(D,{src:"https://res.cloudinary.com/dij9kacx9/image/upload/v1639296340/lit-blog/closure_fjqvyd.jpg",[e]:{src:e}},"YW_0"),a($,{children:[t("h1",{children:"클로저"}),t(T,{tags:"자바스크립트 클로저 closure",[e]:{tags:e}},"YW_1"),t(O,{children:"2021-12-08"},"YW_2")]},"YW_3"),a(H,{children:[t("code",{children:"클로저"}),"란 내부함수가 외부함수의 지역변수에 접근 할 수 있고, 외부함수는 외부함수의 지역변수를 사용하는 내부함수가 소멸될 때까지 소멸되지 않는 특성을 의미한다.",t("br",{}),"출처:",t(L,{href:"https://opentutorials.org/course/743/6544",children:"생활코딩",[e]:{href:e}},"YW_4"),t("br",{}),t("br",{}),t(L,{href:"https://developer.mozilla.org/ko/docs/Web/JavaScript/Closures",children:"MDN 에서",[e]:{href:e}},"YW_5"),t("code",{children:"클로저는 함수와 함수가 선언된 어휘적 환경의 조합이다."}),"라고 설명한다.",t("br",{}),"Closures are inner functions that have access to the outer function’s variables and parameters. Even after the outer function’s execution is finished, the inner functions have access to the variables in the outer function.",t(F,{children:"클로저는 외부함수가 실행이 완료된 후에도 외부 함수의 변수와 파라미터에 접근할수 있는 내부함수이다."},"YW_6"),"자세한 설명은 위의 출처를 참고하시길 바랍니다."]},"YW_7")]},"YW_8"),"s_AQfVhPLQt5Q")),Qa=Object.freeze(Object.defineProperty({__proto__:null,default:Ua,head:za},Symbol.toStringTag,{value:"Module"})),Wa={title:"About PodFile",meta:[{property:"keywords",content:"react-native podFile"}]},Ja=w(h(()=>a(S,{children:[t(D,{src:"https://res.cloudinary.com/dij9kacx9/image/upload/v1631084015/lit-blog/balloon_nosppg.jpg",[e]:{src:e}},"ZM_0"),a($,{children:[t("h1",{children:"About PodFile"}),t(T,{tags:"react-native podFile",[e]:{tags:e}},"ZM_1"),t(O,{children:"2021-09-08"},"ZM_2")]},"ZM_3"),a(H,{children:[t(L,{href:"https://guides.cocoapods.org/syntax/podfile.html#podfile",children:"Podfile",[e]:{href:e}},"ZM_4"),"은 하나 이상의 Xcode 프로젝트 target의 종속성을 정의한 사양입니다.",t("br",{}),t("br",{}),"예제 코드와 함게 PodFile의 구문의 의미를 하나씩 살펴보도록 하겠습니다. 기본적으로 PodFile의 언어는 ruby 입니다.",t("br",{}),"터미널에서",t("code",{children:" pod init"}),"을 실행하게되면 다음과 같은 PodFile이 생성됩니다.",t(n,{code:Mt,language:"typescript",filename:"ios/PodFile",[e]:{code:e,language:e,filename:e}},"ZM_5"),a("ul",{children:[a("li",{children:[t(L,{href:"https://guides.cocoapods.org/syntax/podfile.html#platform",children:"platform",[e]:{href:e}},"ZM_6"),t("br",{}),t(n,{code:"platform :ios, '9.0'",[e]:{code:e}},"ZM_7"),"앱에서 지원하려는 플랫폼과 해당 플랫폼의 최소 버전을 지정합니다."]}),a("li",{children:[t(L,{href:"https://guides.cocoapods.org/syntax/podfile.html#target",children:"target",[e]:{href:e}},"ZM_8"),t("br",{}),t(n,{code:"target 'example' do",[e]:{code:e}},"ZM_9"),"주어진 블록 내에서 정의된 CocoaPods 'target' 및 'scopes dependencies'을 정의합니다. 'target'은 Xcode 'target'과 일치해야 합니다."]}),a("li",{children:[t(L,{href:"https://stackoverflow.com/questions/41210249/why-do-we-use-use-frameworks-in-cocoapods",children:"use_frameworks!",[e]:{href:e}},"ZM_10"),t(n,{code:"use_frameworks!",[e]:{code:e}},"ZM_11"),"use_frameworks!정적 라이브러리 대신 프레임워크를 사용하고 싶다고 CocoaPods에 알립니다. Swift는 정적 라이브러리를 지원하지 않기 때문에 프레임워크를 사용해야 합니다."]}),a("li",{children:[t(L,{href:"https://guides.cocoapods.org/syntax/podfile.html#inherit_bang",children:"inherit!",[e]:{href:e}},"ZM_12"),t(n,{code:"inherit! :search_paths",[e]:{code:e}},"ZM_13"),"현재 'target'에 대한 상속 모드를 설정합니다.",t("br",{}),t("br",{}),'":complete" : 부모로부터 모든 동작을 상속합니다.',t("br",{}),'":none" : 부모로부터 어떤 동작도 상속하지 않습니다.',t("br",{}),'":search_paths": 부모의 검색 경로만 상속합니다.']})]}),"기본적인 PodFile의 구문들을 알아보았습니다. 이번에는 제가 실제로 사용하는 PodFile의 구문들을 분석해보도록 하겠습니다.",t(n,{code:jt,language:"typescript",filename:"ios/PodFile",[e]:{code:e,language:e,filename:e}},"ZM_14"),a("ul",{children:[a("li",{children:["require_relative",t(n,{code:"require_relative '../../../node_modules/@react-native-community/cli-platform-ios/native_modules' ",[e]:{code:e}},"ZM_15"),"require_relative는 ruby에서 사용하는 메서드로 현재 파일위치를 기준으로 파일을 찾습니다. monorepo의 사용으로 라이브러리의 경로가 변경되었을 때 사용합니다."]}),a("li",{children:[t(L,{href:"https://guides.cocoapods.org/syntax/podfile.html#pod",children:"pod",[e]:{href:e}},"ZM_16"),t(n,{code:"pod 'RNFastImage', :path => '../../../node_modules/react-native-fast-image'",[e]:{code:e}},"ZM_17"),"프로젝트의 dependency 정의합니다. 첫번째 값은 'dependency'의 이름이며, 두번째 값은 옵션으로 버전을 정의할 수 있습니다."]}),a("li",{children:[t(L,{href:"https://guides.cocoapods.org/syntax/podfile.html#project",children:"project",[e]:{href:e}},"ZM_18"),t(n,{code:Ct,[e]:{code:e}},"ZM_19"),"Pods 라이브러리가 연결되어야 하는 'target'이 포함된 Xcode 프로젝트를 지정합니다.",t("br",{}),"사용자 정의 빌드 구성의 빌드 설정을 릴리스 또는 디버그 사전 설정 후에 모델링할지 여부를 지정할 수도 있습니다."]}),a("li",{children:["def / end",t(n,{code:"def common_pods end",[e]:{code:e}},"ZM_20"),"def / end 문을 이용하여 구문을 저장 할 수 있게 됩니다."]}),a("li",{children:[t(L,{href:"https://stackoverflow.com/questions/60499216/use-framework-vs-use-native-modules",children:"use_native_modules!",[e]:{href:e}},"ZM_21"),t(n,{code:"config = use_native_modules!",[e]:{code:e}},"ZM_22"),"React Native 0.60 이상에서 'auto-linking' 을 위해 사용됩니다. 'pod install' 실행 시 자동으로 프로젝트에 추가된 'dependency'가 자동으로 link 됩니다."]}),a("li",{children:["use_react_native!",t(n,{code:"use_react_native!(:path => rn_path)",[e]:{code:e}},"ZM_23"),"react-native를 사용하도록 합니다. react-native가 설치된 node_modules/react-native 경로를 설정해주어야합니다. 다음과 같이 기본 react-native 경로를 사용할 수 있습니다.",t("br",{}),t(n,{code:"use_react_native!(:path => config['reactNativePath'])",[e]:{code:e}},"ZM_24"),"다만, monorepo인경우 react-native의 위치를 루트경로로 설정해주어야 합니다."]}),a("li",{children:["use_flipper!",t(n,{code:"use_flipper!({ 'Flipper-Folly' => '2.5.3', 'Flipper' => '0.87.0', 'Flipper-RSocket' => '1.3.1' }",[e]:{code:e}},"ZM_25"),t(L,{href:"https://fbflipper.com/",children:"flipper",[e]:{href:e}},"ZM_26"),"는 앱을 디버깅하기 위한 플랫폼입니다. 이를 사용하도록 명시하고 필요한 종속성들의 버전을 명시합니다."]}),a("li",{children:["post_install!",t(n,{code:"post_install do |installer|",[e]:{code:e}},"ZM_27"),"설치가 완료된 후 실행되는 훅으로 [Pod::Installer] 를 인자로 받습니다."]})]}),"그 외 유용한 링크",t(L,{href:"https://github.com/ClintJang/cocoapods-tips",children:"CocoaPods 유용한 정보 모음입니다.",[e]:{href:e}},"ZM_28")]},"ZM_29")]},"ZM_30"),"s_KIH8nMF0usk")),Mt=`# Uncomment the next line to define a global platform for your project
# platform :ios, '9.0'

target 'example' do
  # Comment the next line if you don't want to use dynamic frameworks
  use_frameworks!

  # Pods for example

  target 'example-tvOSTests' do
    inherit! :search_paths
    # Pods for testing
  end

  target 'exampleTests' do
    inherit! :search_paths
    # Pods for testing
  end

end

target 'example-tvOS' do
  # Comment the next line if you don't want to use dynamic frameworks
  use_frameworks!

  # Pods for example-tvOS

  target 'example-tvOSTests' do
    inherit! :search_paths
    # Pods for testing
  end

end
`,jt=`require_relative '../../../node_modules/react-native/scripts/react_native_pods'
require_relative '../../../node_modules/@react-native-community/cli-platform-ios/native_modules'

pod 'RNFastImage', :path => '../../../node_modules/react-native-fast-image'


platform :ios, '10.0'

project 'example',
        'simulator' => :debug,
        'dev' => :release,
        'preview' => :release

def common_pods
  rn_path = '../../../node_modules/react-native'
 
  config = use_native_modules!
  use_react_native!(:path => rn_path)

  # Enables Flipper.
  #
  # Note that if you have use_frameworks! enabled, Flipper will not work and
  # you should disable these next few lines.
  use_flipper!({ 'Flipper-Folly' => '2.5.3', 'Flipper' => '0.87.0', 'Flipper-RSocket' => '1.3.1' }
end

target 'example' do
  common_pods
end

post_install do |installer|
  flipper_post_install(installer)
  installer.pods_project.targets.each do |target|
  end
  target.build_configurations.each do |config|
  end
end
`,Ct=`project 'example',
    'simulator' => :debug,
    'dev' => :release,
    'preview' => :release`,Ya=Object.freeze(Object.defineProperty({__proto__:null,default:Ja,head:Wa,podfileCode:Mt,podfileCode2:jt,projectCode:Ct},Symbol.toStringTag,{value:"Module"})),Xa={title:"Expected URL scheme 'http' or 'https' but no colon was found",meta:[{property:"keywords",content:"android websocket no colon error"}]},Ka=w(h(()=>a(S,{children:[t(D,{src:"https://res.cloudinary.com/dij9kacx9/image/upload/v1640683677/lit-blog/semi_qqxojj.jpg",[e]:{src:e}},"hY_0"),a($,{children:[t("h1",{children:"Expected URL scheme 'http' or 'https' but no colon was found"}),t(T,{tags:"android websocket no colon error",[e]:{tags:e}},"hY_1"),t(O,{children:"2021-12-28"},"hY_2")]},"hY_3"),a(H,{children:["You can solve this problem just add semicolon(;) at the end of url",t(P,{src:"https://res.cloudinary.com/dij9kacx9/image/upload/v1640683677/lit-blog/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2021-12-28_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_6.03.47_gj5vze.png",alt:"Expected URL scheme 'http' or 'https' but no colon was found",width:"500",[e]:{src:e,alt:e,width:e}},"hY_4"),"and code can be",t(n,{code:"new WebSocket(<YOUR_URL>;)",language:"typescript",[e]:{code:e,language:e}},"hY_5")]},"hY_6")]},"hY_7"),"s_019ak8YIhrE")),Ga=Object.freeze(Object.defineProperty({__proto__:null,default:Ka,head:Xa},Symbol.toStringTag,{value:"Module"})),er={title:"async await",meta:[{property:"keywords",content:"javascript async await promiser"}]},tr=w(h(()=>a(S,{children:[t(D,{src:"",[e]:{src:e}},"10_0"),a($,{children:[t("h1",{children:"async await"}),t(T,{tags:"javascript async await promise",[e]:{tags:e}},"10_1"),t(O,{children:"2021-12-14"},"10_2")]},"10_3"),a(H,{children:["설명에 앞서 이 글은 asnyc / await 사용에 익숙한 사람을 대상으로합니다.",t("br",{}),t("post-definition",{children:"yield"}),"는 제네레이터 함수를 일시정지 시킵니다."]},"10_4")]},"10_5"),"s_tVG2hKhyV0o")),or=Object.freeze(Object.defineProperty({__proto__:null,default:tr,head:er},Symbol.toStringTag,{value:"Module"})),nr={title:"Lit 튜토리얼 (1/6)",meta:[{property:"keyword",content:"lit lit-html lit-elemnt tutorial start"}]},ar=w(h(()=>a(S,{children:[t(D,{},"Bu_0"),a($,{children:[t("h1",{children:"(번역)A deep dive into JavaScript closures"}),t(T,{tags:"javascript closure",[e]:{tags:e}},"Bu_1"),t(O,{children:"2023-02-04"},"Bu_2")]},"Bu_3"),a(H,{children:[a(F,{children:["원본:",t(L,{href:"https://birdeatsbug.com/blog/a-deep-dive-into-javascript-closures",children:"a-deep-dive-into-javascript-closures",[e]:{href:e}},"Bu_4")]},"Bu_5"),t(i,{subtitle:"클로저는 무엇입니까?",[e]:{subtitle:e}},"Bu_6"),"클로저는 스코프 밖에서 다른 함수(외부 함수)에 접근할 수 있는 함수(내부 함수)입니다.다른 함수 내부의 함수를 호출하여 만들어진 함수 조합입니다.클로저는 노드의 싱글 스레드, 이벤트 구동 및 비블로킹 아키텍처에서 널리 사용됩니다.",t("br",{}),"다음 예제를 사용하여 이 기능의 구조를 설명하겠습니다.",t(n,{code:Et,[e]:{code:e}},"Bu_7"),"위의 예에서 greeting()은 message라는 이름의 로컬 변수와 내부 greeting()이라는 이름의 내부 함수를 만듭니다.이 함수는 greeting() 함수의 범위 내에서만 사용할 수 있습니다.단, displayMessage()는 부모 함수 greeting()으로 선언된 변수 message에 액세스할 수 있습니다.",t("br",{}),'실시간으로 한번 해보겠습니다.브라우저의 개발 도구로 이동하여 위의 코드 행을 실행합니다."Hello World"가 alert로 전달되는 것을 알 수 있습니까?그 이유는 억지스럽지 않다.처음에 언급했듯이 클로저는 동일한 렉시컬 환경 내에서 서로 액세스할 수 있는 함수의 조합입니다.이 정의에 따라 newMessage는 greeting() 함수가 실행되었을 때 생성되는 함수 displayMessage의 인스턴스를 참조합니다.',t("br",{}),"주의: displayMessage 인스턴스는 변수 message가 존재하는 렉시컬 환경에 대한 참조를 유지합니다.",t("br",{}),'따라서 newMessage를 호출하면 변수 메시지는 계속 사용할 수 있으며 "Hello World"는 경보로 전달됩니다.',t(i,{subtitle:"코드에서 클로저 사용",[e]:{subtitle:e}},"Bu_8"),"클로저의 기본 특징 중 하나는 내부 함수가 외부 함수가 실행되거나 반환된 후에도 외부 함수의 변수에 여전히 액세스하고 사용할 수 있다는 것입니다.",t("br",{}),"JavaScript에서는 함수가 생성되었을 때와 동일한 스코프 체인을 사용하여 실행됩니다.즉, 외부 함수가 반환 된 후에도 내부 함수는 외부 함수의 변수에 액세스할 수 있습니다.",t("br",{}),"다음 예에서는 더 많은 빛을 발합니다.",t(n,{code:St,[e]:{code:e}},"Bu_9"),"또한 클로저를 사용하여 다른 함수 m(외부 함수) 내에서 함수 n(내부 함수)을 정의하고 n을 노출하는 방법도 알아봅니다.다음에 간단한 예를 제시하겠습니다.",t(n,{code:At,[e]:{code:e}},"Bu_10"),"단일 인수 m을 사용하고 새로운 함수 n을 반환하는 multiply(m) 함수를 정의했습니다.반환되는 함수는 단일 인수 n을 사용하고 m * n을 반환합니다.multiply는 두 개의 새로운 클로저(함수)를 작성하기 위해 사용됩니다.multiply9와 multiply5는 동일한 함수 본문 정의를 공유하지만 서로 다른 렉시컬 스코프를 포함합니다.예를 들어, multiply9의 렉시컬 스코프에서는 m은 9이고, multiply5에서는 m은 5이다.",t(i,{subtitle:"왜 클로저가 필요한가요?",[e]:{subtitle:e}},"Bu_11"),"클로저는 특정 기능의 범위 내에 있는 것과 없는 것을 제어할 수 있기 때문에 필수적입니다.또한 동일한 렉시컬 스코프에서 형제 함수를 공유하는 변수도 제어합니다.클로저는 또한 코드를 단순화하고 프로그래머로서의 삶을 더 쉽게 만들 수 있습니다.",t("br",{}),"예를 들어 클로저를 사용하여 데이터를 별도의 범위에 저장 및 숨기고 적합하다고 판단될 때만 공유할 수 있습니다(데이터 캡슐화).그러나 데이터 캡슐화에 클로저를 사용하는 경우, 클로저 변수는 외부 함수의 범위에만 포함됩니다.즉, 객체에 정의된 메서드를 통해서만 외부 환경에서 데이터에 액세스할 수 있습니다.",t(n,{code:Pt,[e]:{code:e}},"Bu_12"),"위의 예에서 ",t("code",{children:"side"}),"는 ",t("code",{children:"createSquare"})," 함수의 범위 내에 있으며 createSquare 함수의 범위 내에만 표시됩니다.변수/매개변수는 함수 내부에서만 볼 수 있기 때문입니다.",t("br",{}),"이 함수는 ",t("code",{children:"createSquare"})," 함수 내에서 정의되므로",t("code",{children:"area"})," 함수 내부에서도 액세스할 수 있습니다.이렇게 하면 area가 노출되지만 Diameter은 숨겨집니다. 즉, 원이 면 안에 side를 캡슐화합니다.",t("br",{}),"이는 실제 사용 사례와 실제 사용 사례에서 볼 수 있는 일반적인 사용 사례이며, 클로저 여부도 알 수 없습니다.",t("br",{}),"또한 클로저는 데이터를 해당 데이터에 대해 작동하는 함수와 연결하는 데에도 유용합니다.이것은 오브젝트가 같은 오브젝트의 속성을 하나 이상의 메서드와 효과적으로 관련짓는 오브젝트 지향 프로그래밍과 유사합니다.",t(i,{title:"스코프 체인 이해",[e]:{title:e}},"Bu_13"),"JavaScript에서는 모든 클로저에는 3개의 스코프가 있습니다.",a("ul",{children:[t("li",{children:"Global"}),t("li",{children:"Function scope 범위/local scope"}),t("li",{children:"Block"})]}),"이제 아래의 각 항목을 살펴보겠습니다.",t(i,{subtitle:"Global Scope",[e]:{subtitle:e}},"Bu_14"),"정의된 변수가 함수 또는 한 쌍의 중괄호 "," 안에 없는 경우, 이러한 변수는 Global 스코프에 존재하므로 프로그램 내 어디에서나 액세스할 수 있다고 할 수 있습니다.예를 들어 다음과 같습니다.",t(n,{code:Ht,[e]:{code:e}},"Bu_15"),t(i,{subtitle:"기능 범위/로컬 범위",[e]:{subtitle:e}},"Bu_16"),"함수 내부에서 변수가 선언되면 해당 함수 내에서만 변수에 액세스할 수 있습니다. 즉, 함수 범위 밖에서는 변수에 액세스할 수 없습니다.예를 들어 다음과 같습니다.",t(n,{code:$t,[e]:{code:e}},"Bu_17"),t(i,{subtitle:"블록 범위",[e]:{subtitle:e}},"Bu_18"),"ECMAScript 2015(또는 ES6) 키워드, let 및 const에서는 변수는 가장 가까운 중괄호 쌍에만 범위를 지정할 수 있습니다.변수와는 달리 중괄호 밖에서는 액세스할 수 없습니다.예를 들어 다음과 같습니다.",t(n,{code:Dt,[e]:{code:e}},"Bu_19"),t(i,{subtitle:"클로저와 private method 구현",[e]:{subtitle:e}},"Bu_20"),"JavaScript의 private 메서드/함수는 해당 스코프 내에서만 액세스할 수 있습니다.또한 이러한 변수를 통해 범위 내에서 정의된 함수가 조작 방법을 완전히 제어할 수 있습니다.",t("br",{}),"JavaScript는 개체와 관련된 변수 및 메서드를 선언에서 public 또는 private 로 지정할 수 있는 고급 기능을 제공하지 않습니다.다만, 이하와 같이, 실장할 수 있는 방법이 있습니다.",t(n,{code:Tt,[e]:{code:e}},"Bu_21"),"출처 : MDN",t("br",{}),"위의 코드 블록에는 ",t("code",{children:"counter.increment"}),",",t("code",{children:"counter.decrement"})," 및",t("code",{children:"counter.value"}),"의 3가지 함수에 의해 공유되는 단일 렉시컬 환경이 있습니다.렉시컬 환경에는 ",t("code",{children:"privateCounter"}),"라는 변수와",t("code",{children:"changeBy"}),"라는 함수의 두 가지 private 항목이 있습니다.익명 함수 counter 외부에서 이러한 private 멤버에 액세스할 수 없습니다.대신 익명 래퍼에서 반환된 세 가지 공용 함수를 사용하여 액세스할 수 있습니다.세 가지 공용 함수는 동일한 렉시컬 환경을 공유하는 클로저로, 각각 범위 지정을 통해",t("code",{children:"privateCounter"})," 변수 및 ",t("code",{children:"changeBy"})," 함수에 액세스할 수 있습니다.",t(i,{title:"요약",[e]:{title:e}},"Bu_22"),a("ul",{children:[t("li",{children:"함수 내부에 다른 함수가 있을 때마다 클로저가 있습니다."}),t("li",{children:"클로저(다른 함수에 의해 반환되는 내부 함수 또는 함수)는 생성 시 렉시컬 환경을 참조한다."}),t("li",{children:"클로저는 private 메소드 또는 private 변수와 상관없이 private 데이터를 생성하는 데 도움이 됩니다."}),t("li",{children:"모든 클로저에는 글로벌, 로컬 및 블록의 세 가지 스코프가 있습니다."})]}),t(i,{subtitle:"Further reading ",[e]:{subtitle:e}},"Bu_23"),t(L,{href:"You don’t know JS: Scope and Closures by Oreilly ",children:"You don’t know JS: Scope and Closures by Oreilly",[e]:{href:e}},"Bu_24")]},"Bu_25")]},"Bu_26"),"s_xPU0VKe0Xqc")),Et=`
function greeting(){
  let message = "Hello World";
  function displayMessage(){
      alert(message);
  }
  return displayMessage;
}
let newMessage = greeting();
newMessage();`,St=`
function firstName (firstName) {
  var nameIntro = "My name is ";
  // this is an inner function which as we will get to see, has access to the outer function's variables

//this function lastName is a closure because it is a function inside another  function)
   function lastName (lastName) {
        return nameIntro + firstName + " " + lastName;
    }
    return lastName;
}

var fullName = firstName("Bill");
//The firstName outer function has returned which we passed to this var fullName

fullName ("Johnson");  // My name is Bill Johnson

// The closure (lastName) is called after the outer function has returned above
// Yet, the closure still has access to the outer function's //variables and parameter`,At=`
function multiply (m) {
  return function (n) {
    return m * n
  };
}

var multiply9 = multiply(9)
var multiply5 = multiply(5)

console.log (multiply9(8)); // 72
console.log (multiply5(12)); // 60`,Pt=`
function createSquare(side) {
  return {
      area: function() {
          return side * side;
      }
  }
};

let square = createSquare(7);
console.log("Area is " + square.area());
console.log("Diameter is " + square.side); // THIS WILL NOT RUN`,Ht=`var greeting = 'Welcome Home';
//greeting is a global variable that we can access from anywhere

function greet() {
  console.log(greeting);
}
greet(); //We get "Welcome Home" printed on the console because the greet function can access the global variable`,$t=`function greet() {
  var greeting = 'Welcome Home';
  console.log(greeting);
}
// Prints 'Welcome Home'
greet(); //try calling the function outside of its scope==>Uncaught ReferenceError: greeting is not defined
console.log(greeting);`,Dt=`{
  let greeting = 'Welcome Home';
  var course = 'JavaScript';
  console.log(greeting); // Prints 'Welcome Home'
}
// Prints 'JavaScript'
console.log(course);

// Uncaught ReferenceError: greeting is not defined
console.log(greeting);`,Tt=`
var counter = (function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }

  return {
    increment: function() {
      changeBy(1);
    },

    decrement: function() {
      changeBy(-1);
    },

    value: function() {
      return privateCounter;
    }
  };
})();

console.log(counter.value());  // 0.

counter.increment();
counter.increment();
console.log(counter.value());  // 2.

counter.decrement();
console.log(counter.value());  // 1.`,rr=Object.freeze(Object.defineProperty({__proto__:null,code1:Et,code2:St,code3:At,code4:Pt,code5:Ht,code6:$t,code7:Dt,code8:Tt,default:ar,head:nr},Symbol.toStringTag,{value:"Module"})),ir={title:"프론트엔드 백엔드",meta:[{property:"keywords",content:"프론트엔드 백엔드"}]},lr=w(h(()=>a(S,{children:[t(D,{src:"https://res.cloudinary.com/dij9kacx9/image/upload/v1633613602/lit-blog/frontbackend_zklxwy.jpg",[e]:{src:e}},"o0_0"),a($,{children:[t("h1",{children:"프론트엔드 백엔드"}),t(T,{tags:"프론트엔드 백엔드",[e]:{tags:e}},"o0_1"),t(O,{children:"2021-10-07"},"o0_2")]},"o0_3"),a(H,{children:["프론트엔드 와 백엔드의 가 무엇인지, 어떤 일을 하고 필요한 역량은 무엇인지 저의 생각을 적어보도록 하겠습니다.",t(i,{subtitle:"프론트엔드",[e]:{subtitle:e}},"o0_4"),"프론트엔드엔드(Front-End)와 백엔드(Back-End)의 차이점에 대해 알아보도록 하겠습니다. 이전에는 프론트엔드라는 구분이 존재하지 않았다가 생기게 되었습니다. 이는 요즘 시대에는 간단한 정적 웹 페이지가 아닌 동적 웹 페이지를 제작하게 되는데, 이에 따라 필요한 기술이 전문성을 지니게 되면서 프론트엔드 개발자라는 직군이 분류가 되기 시작했습니다.",t("br",{}),t(F,{children:"프론트엔드가 하는 일"},"o0_5"),"프론트엔드 개발자가 하는일 프론트엔드 개발자는 주로 어플리케이션 개발에서 사용자가 마주하는 화면을 만들게 됩니다. 어플리케이션의 화면 제작, 라우팅, 상태 관리, API를 통해 받은 데이터를 바인딩 하는 등의 작업을 통해 사용자에게 데이터를 제공하고 인터액션이 가능하도록 합니다.",t(F,{children:"프론트엔드의 역량"},"o0_6"),"앞에서의 프론트엔드 개발자로서의 일을 하기 위해서는 화면을 출력하기 위한 Html, Css, Javascript 에 대한 지식이 필요합니다. 웹 개발자의 경우에는 브라우저에 대한 이해가 필요하며, 앱 개발자의 경우 경우에 따라서는 IOS 및 Android에 대한 이해도 필요합니다.",t("br",{}),"현재 프론트엔드 개발에는 프레임워크를 사용하는 것이 대두되었고, 대표적으로 Angular, Vue, React 가 있습니다. 이 중 React가 가장 많이 사용되며 사랑받고 있습니다.",t(i,{subtitle:"백엔드",[e]:{subtitle:e}},"o0_7"),"백엔드 개발자는 유저가 사용하는 화면에서는 보이지 않지만 처리되는 일들을 합니다.",t(F,{children:"백엔드가 하는일"},"o0_8"),"백엔드 개발자는 어플리케이션에서 다루는 데이터 및 서버, API를 관리하게 됩니다. 사용자로부터 받은 데이터 혹은 가공된 데이터를 처리 및 저장하여 데이터베이스를 관리하며, 많은 양의 트래픽에도 안정적인 서버를 구축 및 배포하며, 화면에 출력하기 위한 데이터를 보내주는 API를 제작합니다.",t(F,{children:"백엔드의 역량"},"o0_9"),"백엔드 개발자는 데이터베이스에 대한 지식과 데이터를 다루기 위한 SQL, 서버를 구축하기 위한 지식이 필요합니다. 사용하는 언어 Python ,Node.js, Go ,Rust, Java 등 자유롭게 사용할 수 있습니다. 서버를 배포하기 위해 클라우드 플랫폼을 사용하는 기술, Nginx 등의 트래픽을 처리하기 위한 기술도 필요합니다. SSL 및 도메인, 보안 등의 서버를 위한 기술 또한 필요합니다."]},"o0_10")]},"o0_11"),"s_eRZx0ygQn8U")),sr=Object.freeze(Object.defineProperty({__proto__:null,default:lr,head:ir},Symbol.toStringTag,{value:"Module"})),cr={title:"Lit 튜토리얼 (1/6)",meta:[{property:"keywords",content:"lit lit-html lit-elemnt tutorial start"}]},dr=w(h(()=>a(S,{children:[t(D,{src:"https://res.cloudinary.com/dij9kacx9/image/upload/v1628066597/lit-blog/lit-post-head_tjswjn.jpg",[e]:{src:e}},"0L_0"),a($,{children:[t("h1",{children:"Lit 튜토리얼 (1/6)"}),t(T,{tags:"lit lit-html lit-elemnt tutorial start",[e]:{tags:e}},"0L_1"),t(O,{children:"2021-07-25"},"0L_2"),t(ce,{title:"Lit tutorial",[e]:{title:e}},"0L_3")]},"0L_4"),a(H,{children:["안녕하세요. 작년에 lit-html을 소개하는",t(L,{href:"https://velog.io/@jerrynim_/Lit-html-1-%EC%86%8C%EA%B0%9C",children:"li-html 어떠세요??",[e]:{href:e}},"0L_5"),"을 올리고, 웹 컴포넌트 개발에 대한 관심만 가지고 있다가 그디어 lit-html을 사용하여 웹 컴포넌트 개발을 해보게 되었습니다.",t(i,{subtitle:"웹 컴포넌트 왜 사용할까?",[e]:{subtitle:e}},"0L_6"),"웹 컴포넌트는 웹 표준 기반을 준수하여 Html, Css, Javascript 로 만들어진 재사용 가능한 캡슐화 된 컴포넌트 입니다. 다음 링크는 웹 컴포넌트를 사용하는 이유를 알려주고 있습니다.",t(L,{href:"https://han41858.tistory.com/15",children:"왜 Web Component가 중요한가",[e]:{href:e}},"0L_7"),"lit-project를 시작하기에 앞서 웹 컴포넌트의 특성 대해 알아 보도록 하겠습니다.",t(i,{subtitle:"웹 컴포넌트 특성",[e]:{subtitle:e}},"0L_8"),t(L,{href:"https://developer.mozilla.org/ko/docs/Web/Web_Components",children:"웹 컴포넌트 란",[e]:{href:e}},"0L_9"),"웹 컴포넌트란 재사용 할 수 있는 캡슐화된 컴포넌트를 만들며 다음 세 가지 주요 기술들로 구성되어 있습니다.",a("ul",{children:[t("li",{children:"Custom elements: 사용자 인터페이스에서 원하는대로 사용할 수있는 사용자 정의 요소 및 해당 동작을 정의 할 수있는 JavaScript API 세트입니다."}),t("li",{children:'Shadow DOM: 캡슐화된 "그림자" DOM 트리를 엘리먼트 — 메인 다큐먼트 DOM 으로부터 독립적으로 렌더링 되는 — 를 추가하고 연관된 기능을 제어하기 위한 JavaScript API 의 집합. 이 방법으로 엘리먼트의 기능을 프라이빗하게 유지할 수 있어, 다큐먼트의 다른 부분과의 충돌에 대한 걱정 없이 스크립트와 스타일을 작성할 수 있습니다.'}),t("li",{children:"HTML 템플릿: 과 엘리먼트는 렌더링된 페이지에 나타나지 않는 마크업 템플릿을 작성할 수 있게 해줍니다. 그 후, 커스텀 엘리먼트의 구조를 기반으로 여러번 재사용할 수 있습니다."})]}),t(i,{subtitle:"lit 프로젝트 설정하기",[e]:{subtitle:e}},"0L_10"),"리액트를 시작하기 위해서는 처음 하는 것은 CRA(Create React App)을 설치 하기 일 것입니다. lit 프로젝트를 시작하기 위해 저희는 thepassle 가 만든",t(L,{href:"https://github.com/thepassle/create-lit-app-advanced",children:"CLA(Create Lit App)",[e]:{href:e}},"0L_11"),"을 사용 할 수 있습니다. 하지만 저는 타입스크립트를 사용하길 원했고 다음",t(L,{href:"https://vaadin.com/learn/tutorials/lit-element/starting-a-lit-element-project",children:"vaadin 강의",[e]:{href:e}},"0L_12"),"및 webpack 블로그 글을 참고하여 웹 컴포넌트 실행을 위한 webpack 및 프로젝트 설정을 직접 하였습니다. 간단한 웹 컴포넌트 실행이 되는 프로젝트를 깃허브에 올려 두었습니다.",t(L,{href:"https://github.com/jerrynim/jerrynim-lit-project",children:"깃허브 : jerrynim-lit-project-starter",[e]:{href:e}},"0L_13"),"저는 Next.js를 사용하는 것을 좋아하기 때문에 폴더구조는 Next.js의 구조를 사용하였습니다.",t(i,{subtitle:"프로젝트 실행해보기",[e]:{subtitle:e}},"0L_14"),"jerrynim-lit-project-starter 프로젝트를 다운로드 받아 필요한 패키지를 설치후 실행해 보도록 하겠습니다. 설정해둔 포트는 3000으로, http://localhost:3000/ 로 접속하여확인 할 수 있습니다.",t(n,{code:Ot,language:"bash",[e]:{code:e,language:e}},"0L_15"),t(P,{src:"https://res.cloudinary.com/dij9kacx9/image/upload/v1627958263/lit-blog/hello_nfjvqu.png",alt:"hello tomato!",[e]:{src:e,alt:e}},"0L_16"),"'Hello Tomato!'라는 메세지가 출력 되었습니다. 개발자도구의 Elements를 확인하여보면",a("code",{class:"code",children:["$","<lit-tomato>"]}),"라는 생소한 태그가 보입니다. ",t("code",{children:"<lit-tomato>"}),"라는 태그를 찾아보도록 하겠습니다. 해당 태그를 'index.html'에서 찾아 볼 수 있습니다.",t(n,{code:Zt,language:"html",filename:"index.html",[e]:{code:e,language:e,filename:e}},"0L_17"),t("code",{children:"<lit-tomato>"}),"를 찾아보니 해당 태그는 가지고 있는 값이 없습니다. 그렇다면 'Hello Tomato'는 어디로부터 출력 되는 걸까요?, 'Hello Tomato'를 찾아보니 'pages/lit-tomatoo.ts'에서 찾을수 있었습니다.",t(n,{code:Vt,language:"typescript",filename:"pages/lit-tomato",[e]:{code:e,language:e,filename:e}},"0L_18"),"생소한 코드이지만 'Hello Tomato' 텍스트를 찾을 수 있었습니다. Html을 리턴하는 익숙한 코드를 찾을 수 있습니다.",t(n,{code:Rt,language:"typescript",[e]:{code:e,language:e}},"0L_19"),"lit-html을 사용하여 템플릿을 리턴 한다는 것을 짐작해 볼수 있었습니다. 코드를 하나씩 살펴보며 알아가보도록 하겠습니다. 코드의 첫줄 입니다.",t(n,{code:Ft,language:"typescript",[e]:{code:e,language:e}},"0L_20"),"'lit-elemnt' 라이브러리를 사용하는 것을 볼 수 있습니다.",t(L,{href:"https://lit-element.polymer-project.org/guide",children:"lit-element",[e]:{href:e}},"0L_21"),"는 홈페이지에 'A simple base class for creating fast, lightweight web components'라고 설명 되어 있습니다. 번역하면 '빠르고 가벼운 웹 컴포넌트를 위한 간단한 클래스'를 의미합니다. 그렇습니다.lit-element는 웹 컴포넌트를 만들기 위해 사용 됩니다. lit-element의 특징은 다음과 같습니다.",a("ul",{children:[a("li",{children:["LitElement는 lit-html 을 사용하여 HTML 템플릿을 정의하고 렌더링합니다.",t(n,{code:Bt,language:"typescript",[e]:{code:e,language:e}},"0L_22")]}),a("li",{children:["LitElement는 웹 페이지에 쉽게 포함하기 위해 사용자 정의 요소를 사용하고 캡슐화를 위해",t(L,{href:"https://polymer-library.polymer-project.org/2.0/docs/devguide/shadow-dom#:~:text=Shadow%20DOM%20is%20a%20new,as%20it%20relates%20to%20Polymer.",children:"Shadow DOM",[e]:{href:e}},"0L_23"),"을 사용합니다."]})]}),t(L,{href:"https://developers.google.com/web/fundamentals/web-components/shadowdom?hl=ko#:~:text=Shadow%20DOM%EC%9D%80%20%EA%B5%AC%EC%84%B1%20%EC%9A%94%EC%86%8C%EC%97%90%20%EB%A1%9C%EC%BB%AC%EC%9D%B4%EB%A9%B0%20%EB%82%B4%EB%B6%80%20%EA%B5%AC%EC%A1%B0,%ED%95%98%EB%8A%94%20%EB%B0%A9%EB%B2%95%EC%9D%84%20%EC%A0%95%EC%9D%98%ED%95%A9%EB%8B%88%EB%8B%A4.",children:"Shoadow DOM(쉐도우 돔)",[e]:{href:e}},"0L_24"),"이라는 단어가 생소할 것입니다. 앞으로의 개발에 필요한 쉐도우 돔의 특징에 대해 알아보도록 하겠습니다. 참고 :",t(L,{href:"https://developers.google.com/web/fundamentals/web-components/shadowdom?hl=ko#:~:text=Shadow%20DOM%EC%9D%80%20%EA%B5%AC%EC%84%B1%20%EC%9A%94%EC%86%8C%EC%97%90%20%EB%A1%9C%EC%BB%AC%EC%9D%B4%EB%A9%B0%20%EB%82%B4%EB%B6%80%20%EA%B5%AC%EC%A1%B0,%ED%95%98%EB%8A%94%20%EB%B0%A9%EB%B2%95%EC%9D%84%20%EC%A0%95%EC%9D%98%ED%95%A9%EB%8B%88%EB%8B%A4.",children:"구글 Shadow Dom 문서",[e]:{href:e}},"0L_25"),a("ul",{children:[t("li",{children:"격리된 DOM: 구성 요소의 DOM은 자체 포함됩니다(예: document.querySelector()는 구성 요소의 Shadow DOM에 노드를 반환하지 않음)."}),t("li",{children:"범위가 지정된 CSS: Shadow DOM 내부에 정의한 CSS는 범위가 Shadow DOM으로 지정되어 있습니다. 스타일 규칙은 누출되지 않으며 페이지 스타일은 스며들지 않습니다."}),t("li",{children:"컴퍼지션: 구성 요소에 대한 선언적 마크업 기반 API를 디자인합니다."}),t("li",{children:"CSS 단순화: 범위가 지정된 DOM이란 간단한 CSS 선택기와 훨씬 일반적인 ID/클래스 이름을 사용할 수 있으며 이름 충돌에 대해 걱정할 필요가 없음을 의미합니다."}),t("li",{children:"생산성: 큰(전역) 단일 페이지보다 DOM 청크에서 앱을 고려합니다."})]}),"쉐도우 돔은 1)외부 css의 영향을 받지 않고, 2)querySelector로 불러올 수 없고, 3)composed를 이용하여 이벤트 전달을 막을수도 있습니다. 3)의 의미를",t(L,{href:"https://dev.to/open-wc/composed-true-considered-harmful-5g59",children:"composed?",[e]:{href:e}},"0L_26"),"글을 읽는다면 쉐도우 돔의 이벤트에 대해 이해하는 것에 도움이 될 것입니다. 다음 코드를 보도록 하겠습니다.",t(i,{subtitle:"decorators",[e]:{subtitle:e}},"0L_27"),"다음 코드를 보니 다음과 같은 코드가 있습니다.",t(n,{language:"typescript",code:'@customElement("lit-tomato")',[e]:{language:e,code:e}},"0L_28"),"@로 시작하는 코드 이것은 데코레이터라 부르며, 데코레이터는 클래스, 클래스 메소드 및 클래스 필드 선언의 동작을 변경할 수있는 특수 표현식입니다. LitElement는 컴포넌트를 정의 할 때 작성해야하는 상용구 코드의 양을 줄이는 데코레이터 세트를 제공합니다.",t(L,{href:"https://lit-element.polymer-project.org/guide/decorators",children:"lit-element 데코레이터 가이드",[e]:{href:e}},"0L_29"),"앞의 코드에서 사용된 데코레이터를 살펴보도록 하겠습니다.",t("br",{}),'@customElemenet("lit-tomato") 코드는 다음 코드와 동일합니다.',t(n,{code:"customElements.define('lit-tomato', Tomato);",language:"typescript",[e]:{code:e,language:e}},"0L_30"),t(L,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/customElements",children:"window.customElements MDN",[e]:{href:e}},"0L_31"),t("br",{}),"Tomato라는 LitElement 를 ",t("code",{children:"<lit-tomato>"}),"처럼 사용할 수 있도록 정의해주는 역활을 합니다. 이때 엘리먼트의 이름을 지정할때 '-'는 필수로 들어가야합니다. 이름에 '-' 가 없다면 다음 그림과 같은 빨간 줄을 보게 될 것입니다.",t(P,{src:"https://res.cloudinary.com/dij9kacx9/image/upload/v1628045194/lit-blog/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2021-08-04_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_11.45.34_k92ota.png",alt:"웹 컴포넌트 이름 규칙",[e]:{src:e,alt:e}},"0L_32"),"타입스크립와 데코레이터를 함께 사용하기 위해서 간단한 설정이 필요했습니다. ",t("br",{}),"tsconfig에서 experimentalDecorators 값을 true로 변경해 주었고,",t(n,{code:'"experimentalDecorators": true,',language:"typescript",filename:"tsconfig.json",[e]:{code:e,language:e,filename:e}},"0L_33"),".babelrc에서 데코레이터를 사용하기위한 바벨 플러그인들을 설치해 추가해 주었습니다.",t(n,{code:qt,language:"typescript",filename:".babelrc",[e]:{code:e,language:e,filename:e}},"0L_34"),"@query 등 다른 데코레이터는 다음 포스팅에서 변수 사용과 함께 사용해보도록 하겠습니다.",t("br",{}),"마지막으로 다음과 같이 엘리먼트의 타입을 선언해 줌으로써 다른 파일에서 커스텀 웹 컴포넌트를 찾을 수 있게 되었습니다.",t(n,{code:Nt,language:"typescript",[e]:{code:e,language:e}},"0L_35"),"'lit-potato'라는 이름만 다른 파일을 만들어 html안에서",t("code",{children:"<lit-tomato>"}),"를 사용해 보도록 하겠습니다.",t(P,{src:"https://res.cloudinary.com/dij9kacx9/image/upload/v1628048374/lit-blog/lit-code_qs3moz.png",alt:"lit type 자동완성",[e]:{src:e,alt:e}},"0L_36"),"타입 조회는 할 수 있지만 자동으로 import가 되지 않으니 만들어준 웹 컴포넌트를 다른 파일에서 사용하려면 import를 해주어야 합니다.",t(n,{code:'import "./lit-tomato";',language:"typescript",[e]:{code:e,language:e}},"0L_37"),"마찬가지로 index.html에서",t("code",{children:"<lit-tomato>"}),"를 사용 할 수 있도록 index.ts에서 import 해주어야 합니다.",t(n,{code:'import "./pages/lit-tomato";',language:"typescript",filename:"index.ts",[e]:{code:e,language:e,filename:e}},"0L_38"),"여기까지 간단한 lit-element의 구성을 살펴 보았습니다. 다시 보자면 LitElement 를 확장한 클래스는 html 템플릿을 리턴하는 웹 컴포넌트를 리턴합니다. 이 클래스를",t("code",{children:"<lit-tomato>"}),"라는 커스텀 엘리먼트로 지정하였고 index.ts에서 lit-tomato를 import하여 index.html에서 사용한",t("code",{children:"<lit-tomato>"})," 커스텀 엘리먼트를 사용할 수 있게 되었습니다. 다음 포스팅에서는 본격적으로 property를 사용하여 변수 사용 및 뷰의 변화를 주는 것을 해보도록 하겠습니다."]},"0L_39")]},"0L_40"),"s_mF1UnnUowJY")),Ot=`yarn
yarn dev`,Zt=`
        <!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Lit project</title>
    <meta name="description" content="Lit project Start" />

    <script>
      if (!window.customElements) {
        document.write("<!--");
      }
    <\/script>
    <script src="/vendor/custom-elements-es5-adapter.js"><\/script>
    <!-- ! DO NOT REMOVE THIS COMMENT, WE NEED ITS CLOSING MARKER -->
  </head>
  <body>
    <main>
      <lit-tomato></lit-tomato>
    </main>
    <script src="/vendor/webcomponents-loader.js"><\/script>
  </body>
</html>
        `,Vt=`
        import { LitElement, html, customElement } from "lit-element";

@customElement("lit-tomato")
class Tomato extends LitElement {
  render() {
    return html&backtick;
      <style></style>
      <h1>Hello Tomato!</h1>
      &backtick;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "lit-tomato": Tomato;
  }
}
        `,Rt=`
        render() {
    return html&backtick;
    <style></style>
    <h1>Hello Tomato!</h1>
&backtick;;
}`,Ft='import { LitElement, html, customElement } from "lit-element";',Bt=`return html&backtick;
    <style></style>
    <h1>Hello Tomato!</h1>
&backtick;`,qt=`
const plugins = [
    "@babel/plugin-proposal-optional-chaining",
    "@babel/plugin-proposal-class-properties",
    ["@babel/plugin-proposal-decorators", { decoratorsBeforeExport: true }],
  ];`,Nt=`declare global {
    interface HTMLElementTagNameMap {
      "lit-tomato": Tomato;
    }
  }`,pr=Object.freeze(Object.defineProperty({__proto__:null,babelrc:qt,code:Ot,default:dr,firstline:Ft,globalDeclare:Nt,head:cr,indexhtml:Zt,litTomato1:Vt,litTomato2:Rt,lithtml1:Bt},Symbol.toStringTag,{value:"Module"})),ur={title:"Lit 튜토리얼 (2/6)",meta:[{property:"keywords",content:"lit lit-html lit-elemnt tutorial property"}]},gr=w(h(()=>a(S,{children:[t(D,{src:"https://res.cloudinary.com/dij9kacx9/image/upload/v1628066597/lit-blog/lit-post-head_tjswjn.jpg",[e]:{src:e}},"lM_0"),a($,{children:[t("h1",{children:"Lit 튜토리얼 - property (2/6)"}),t(T,{tags:"lit lit-html lit-elemnt tutorial property",[e]:{tags:e}},"lM_1"),t(O,{children:"2021-07-25"},"lM_2"),t(ce,{title:"Lit tutorial",[e]:{title:e}},"lM_3")]},"lM_4"),a(H,{children:["이전 포스팅에서 lit-project를 설치하여 lit-element를 사용하여 커스텀 엘리먼트가 만들어 지는 것을 보았습니다. 이번포스팅 에서는 엘리먼트의 property를 사용하여 템플릿을 업데이트하며 property의 옵션들을 살펴보도록 하겠습니다.",t(i,{subtitle:"properties",[e]:{subtitle:e}},"lM_5"),"lit-element에서 템플릿을 정의할때 property를 템플릿에 바인딩 할 수 있으며, 속성이 변경 될 때 마다 템플릿 이 변경 됩니다.",t(n,{code:It,language:"typescript",filename:"pages/lit-tomato.ts",[e]:{code:e,language:e,filename:e}},"lM_6"),"static get properties()를 사용하여 엘리먼트의 property를 선언 할 수 있습니다. name이라는 property를 선언하였고 name property를 html 템플릿에 바인딩 하였습니다. 후에 name이 변경된다면 html 템플릿도 변경 되게 됩니다.",t(i,{subtitle:"property 초기화",[e]:{subtitle:e}},"lM_7"),"선언된 property를 초기화 하는 방법에 대해 알아보도록 하겠습니다. 앞에서 선언한 name에 초기값을 주도록 하겠습니다.",t(i,{subtitle:"constructor",[e]:{subtitle:e}},"lM_8"),"property의 초기값을 주기 위해 constructor()를 사용 할 수 있습니다.",t(n,{code:zt,language:"typescript",[e]:{code:e,language:e}},"lM_9"),"constructor()를 사용하여 name property에 'tomato1'값으로 초기화 해주었습니다. 'Hello tomato1'이 브라우저에 출력 되는 것을 확인 할 수 있습니닫. 하지만 vsCode에서는 타입에러가 있다는 에러가 발생합니다.",t(F,{children:"Property 'name' does not exist on type 'Tomato'.ts(2339)"},"lM_10"),t(i,{subtitle:"@property",[e]:{subtitle:e}},"lM_11"),"타입스크립트를 사용한다면 @property 데코레이터를 사용하여 property 선언과 초기화를 할 수 있습니다.",t(n,{code:Ut,language:"typescript",[e]:{code:e,language:e}},"lM_12"),"constructor를 사용 할 때와 동인한 결과가 나타납니다. 앞의 constructor를 사용할때와 같은 기능을 한다는 것을 확인 할 수 있습니다. @property의 인자로",t(L,{href:"https://lit-element.polymer-project.org/guide/properties#property-options",children:"다양한 옵션",[e]:{href:e}},"lM_13"),"들을 설정해 사용할 수 있습니다. 후에 하나씩 살펴보도록 하겠습니다.",t(i,{subtitle:"change property",[e]:{subtitle:e}},"lM_14"),"property에 변화를 주어 리렌더가 되는것을 해보려고 합니다. setTimeOut을 이용하여 2초후에 이름이 바뀌게 해보도록 하겠습니다.",t(n,{code:Qt,language:"typescript",[e]:{code:e,language:e}},"lM_15"),"실행을 해보면 2초후에 'tomato1'이 'tomato2'로 변경되는 것을 볼 수 있습니다.",t("br",{}),t("br",{}),"connectedCallback() : 웹 컴포넌트의 생명주기 중 하나로 문서의 DOM에 컴포넌트가 추가 될 때 호출됩니다. 리액트에서 componentDidMount라고 생각하면 쉽게 다가올 것입니다. 모든 생명주기 메서드는 'super.connectedCallback()' 와 같이 super 메서드를 호출해야합니다.",t(F,{children:'this.name="tomato2";'},"lM_16"),"앞의 코드처럼 property를 변경 할 수 있습니다. property 변경은 비동기 업데이트주기를 트리거하여 구성 요소가 템플릿을 다시 렌더링하도록 할 수 있습니다. lit-element의 생명주기는 다음 포스팅에서 알아보기로 하겠습니다.",t(i,{subtitle:"attribute",[e]:{subtitle:e}},"lM_17"),"이번에는 다른 방법을 이용하여 property를 변경시켜보도록 하겠습니다. this.setAttribute()를 사용하여 property를 변경 해보도록 하려고 합니다.",t(n,{code:Wt,language:"typescript",[e]:{code:e,language:e}},"lM_18"),"2초후에 'Hello tomato3'으로 변경이 되었습니다. setAttribute는 attribute를 변경하는 함수인데 어째서 property가 변경 되었을까요?",t(F,{children:"lit-element에서 선언된 모든 property는 observed attribute가 만들어 지게 됩니다."},"lM_19"),'property에 대한 attribute는 lowercased 문자열로 생성이 됩니다. 예로 myProp이라는 property는 "myprop"이라는 attribute를 가지게 됩니다.',t("br",{}),t("br",{}),"앞에 property를 선언할때 옵션을 줄 수 있다고 하였는데 옵션중 attribute는 이와 관련된 설정을 하게 됩니다.",t(n,{code:Jt,language:"typescript",[e]:{code:e,language:e}},"lM_20"),"attribute를 설정해주지 않는다면 attribute의 기본값인 true가 설정 됩니다.",t("br",{}),'값이 true일 때 myProps1(property)는 "myprop1" attribute를 가지게 됩니다.',t("br",{}),"값이 true일 때 myProps2(property)는 attribute를 가지지 않습니다.",t("br",{}),'값이 "my-custom-prop3" 일 때 myProp3(property)는 "my-custom-prop3"이라는 attribute를 가지게 됩니다.',t("br",{}),t("br",{}),"setAttribute()를 사용하면 첫번째 인자로 전달해준 attribute명의 property 값을 두번째 인자로 전달해준 값으로 변경하게 됩니다. 앞에서 'name'이 변경 된 것은 name property가 'name' attribute값을 가지게 되었고,",t("br",{}),`this.setAttribute("name", "tomato3")를 통해 'name' attribute를 가진 property의 값을 'tomato3'으로 변경하게 되었기 때문입니다.`,t("br",{}),t("br",{}),"각자 다른 attribute 값을 가진 프로퍼티에 setAttribute()를 이용하여 property 값이 변경되는지 확인해보도록 하겠습니다.",t(n,{code:Yt,language:"typescript",[e]:{code:e,language:e}},"lM_21"),t(P,{src:"https://res.cloudinary.com/dij9kacx9/image/upload/v1628081066/lit-blog/text-hello_s1eamq.png",alt:"lit-element attribute 차이 결과",width:"300",[e]:{src:e,alt:e,width:e}},"lM_22"),"myProp2를 제외한 property의 값이 변경 되었습니다. myProp2는 왜 변경되지 않았을까요?",t(F,{children:'@property({ attribute: false }) myProp2 = "myProp2";'},"lM_23"),'attribute 값을 false로 하여attribute가 생성되지 않아 setAttribute("myprop2","")에서 "myprop2"를 찾을 수 없었기 때문입니다. attribute가 변경 되는 것을 좀더 직접적으로 확인해 보도록 하겠습니다.',t(n,{code:Xt,language:"typescript",[e]:{code:e,language:e}},"lM_24"),"콘솔에 다음과 같이 출력 되었습니다.",t(P,{src:"https://res.cloudinary.com/dij9kacx9/image/upload/v1628082042/lit-blog/console_vovh8h.png",alt:"attribute 변경 콘솔",[e]:{src:e,alt:e}},"lM_25"),"attributeChangedCallback(): 웹 컴포넌트의 생명주기 중 하나로 컴포넌트 attribute값이 변경 될 때 호출됩니다. 첫번째 인자로 변경된 attribute의 문자열을, 두번째 인자로 변견 전의 값을, 세번째 인자로 변경 된 값을 받게 됩니다. 마찬자기로 생명주기 메서드는 super를 사용해야 합니다.",t("br",{}),t("br",{}),"그렇다면 이전에 하였던 property를 직접 변경하는 방법을 사용하면 어떻게 될까요? 버튼을 만들어 setAttribute() 대신 직접 property를 변경하는 함수를 버튼의 클릭 이벤트로 전달해 주도록 하겠습니다.",t(n,{code:Kt,language:"typescript",[e]:{code:e,language:e}},"lM_26"),t(P,{src:"https://res.cloudinary.com/dij9kacx9/image/upload/v1628082222/lit-blog/property%E1%84%87%E1%85%A7%E1%86%AB%E1%84%80%E1%85%A7%E1%86%BC%E1%84%92%E1%85%A1%E1%86%B7%E1%84%89%E1%85%AE_fioifj.png",alt:"프로퍼티 변경 이벤트",width:"300",[e]:{src:e,alt:e,width:e}},"lM_27"),"버튼을 클릭하자 값이 전부 변경 되었습니다. 이 방식은 property의 attribute을 변경 한 것이아닌 property의 자동으로 생성 된 setter를 실행하여 변경하였기 때문입니다.",t(i,{subtitle:"accessors",[e]:{subtitle:e}},"lM_28"),"property를 선언하였을때 다음과 같이 getter와 setter가 생성 됩니다.",t(n,{code:Gt,language:"typescript",[e]:{code:e,language:e}},"lM_29"),"getter와 setter 쌍을 property accessors라고 부릅니다. property를 선언할때에 accessors를 자동으로 만들지 않고 getter와 setter를 직접 만들어 줄 수 있습니다. 'name' property를 다음과 같이 변경하도록 하겠습니다.",t(n,{code:eo,language:"typescript",[e]:{code:e,language:e}},"lM_30"),'setter에 변경될 값에 "-custom"이라는 글자가 추가되도록 하였습니다.',t(P,{src:"https://res.cloudinary.com/dij9kacx9/image/upload/v1628082373/lit-blog/setter_qogc7u.png",alt:"setter 사용하기",width:"300",[e]:{src:e,alt:e,width:e}},"lM_31"),"커스텀 setter가 실행되어 그림과 같이 출력이 되는 것을 볼 수 있습니다. 앞에서 attribute를 변경하는 것과 accessors를 이용하여 property를 변경하는 것을 해보았습니다.",t("br",{}),t("br",{}),"그렇다면 이번에는 반대로 property의 업데이트를 방지하는 것은 어떻게 해야할까요?",t(i,{subtitle:"hasChanged",[e]:{subtitle:e}},"lM_32"),"property의 hascChanged옵션을 사용한다면 이전 값과, 새로운 값을 이용하여 property의 업데이트를 결정 할 수 있습니다.",t(n,{code:to,language:"typescript",[e]:{code:e,language:e}},"lM_33"),"여기까지 property의 옵션 중attribute, noAccessor, hasChanged 값에대해 다뤄 보았습니다. property는 이외에도 type, reflect, converter 옵션을 가지고 있습니다. 이는 property의 값을 변환해주는 용도로 사용할 수 있습니다. ",t("br",{}),t("br",{}),"더 자세한 정보는",t(L,{href:"https://lit-element.polymer-project.org/guide/properties",children:"properties 공식문서",[e]:{href:e}},"lM_34"),"를 참고 하시기 바랍니다. ",t("br",{}),t("br",{}),"다음 장에서는 lit-element의 생명주기를 살펴보면서 업데이트가 발생하는 순서를 살펴보도록 하겠습니다."]},"lM_35")]},"lM_36"),"s_AkHDIMD4d8M")),It=`class Tomato extends LitElement {
    static get properties() {
      return {
        name,
      };
    }
   

   render() {
    return html&backtick;
      <style></style>
      <h1>Hello &dollar;{this.name}</h1>
      &backtick;;
   }`,zt=`class Tomato extends LitElement {
       static get properties() {
         return {
           name,
         };
       }
     
       constructor() {
         super();
         this.name = "tomato1";
       }
       render() {
         return html&backtick;
           <style></style>
           <h1>Hello &dollar;{this.name}</h1>
           &backtick;;
       }
     }`,Ut=`
import { LitElement, html, customElement, property } from "lit-element";
import PostLink from '../../components/post/post-link/index';
import PostBlockquote from '../../components/post/PostBlockquote/index';
import PostSeries from '../../../components/post/post-series/index';

@customElement("lit-tomato")
class Tomato extends LitElement {
  @property() name = "tomato1";

  render() {
    return html&backtick;
      <style></style>
      <h1>Hello &dollar;{this.name}</h1>
      &backtick;;
  }
}
`,Qt=`
@customElement("lit-tomato")
class Tomato extends LitElement {
  @property() name = "tomato1";

  connectedCallback() {
    super.connectedCallback();

    setTimeout(() => {
      this.name = "tomato2";
    }, 2000);
  }`,Wt=`
@property() name = "tomato1";

connectedCallback() {
  super.connectedCallback();

  setTimeout(() => {
    this.setAttribute("name", "tomato3");
    this.requestUpdate();
  }, 2000);
}`,Jt=`
@property({ attribute: true }) myProp1 = "myProp1";
@property({ attribute: false }) myProp2 = "myProp2";
@property({ attribute: "my-custom-prop3" }) myProp3 = "myProp3";`,Yt=`
@customElement("lit-tomato")
class Tomato extends LitElement {
  @property() name = "tomato1";
  @property({ attribute: true }) myProp1 = "myProp1";
  @property({ attribute: false }) myProp2 = "myProp2";
  @property({ attribute: "my-custom-prop3" }) myProp3 = "myProp3";

  connectedCallback() {
    super.connectedCallback();
    setTimeout(() => {
      this.setAttribute("name", "changed-name");
      this.setAttribute("myprop1", "changed-myProp1");
      this.setAttribute("myprop2", "changed-myProp2");
      this.setAttribute("my-custom-prop3", "changed-myProp3");

      this.requestUpdate();
    }, 2000);
  }

  render() {
    return html$backtick;
      <style></style>
      <h1>Hello &dollar;{this.name}</h1>
      <h1>Hello &dollar;{this.myProp1}</h1>
      <h1>Hello &dollar;{this.myProp2}</h1>
      <h1>Hello &dollar;{this.myProp3}</h1>
      $backtick;;
  }
}
`,Xt=`
attributeChangedCallback(attributeName: string, oldVal: any, newVal: any) {
    super.attributeChangedCallback(attributeName, oldVal, newVal);
    console.log(
      "attribute ",
      attributeName,
      "은 ",
      oldVal,
      "에서 ",
      newVal,
      "로 변경되었습니다."
    );
  }`,Kt=`
@customElement("lit-tomato")
class Tomato extends LitElement {
  @property() name = "tomato1";
  @property({ attribute: true }) myProp1 = "myProp1";
  @property({ attribute: false }) myProp2 = "myProp2";
  @property({ attribute: "my-custom-prop3" }) myProp3 = "myProp3";

  changeProperties() {
    this.name = "changed-name";
    this.myProp1 = "changed-myProp1";
    this.myProp2 = "changed-myProp2";
    this.myProp3 = "changed-myProp3";
  }

  render() {
    return html&backtick;
      <style></style>
      <h1>Hello &dollar;{this.name}</h1>
      <h1>Hello &dollar;{this.myProp1}</h1>
      <h1>Hello &dollar;{this.myProp2}</h1>
      <h1>Hello &dollar;{this.myProp3}</h1>
      <button @click="&dollar;{this.changeProperties}">changeProperties</button>
      &backtick;;
  }
}`,Gt=`
static get properties() { return { myProp: { type: String } }; }

set myProp(value) {
  // Implement setter logic here... 
  // retrieve the old property value and store the new one
  this.requestUpdate('myProp', oldValue);
} 
get myProp() { ... }

...

// Later, set the property
this.myProp = 'hi'; // Invokes your setter`,eo=`
private _name: string = "tomato1";

@property({ noAccessor: true })
get name() {
  return this._name;
}

set name(val) {
  let oldVal = this._name;
  this._name = val + "-custom";
  this.requestUpdate("prop", oldVal);
}`,to=`
class Tomato extends LitElement {
    @property({
      hasChanged: (newVal, oldVal) => {
        return false;
      },
    })
    name = "original-name";
  
    changeProperties() {
      this.name = "changed-name";
    }
    render() {
      return html&backtick;
        <style></style>
        <h1>Hello &dollar;{this.name}</h1>
        <button @click="&dollar;{this.changeProperties}">changeProperties</button>
        &backtick;;
    }
  }`,mr=Object.freeze(Object.defineProperty({__proto__:null,code1:It,code10:Gt,code11:eo,code12:to,code2:zt,code3:Ut,code4:Qt,code5:Wt,code6:Jt,code7:Yt,code8:Xt,code9:Kt,default:gr,head:ur},Symbol.toStringTag,{value:"Module"})),hr={title:"Lit 튜토리얼 (3/6)",meta:[{property:"keywords",content:"lit lit-html lit-elemnt tutorial lifecycle"}]},br=w(h(()=>a(S,{children:[t(D,{src:"https://res.cloudinary.com/dij9kacx9/image/upload/v1628066597/lit-blog/lit-post-head_tjswjn.jpg",[e]:{src:e}},"dC_0"),a($,{children:[t("h1",{children:"Lit 튜토리얼 (3/6)"}),t(T,{tags:"lit lit-html lit-elemnt tutorial lifecycle",[e]:{tags:e}},"dC_1"),t(O,{children:"2021-07-25"},"dC_2"),t(ce,{title:"Lit tutorial",[e]:{title:e}},"dC_3")]},"dC_4"),a(H,{children:[t(L,{href:"https://lit-element.polymer-project.org/guide/lifecycle",children:"LitElement의 라이프사이클",[e]:{href:e}},"dC_5"),"에 대해 다뤄보도록 하겠습니다. 모든 라이프사이클 메서드에서는 super를 사용하여야 하는것을 유의하여야 합니다. lit-element는 웹 컴포넌트의 기본 라이프사이클을 상속하게 됩니다.",t(L,{href:"https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#using_the_lifecycle_callbacks",children:"웹 컴포넌트 라이프사이클",[e]:{href:e}},"dC_6"),t(i,{subtitle:"웹 컴포넌트 라이프 사이클",[e]:{subtitle:e}},"dC_7"),"웹 컴포넌트의 기본 라이프사이클은 다음과 같습니다.",t(F,{children:"connectedCallback: 커스텀 엘리먼트가 문서의 DOM에 처음 연결될 때 호출됩니다. disconnectedCallback: 커스텀 엘리먼트가 문서의 DOM에서 연결 해제 될 때 호출됩니다."},"dC_8"),"conntectedCallback을 사용하여 리액트에서 componentDidMount처럼 이벤트를 추가하거나 데이터를 불러올 수 있습니다.",t(n,{code:oo,language:"typescript",[e]:{code:e,language:e}},"dC_9"),t(F,{children:"adoptedCallback: 커스텀 엘리먼트가 새 문서로 이동 될 때 호출됩니다."},"dC_10"),t(F,{children:"attributeChangedCallback: 커스텀 엘리먼트의 속성 중 하나가 추가, 제거 또는 변경 될 때 호출됩니다."},"dC_11"),"다음과 같이 변경된 속성의 이름, 변경되기 전의 값, 변경된 값을 세개의 인자로 받게 됩니다.",t(n,{code:no,language:"typescript",[e]:{code:e,language:e}},"dC_12"),t(i,{subtitle:"property 변경 라이프사이클",[e]:{subtitle:e}},"dC_13"),"엘리먼트의 property를 변경하게 될때의 라이프 사이클 순서입니다.",a("ol",{children:[t("li",{children:"someProperty.hasChanged"}),t("li",{children:"requestUpdate"}),t("li",{children:"performUpdate"}),t("li",{children:"shouldUpdate"}),t("li",{children:"update"}),t("li",{children:"render"}),t("li",{children:"firstUpdated"}),t("li",{children:"updated"}),t("li",{children:"updateComplete"})]}),"하나씩 살펴보도록 하겠습니다.",t(i,{subtitle:"1. someProperty.hasChanged",[e]:{subtitle:e}},"dC_14"),"이전 포스팅에서 property의 hasChanged 옵션을 이용하여 업데이트를 제어 할 수 있었습니다.",t(n,{code:ao,language:"typescript",[e]:{code:e,language:e}},"dC_15"),t(i,{subtitle:"2. requestUpdate",[e]:{subtitle:e}},"dC_16"),'property의 hasChanged가 true라면 property의 setter가 실행 됩니다. 그리고 setter 내부의 this.requestUpdate("prop", oldVal) 를 실행하게 됩니다.',t(n,{code:ro,language:"typescript",[e]:{code:e,language:e}},"dC_17"),t(i,{subtitle:"3. performUpdate",[e]:{subtitle:e}},"dC_18"),"기본적으로 performUpdate는 브라우저 이벤트 루프의 다음 실행이 끝난 후 마이크로 태스크로 예약됩니다. 일정을 잡으려면 performUpdate호출하기 전에 상태를 기다리는 비동기 메서드로 구현합니다 super.performUpdate(). 예를 들면 :",t(n,{code:io,language:"typescript",[e]:{code:e,language:e}},"dC_19"),t(i,{subtitle:"4. shouldUpdate",[e]:{subtitle:e}},"dC_20"),"업데이트 진행 여부를 제어합니다. 기본적으로 이 메서드는 항상 true를 반환합니다.",t(n,{code:lo,language:"typescript",[e]:{code:e,language:e}},"dC_21"),"그림과 같이 콘솔에 변경된 값들의 이전 값이 출력 됩니다.",t(P,{src:"https://res.cloudinary.com/dij9kacx9/image/upload/v1628415451/lit-blog/shouldupdate_jkrccv.png",alt:"shouldUpdate lifecycle",[e]:{src:e,alt:e}},"dC_22"),t(i,{subtitle:"5. update",[e]:{subtitle:e}},"dC_23"),"reflects property values to attributes(property값들을attributes에 반영합니다. lit-html의 render를 호출 합니다.",t(i,{subtitle:"6. render",[e]:{subtitle:e}},"dC_24"),"lit-html의 render를 이용하여 DOM을 렌더링 합니다.",t(i,{subtitle:"7. firstUpdated",[e]:{subtitle:e}},"dC_25"),"돔이 처음으로 업데이트 되었을때 호출 됩니다. 엘리먼트의 템플릿이 처음 만들어 졌을때 한번만 실행하기 위해 사용 됩니다.",t(n,{code:so,language:"typescript",[e]:{code:e,language:e}},"dC_26"),t(i,{subtitle:"8. updated",[e]:{subtitle:e}},"dC_27"),"돔이 업데이트되어 렌더링된 후에 호출 됩니다.",t(n,{code:co,language:"typescript",[e]:{code:e,language:e}},"dC_28"),t(i,{subtitle:"9. updateComplete",[e]:{subtitle:e}},"dC_29"),"updateComplete 는 Promise 로 업데이트가 끝났을때 resolve 합니다.",t(n,{code:po,language:"typescript",[e]:{code:e,language:e}},"dC_30"),t(i,{subtitle:"한번에 보기",[e]:{subtitle:e}},"dC_31"),t(n,{code:uo,language:"typescript",[e]:{code:e,language:e}},"dC_32"),"실행한 후 처음 페이지에 접속하여 커스텀 엘리먼트를 불러왔을 때",t(P,{src:"https://res.cloudinary.com/dij9kacx9/image/upload/v1628415734/lit-blog/lifecycle-first_aclapt.png",alt:"lit-element render lifecycle",[e]:{src:e,alt:e}},"dC_33"),"버튼을 클릭하였을 때",t(P,{src:"https://res.cloudinary.com/dij9kacx9/image/upload/v1628415781/lit-blog/update-lifecycle_xl4zlc.png",alt:"lit-element update lifecycle",[e]:{src:e,alt:e}},"dC_34")]},"dC_35")]},"dC_36"),"s_mCIot9D8VcY")),oo=`
connectedCallback() {
    super.connectedCallback();
    window.addEventListener('resize', this._handleResize);
  }
  disconnectedCallback() {
    window.removeEventListener('resize', this._handleResize);
    super.disconnectedCallback();
  }`,no=`attributeChangedCallback(name, oldValue, newValue) {
    super.attributeChangedCallback(name, oldValue, newValue);
    console.log(name, oldValue, newValue);
  }
}`,ao=`@property({
    hasChanged: (newVal, oldVal) => {
      console.log("has changed", oldVal, " to ", newVal);
      return true;
    },
  })
  name = "original-name";`,ro=`@customElement("lit-tomato")
class Tomato extends LitElement {
  private _name: string = "original-name";

  @property({
    hasChanged: (newVal, oldVal) => {
      return true;
    },
  })
  get name() {
    return this._name;
  }

  set name(val) {
    let oldVal = this._name;
    this._name = val;
    this.requestUpdate("prop", oldVal);
  }
  render() {
    return html&backtick;
      <style></style>
      <h1>Hello &dollar;{this.name}</h1>
      <button @click="&dollar;{this.changeProperties}">changeProperties</button>
      &backtick;;
  }

  changeProperties() {
    this.name = "changed-name";
  }
}`,io=`async performUpdate() {
    console.log("performUpdate");
    await new Promise((resolve) => requestAnimationFrame(() => resolve()));
    super.performUpdate();
  }`,lo=`shouldUpdate(changeProperties) {
    console.log("shouldUpdate?", changeProperties);
    super.shouldUpdate(changeProperties);
    return true;
  }`,so=`firstUpdated(changedProperties) {
    console.log("first updated!");
    super.firstUpdated(changedProperties);
  }`,co=`updated(changedProperties) {
    console.log("updated", changedProperties);
    super.updated(changedProperties);
  }`,po=`async changeProperties() {
    this.name = "changed-name";
    await this.updateComplete;
    console.log("update completed!");
  }`,uo=`@customElement("lit-tomato")
  class Tomato extends LitElement {
    @property({
      hasChanged: (newVal, oldVal) => {
        console.log("has changed", oldVal, " to ", newVal);
        return true;
      },
    })
    name = "original-name";
  
    connectedCallback() {
      super.connectedCallback();
      console.log("connected");
    }
    disconnectedCallback() {
      super.connectedCallback();
      console.log("disconnected");
    }
  
    async performUpdate() {
      console.log("performUpdate");
      await new Promise((resolve) => requestAnimationFrame(() => resolve()));
      super.performUpdate();
    }
  
    shouldUpdate(changeProperties) {
      console.log("shouldUpdate?", changeProperties);
      super.shouldUpdate(changeProperties);
      return true;
    }
  
    firstUpdated(changedProperties) {
      console.log("first updated!");
      super.firstUpdated(changedProperties);
    }
  
    updated(changedProperties) {
      console.log("updated", changedProperties);
      super.updated(changedProperties);
    }
  
    render() {
      return html&backtick;
        <style></style>
        <h1>Hello &dollar;{this.name}</h1>
        &dollar;{console.log("render!!")}
        <button @click="&dollar;{this.changeProperties}">changeProperties</button>
        &backtick;;
    }
  
    async changeProperties() {
      this.name = "changed-name";
      await this.updateComplete;
      console.log("update completed!");
    }
  }`,fr=Object.freeze(Object.defineProperty({__proto__:null,code1:oo,code10:uo,code2:no,code3:ao,code4:ro,code5:io,code6:lo,code7:so,code8:co,code9:po,default:br,head:hr},Symbol.toStringTag,{value:"Module"})),yr={title:"Lit 튜토리얼 (4/6)",meta:[{property:"keywords",content:"lit lit-html lit-elemnt tutorial lifecycle"}]},_r=w(h(()=>a(S,{children:[t(D,{src:"https://res.cloudinary.com/dij9kacx9/image/upload/v1628066597/lit-blog/lit-post-head_tjswjn.jpg",[e]:{src:e}},"XM_0"),a($,{children:[t("h1",{children:"Lit 튜토리얼 (4/6)"}),t(T,{tags:"lit lit-html lit-elemnt tutorial lifecycle",[e]:{tags:e}},"XM_1"),t(O,{children:"2021-07-25"},"XM_2"),t(ce,{title:"Lit tutorial",[e]:{title:e}},"XM_3")]},"XM_4"),a(H,{children:["이번 포스팅에는 LitElement에서 바인딩(bind) 하는 것을 알아보도록 하겠습니다. lit-html에서는 엘리먼트에 자바스크립트 표현식을 바인딩 하는 방법이 특별합니다.",t(L,{href:"https://lit-html.polymer-project.org/guide/template-reference#binding-types",children:"lit-html-biding",[e]:{href:e}},"XM_5"),"예제를 통해 살펴보도록 하겠습니다.",t(i,{subtitle:"property",[e]:{subtitle:e}},"XM_6"),t("code",{children:"<input>"})," 태그에 값을 변경하고 저장할 수 있도록 value와 change 이벤트를 넣어주도록 하겠습니다.",t(n,{code:go,language:"typescript",[e]:{code:e,language:e}},"XM_7"),t("code",{children:"<input>"}),"태그에 .value라는 값으로 value property를 넣어주었습니다. 여기서 속성에 ' . '이 붙어있다면 값은",t("code",{children:"<input>"}),"태그의 value property에 바인딩 되게 됨을 의미합니다.",t("br",{}),"' . '은 lit-html에서 property를 바인딩 할 때 사용됩니다.",t(i,{subtitle:"event listener",[e]:{subtitle:e}},"XM_8"),"@keyup을 넣게 되면 ",t("code",{children:"<input>"}),"의 'keyup'에 이벤트에 onChange라는 이벤트 헨들러를 추가해 주게 됩니다. 결과적으로,"," ",t("code",{children:"<input>"}),"의 keyup 이벤트가 발생할 때 마다 value property가 변경되며 콘솔이 찍히게 됩니다.",t(i,{subtitle:"attribute",[e]:{subtitle:e}},"XM_9"),"이번에는 ",t("code",{children:"<input>"}),"의 '.value' 속성을 'value'로 변경해보도록 하겠습니다.",t(n,{code:mo,language:"typescript",[e]:{code:e,language:e}},"XM_10"),"속성에 ' . '을 제거하였을때 어떤 차이가 있는지 개발자도구의 'Element'탭을 보면 직접적으로 볼 수 있습니다.",t(P,{src:"https://res.cloudinary.com/dij9kacx9/image/upload/v1628509604/lit-blog/attribute_oflsk8.png",alt:"lit-element attribute 차이",width:"200",[e]:{src:e,alt:e,width:e}},"XM_11"),"'value=' 와 같이 속성이름 앞에 기호가 없다면 attribute로 바인딩 되게 됩니다.",t("br",{}),"attribute를 전달해 주면 그림과 같이 html 속성으로 추가되는걸 볼 수 있습니다. 몇 가지 attribute를 더 사용해 보도록 하겠습니다.",t(n,{code:ho,language:"typescript",[e]:{code:e,language:e}},"XM_12"),"이러한 값들을 attribute로 바인딩 할 수 있습니다.",t(i,{subtitle:"boolean attribute",[e]:{subtitle:e}},"XM_13"),"이번에는",t("code",{children:"<input>"})," 태그에 'disabled'를 추가해 보도록 하겠습니다.",t(n,{code:bo,language:"typescript",[e]:{code:e,language:e}},"XM_14"),"'disabled'를 추가하려하니 다음과 같은 경고가 나오게 됩니다.",t(P,{src:"https://res.cloudinary.com/dij9kacx9/image/upload/v1628512409/lit-blog/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2021-08-09_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_9.33.09_qpb13r.png",alt:"disabled 사용시 경고",[e]:{src:e,alt:e}},"XM_15"),"해당 attribute는 boolean 타입이므로 boolean 바인딩을 사용하라는 경고 입니다. boolean 바인딩을 사용하기 위해서는 속성앞에 '?' 를 추가해 주어야 합니다.",t(n,{code:fo,language:"typescript",[e]:{code:e,language:e}},"XM_16"),"이렇게 lit-html의 엘리먼트에 값을 바인딩 하는 것을 살펴 보았습니다. 그렇다면 커스텀 엘리먼트에서는 어떻게 사용해야 할까요?",t("br",{}),"커스텀 엘리먼트에서는 값들을 어떻게 바인딩하여 사용 할 수 있는지 알아보도록 하겠습니다.",t(i,{subtitle:"custom element",[e]:{subtitle:e}},"XM_17"),"앞에서 ",t("code",{children:"<input>"})," 태그를 사용하여 property를 바인딩 하였드이 커스텀 엘리먼트를 만들어 property를 바인딩 해보도록 하겠습니다. 우선 property를 가진",t("code",{children:"<lit-tomato>"})," 라는 엘리먼트를 만들어",t("code",{children:"<child-tomato>"})," 라는 컴포넌트를 바인딩 시키도록 하겠습니다. ",t("br",{}),t("br",{}),"앞의 코드에서 id는 attribute, .value는 property, @change는 event Listener, ?disabled는 boolean Attribute로",t("code",{children:"<input>"})," 태그에 바인딩 되었습니다. 만약 앞에 기호를 붙이지 않는다면 전부 attribute로 바인딩 되게 됩니다.",t("br",{}),t("br",{}),"이번에는 커스텀 엘리먼트를 만들어 속성들을 바인딩해보도록 하겠습니다.",t(n,{code:yo,language:"typescript",filename:"pages/lit-tomato.ts",[e]:{code:e,language:e,filename:e}},"XM_18"),t(n,{code:_o,language:"typescript",filename:"pages/child-tomato.ts",[e]:{code:e,language:e,filename:e}},"XM_19"),t("code",{children:"<lit-tomato>"}),"에 앞에서와 같이 전달할 property를 만들도록 하겠습니다.",t(n,{code:vo,language:"typescript",[e]:{code:e,language:e}},"XM_20"),t("code",{children:"<input>"}),"에서와 동일하게 속성을 전달해 보도록 하겠습니다.",t(n,{code:ko,language:"typescript",[e]:{code:e,language:e}},"XM_21"),"그리고 child-tomato가 값을 받았는지 확인해 보도록 하겠습니다.",t(n,{code:Lo,language:"typescript",filename:"components/child-tomato.ts",[e]:{code:e,language:e,filename:e}},"XM_22"),t(P,{src:"https://res.cloudinary.com/dij9kacx9/image/upload/v1628513748/lit-blog/result_mjkgyq.png",alt:"자식이 받은 값",width:"300",[e]:{src:e,alt:e,width:e}},"XM_23"),"attribute 인 'id'와, property인 '.value'값이 출력 된 것을 확인 할 수 있었습니다. 이벤트 헨들러와 disabled 값은 어떻게 받아와야 할까요?",t("br",{}),t("br",{}),"이벤트 헨들러를 @change로 전달하게 되면 onChange 함수를 값으로 전달받는 것이 아닌, ",t("code",{children:"<child-tomato>"}),"에 change 의 change 이벤트에 이벤트 리스너가 추가 됨을 의미합니다. 이를 확인하기위해 event를 발생시켜 보도록 하겠습니다.",t(n,{code:wo,language:"typescript",filename:"components/child-tomato.ts",[e]:{code:e,language:e,filename:e}},"XM_24"),"콘솔에 'tomato'가 출력 되는 것을 확인 할 수 있었습니다.",t("br",{}),"좀 더 직접적으로 확인해 보기위해 이벤트 이름을 바꿔보도록 하겠습니다!",t(n,{code:xo,language:"typescript",filename:"pages/lit-tomato.ts",[e]:{code:e,language:e,filename:e}},"XM_25"),t(n,{code:Mo,language:"typescript",[e]:{code:e,language:e}},"XM_26"),"동일하게 'tomato'가 출력되는 것을 확인 할 수 있었습니다.",t("br",{}),"그렇다면 ","<child-tomato>","의 ","<input>","태그에 onChange를 전달하여 사용하려면 어떻게 해야할가요?",t("br",{}),"<lit-tomato>","에서 '@change'를 '.onchange'로 변경해 보도록 하겠습니다.",t(n,{code:jo,language:"typescript",filename:"pages/lit-tomato.ts",[e]:{code:e,language:e,filename:e}},"XM_27"),t(n,{code:Co,language:"typescript",filename:"components/child-tomao.ts",[e]:{code:e,language:e,filename:e}},"XM_28"),t(P,{src:"https://res.cloudinary.com/dij9kacx9/image/upload/v1628596277/lit-blog/onchange_wryjcb.png",width:"300",alt:"자식이 받은 onchange이벤트",[e]:{src:e,width:e,alt:e}},"XM_29"),"이벤트 헨들러를 property로 전달해주었습니다. 전달받은 이벤트 헨들러를 ","<input>","태그의 @keyup 속성에 넣어주도록 하겠습니다. 그리고 전달받은 value를 띄우도록 하겠습니다.",t(n,{code:Eo,language:"typescript",[e]:{code:e,language:e}},"XM_30"),t(P,{src:"https://res.cloudinary.com/dij9kacx9/image/upload/v1628596419/lit-blog/keyup_iurtwj.png",width:"300",alt:"keyup으로 인풋값 변경하기",[e]:{src:e,width:e,alt:e}},"XM_31"),"인풋안에 값을 입력하면 콘솔에 입력값이 출력 되는 걸 확인 할 수 있습니다.하지만 'input value is tomaoto'는 변경되지 않는 걸로 보아 ",t("code",{children:"<lit-tomato>"}),"의 value가",t("code",{children:"<child-tomato>"}),"에 바인딩 되지 않았다는 걸 알수 있습니다. 바인딩 시키기위해 ",t("code",{children:"<child-tomato>"}),"에 value property를 만들어 주도록 하겠습니다.",t(n,{code:So,language:"typescript",filename:"components/child-tomato.ts",[e]:{code:e,language:e,filename:e}},"XM_32"),"이제 인풋에 값을 입력하면 ","","태그안의 this.value 값도 변경되 는것을 확인 할 수 있습니다.",t(P,{src:"https://res.cloudinary.com/dij9kacx9/image/upload/v1628596576/lit-blog/%E1%84%8C%E1%85%A1%E1%84%89%E1%85%B5%E1%86%A8value_hy7yku.png",width:"300",alt:"자식의 property",[e]:{src:e,width:e,alt:e}},"XM_33"),"이처럼 커스텀 엘리먼트에 property를 바인딩 하기 위해선 커스텀 엘리먼트에서 property를 선언해 주어야 합니다.",t("br",{}),t("br",{}),"이전에 '?disabled'로 전달해준 속성의 값이 undefined 였습니다. ' ?' 기호는 attribute이기에 property처럼 값을 받지 못하였습니다. disabled 값을 바인딩하기 위해 커스텀 엘리먼트에 'disabled'라는 이름을 가진 attribute가 필요합니다.",t("code",{children:"<child-tomato>"}),"에 'disabled'라는 attribute를 가진 property를 만들어 보도록 하겠습니다.",t(n,{code:Ao,language:"typescript",[e]:{code:e,language:e}},"XM_34"),t(P,{src:"https://res.cloudinary.com/dij9kacx9/image/upload/v1628597209/lit-blog/disabled-input_cnnbfz.png",width:"100",alt:"disabled-input",[e]:{src:e,width:e,alt:e}},"XM_35"),t("code",{children:"<lit-tomato>"}),"의 disabled 값은 'true'로 disabled 값이 잘 적용 된 것을 확인할 수 있습니다.",t(i,{subtitle:"children",[e]:{subtitle:e}},"XM_36"),"이번에는 ",t("code",{children:"<child-tomato>"}),"에게 html 템플릿을 전달해보도록 하겠습니다.",t(n,{code:Po,language:"typescript",filename:"pages/lit-tomato.ts",[e]:{code:e,language:e,filename:e}},"XM_37"),t(n,{code:Ho,language:"typescript",filename:"components/child-tomato.ts",[e]:{code:e,language:e,filename:e}},"XM_38"),t(P,{src:"https://res.cloudinary.com/dij9kacx9/image/upload/v1628597444/lit-blog/%E1%84%8C%E1%85%A1%E1%84%89%E1%85%B5%E1%86%A8_fjdwka.png",width:"100",alt:"전달할 자식: 텍스트",[e]:{src:e,width:e,alt:e}},"XM_39"),"자식을 나타내려면 어떻게 해야할까요?",t("br",{}),"첫번째 방법은 간단하게 this.children을 사용하면 됩니다.",t(n,{code:$o,language:"typescript",[e]:{code:e,language:e}},"XM_40"),"다른 방법은 쉐도우 돔의 ",t("code",{children:"<slot>"}),"태그를 사용하는 것입니다.",t("br",{}),a(L,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot",children:[" ","slot MDN"],[e]:{href:e}},"XM_41"),t(i,{subtitle:"마치며..",[e]:{subtitle:e}},"XM_42"),"Lit-html에서 property를 바인딩 하는 것을 알아 보았습니다. 바인딩하는 법만 알게된다면 투두리스트 정도의 웹을 만드는데 큰 어려움을 없을 거라 생각합니다.",t("br",{}),"다음 포스팅에서는 redux를 사용하여 전역 상태관리를 해보려고 합니다."]},"XM_43")]},"XM_44"),"s_Dc6zx5uQKjY")),go=`@customElement("lit-tomato")
class Tomato extends LitElement {
  @property() value = "";

  onChange(e) {
    this.value = e.target.value;
    console.log(e.target.value);
  }

  render() {
    return html&backtick; <input .value="&dollar;{this.value}" @keyup="&dollar;{this.onChange}" /> &backtick;;
  }
}`,mo=`return html&backtick; <input value="&dollar;{this.value}" @keyup="&dollar;{this.onChange}" /> &backtick;;
`,ho=`render() {
  return html&backtick;
    <input
      id="my-input"
      class="my-class"
      type="text"
      style="color:blue;"
      .value="&dollar;{this.value}"
      @keyup="&dollar;{this.onChange}"
    />
    &backtick;
}`,bo=`<input
.value="&dollar;{this.value}"
@keyup="&dollar;{this.onChange}"
disabled="${!1}"
/>`,fo=`@property() value = "4";
@property({ type: Boolean }) disabled = false;

onChange(e) {
  this.value = e.target.value;
}

render() {
  return html&backtick;
    <input
      id="my-input"
      .value="&dollar;{this.value}"
      @change="&dollar;{this.onChange}"
      ?disabled="&dollar;{this.disabled}"
    />
    &backtick;;
}`,yo=`import { LitElement, html, customElement, property } from "lit-element";
import { component$ } from '@builder.io/qwik';
import "../components/child-tomato";

@customElement("lit-tomato")
class Tomato extends LitElement {
  render() {
    return html&backtick; <child-tomato></child-tomato> &backtick;;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "lit-tomato": Tomato;
  }
}`,_o=`import { LitElement, html, customElement, property } from "lit-element";

@customElement("child-tomato")
class ChildTomato extends LitElement {
  render() {
    return html&backtick;
      <style></style>
      <h1>i'm child-tomato</h1>
      <input />
      &backtick;;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "child-tomato": ChildTomato;
  }
}`,vo=`@property({ type: String }) value = "toamto";
@property({ type: Boolean }) disabled = true;

onChange(e) {
  this.value = e.target.value;
  console.log(e.target.value);
}`,ko=`<child-tomato
id="my-input"
.value="&dollar;{this.value}"
@change="&dollar;{this.onChange}"
?disabled="&dollar;{this.disabled}"
></child-tomato>`,Lo=`class ChildTomato extends LitElement {
  //*connectedCallback은 커스텀 엘리먼트가 문서의 DOM에 처음 연결될 때 호출됩니다.
  connectedCallback() {
    super.connectedCallback();
    console.log(this.id);
    console.log(this.value);
    console.log(this.change);
    console.log(this.disabled);
  }`,wo=`connectedCallback() {
    super.connectedCallback();

    this.dispatchEvent(new Event("change"));

    // console.log(this.id);
    // console.log(this.value);
    // console.log(this.change);
    // console.log(this.disabled);
  }`,xo=`<child-tomato
  @jerrynim-custom-event="&dollar;{this.onChange}"
></child-tomato>`,Mo=`class ChildTomato extends LitElement {
  connectedCallback() {
    super.connectedCallback();

    this.dispatchEvent(new Event("jerrynim-custom-event"));`,jo=`<child-tomato
.onchange="&dollar;{this.onChange}"
></child-tomato>`,Co=`connectedCallback() {
  super.connectedCallback();
  console.log(this.onchange);
}`,Eo=`class ChildTomato extends LitElement {
  customFunction: any;

  render() {
    return html&backtick;
      <style></style>
      <h1>i'm child-tomato</h1>
      <input .value="&dollar;{this.value}" @keyup="&dollar;{this.customFunction}" />
      input value is &dollar;{this.value}
      &backtick;;
  }
}`,So=`class ChildTomato extends LitElement {
  @property({ type: String }) value = "";`,Ao=`@property({ type: Boolean, attribute: "disabled" }) disabledValue = false;

<input
   .value="&dollar;{this.value}"
   @keyup="&dollar;{this.customFunction}"
   ?disabled="&dollar;{this.disabledValue}"
 />`,Po=`import { LitElement, html, customElement, property } from "lit-element";
import "../components/child-tomato";

@customElement("lit-tomato")
class Tomato extends LitElement {
  render() {
    return html&backtick;<child-tomato>자식</child-tomato>&backtick;;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "lit-tomato": Tomato;
  }
}`,Ho=`import { LitElement, html, customElement, property } from "lit-element";

@customElement("child-tomato")
class ChildTomato extends LitElement {
  render() {
    return html&backtick;
      <style></style>
      <div>자식 :</div>
      &backtick;;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "child-tomato": ChildTomato;
  }
}
`,$o=`class TomatoChild extends LitElement {
  render() {
    return html&backtick;
      <style></style>
      <div>&dollar;{this.children}</div>
      &backtick;;
  }
}`,vr=Object.freeze(Object.defineProperty({__proto__:null,code1:go,code10:Lo,code11:wo,code12:xo,code13:Mo,code14:jo,code15:Co,code16:Eo,code17:So,code18:Ao,code19:Po,code2:mo,code20:Ho,code21:$o,code3:ho,code4:bo,code5:fo,code6:yo,code7:_o,code8:vo,code9:ko,default:_r,head:yr},Symbol.toStringTag,{value:"Module"})),kr={title:"Lit 튜토리얼 (5/6)",meta:[{property:"keywords",content:"lit lit-html lit-elemnt tutorial redux"}]},Lr=w(h(()=>a(S,{children:[t(D,{src:"https://res.cloudinary.com/dij9kacx9/image/upload/v1628066597/lit-blog/lit-post-head_tjswjn.jpg",[e]:{src:e}},"JN_0"),a($,{children:[t("h1",{children:"Lit 튜토리얼 (5/6)"}),t(T,{tags:"lit lit-html lit-elemnt tutorial redux",[e]:{tags:e}},"JN_1"),t(O,{children:"2021-07-25"},"JN_2"),t(ce,{title:"Lit tutorial",[e]:{title:e}},"JN_3")]},"JN_4"),a(H,{children:["lit-프로젝트에 전역 형상 관리를 위하여 redux(리덕스)를 사용하도록 하겠습니다.",t("br",{}),"리덕스를 사용하는데 필요한 라이브러리들을 설치해 주도록 하겠습니다.",t(F,{children:"yarn add redux @reduxjs/toolkit pwa-helpers"},"JN_5"),"리덕스 툴킷을 이용하여 간단하게 스토어와 간단한 모듈을 만들도록 하겠습니다. 'pwa-helpers'는 컴포넌트에 스토어를 connect 하는 함수를 제공합니다.",t(i,{subtitle:"리덕스 스토어 만들기",[e]:{subtitle:e}},"JN_6"),t(n,{code:Do,language:"typescript",filename:"store/vegetable.ts",[e]:{code:e,language:e,filename:e}},"JN_7"),t(n,{code:To,language:"typescript",filename:"store/index.ts",[e]:{code:e,language:e,filename:e}},"JN_8"),t(i,{subtitle:"(option)리덕스 사가 사용하기",children:" ",[e]:{subtitle:e}},"JN_9"),"redux-saga를 사용하길 원한다면 다음과 같이 saga를 실행할 코드를 추가해 주세요.",t(n,{code:Oo,language:"typescript",[e]:{code:e,language:e}},"JN_10"),t(i,{subtitle:"리덕스 스토어 연결하기",children:" ",[e]:{subtitle:e}},"JN_11"),"리덕스를 사용할 컴포넌트에서 다음과 같이 connect를 해주도록 합니다.",t(n,{code:Zo,language:"typescript",filename:"pages/lit-tomato.ts",[e]:{code:e,language:e,filename:e}},"JN_12"),"리덕스의 값을 사용하기 위해 다음과 같이 작성합니다.",t(n,{code:Vo,language:"typescript",[e]:{code:e,language:e}},"JN_13"),"앞의 코드의 실행 결과 리덕스 값인 'redux-tomato'를 불러 올 수 있게 되었습니다.",t(P,{src:"https://res.cloudinary.com/dij9kacx9/image/upload/v1628775156/lit-blog/redux-tomato_vvu3hw.png",width:"200",alt:"lit-element redux 사용하기",[e]:{src:e,width:e,alt:e}},"JN_14"),t(i,{subtitle:"스토어 업데이트하기",[e]:{subtitle:e}},"JN_15"),"디스패치를 하여 리덕스의 name값을 변경해보도록 하겠습니다.",t(n,{code:Ro,language:"typescript",[e]:{code:e,language:e}},"JN_16"),"버튼을 클릭하면 액션을 디스패치하여 값이 변경되고, 바인딩된 name도 변경되는 것을 확인 할 수 있었습니다.",t(P,{src:"https://res.cloudinary.com/dij9kacx9/image/upload/v1628775273/lit-blog/redux-update_wcms8x.png",alt:"lit-elemnt redux update",[e]:{src:e,alt:e}},"JN_17")]},"JN_18")]},"JN_19"),"s_0GZ40zHMUUQ")),Do=`import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface VegetableState {
  name: string;
}

const initialState: VegetableState = {
  name: "redux-tomato",
};

const vegetable = createSlice({
  name: "vegetable",
  initialState,
  reducers: {
    setName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
  },
});

export const vegetableActions = { ...vegetable.actions };

export default vegetable;`,To=`import { combineReducers, configureStore } from "@reduxjs/toolkit";
import vegetable from "./vegetable";

const rootReducer = combineReducers({
  vegetable: vegetable.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});
`,Oo=`import {
    combineReducers,
    configureStore,
    getDefaultMiddleware,
  } from "@reduxjs/toolkit";
  import createSagaMiddleware, { Task } from "redux-saga";
  import { Store } from "redux";
  import { all } from "redux-saga/effects";
  
  const rootReducer = combineReducers({});
  
  export type RootState = ReturnType<typeof rootReducer>;
  
  let sagaMiddleware = createSagaMiddleware();
  
  const middleware = [
    ...getDefaultMiddleware({
      thunk: false,
      serializableCheck: false,
    }),
    sagaMiddleware,
  ];
  
  export const store = configureStore({
    reducer: rootReducer,
    middleware,
    devTools: true,
  });
  
  export function* rootSaga() {
    yield all([]);
  }
  
  export interface SagaStore extends Store {
    sagaTask?: Task;
  }
  
  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);`,Zo=`import { connect } from "pwa-helpers";
import { store } from "../store";

class Tomato extends connect(store)(LitElement) {
`,Vo=`import { LitElement, html, customElement, property } from "lit-element";
import "../components/child-tomato";
import { connect } from "pwa-helpers";
import { RootState, store } from "../store";
import { component$ } from '@builder.io/qwik';

@customElement("lit-tomato")
class Tomato extends connect(store)(LitElement) {
  //? state 정의 부분
  @property() name = "";

  //* 리덕스 업데이트 될때 실행 된다
  stateChanged(state: RootState) {
    console.log(state);
    this.name = state.vegetable.name;
    super.stateChanged(state);
  }

  render() {
    return html&backtick;&dollar;{this.name}&backtick;;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "lit-tomato": Tomato;
  }
}`,Ro=`class Tomato extends connect(store)(LitElement) {
    //? state 정의 부분
    @property() name = store.getState().vegetable.name;
  
    //* 리덕스 업데이트 될때 실행 된다
    stateChanged(state: RootState) {
      console.log("stateChanged");
      this.name = state.vegetable.name;
      super.stateChanged(state);
    }
  
    //* name 변경하기
    changeName() {
      store.dispatch(vegetableActions.setName("changed-tomato"));
    }
  
    render() {
      return html&backtick;&dollar;{this.name}
        <button @click="&dollar;{this.changeName}">change</button> &backtick;;
    }
  }`,wr=Object.freeze(Object.defineProperty({__proto__:null,code1:Do,code2:To,code3:Oo,code4:Zo,code5:Vo,code6:Ro,default:Lr,head:kr},Symbol.toStringTag,{value:"Module"})),xr={title:"Lit 튜토리얼 (6/6)",meta:[{property:"keywords",content:"lit lit-html lit-elemnt tutorial route"}]},Mr=w(h(()=>a(S,{children:[t(D,{src:"https://res.cloudinary.com/dij9kacx9/image/upload/v1628066597/lit-blog/lit-post-head_tjswjn.jpg",[e]:{src:e}},"Z0_0"),a($,{children:[t("h1",{children:"Lit 튜토리얼 (6/6)"}),t(T,{tags:"lit lit-html lit-elemnt tutorial route",[e]:{tags:e}},"Z0_1"),t(O,{children:"2021-07-25"},"Z0_2"),t(ce,{title:"Lit tutorial",[e]:{title:e}},"Z0_3")]},"Z0_4"),a(H,{children:["웹 컴포넌트에서 라우팅을 하는 법을 알아보도록 하겠습니다. 기존의 라우팅 처럼 해당 페이지를 불러와서 렌더링 한다기 보다, 웹 컴포넌트를 교체하는 방식이라고 생각하시면 편할거라 생각합니다.",t("br",{}),"라우팅을 하기위해",t(L,{href:"https://vaadin.com/router",children:"'@vaadin/router'",[e]:{href:e}},"Z0_5"),"라는 라이브러리를 설치하도록 하겠습니다.",t(F,{children:"yarn add @vaadin/router "},"Z0_6"),"'@vaadin/router'는 A CLIENT-SIDE ROUTER FOR WEB COMPONENTS, 웹 컴포넌트를 위한 클라이언트 사이드 라우터 입니다. 이전에는 'index.html'안에 웹 컴포넌트를 직접 불러와 사용하였지만 '@vaadin/router'를 사용하여 웹 컴포넌트를 교체하도록 하겠습니다.",t("br",{}),t("br",{}),"'index.html'에",t("code",{children:"<main>"}),"컴포넌트를 만들도록 하겠습니다.",t(n,{code:Fo,language:"html",filename:"index.html",[e]:{code:e,language:e,filename:e}},"Z0_7"),"앞에서 만든 ",t("code",{children:"<main>"}),"태그를 라우터로 만들어 내부에 웹 컴포넌트를 불러오도록 하겠습니다.",t(n,{code:Bo,language:"typescript",filename:"index.ts",[e]:{code:e,language:e,filename:e}},"Z0_8"),t("code",{children:"<main>"}),`태그를 불러와 경로가 "/"라면 'lit-tomato' 컴포넌트 불러오도록 설정하였습니다. 'lit-tomao'를 사용하기 위해 import를 해주었는네, 이를 다음과 같은 방식으로 경로가 변경될 때 불러 올 수 있습니다.`,t(n,{code:qo,language:"typescript",[e]:{code:e,language:e}},"Z0_9"),"'/lit-potato'경로를 주소창에 입력해 본다면 'lit-potato'컴포넌트가 ",t("code",{children:"<main>"}),"태그 안에 렌더링 된 것을 확인 할수 있었습니다.",t(P,{src:"https://res.cloudinary.com/dij9kacx9/image/upload/v1628986122/lit-blog/vaading-route_yntkky.png",alt:"라우트 렌더링 확인",[e]:{src:e,alt:e}},"Z0_10"),"이번에는 depth가 있는 경로를 가진 컴포넌트를 다뤄보겠습니다. 경로가 '/vegetable/lit-tomato'라면 어떻게 만들어야 할까요?",t("br",{}),"간단하게 path를 경로와 맞게 설정해주면 됩니다.",t(n,{code:No,language:"typescript",[e]:{code:e,language:e}},"Z0_11"),"이번에는 children이라는 속성을 이용하여 '/vegetable/lit-tomato'경로를 설정해보도록 하겠습니다.",t(n,{code:Io,language:"typescript",[e]:{code:e,language:e}},"Z0_12"),"브라우저에 '/vegetable/lit-tomato' 경로로 이동하여 보면 'lit-tomato' 컴포넌트가 렌더링 된 것을 확인 할 수 있습니다.",t(i,{subtitle:"동적라우팅",[e]:{subtitle:e}},"Z0_13"),"동적 경로를 설정하는 것 또한 간단합니다. 전달받을 query를 :를 사용하여 동적페이지를 만들 수 있습닏다.",t(n,{code:zo,language:"typescript",[e]:{code:e,language:e}},"Z0_14"),"기존에 없던 경로인 '/vegetable/lit-apple'을 브라우저에 입력하면 lit-tomato 컴포넌트가 나타나는 것을 확인 할 수 있습니다. 작성한 코드는",t(L,{href:"https://github.com/jerrynim/jerrynim-lit-project",children:"https://github.com/jerrynim/jerrynim-lit-project",[e]:{href:e}},"Z0_15"),"에서 확인할 수 있습니다."]},"Z0_16")]},"Z0_17"),"s_mViOfs0FKRo")),Fo=`<body>
<main></main>
  <script src="/vendor/webcomponents-loader.js"><\/script>
</body>`,Bo=`import "./styles/styles.css";
import "./pages/lit-tomato";
import { Router } from "@vaadin/router";
import { component$ } from '@builder.io/qwik';

window.addEventListener("load", () => {
  initRouter();
});

function initRouter() {
  const router = new Router(document.querySelector("main"));
  router.setRoutes([
    {
      path: "/",
      component: "lit-tomato",
    },
  ]);
}`,qo=`function initRouter() {
  const router = new Router(document.querySelector("main"));
  router.setRoutes([
    {
      path: "/",
      component: "lit-tomato",
    },
    {
      path: "/lit-potato",
      component: "lit-potato",
      action: () => {
        import("./pages/lit-potato");
      },
    },
  ]);
}`,No=`{
  path: "/vegetable/lit-tomato",
  component: "lit-tomato",
},`,Io=`{
  path: "/vegetable",
  component: "lit-tomato",
  children: [{ path: "/lit-tomato", component: "lit-tomato" }],
},`,zo=`{
  path: "/vegetable/:name",
  component: "lit-tomato",
},`,jr=Object.freeze(Object.defineProperty({__proto__:null,code1:Fo,code2:Bo,code3:qo,code4:No,code5:Io,code6:zo,default:Mr,head:xr},Symbol.toStringTag,{value:"Module"})),Cr={title:"간단한 원하는 길이의 배열 만들기",meta:[{property:"keywords",content:"simple make array length array from"}]},Er=w(h(()=>a(S,{children:[t(D,{},"dR_0"),a($,{children:[t("h1",{children:"간단한 원하는 길이의 배열 만들기"}),t(T,{tags:"simple make array length array from",[e]:{tags:e}},"dR_1"),t(O,{children:"2022-04-12"},"dR_2")]},"dR_3"),a(H,{children:["간단하게 원하는 길이의 배열을 만드는 방법:",t("br",{}),"Array.from 메서드를 이용합니다.",t(n,{code:Uo,language:"typescript",[e]:{code:e,language:e}},"dR_4"),t(n,{code:Qo,language:"typescript",filename:"결과",[e]:{code:e,language:e,filename:e}},"dR_5"),"끝"]},"dR_6")]},"dR_7"),"s_sAqWRcYNR08")),Uo="const array = Array.from({ length: 20 }, (_, index) => index);",Qo=`[
  0,  1,  2,  3,  4,  5,  6,
  7,  8,  9, 10, 11, 12, 13,
 14, 15, 16, 17, 18, 19
]`,Sr=Object.freeze(Object.defineProperty({__proto__:null,code1:Uo,code2:Qo,default:Er,head:Cr},Symbol.toStringTag,{value:"Module"})),Ar={title:".keystore 생성하는 법 (Mac)",meta:[{property:"keywords",content:"generate keystore android Mac"}]},Pr=w(h(()=>a(S,{children:[t(D,{src:"https://res.cloudinary.com/dij9kacx9/image/upload/v1640702976/lit-blog/key_fzonmy.jpg",[e]:{src:e}},"pg_0"),a($,{children:[t("h1",{children:".keystore 생성하는 법 (Mac)"}),t(T,{tags:"generate keystore android Mac",[e]:{tags:e}},"pg_1"),t(O,{},"pg_2")]},"pg_3"),a(H,{children:["Making .keystore for android debug",t(n,{code:"keytool -genkey -v -keystore debug.keystore -storepass android -alias <YOUR_ALIAS> -keypass android -keyalg RSA -keysize 2048 -validity 10000 ",[e]:{code:e}},"pg_4"),"And then, you need to enter First and LastName, Organizational Unit, Orgaization, City or Locality, State or Province, Country Code (XX) like this",t(n,{code:Wo,[e]:{code:e}},"pg_5"),"At last, enter 'Y' and you can get keystore file",t("br",{}),t("br",{}),"Because it is debug key, you don't have to enter password for it.",t("br",{}),t("br",{}),"If you want to generate keystore for release, just remove",t("code",{children:" -storepass android"}),t(n,{code:"keytool -genkey -v -keystore <KEY_STORE_NAME> -alias <YOUR_ALIAS> -keyalg RSA -keysize 2048 -validity 10000",[e]:{code:e}},"pg_6"),"Enter and it will look like this:",t(n,{code:"키 저장소 비밀번호 입력:",[e]:{code:e}},"pg_7"),"After enter your PWD and confirm PWD, put the answer as you did above",t(n,{code:Jo,[e]:{code:e}},"pg_8"),"That's all, you will get your keystore for release",t("br",{}),t("br",{}),"To check your keystore, run:",t(n,{code:"keytool -list -v -keystore debug.keystore",[e]:{code:e}},"pg_9"),"If you made key without password, password is 'android' ",t("br",{}),"or just press 'enter'",t("br",{}),"You can see keystore info like this.",t(n,{code:Yo,[e]:{code:e}},"pg_10")]},"pg_11")]},"pg_12"),"s_Xx3El7LFj0c")),Wo=`이름과 성을 입력하십시오.
[Unknown]:  jerrynim
조직 단위 이름을 입력하십시오.
[Unknown]:  personal
조직 이름을 입력하십시오.
[Unknown]:  personal
구/군/시 이름을 입력하십시오?
[Unknown]:  seoul
시/도 이름을 입력하십시오.
[Unknown]:  seoul
이 조직의 두 자리 국가 코드를 입력하십시오.
[Unknown]:  kr
CN=jerrynim, OU=personal, O=personal, L=seoul, ST=seoul, C=kr이(가) 맞습니까?`,Jo=`키 저장소 비밀번호 입력:  
새 비밀번호 다시 입력: 
이름과 성을 입력하십시오.
  [Unknown]:  `,Yo=` 저장소 유형: jks
  키 저장소 제공자: SUN
  
  키 저장소에 1개의 항목이 포함되어 있습니다.
  
  별칭 이름: asdf
  생성 날짜: 2021. 12. 29
  항목 유형: PrivateKeyEntry
  인증서 체인 길이: 1
  인증서[1]:
  소유자: CN=y, OU=y, O=y, L=y, ST=y, C=y
  발행자: CN=y, OU=y, O=y, L=y, ST=y, C=y
  일련 번호: 5aff71e4
  적합한 시작 날짜: Wed Dec 29 00:30:45 KST 2021 종료 날짜: Sun May 16 00:30:45 KST 2049
  인증서 지문:
           MD5:  F5:62:54:69:82:7F:3C:BA:23:AB:A9:D8:07
           SHA1: 17:F5:19:01:6F:2B:7C:4B:BA:1C:13:F9:DE:77:BC:91:
           SHA256: FC:7E:F9:A4:6C:5B:6C:8E:D9:A1:5E:3F:53:66:A4:DB:8D:CC:00:80:88:1C:C4:C1:C2:16:85:
  서명 알고리즘 이름: SHA256withRSA
  주체 공용 키 알고리즘: 2048비트 RSA 키
  버전: 3
  
  확장: 
  
  #1: ObjectId: 2.5.29.14 Criticality=false
  SubjectKeyIdentifier [
  KeyIdentifier [
  0000: 7B 90 01 7F FB B5 E1 A5   72 69 9C E0 BB 68 E8 EA  ........ri...h..
  0010: 64                                        d.@L
  ]
  ]
  
  
  
  *******************************************
  *******************************************
  
  
  `,Hr=Object.freeze(Object.defineProperty({__proto__:null,code1:Wo,code2:Jo,code3:Yo,default:Pr,head:Ar},Symbol.toStringTag,{value:"Module"})),$r={title:"Promise 순차실행하기",meta:[{property:"keywords",content:"javascript promise synchronize 순차실행"}]},Dr=w(h(()=>a(S,{children:[t(D,{src:"https://res.cloudinary.com/dij9kacx9/image/upload/v1649685641/lit-blog/inarow_ycwyg4.jpg",[e]:{src:e}},"mM_0"),a($,{children:[t("h1",{children:"Promise 순차실행하기"}),t(T,{tags:"javascript promise synchronize 순차실행",[e]:{tags:e}},"mM_1"),t(O,{children:" 2022-04-12 "},"mM_2")]},"mM_3"),a(H,{children:["준비물로 promise가 담긴 배열을 만들어봅시다.",t("br",{}),"간단한 wait 함수를 만들도록 하겠습니다.",t(n,{code:Xo,language:"typescript",[e]:{code:e,language:e}},"mM_4"),"wait 함수를 이용하여 비동기 함수를 만들고 익숙한 Promise.then 함수를 이용하여 순차적으로 실행할 수 있습니다.",t(n,{code:Ko,language:"typescript",[e]:{code:e,language:e}},"mM_5"),"결과",t(n,{code:Go,language:"typescript",[e]:{code:e,language:e}},"mM_6"),"순차적으로 실행 할 함수가 많아질 수록 then 메소드를 사용하는게 귀찮아지고, 보기 힘들어집니다.",t("br",{}),"reduce함수를 이용하여 해당작업은 간편하게 할 수 있습니다.",t(n,{code:en,language:"typescript",[e]:{code:e,language:e}},"mM_7"),"출처 :",t(L,{href:"https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Using_promises#composition",children:"developer.mozilla.org",[e]:{href:e}},"mM_8"),t(i,{children:"async / await"},"mM_9"),"async/ await 를 이용하여 더 간단하게 만들 수 있습니다.",t(n,{code:tn,language:"typescript",[e]:{code:e,language:e}},"mM_10"),"동일하게 for of 문 혹은 reduce를 이용하여 긴 배열의 비동기 함수들도 실행할 수 있습니다.",t(n,{code:on,language:"typescript",filename:"for of 사용",[e]:{code:e,language:e,filename:e}},"mM_11"),t(n,{code:nn,language:"typescript",filename:"recude 사용",[e]:{code:e,language:e,filename:e}},"mM_12")]},"mM_13")]},"mM_14"),"s_bViAEDowOyc")),Xo=`const wait = (time) =>
new Promise((resolve) => {
    setTimeout(() => {
        resolve();
    }, time);
});`,Ko=`const func1 = async () => {
    await wait(1000);
    console.log("1 done");
};

const func2 = async () => {
    await wait(1000);
    console.log("2 done");
};

func1().then(func2)`,Go=`1 done
2 done`,en=`[func1, func2].reduce((p, f) => p.then(f), Promise.resolve());
`,tn=`const run = async () => {
    await func1();
    await func2();
};
run();`,on=`const run = async () => {
    for (const func of promises) {
        await func();
    }
};
run();`,nn=`promises.reduce(async (prev, current) => {
    await prev;
    return current();
}, Promise.resolve());`,Tr=Object.freeze(Object.defineProperty({__proto__:null,code1:Xo,code2:Ko,code3:Go,code4:en,code5:tn,code6:on,code7:nn,default:Dr,head:$r},Symbol.toStringTag,{value:"Module"})),Or={title:"puppeteer-access-popup",meta:[{property:"keyword",content:"puppeteer-access-popup"}]},Zr=w(h(()=>a(S,{children:[t(D,{},"r7_0"),a($,{children:[t("h1",{children:"puppeteer access popup"}),t(T,{tags:"puppeteer-access-popup",[e]:{tags:e}},"r7_1"),t(O,{children:"2023-02-18"},"r7_2")]},"r7_3"),a(H,{children:["To get popup info about page like google account select popup, you can use code below",t(n,{code:an,[e]:{code:e}},"r7_4")]},"r7_5")]},"r7_6"),"s_fx1TjelPvIY")),an=`const waitForWindow = new Promise<Page>((resolve) => page.on("popup", resolve))
const accountSelectPopup = await waitForWindow

`,Vr=Object.freeze(Object.defineProperty({__proto__:null,code1:an,default:Zr,head:Or},Symbol.toStringTag,{value:"Module"})),Rr={title:"react-native ScrollView in pan responder",meta:[{property:"keywords",content:"react-native ScrollView in pan panresponder"}]},Fr=w(h(()=>a(S,{children:[t(D,{src:"",[e]:{src:e}},"MK_0"),a($,{children:[t("h1",{children:"react-native ScrollView in pan responder"}),t(T,{tags:"react-native ScrollView in pan panresponder",[e]:{tags:e}},"MK_1"),t(O,{children:"2020-06-11"},"MK_2")]},"MK_3"),a(H,{children:["I want to use react-native ScrollView in panResponder.",t("br",{}),"I expect to run scroll-event when drag contents in ScrollView. I expect panResponder-event occur when drag contents that is not in ScrollView, ",t("br",{}),"write code:",t(n,{code:rn,language:"typescript",filename:"Not Working Code1",[e]:{code:e,language:e,filename:e}},"MK_4"),"panResponder works, Scroll did not work",t("br",{}),"i found that 'onStartShouldSetPanResponder: () ","=> ","true' makes scroll not work",t("br",{}),"and when using 'onStartShouldSetPanResponder: ()","=> ","false' panResponder did not work",t("br",{}),t("br",{}),"I found solution for this,",a("ul",{children:[a("li",{children:[t(i,{subtitle:"use react-native-gesture-handler",[e]:{subtitle:e}},"MK_5"),"Use 'react-native-gesture-handler' that supports ScrollView in PanResponder",t("br",{}),"but i need to run it with 'react-native-web', WebView",t("br",{}),"'react-native-gesture-handler' does not support this.",t("br",{}),"I need to find way to support web"]}),a("li",{children:[t(i,{children:"stopPropagation in ScrollView"},"MK_6"),"'stop event propagation' works!",t(n,{code:ln,language:"typescript",[e]:{code:e,language:e}},"MK_7")]}),a("li",{children:[t(i,{children:"use inner View in ScrollView"},"MK_8"),"View which has property 'onResponderTerminationRequest=",()=>!1,"onStartShouldSetResponder=",()=>!0,"' makes scrollable write code:",t(n,{code:sn,language:"typescript",[e]:{code:e,language:e}},"MK_9")]})]})]},"MK_10")]},"MK_11"),"s_EhGL4d8Bymo")),rn=`PanResponder.create({
  onStartShouldSetPanResponder: () => true,
  onMoveShouldSetPanResponder: () => true,
  onPanResponderMove: (event, gestureState) => {}

  ...

  return (<View {...panResponders.panHandlers}>
    <ScrollView >
    ...
    </ScrollView>
  </View>)
`,ln=`<ScrollView onTouchMove={(e)=>{
  e.stopPropagation()
  ...
}}>`,sn=`<ScrollView>
  <View
    onResponderTerminationRequest={() => false}
    onStartShouldSetResponder={() => true}
  >
    ...
  </View>
</ScrollView>`,Br=Object.freeze(Object.defineProperty({__proto__:null,code1:rn,code2:ln,code3:sn,default:Fr,head:Rr},Symbol.toStringTag,{value:"Module"})),qr={title:"종료되지 않는 도커 실행하기",meta:[{property:"keyword",content:"docker no exit"}]},Nr=w(h(()=>a(S,{children:[t(D,{},"WL_0"),a($,{children:[t("h1",{children:"종료되지 않는 도커 실행하기"}),t(T,{tags:"docker no exit",[e]:{tags:e}},"WL_1"),t(O,{children:"2023-02-18"},"WL_2")]},"WL_3"),a(H,{children:[t(n,{code:cn,[e]:{code:e}},"WL_4"),t(i,{subtitle:"Detached (-d)",[e]:{subtitle:e}},"WL_5"),"컨테이너를 detached 모드에서 실핼하려면, ",t("code",{children:"-d=true"}),"혹은 ",t("code",{children:"-d"})," 옵션을 사용하십쇼. Detached 모드는 means 당신의 터미널의 백그라운드에서 실행됩니다. 인풋을 받거나 디스플레이 출력을 하지 않습니다.",t(i,{subtitle:"Option (-i)",[e]:{subtitle:e}},"WL_6"),"attached 되지 않더라고 STDIN을 유지합니다.",t(i,{subtitle:"Option (-t)",[e]:{subtitle:e}},"WL_7"),"가상 tty를 할당합니다.",t(i,{subtitle:"Option(-ti)",[e]:{subtitle:e}},"WL_8"),"가상 터미널을 열어 표준 입출력을 전달할 수 있습니다.",t("br",{}),"출처:https://docs.docker.com/engine/reference/run/"]},"WL_9")]},"WL_10"),"s_GZCj2q0rFmY")),cn=`
docker run -dit <DOCKER_ID>
`,Ir=Object.freeze(Object.defineProperty({__proto__:null,code1:cn,default:Nr,head:qr},Symbol.toStringTag,{value:"Module"})),zr={title:"시맨틱 태그",meta:[{property:"keywords",content:"시맨틱 태그 semantic tag no only use div"}]},Ur=w(h(()=>a(S,{children:[t(D,{src:"https://res.cloudinary.com/dij9kacx9/image/upload/v1633620056/lit-blog/semantic_wlbgsb.jpg",[e]:{src:e}},"ld_0"),a($,{children:[t("h1",{children:"시맨틱 태그"}),t(T,{tags:"시맨틱 태그 semantic tag no only use div",[e]:{tags:e}},"ld_1"),t(O,{children:"2021-10-09"},"ld_2")]},"ld_3"),a(H,{children:["html, css 를 사용하여 화면을 구성하다 보면 다양한 html 태그들을 사용하여 화면을 구성할 수 있습니다. 하지만",t("code",{children:"<div>"})," 태그만 사용하여도 화면을 원하는대로 출력하는데에는 문제가 없습니다. ",t("br",{}),"이에 '그렇다면",t("code",{children:"<div>"})," 태그만 사용하여도 되지 않을까?'' 라는 의문이 생길 수 있습니다.",t("br",{}),"결론 부터 말하면 ",t("code",{children:"<div>"})," 태그를 사용하는 것은 권장되는 방법은 아닙니다. 이것은",t(L,{href:"https://www.w3schools.com/html/html5_semantic_elements.asp",children:"시맨틱 태그(Semantic Tag)",[e]:{href:e}},"ld_4"),"와 관련이 깊습니다.",t("br",{}),t(F,{children:"시맨틱 태그(Semantic Tag)는 의미있는 태그라는 뜻으로, 콘텐츠의 내용을 유추 할 수 있도록 이름 지어진 태그를 말합니다."},"ld_5"),t("code",{children:"<div>"})," 태그만 사용하는 대신 시맨틱 태그를 사용하면 다음과 같은 이점을 얻을 수 있습니다.",t(i,{subtitle:"시맨틱 태그의 특징",[e]:{subtitle:e}},"ld_6"),a("ul",{children:[t("li",{children:"개발자와 브라우저에 태그의 의미를 알려줄 수 있다. 이는 html 구문을 분리하는데 유용하며, 가독성 또한 좋아진다. 또한 태그가 가진 기본 기능이나 스타일이 개발을 편리하게 해준다."}),a("li",{children:["SEO에 유리하다.",t("br",{}),"사람은 페이지를 보고 무엇이 제목이고 콘텐츠인지 구분이 가능하지만, 로봇은 구분 할 수 없습니다. 시맨틱 태그를 통해 로봇에게 유의미한 콘텐츠를 제공할 수 있습니다."]}),a("li",{children:["웹 접근성에 좋지 않다.",t("br",{}),"스크린 리더기는 태그를 통해 콘텐츠를 분류하고 읽어줍니다."]})]}),"또한 ",t("code",{children:"<div>"})," 태그는",t("code",{children:"display: block;"})," 속성을 가진 대표적인 태그로, inline 속성의 태그를 대신하여 사용하기에는 적절하지 않습니다. 이는 디버깅시 불편하게 만듭니다.",t(i,{subtitle:"시맨틱 태그의 종류",[e]:{subtitle:e}},"ld_7"),a("ul",{children:[t("li",{children:"<article>"}),t("li",{children:"<aside>"}),t("li",{children:"<figcaption>"}),t("li",{children:"<figure>"}),t("li",{children:"<footer>"}),t("li",{children:"<header>"}),t("li",{children:"<main>"}),t("li",{children:"<mark>"}),t("li",{children:"<nav>"}),t("li",{children:"<section>"}),t("li",{children:"<summary>"}),t("li",{children:"<time>"})]}),t(P,{src:"https://res.cloudinary.com/dij9kacx9/image/upload/v1633766070/lit-blog/img_sem_elements_j2mghy.gif",alt:"시맨틱 태그 이미지",width:"300",[e]:{src:e,alt:e,width:e}},"ld_8"),t(i,{subtitle:"넌 시맨틱 태그의 종류",[e]:{subtitle:e}},"ld_9"),a("ul",{children:[t("li",{children:"<div>"}),t("li",{children:"<span>"})]}),"참고 :",t(L,{href:"https://www.w3schools.com/html/html5_semantic_elements.asp",children:"W3C sematin elements",[e]:{href:e}},"ld_10"),t("br",{}),"참고 :",t(L,{href:"https://dev.to/kenbellows/why-i-care-about-the-semantic-web-2kn7",children:"Why I care about the Semantic Web - Dev",[e]:{href:e}},"ld_11"),t(i,{subtitle:"결론",[e]:{subtitle:e}},"ld_12"),t("code",{children:"<div>"})," 태그와 같은 non-sementic 태그보다는 시맨틱 태그를 사용하는 것이 좋습니다!."]},"ld_13")]},"ld_14"),"s_6Ic41tB6arY")),Qr=Object.freeze(Object.defineProperty({__proto__:null,default:Ur,head:zr},Symbol.toStringTag,{value:"Module"})),Wr={title:"타입스크립트 React ForwardRef 사용하기",meta:[{property:"keyword",content:"typescript react forwardRef"}]},Jr=w(h(()=>a(S,{children:[t(D,{},"a2_0"),a($,{children:[t("h1",{children:"타입스크립트 React ForwardRef 사용하기"}),t(T,{tags:"typescript react forwardRef",[e]:{tags:e}},"a2_1"),t(O,{children:"2023-02-18"},"a2_2")]},"a2_3"),t(H,{children:"타입스크립트에서 React.FowardRef를 사용하는 법"},"a2_4")]},"a2_5"),"s_0p4r1ryFahc")),Yr="",Xr=Object.freeze(Object.defineProperty({__proto__:null,code1:Yr,default:Jr,head:Wr},Symbol.toStringTag,{value:"Module"})),Kr={title:"git use a personal access token",meta:[{property:"keywords",content:"git personal access token"}]},Gr=w(h(()=>a(S,{children:[t(D,{src:"https://res.cloudinary.com/dij9kacx9/image/upload/v1628066597/lit-blog/lit-post-head_tjswjn.jpg",[e]:{src:e}},"yQ_0"),a($,{children:[t("h1",{children:"git use a personal access token"}),t(T,{tags:"git personal access token",[e]:{tags:e}},"yQ_1")]},"yQ_2"),a(H,{children:["다음과 같은 에러가 떴을 때에 깃허브의 personal access token을 사용하도록 설정해주어야 합니다.",t(n,{code:dn,language:"bash",[e]:{code:e,language:e}},"yQ_3"),"첫번째로 personal acess token을 만들어주도록 하겠습니다.",a("ol",{children:[a("li",{children:["create gitgub personal accest token 깃허브의",t(L,{href:"https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token",children:"Creating a personal access token",[e]:{href:e}},"yQ_4"),"글을 따라 personal access token을 생성해줍니다. 마지막에 만들어진 access token 값을 사용하여야하니 복사하거나 따로 저장해주세요!"]}),a("li",{children:["MacOs의 경우 키체인 접근 프로그램을 이용하여 access token을 사용하도록 해줍니다.",t(P,{src:"https://res.cloudinary.com/dij9kacx9/image/upload/v1628990557/lit-blog/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2021-08-15_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_10.22.20_veq6jt.png",alt:"MacOs 키체인 접근",width:"300",[e]:{src:e,alt:e,width:e}},"yQ_5"),"다음 그림처럼 github로 검색을 하신 후, github.com의 암호를 앞에서 만들어둔 personal access token을 넣어줍니다.",t(P,{src:"https://res.cloudinary.com/dij9kacx9/image/upload/v1628990886/lit-blog/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2021-08-15_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_10.26.38_mh8kfn.png",alt:"github.com 키체인 변경하기",[e]:{src:e,alt:e}},"yQ_6"),"이제부터 변경된 personal access token을 컴퓨터에서 사용하실 수 있게됩니다!."]})]})]},"yQ_7")]},"yQ_8"),"s_oYMviKUpGLo")),dn=`remote: Support for password authentication was removed on August 13, 2021.
 Please use a personal access token instead.`,ei=Object.freeze(Object.defineProperty({__proto__:null,code1:dn,default:Gr,head:Kr},Symbol.toStringTag,{value:"Module"})),ti={title:"Vanilla Javascript SPA만들기",meta:[{property:"keywords",content:"Vanilla Javascript SPA 라우팅"}]},oi=w(h(()=>a(S,{children:[t(D,{src:"https://res.cloudinary.com/dij9kacx9/image/upload/v1635330118/lit-blog/route_fjzln0.jpg",[e]:{src:e}},"nk_0"),a($,{children:[t("h1",{children:"Vanilla Javascript SPA만들기"}),t(T,{tags:"Vanilla Javascript SPA 라우팅",[e]:{tags:e}},"nk_1"),t(O,{children:"2021-10-27"},"nk_2")]},"nk_3"),a(H,{children:["바닐라 자바스크립트에서 라우팅을 만드는 작업을 함께 보도록 하겠습니다. 이 블로그에서도 사용하고 있는 방식으로 브라우저의 history API, popstate 이벤트, 커스텀 이벤트를 사용하여 제작하게 됩니다.",t(i,{subtitle:"프로젝트 설정",[e]:{subtitle:e}},"nk_4"),"우리에게 필요한 것은 html과 js 파일이 전부입니다.",t("br",{}),"기본적인 html 파일을 만들도록 하겠습니다.",t(n,{code:pn,language:"html",filename:"index.html",[e]:{code:e,language:e,filename:e}},"nk_5"),"실행될 js 파일을 만들어 추가하도록 하겠습니다.",t("br",{}),"index.html 파일을 열 때 내부 콘텐츠를 설정하도록 하겠습니다.",t(n,{code:Pe,language:"javascript",filename:"index.js",[e]:{code:e,language:e,filename:e}},"nk_6"),"만들어준 js 파일을 사용하도록 index.html에서",t("code",{children:"<script>"}),"태그를 사용하여 실행해 주도록 하겠습니다.",t(n,{code:un,language:"html",filename:"index.html",[e]:{code:e,language:e,filename:e}},"nk_7"),t(n,{code:Pe,language:"javascript",filename:"index.js",[e]:{code:e,language:e,filename:e}},"nk_8"),t("post-divider",{}),t("code",{children:"<a>"}),"태그와 window.location.href 값을 변경하는 방법을 통해 이동을 할 수 있지만, 페이지 자체를 새로 불러오기 때문에 같은 어플리케이션이라고 해도 깜박임이 발생하게 됩니다.",t("br",{}),"주소를 이동해도 페이지 자체가 새로고침이 되지 않기 위해서",t(L,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/history",children:"window.history",[e]:{href:e}},"nk_9"),"의 pushState 메서드를 사용하여 주소 변경을 할 수 있습니다.",t("br",{}),"pushState 메서드는 (데이터, 타이틀, URL)의 매개변수를 받도록 되어있습니다.",t(n,{code:mn,language:"typescript",[e]:{code:e,language:e}},"nk_10"),"메서드를 실행시켜보면 주소창의 주소가 변경된 것을 확인할 수 있습니다.",t("br",{}),"주소가 바뀌었다면 이를 감지하여 ",t("code",{children:"<main>"}),"태그내의 콘텐츠를 바꾸는것이 라우팅의 원리가 되겠습니다.",t("br",{}),"주소가 변경된 것을 알리고 감지하기 위하여",t("code",{children:"locationchange"}),"라는",t(L,{href:"https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent",children:"커스텀 이벤트",[e]:{href:e}},"nk_11"),"를 만들도록 하겠습니다.",t(n,{code:gn,language:"typescript",filename:"index.js",[e]:{code:e,language:e,filename:e}},"nk_12"),"주소 변경 이벤트를 발생시키는 버튼을 만들어 주소 변경 및 이벤트 감지를 확인해 보도록 하겠습니다.",t(n,{code:hn,language:"typescript",filename:"index.js",[e]:{code:e,language:e,filename:e}},"nk_13"),"버튼을 클릭하면 콘솔 창에 메세지가 출력되고 브라우저의 주소가 변경되는 것을 확인할 수 있습니다.",t("br",{}),t("br",{}),t("code",{children:"locationchange"})," 이벤트가 항상 같은 주소로 이동하는 것은 아니기에 변경할 주소를 인자로 받을 수 있도록 하도록 하겠습니다.",t(F,{children:"커스텀 이벤트를 생성할 때에 detail에 값을 주어 원하는 변수를 전달할 수 있습니다."},"nk_14"),t(n,{code:bn,language:"typescript",filename:"index.js",[e]:{code:e,language:e,filename:e}},"nk_15"),"주소이동에 성공했으니 주소에 맞게 콘텐츠를 변경하도록 하면 라우팅을 구현할 수 있습니다. 이때",t("code",{children:"window.location.pathname"}),'을 사용하여 라우팅 경로를 받아오도록 합니다. pathname을 사용하는 이유는 "/some? page=1"처럼 쿼리 값이 있을 때 쿼리 값을 제외한 경로를 받을 수 있기 때문입니다.',t(n,{code:fn,language:"typescript",filename:"index.js",[e]:{code:e,language:e,filename:e}},"nk_16"),t("post-divider",{}),t("code",{children:"locationchange"})," 커스텀 이벤트를 통해 라우팅을 하는데 성공했지만, 뒤로 가기 혹은 앞으로 가기를 할 때 주소는 이동하지만 콘텐츠가 바뀌지 않는 것을 볼 수 있습니다.",t("br",{}),"이를 위해 뒤로 가기 및 앞으로가기 이벤트를 감지하는",t(L,{href:"https://developer.mozilla.org/ko/docs/Web/API/Window/popstate_event",children:"popstate",[e]:{href:e}},"nk_17"),"이벤트를 이용하여 변경된 주소로 콘텐츠를 변경해 주도록 하겠습니다.",t(n,{code:yn,language:"typescript",filename:"index.js",[e]:{code:e,language:e,filename:e}},"nk_18"),"이제 페이지 이동, 뒤로 가기, 앞으로 가기로 콘텐츠를 불러오게 되었습니다. 하지만 이러한 방식에는 문제가 있는데 동일한 경로로 이동을 하게 될 경우 history 스택에 같은 경로가 쌓이게 되고, 뒤로 가기 시 같은 페이지가 나오는 문제가 발생합니다.",t("br",{}),t("br",{}),"띠라서 주소이동시에 같은경로라면 이동하지 않도록 작업을하도록 하겠습니다.",t(n,{code:_n,language:"typescript",filename:"index.js",[e]:{code:e,language:e,filename:e}},"nk_19"),t("post-divider",{}),"자주 사용하게 될 주소 이동을 함수로 만들고, 내부 콘텐츠를 switch 내에서 require 하여 동적으로 콘텐츠를 불러올 수도 있습니다. 이러한 작업은 작업자가 필요에 따라 추가해 주시면 됩니다.",t("br",{}),t("br",{}),"앞에서 다룬 내용을",t(L,{href:"https://github.com/jerrynim/vanillajs-router/tree/master",children:"깃허브",[e]:{href:e}},"nk_20"),"에 예제를 통해 올리도록 하겠습니다.",t("br",{}),"도움이 되었다면 좋겠네요ㅎㅎ",t("br",{}),"*이 블로그에서 사용한",t(L,{href:"https://github.com/jerrynim/lit-blog/blob/master/components/root-router.ts",children:"lit-html을 사용한 라우터",[e]:{href:e}},"nk_21"),"도 첨부하도록 하겠습니다."]},"nk_22")]},"nk_23"),"s_ZaBPuGSRL5k")),pn=`<!DOCTYPE html>
<html>
    <body>
        <main></main>
    </body>
</html>`,Pe=`window.onload = () => {
    const main = document.querySelector("main");
    main.innerHTML = "<div>js loaded</div>";
};
`,un=`<!DOCTYPE html>
<html>
    <body>
        <script src="./index.js"></a>
        <main></main>
    </body>
</html>`,gn=`window.onload = () => {
    const main = document.querySelector("main");

    const handleLocationChange = (e) => {
        console.log("locationchanged");
    };

    window.addEventListener("locationchange", handleLocationChange);

    main.innerHTML = "<div>js loaded</div>";
};
`,mn='window.history.pushState(undefined,"타이틀","/some")',hn=`window.onload = () => {
    const main = document.querySelector("main");

    const handleLocationChange = (e) => {
        console.log("locationchanged");

        //* 주소변경
        window.history.pushState(undefined, "타이틀", "/some");
    };

    //* locationchange 이벤트리스너
    window.addEventListener("locationchange", handleLocationChange);

    main.innerHTML = "<div><button type='button'>move to /some</button></div>";

    const button = document.querySelector("button");
    button.addEventListener("click", () => {
        const locationChangeEvent = new CustomEvent("locationchange", {
            composed: true, //웹 컴포넌트라면 넣어주세요
        });
        //* 주소변경 이벤트 Dispatch
        window.dispatchEvent(locationChangeEvent);
    });
};
`,bn=`window.onload = () => {
    const main = document.querySelector("main");

    const handleLocationChange = (e) => {
        const { href } = e.detail;
        console.log(href);

        //* 주소변경
        window.history.pushState(undefined, "타이틀", href);
    };

    //* locationchange 이벤트리스너
    window.addEventListener("locationchange", handleLocationChange);

    main.innerHTML = "<div><button type='button'>move to /some</button></div>";

    const button = document.querySelector("button");
    button.addEventListener("click", () => {
        const locationChangeEvent = new CustomEvent("locationchange", {
            composed: true,
            detail: { href: "some" },
        });

        //* 주소변경 이벤트 Dispatch
        window.dispatchEvent(locationChangeEvent);
    });
};
`,fn=`   //* 경로에 맞는 콘텐츠 렌더
const renderContents = () => {
    const { pathname } = window.location;
    switch (pathname) {
        case "/some":
            main.innerHTML = "<div>some Contents</div>";
            break;
        default:
            main.innerHTML = "<div>404</div>";
    }
};

const handleLocationChange = (e) => {
    const { href } = e.detail;

    //* 주소변경
    window.history.pushState(undefined, "타이틀", href);
    //* 콘텐츠 렌더링
    renderContents();
};`,yn=`window.addEventListener("popstate", () => {
    renderContents();
});`,_n=`button.addEventListener("click", () => {
    const targetUrl = "some?foo=bar";
    const { pathname } = window.location;

    //* 같은 URL 은 스택에 추가하지 않는다
    if (targetUrl === pathname) {
        return;
    }

    const locationChangeEvent = new CustomEvent("locationchange", {
        composed: true,
        detail: { href: "some" },
    });

    //* 주소변경 이벤트 Dispatch
    window.dispatchEvent(locationChangeEvent);
});`,ni=Object.freeze(Object.defineProperty({__proto__:null,code1:pn,code10:yn,code11:_n,code2:Pe,code3:un,code5:gn,code6:mn,code7:hn,code8:bn,code9:fn,default:oi,head:ti},Symbol.toStringTag,{value:"Module"})),ai={title:"자바스크립트에서 CJS,ESM 은 대체 뭘까?",meta:[{property:"keywords",content:"cjs esm javascript"}]},ri=w(h(()=>a(S,{children:[t(D,{src:"",[e]:{src:e}},"Lw_0"),a($,{children:[t("h1",{children:"자바스크립트에서 CJS,ESM 은 대체 뭘까?"}),t(T,{tags:"cjs esm javascript",[e]:{tags:e}},"Lw_1"),t(O,{children:"2022-04-11"},"Lw_2")]},"Lw_3"),a(H,{children:["다음 글에서 번역해서 부분 가져왔습니다.",t(L,{href:"https://dev.to/iggredible/what-the-heck-are-cjs-amd-umd-and-esm-ikm",children:"What the heck are CJS, AMD, UMD, and ESM in Javascript?",[e]:{href:e}},"Lw_4"),t("br",{}),"처음에는, 자바스크립트는 모듈을 import/export 할 방법이 없었습니다. 이것은 문제입니다. 당신의 앱을 한파일에 쓰는 것을 상상해 보세요 - 이것은 악몽입니다! 그래서, 뛰어난 사람들이 자바스크립트에 모듈화를 추가하기 위해 시도했습니다.",t(i,{subtitle:"CJS",[e]:{subtitle:e}},"Lw_5"),"CJS는 Common JS의 줄임말입니다.",a("ul",{children:[t("li",{children:"여러분 중 일부는 노드에서 CJS 구문을 즉시 인식할 수 있다. 노드가 CJS 모듈 포맷을 사용하기 때문이다."}),t("li",{children:"동기적으로 모듈을 import 한다."}),a("li",{children:["node_modules 또는 로컬 디렉토리에서 라이브러리를 import 할 수 있다. 어느 쪽이든",t(n,{language:"typescript",code:"const myLocalModule = require('./some/local/file.js')",[e]:{language:e,code:e}},"Lw_6"),t(n,{language:"typescript",code:"var React = require('react');",[e]:{language:e,code:e}},"Lw_7"),"처럼 작동한다."]}),t("li",{children:"import 할 때, import 한 객체의 복제를 줍니다."}),t("li",{children:"브라우저에서 작동하지 않을 것이다. 트랜스 파일 되어야 하고 번들 되어야 한다."})]}),t(i,{subtitle:"ESM",[e]:{subtitle:e}},"Lw_8"),"ESM은 ES Modules를 의미한다. 표준 모듈 시스템을 구현하자는 것이 자바스크립트의 제안이다. 나는 여러분 중 많은 사람들이 이것을 봤을 것이라고 확신한다.",a("ul",{children:[t("li",{children:"많은 최신 브라우저에서 사용 가능"}),t("li",{children:"CJS와 같은 단순한 구문과 AMD의 비동기식 구문 두 가지 장점을 모두 갖췄다."}),t("li",{children:"ES6의 정적 모듈 구조로 인해 트리 쉐이킹 가능"}),t("li",{children:"E롤업과 같은 번들러가 불필요한 코드를 제거할 수 있도록 허용하고, 사이트는 더 빠른 로드를 얻기 위해 더 적은 코드를 발송할 수 있다."}),a("li",{children:["HTML로 호출할 수 있는 작업:",t(n,{code:vn,language:"typescript",[e]:{code:e,language:e}},"Lw_9")]})]}),"좀 더 자세한 내용은 다음글을 읽으시는 것을 추천드립니다.",t(L,{href:"https://devblog.croquis.com/ko/2022-04-09-1-esm-problem/",children:"ESM 삽질기",[e]:{href:e}},"Lw_10")]},"Lw_11")]},"Lw_12"),"s_NOzBCTZqgjU")),vn=`<script type="module">
import {func1} from 'my-lib';
import { component$ } from '@builder.io/qwik';

func1();
<\/script>`,ii=Object.freeze(Object.defineProperty({__proto__:null,code1:vn,default:ri,head:ai},Symbol.toStringTag,{value:"Module"})),li={title:"vanilla Javascript 란?",meta:[{property:"keywords",content:"vanilla javascript 바닐라 자바스크립트"}]},si=w(h(()=>a(S,{children:[t(D,{src:"https://res.cloudinary.com/dij9kacx9/image/upload/v1633615729/lit-blog/vanila_azzeyy.jpg",[e]:{src:e}},"E7_0"),a($,{children:[t("h1",{children:"vanilla Javascript 란?"}),t(T,{tags:"vanilla javascript 바닐라 자바스크립트",[e]:{tags:e}},"E7_1"),t(O,{children:"2021-10-07"},"E7_2")]},"E7_3"),a(H,{children:["바닐라 자바스크립트는 Jquery와 같은 프레임워크를 사용하지않는 순수 자바스크립트를 의미합니다. ",t("br",{}),"바닐라 자바스크립트라고 불리는건 하나의 개그 요소로, 자바스크립트 프레임워크를 사용하는 것에만 빠져있고 순수한 자바스크립트를 모르는 사람들을 위한",t("code",{children:"개그"}),"입니다.",t("br",{}),"이러한 개그는 개발자들이 프레임워크 이전에 순수한 자바스크립트에 대해 알아햐 함을 자각시켜줍니다.",t("br",{}),"그러니 지금 바로",t(L,{href:"http://vanilla-js.com/",children:"vanilla JS",[e]:{href:e}},"E7_4"),"를 설치하여 사용하십시오! 😜",t("br",{}),t("br",{}),"참고1:",t(L,{href:"https://stackoverflow.com/questions/20435653/what-is-vanillajs",children:"what-is-vanillajs-stackoverflow",[e]:{href:e}},"E7_5"),t("br",{}),"참고2:",t(L,{href:"https://snipcart.com/blog/learn-vanilla-javascript-before-using-js-frameworks",children:"learn-vanilla-javascript-before-using-js-frameworks",[e]:{href:e}},"E7_6"),t(P,{src:"https://res.cloudinary.com/dij9kacx9/image/upload/v1633618588/lit-blog/vanilla_b5tzys.png",alt:"vanilla-js logo",[e]:{src:e,alt:e}},"E7_7")]},"E7_8")]},"E7_9"),"s_DJYm0Glaq0c")),ci=Object.freeze(Object.defineProperty({__proto__:null,default:si,head:li},Symbol.toStringTag,{value:"Module"})),di={title:"책을 쓰게 된 이야기 - 1부",meta:[{property:"keywords",content:"개발 책 집필 Next.js"}]},pi=w(h(()=>a(S,{children:[t(D,{src:"https://res.cloudinary.com/dij9kacx9/image/upload/v1627115456/lit-blog/Desktop_-_3_yx69ez.jpg",[e]:{src:e}},"2Y_0"),a($,{children:[t("h1",{children:"책을 쓰게 된 이야기 - 1부"}),t(T,{tags:"개발 책 집필 Next.js",[e]:{tags:e}},"2Y_1"),t(O,{children:"2021-07-18"},"2Y_2")]},"2Y_3"),a(H,{children:["안녕하세요. '클론코딩으로 시작하는 Next.js'의 저자 제리님입니다. 집필을 마무리하고 어느 정도의 시간이 지나 책을 집필하게 된 이야기를 풀어보고자 합니다. 이야기는 시간의 순서대로 써나가 보도록 하겠습니다.",t(i,{subtitle:"시작",[e]:{subtitle:e}},"2Y_4"),"작년 초에 메일로 Next.js를 주제로 책을 써보지 않겠냐는 제안을 받았습니다. 보잘것없는 저의 깃허브를 보시고 집필 제안을 해주셨다고 합니다. 처음 제안을 받게 되었을 때 반은 기뻤지만 반은 걱정이 되었습니다. 내가 책을 쓸 정도의 지식을 갖추었는지, 내가 알고 있는 것들을 독자에게 잘 설명할 수 있는지 스스로 의심이 되었습니다. 하지만, 우선 흔히 오지 않는 기회를 놓치지 않기 위해 도전해보기로 하였습니다.",t(i,{subtitle:"아이템 선정",[e]:{subtitle:e}},"2Y_5"),"먼저 하게 되는 것은 책의 내용 구상과 목차를 정하는 것입니다. 담당자님과 오프라인 미팅을 통해서 3~4개 정도의 예제와 함께 Next.js 개발과 배포를 함께 할 수 있는 책을 만들기로 했습니다. 책의 크기는 최소 300장은 넘어야 한다고 하여 300장을 채울 수 있을지 불안하였습니다. 책의 내용을 정하기 위해 만들어 볼 예제를 정하기로 하는데 뻔한 투두 리스트는 하고 싶지 않았습니다. 하지만, 간단하면서 CRUD를 경험할 수 있고 친숙한 예제를 찾는 것은 쉽지 않았습니다. '그래서 다른 책이나 강의에서 투두 리스트를 만드는구나'라는 생각이 들었습니다 ㅎㅎ. 생각 끝에 첫 번째 예제로 깃허브 api를 이용한 레파지토리 리스트를 만들어 넥스트의 기능들을 사용해보도록 하기로 하였습니다. 예제로 독특하고 제가 경험한 넥스트의 기능들과 개발 방식을 전달하고 싶어 규모가 큰 애플리케이션을 만들고 싶었습니다. 이를 위해 클론코딩 방식을 선택하였고 대상을 '에어비엔비'로 정하였습니다. 에어비엔비 사이트를 클론 하기 위해 디자인과 디자인 시스템을 파악하고 피그마를 사용하여 제작하기 쉽도록 변형하며 만들었습니다. 이 과정에서 에어비엔비의 디자인이 자주 변하여서 기존의 디자인을 수정하기도 하고 애플리케이션의 규모를 적절히 조정하는 것이 힘들었습니다. 회사에서 일하듯이 디자인 시스템을 따라 사용해보면서 공통 컴포넌트를 만들어보고 api도 간단하게 직접 만들 수 있도록 코딩을 하여 첫 번째 작업물을 만들었습니다. 제가 사용하는 기술은 next.js, typescript, redux 였기 때문에 이에 익숙해지도록 간단한 예제를 만들며 해당 기술들을 미리 사용해본다면 좋을 것 같다고 생각하여, 두 번째 예제로 해당 기술들을 사용하여 제가 디자인한 '투두 리스트'를 만들기로 정하고, '에어비앤비'를 세 번째 예제로 하기로 하였습니다.",t(i,{subtitle:"글쓰기 시작",[e]:{subtitle:e}},"2Y_6"),"글을 쓰기 전에 애플리케이션들을 미리 만들어두어야 했습니다. 세게의 예제를 회사 시간 이외에 만드는데 두 달이 걸렸고, 'Ulyesses'프로그램을 사용하여 글을 쓰기 시작했습니다. 책의 처음 부분으로 서론과 넥스트에 대한 설명을 써야 하는 것부터 막막했습니다. 다른 책들을 참고하며 어떻게 설명해야 하는지 용어를 어떻게 사용해야 하는지 보았고, 객관적인 정보를 전달하기 위해 여러 글들을 보았습니다. 초반에는 글을 쓸수록 내가 잘 모르는 것을 설명하는 것을 알아보아야 하고 그것을 설명하는 것은 내 것 같지 않다는 느낌이 들었습니다. 그러던 중 '개발자의 글쓰기'라는 책을 잠깐 보게 되었습니다. 책의 내용은 집필과 직접적인 연관이 있지 않았지만, 그중에 '개발자의 글은 정보공유의 목적이며, 독자 수준이 아닌 본인 수준의 맞는 글을 쓰자'라는 내용이 제게 다가왔습니다. 내용대로 내가 설명할 수 있는 방식으로 글을 쓰기로 하였습니다. 객관적인 정보를 전달하되 내가 모르는 용어는 사용하지 않고 읽는 사람도 쉽게 이해할 수 있도록 쓰기로 하였습니다. 그러자, 글을 쓰는 것이 조금은 더 쉽게 느껴졌고 내가 쓴 글이라는 느낌이 더 강해졌습니다.",t(i,{subtitle:"첫 번째 마감",[e]:{subtitle:e}},"2Y_7"),"마감기한을 3개월, 2개월, 2개월로 1/3 분량씩 제출하기로 하였습니다. 담당자님이 보통 9개월 정도 걸린다고 하여 저는 파이팅 넘쳤기 때문에 8개월로 잡았습니다(만약, 집필을 생각하시는데 이 글을 보시는 분이 있다면 최소 1년으로 해주세요 제발..) 마감은 사람에게 정말 해롭습니다. 목표는 100페이지였는데 아이템을 고민하고, 애플리케이션을 만들고, 한 달 반짜리 해커톤에 참가하였고 글쓰기에 서툴던 저에게 3개월의 시간은 순식간에 지나갔습니다. 2주 후 마감인데 40페이지에 머물러있는 저는 마음이 급해지고 퇴근 후 시간과 주말은 모두 집필에 쏟아야 했습니다. 무엇보다 마감을 해야 한다는 스트레스를 계속 받게 되었습니다. 약속을 잘 지키고 책임감이 넘치는 저이기에 성공적인 마감을 위해 달렸지만, 계속해서 수정되는 코드와 그로 인한 글의 수정은 작업을 힘들게 하였습니다. 마감은 사람을 하게 만듭니다. 정신적으로 해롭지만 결과물의 속도는 보장하게 됩니다. 하지만, 퀄리티가 마음에 들지 않았지만 추후에 고치고자하는 것들이 생기게 되고, 나중에 찾아 고치는 것은 오탈자의 확률을 높이고 'Uylesses'프로그램이 제공하는 도구를 사용하더라도 추후에 찾기가 힘들었습니다.",t(i,{subtitle:"계속되는 수정",[e]:{subtitle:e}},"2Y_8"),"책을 쓰면서 시간은 계속 흐르고 저의 코딩 스타일도 계속해서 변하고 발전됐습니다. 그로 인하여 기존에 작성해 두었던 코드들을 수정하게 되었습니다. 하지만 책을 어느 정도 작성한 상태였기 때문에 코드를 수정하게 된다면 책에 기록된 내용을 모두 찾아 수정하여야 했습니다. 결국 퀄리티를 위하여 다시 쓰는 게 나을 정도로 많은 양을 수정하고 내용을 보강하였습니다. 작은 예제는 감당할 수 있는 정도지만 규모가 있는 애플리케이션에서의 수정은 매우 버거웠습니다. '이래서 책이나 강의에서는 큰 규모의 애플리케이션을 만들지 않는구나'라는 생각이 들었습니다. 최근에 오탈자 제보가 들어오고 있는데 이러한 수정 작업들이 그러한 결과를 불러왔습니다. 책을 쓴다면 코드의 수정이 없도록 하는 것이 최선일 것입니다. 하지만 퀄리티를 위해 포기할 수 없는 부분이었습니다. 2부에서 계속..."]},"2Y_9")]},"2Y_10"),"s_7RdBjKC12Q0")),ui=Object.freeze(Object.defineProperty({__proto__:null,default:pi,head:di},Symbol.toStringTag,{value:"Module"})),gi={title:"책을 쓰게 된 이야기 - 2부",meta:[{property:"keywords",content:"개발 책 집필 Next.js"}]},mi=w(h(()=>a(S,{children:[t(D,{src:"https://res.cloudinary.com/dij9kacx9/image/upload/v1627115456/lit-blog/Desktop_-_3_yx69ez.jpg",[e]:{src:e}},"hK_0"),a($,{children:[t("h1",{children:"책을 쓰게 된 이야기 - 2부"}),t(T,{tags:"개발 책 집필 Next.js",[e]:{tags:e}},"hK_1"),t(O,{children:"2021-07-18"},"hK_2")]},"hK_3"),a(H,{children:["안녕하세요. '클론코딩으로 시작하는 Next.js'의 저자 제리님입니다. 집필을 마무리하고 어느 정도의 시간이 지나 책을 집필하게 된 이야기를 풀어보고자 합니다. 이야기는 시간의 순서대로 써나가 보도록 하겠습니다. 1부에서는 책을 쓰면서 겪는 과정을 이야기했다면, 2부에서는 책을 쓸 때에 도움이 되는 내용들을 되돌아보며 이야기를 써보려고 합니다.",t(i,{subtitle:"피드백",[e]:{subtitle:e}},"hK_4"),"1,2차 마감을 하면서 담당자분에게 피드백을 받게 되었습니다. 피드백을 통하여 책을 작성할 때에는 글 이외에 고려해야 할 것들이 많다는 것을 알았습니다.",t(i,{subtitle:"목차",[e]:{subtitle:e}},"hK_5"),"책들을 보다 보면 첫 부분에는 서문, 목차로 시작하게 되는데 책을 쓰기 전에 목차를 만들어 둔 것은 책을 쓰다 보면 계속 바뀌게 됩니다. 그래서 후에 목차 번호를 변경하게 되면 앞 뒤로 숫자들을 일일이 변경해 주어야 합니다. 예로 1부터 17장을 작성하였는데 중간에 2장을 새로 추가하면 기존 2부터 17까지 작성한 목차를 수정하여야 합니다. 그래서 번호를 미리 써두지 않았으면 그런 고생을 줄일 수 있지 않았을까 생각하고 있습니다.",t(i,{subtitle:"그림 번호",[e]:{subtitle:e}},"hK_6"),"책에 있는 그림들을 보면 하단에 [그림 12-1]처럼 쓰여있는 것을 볼 수 있는데요. 이는 책에서는 필수적인 요소로 그림마다 작성해 주어야 합니다. 목차와 마찬가지로 이 또한 중간에 이미지가 추가되면 뒤의 그림 번호들을 수정해주어야 하기 때문에 그림 번호는 후에 한 번에 한다면 좋을 것 같습니다.",t(i,{subtitle:"색인",[e]:{subtitle:e}},"hK_7"),"책의 마지막 장에는 '찾아보기'처럼 키워드에 대한 정보를 찾을 수 있도록 키워드와 페이지 번호를 기록하게 됩니다. 책을 작성을 끝내고 후에 작업을 하게 되었는데 놓치는 부분이 있을 수 있기 때문에, 책을 작성하는 도중에 키워드를 정의할 때 색인에 추가하면 편리할 것 같습니다. ex",")"," react 2",t(i,{subtitle:"그림",[e]:{subtitle:e}},"hK_8"),"그림을 사용할 때에는 알맞은 크기로 넣어주어야 하며, 코드 이미지를 사용할 때에는 light 테마의 이미지를 사용하여야 합니다. 후에 교정 과정에서 이미지를 수정할 수 있지만 미리 알아두면 좋습니다.",t(i,{subtitle:"말투",[e]:{subtitle:e}},"hK_9"),"기술 책은 객관적인 정보를 제공하는 책이기 때문에 말투 사용에 있어서 많은 수정이 있었습니다. '~ 같습니다', 처럼 모호한 표현을 사용하지 않습니다. '위의, 아래에 그림과' : 책은 넘기면서 보기 때문에 '위' 나 '아래' 같은 표현은 사용하지 않고 '앞의' '다음'과 같은 단어를 사용하여야 합니다.",t(i,{subtitle:"마지막 마감",[e]:{subtitle:e}},"hK_10"),"마지막 마감을 남겨두고 피드백의 내용대로 수정하고, 이전에 미루어둔 설명, 책의 내용 마무리, 반복적인 수정으로 달리면서 1차 원고를 제출하게 됩니다. 정말 소스코드를 고치게 되어 수정이 이루어지면 작업량이 5배는 되는 느낌입니다. 하지만 마감은 사람을 하게 만들었고, 원고를 제출하게 됩니다.(Ulysses를 사용하면 작업량을 확인할 수 있는데 마감 4주 전부터 작업량이 폭발합니다 ㅋㅋ)",t(i,{subtitle:"교정",[e]:{subtitle:e}},"hK_11"),"원고를 제출하게 되면 출판사에서 교정을 하게 됩니다. 이 기간 동안 출판사에서 오타 점검, 이미지 수정, 말투 수정, 오타 수정 및 내용 확인 등의 많은 것들을 해줍니다. 교정이 된 책을 보면, 책의 모습을 갖추게 되면서 이게 내가 쓴 게 맞나 할 정도로 놀랍게 바뀌게 됩니다. 말투가 교정이 되고, 전문성이 보이게 되고, 디자인이 추가되는 신기한 경험이었습니다. 교정은 1~2달을 하게 되는데 이 기간 중에 베타 리더를 모집하고 피드백을 받아 수정을 하게 됩니다.",t(i,{subtitle:"베타 리더",[e]:{subtitle:e}},"hK_12"),"출판사의 사이트를 통하여 베타 리더를 모집하게 되는데 이 시간이 생각보다 짧아서 당황스러웠습니다. 모집을 일주일도 안 했고, 책을 전달하고 7일간의 리뷰 기간을 주게 되었습니다. 기술책을 7일 만에 보는 것이 가능할까라는 의문이 들었고, 지인이 리뷰를 해주었는데 코드를 따라 치지는 못하고 내용을 보는 데에는 열심히 하면 7일이라는 기간 내에 가능했습니다. 책에 대한 리뷰는 내 책을 읽어주었구나 라는 느낌이 들 정도로 잘 작성해 주셨습니다. 피드백은 교정이 이루어진 덕분에 많은 제보가 들어오지는 않았습니다. 저는 지인이 리뷰해 준 덕분에 많은 피드백을 받을 수 있었습니다.",t(i,{subtitle:"베타 리더 피드백 반영",[e]:{subtitle:e}},"hK_13"),"베타 리더를 통하여 받은 피드백 및 추가 수정 사항에 대하여 책을 수정하여야 합니다. 하지만 이때 하는 수정은 이전에 한 수정과는 많이 다릅니다. 이전에는 텍스트를 사용하여 수정하여 전달했다면, 이제는 pdf로 만들어진 교정본에 메모를 남기는 방식으로 수정을 하여야 합니다. 이로 인해서 대규모의 수정은 어려워지고 이미지를 수정하는 식의 수정이 이루어지게 되어 앞에서 처럼 코드를 바꾸는 일은 힘든 일입니다. 대략적인 완성본의 책을 수차례 검토하며 수정을 하였습니다.",t(i,{subtitle:"출간 직전",[e]:{subtitle:e}},"hK_14"),"책이 거의 완성이 다가온다는 게 느껴지기 시작했습니다. 책의 뒤표지 내용을 정하고, 아쉬웠던 서문을 수정하고, 작가 소개를 추가하고, 표지가 정해지게 됩니다. 소스코드를 제출하고 추가 수정사항을 마무리하여 제가 할 일은 끝이 났습니다. 교정이 되면서 말투가 달라지고 책을 직접적으로 수정할 수 없게 되면서 내가 작성한 책을 뺏긴 느낌이었습니다. 마지막 교정 파일은 제가 소유할 수 없기 때문에 더 그러한 느낌이었습니다.",t(i,{subtitle:"출간",[e]:{subtitle:e}},"hK_15"),"책이 인쇄되어 서점에 들어가게 되기로 하고, 출판본이 나에게 전달되니 뿌듯했습니다 ㅎㅎ. 무엇보다 책에 내 이름이 새겨져 있는 것이 신기했습니다. 지금 책을 보면 내가 이걸 어떻게 했지...라는 생각만 듭니다. 과거의 내가 했겠지라는 생각뿐입니다. 다시 책을 쓰게 된다면 이전보다 잘 쓸 수 있겠지만, 만약 다시 책을 써보겠냐고 나에게 묻는다면 '저는 제 머리카락을 지키겠습니다'라고 대답하겠습니다.ㅎㅎ"]},"hK_16")]},"hK_17"),"s_MCihQ0QqqUs")),hi=Object.freeze(Object.defineProperty({__proto__:null,default:mi,head:gi},Symbol.toStringTag,{value:"Module"})),bi={title:"yarn berry cannot find module 해결",meta:[{property:"keywords",content:"yarn berry cannot find module vscode"}]},fi=w(h(()=>a(S,{children:[t(D,{src:"",[e]:{src:e}},"0i_0"),a($,{children:[t("h1",{children:"yarn berry cannot find module 해결"}),t(T,{tags:"yarn berry cannot find module vscode",[e]:{tags:e}},"0i_1"),t(O,{children:"2022-03-07"},"0i_2")]},"0i_3"),a(H,{children:["vscode에서 yarn berry 사용시 설치한 모듈들을 찾을 수 없다는 에러가 뜰때 다음과 같이 실행하면 해결할 수 있다.",t(n,{code:kn,[e]:{code:e}},"0i_4"),"yarn berry 공식 문서에서는 다음과 같이 설명한다.",t("br",{}),"Smart IDE(예: VSCode 또는 IntelliJ)는 Plug'n'Play 설치 를 사용할 때 TypeScript가 작동하도록 특별한 구성이 필요합니다 .",t("br",{}),"yarn sdks vscode vim지원되는 지정된 편집기에 대한 기본 SDK와 설정을 모두 생성하는 데 사용 합니다.",t(i,{subtitle:"[참고자료]",[e]:{subtitle:e}},"0i_5"),"https://yarnpkg.com/getting-started/editor-sdks",t("br",{}),"https://www.zigae.com/yarn2/"]},"0i_6")]},"0i_7"),"s_okdBRNiE8LI")),kn=`yarn add @yarnpkg/sdks -D
yarn dlx @yarnpkg/sdks vscode
`,yi=Object.freeze(Object.defineProperty({__proto__:null,code1:kn,default:fi,head:bi},Symbol.toStringTag,{value:"Module"})),_i={title:"yarn workspace nohoist monorepo",meta:[{property:"keywords",content:"yarn workspace nohoist hoistingLimits monorepo node_modules"}]},vi=w(h(()=>a(S,{children:[t(D,{},"Ll_0"),a($,{children:[t("h1",{children:"yarn workspace nohoist"}),t(T,{tags:"yarn workspace nohoist hoistingLimits monorepo node_modules",[e]:{tags:e}},"Ll_1"),t(O,{children:"2023-01-28"},"Ll_2")]},"Ll_3"),a(H,{children:[t(i,{subtitle:"tl;dr",[e]:{subtitle:e}},"Ll_4"),"packages/projectB의 호이스팅을 막기 위해서는 projectB가 하나의 워크스페이스가 되어야하고,",t("code",{children:"nmHoistingLimits: workspaces"})," 값을 사용하여 호이스팅을 막을 수 있습니다.",t(n,{code:He,filename:"packages/projectB/.yarrc.yml",[e]:{code:e,filename:e}},"Ll_5"),t(n,{code:$e,filename:"packages/projectB/package.json",[e]:{code:e,filename:e}},"Ll_6"),t("br",{}),"다음과 같은 간단한 yarn workspace가 있습니다.",t(n,{code:Ln,filename:"파일구조",[e]:{code:e,filename:e}},"Ll_7"),t(n,{code:wn,filename:"/package.json",[e]:{code:e,filename:e}},"Ll_8"),"yarn install 을 하게되면 루트의 node_modules로 패키지가 호이스팅되게 되는 상황에서, projectb의 패키지를 호이스팅하지 않기 위해서 nohoist 옵션을 사용해도 호이스팅이 막아지지 않습니다",t(n,{code:xn,filename:"package.json",[e]:{code:e,filename:e}},"Ll_9"),"yarn3을 사용중이시라면 다음과 같은 경고 로그를 볼 수 있습니다.",t(n,{code:"'nohoist' is deprecated, please use 'installConfig.hoistingLimits' instead",[e]:{code:e}},"Ll_10"),t(L,{href:"https://yarnpkg.com/configuration/manifest#installConfig.hoistingLimits",children:"yarn config installConfig.hoistingLimits 문서",[e]:{href:e}},"Ll_11"),"를 보면 해당 옵션에 대한 설명을 확인할 수 있습니다.",t(L,{href:"https://yarnpkg.com/configuration/yarnrc#nmHoistingLimits",children:"nmHoistingLimits",[e]:{href:e}},"Ll_12"),"값을 오버라이드하며 nmHoistingLimits에 대한 설명은 다음과 같습니다.",a(F,{children:[":nmHoistingLimits",t("br",{}),"Defines the highest point where packages can be hoisted. One of workspaces (don't hoist packages past the workspace that depends on them), dependencies (packages aren't hoisted past the direct dependencies for each workspace), or none (the default, packages are hoisted as much as possible). This setting can be overriden per-workspace through the installConfig.hoistingLimits field."]},"Ll_13"),a(F,{children:[":번역",t("br",{}),"패키지가 호이스팅 될 수 있는 가장 높은 지점을 정의합니다.",t("br",{}),"workspaces: 종속된 워크스페이스를 지나 패키지를 호이스팅하지 않습니다.",t("br",{}),"dependencies: 패키지는 워크스페이스의 직접적인 디펜던시를 지나 호이스팅 되지 않습니다",t("br",{}),"none: default 이며, 가능한 패키지는 호이스팅 됩니다.",t("br",{})," 이 설정은 installConfig.hoistingLimits field를 통해 각 워크스페이스에 오버라이드될 수 있습니다."]},"Ll_14"),"따라서 packages/projectB의 호이스팅을 막기 위해서는 projectB가 하나의 워크스페이스가 되어야하고,",t("code",{children:"nmHoistingLimits: workspaces"})," 값을 사용하여 호이스팅을 막을 수 있습니다.",t(n,{code:He,filename:"packages/projectB/.yarrc.yml",[e]:{code:e,filename:e}},"Ll_15"),t(n,{code:$e,filename:"packages/projectB/package.json",[e]:{code:e,filename:e}},"Ll_16"),"yarn3에서는 package.json에 workspaces를 설정하지 않고도 호이스팅을 막을 수 있습니다.",t(n,{code:Mn,[e]:{code:e}},"Ll_17")]},"Ll_18")]},"Ll_19"),"s_lNvhXnVk35s")),Ln=`
/
package.json
packages 
├─projectA
│   └─package.json
└─projectB
    └─package.json
`,wn=`
{
  ...
  "workspaces": [
    "packages/*"
  ]
}
`,xn=`
...
"workspaces": {
  "packages": [
    "packages/*"
  ],
  "nohoist": [
    "*"
  ]
}`,He=`
nmHoistingLimits: workspaces
`,$e=`
{
    "name": "projectb",
    ...
    "private": true, 
    "workspaces": [
      "*"
    ]
  }  
`,Mn=`
yarn set version berry
cd packages/projectB
yarn`,ki=Object.freeze(Object.defineProperty({__proto__:null,code1:Ln,code2:wn,code3:xn,code4:He,code5:$e,code6:Mn,default:vi,head:_i},Symbol.toStringTag,{value:"Module"})),Li=w(h(()=>null,"s_EHwhVOSSRFU")),wi=Object.freeze(Object.defineProperty({__proto__:null,default:Li},Symbol.toStringTag,{value:"Module"})),xi={text:"Menu",items:[{text:"Lit tutorial",items:[{text:"Lit 튜토리얼",href:"/posts/lit-tutorial-1"},{text:"Lit 튜토리얼 - property",href:"/posts/lit-tutorial-2"},{text:"Lit 튜토리얼 - 라이프 사이클",href:"/posts/lit-tutorial-3"},{text:"Lit 튜토리얼 - 바인딩",href:"/posts/lit-tutorial-4"},{text:"Lit 튜토리얼 - redux",href:"/posts/lit-tutorial-5"},{text:"Lit 튜토리얼 - 라우팅",href:"/posts/lit-tutorial-6"}]}]},Mi=Object.freeze(Object.defineProperty({__proto__:null,default:xi},Symbol.toStringTag,{value:"Module"})),ji=[],Ci=()=>Nn,A=()=>zn,jn=[[/^\/$/,[()=>Wn],void 0,"/",["q-3af6c865.js"]],[/^\/portfolio\/e2e-sample\/?$/,[()=>Ra],void 0,"/portfolio/e2e-sample/",["q-5ed96bc2.js"]],[/^\/portfolio\/stack\/?$/,[()=>Ba],void 0,"/portfolio/stack/",["q-d545da5a.js"]],[/^\/posts\/a-frame-entity\/?$/,[A,()=>Ia],void 0,"/posts/a-frame-entity/",["q-71d69a01.js","q-ffac7381.js"]],[/^\/posts\/about-closure\/?$/,[A,()=>Qa],void 0,"/posts/about-closure/",["q-71d69a01.js","q-1d9a7e57.js"]],[/^\/posts\/about-pod-file\/?$/,[A,()=>Ya],void 0,"/posts/about-pod-file/",["q-71d69a01.js","q-4070601c.js"]],[/^\/posts\/android-no-semi\/?$/,[A,()=>Ga],void 0,"/posts/android-no-semi/",["q-71d69a01.js","q-256b6fd9.js"]],[/^\/posts\/async-await\/?$/,[A,()=>or],void 0,"/posts/async-await/",["q-71d69a01.js","q-6b92dbbd.js"]],[/^\/posts\/deep-dive-closure\/?$/,[A,()=>rr],void 0,"/posts/deep-dive-closure/",["q-71d69a01.js","q-559ebf49.js"]],[/^\/posts\/front-end-back-end\/?$/,[A,()=>sr],void 0,"/posts/front-end-back-end/",["q-71d69a01.js","q-4950f90d.js"]],[/^\/posts\/lit-tutorial-1\/?$/,[A,()=>pr],void 0,"/posts/lit-tutorial-1/",["q-71d69a01.js","q-1bed4348.js"]],[/^\/posts\/lit-tutorial-2\/?$/,[A,()=>mr],void 0,"/posts/lit-tutorial-2/",["q-71d69a01.js","q-3c9d54d8.js"]],[/^\/posts\/lit-tutorial-3\/?$/,[A,()=>fr],void 0,"/posts/lit-tutorial-3/",["q-71d69a01.js","q-f7938405.js"]],[/^\/posts\/lit-tutorial-4\/?$/,[A,()=>vr],void 0,"/posts/lit-tutorial-4/",["q-71d69a01.js","q-11ab6108.js"]],[/^\/posts\/lit-tutorial-5\/?$/,[A,()=>wr],void 0,"/posts/lit-tutorial-5/",["q-71d69a01.js","q-7d8000a9.js"]],[/^\/posts\/lit-tutorial-6\/?$/,[A,()=>jr],void 0,"/posts/lit-tutorial-6/",["q-71d69a01.js","q-f2fd5448.js"]],[/^\/posts\/make-array-length\/?$/,[A,()=>Sr],void 0,"/posts/make-array-length/",["q-71d69a01.js","q-64a36650.js"]],[/^\/posts\/make-keystore\/?$/,[A,()=>Hr],void 0,"/posts/make-keystore/",["q-71d69a01.js","q-ba4e01c2.js"]],[/^\/posts\/promise-synchronize\/?$/,[A,()=>Tr],void 0,"/posts/promise-synchronize/",["q-71d69a01.js","q-9442b1d8.js"]],[/^\/posts\/puppeteer-access-popup\/?$/,[A,()=>Vr],void 0,"/posts/puppeteer-access-popup/",["q-71d69a01.js","q-89d921b1.js"]],[/^\/posts\/react-native-scrollview-in-pan\/?$/,[A,()=>Br],void 0,"/posts/react-native-scrollview-in-pan/",["q-71d69a01.js","q-23bce287.js"]],[/^\/posts\/run-docker-not-exists\/?$/,[A,()=>Ir],void 0,"/posts/run-docker-not-exists/",["q-71d69a01.js","q-d7c857c3.js"]],[/^\/posts\/semantic-tag\/?$/,[A,()=>Qr],void 0,"/posts/semantic-tag/",["q-71d69a01.js","q-4220fda3.js"]],[/^\/posts\/typescript-react-forwardRef\/?$/,[A,()=>Xr],void 0,"/posts/typescript-react-forwardRef/",["q-71d69a01.js","q-97462b74.js"]],[/^\/posts\/use-github-access-token\/?$/,[A,()=>ei],void 0,"/posts/use-github-access-token/",["q-71d69a01.js","q-64786dff.js"]],[/^\/posts\/vanilla-route\/?$/,[A,()=>ni],void 0,"/posts/vanilla-route/",["q-71d69a01.js","q-5236cc46.js"]],[/^\/posts\/what-is-cjs-esm\/?$/,[A,()=>ii],void 0,"/posts/what-is-cjs-esm/",["q-71d69a01.js","q-0c2f128e.js"]],[/^\/posts\/what-is-vanilla-javascript\/?$/,[A,()=>ci],void 0,"/posts/what-is-vanilla-javascript/",["q-71d69a01.js","q-8becf6a5.js"]],[/^\/posts\/writing-book-1\/?$/,[A,()=>ui],void 0,"/posts/writing-book-1/",["q-71d69a01.js","q-9d73f394.js"]],[/^\/posts\/writing-book-2\/?$/,[A,()=>hi],void 0,"/posts/writing-book-2/",["q-71d69a01.js","q-4281bb4c.js"]],[/^\/posts\/yarn-berry-typescript-cannot-find-module\/?$/,[A,()=>yi],void 0,"/posts/yarn-berry-typescript-cannot-find-module/",["q-71d69a01.js","q-f2066d98.js"]],[/^\/posts\/yarn-workspace-nohoist\/?$/,[A,()=>ki],void 0,"/posts/yarn-workspace-nohoist/",["q-71d69a01.js","q-8b70fad0.js"]],[/^\/post\/([^/]+?)\/?$/,[Ci,()=>wi],["id"],"/post/[id]/",["q-86923137.js","q-a2186f4b.js"]]],Cn=[["/posts/",()=>Mi]],Ei=!0,Si="/",En=!0,Zi={routes:jn,serverPlugins:ji,menus:Cn,trailingSlash:Ei,basePathname:Si,cacheModules:En};export{Ti as Q,$i as R,Oi as S,Zi as _,Di as a,Si as b,En as c,Cn as m,jn as r,ji as s,Ei as t,qe as u};
