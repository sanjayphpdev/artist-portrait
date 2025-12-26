export default function Footer() {
  return (
    <footer className="text-center py-6 bg-gray-100 mt-10 text-sm text-gray-600">
      <p>© {new Date().getFullYear()} Tanmay Artbox Artist</p>

      <p className="mt-2">
        Follow for latest artworks & offers on{" "}
        <a
          href="https://www.instagram.com/_tanmay_artbox_23"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-black hover:underline"
        >
          Instagram
        </a>
      </p>
    </footer>
  );
}
