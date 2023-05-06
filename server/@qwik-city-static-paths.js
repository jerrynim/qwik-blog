const staticPaths = new Set(["/","/favicon/android-icon-144x144.png","/favicon/android-icon-192x192.png","/favicon/android-icon-36x36.png","/favicon/android-icon-48x48.png","/favicon/android-icon-72x72.png","/favicon/android-icon-96x96.png","/favicon/apple-icon-114x114.png","/favicon/apple-icon-120x120.png","/favicon/apple-icon-144x144.png","/favicon/apple-icon-152x152.png","/favicon/apple-icon-180x180.png","/favicon/apple-icon-57x57.png","/favicon/apple-icon-60x60.png","/favicon/apple-icon-72x72.png","/favicon/apple-icon-76x76.png","/favicon/apple-icon-precomposed.png","/favicon/apple-icon.png","/favicon/favicon-16x16.png","/favicon/favicon-32x32.png","/favicon/favicon-512x512.png","/favicon/favicon-96x96.png","/favicon/favicon.ico","/favicon/ms-icon-144x144.png","/favicon/ms-icon-150x150.png","/favicon/ms-icon-310x310.png","/favicon/ms-icon-70x70.png","/fonts/mansalva-v4-latin-regular.woff","/fonts/mansalva-v4-latin-regular.woff2","/fonts/nanum-gothic-v17-korean-700.woff","/fonts/nanum-gothic-v17-korean-700.woff2","/fonts/nanum-gothic-v17-korean-regular.woff","/fonts/nanum-gothic-v17-korean-regular.woff2","/fonts/open-sans-v20-latin-700.woff","/fonts/open-sans-v20-latin-700.woff2","/fonts/open-sans-v20-latin-regular.woff","/fonts/open-sans-v20-latin-regular.woff2","/google7d7cddae00920b60.html","/manifest.json","/portfolio/e2e-sample/","/portfolio/stack/","/posts/a-frame-entity/","/posts/about-pod-file/","/posts/android-no-semi/","/posts/deep-dive-closure/","/posts/introduce-grpc/","/posts/lit-tutorial-1/","/posts/lit-tutorial-2/","/posts/lit-tutorial-3/","/posts/lit-tutorial-4/","/posts/lit-tutorial-5/","/posts/lit-tutorial-6/","/posts/make-array-length/","/posts/make-keystore/","/posts/promise-synchronize/","/posts/puppeteer-access-popup/","/posts/qwik-intro/","/posts/react-native-scrollview-in-pan/","/posts/run-docker-not-exists/","/posts/semantic-tag/","/posts/turbo-repo/","/posts/use-github-access-token/","/posts/vanilla-route/","/posts/what-is-cjs-esm/","/posts/what-is-vanilla-javascript/","/posts/writing-book-1/","/posts/writing-book-2/","/posts/yarn-berry-typescript-cannot-find-module/","/posts/yarn-workspace-nohoist/","/q-manifest.json","/robots.txt","/service-worker.js","/sitemap.xml","/static/404.gif","/static/Profile.png","/static/buy-me-a-coffee.svg","/static/copy.svg","/static/logo.svg","/static/resume.pdf"]);
function isStaticPath(method, url) {
  if (method.toUpperCase() !== 'GET') {
    return false;
  }
  const p = url.pathname;
  if (p.startsWith("/build/")) {
    return true;
  }
  if (p.startsWith("/assets/")) {
    return true;
  }
  if (staticPaths.has(p)) {
    return true;
  }
  if (p.endsWith('/q-data.json')) {
    const pWithoutQdata = p.replace(/\/q-data.json$/, '');
    if (staticPaths.has(pWithoutQdata + '/')) {
      return true;
    }
    if (staticPaths.has(pWithoutQdata)) {
      return true;
    }
  }
  return false;
}
export { isStaticPath };