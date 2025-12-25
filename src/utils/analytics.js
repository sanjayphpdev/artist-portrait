export const trackPage = (url) => {
  if (window.gtag) {
    window.gtag("config", "G-03321L535M", {
      page_path: url,
    });
  }
};
