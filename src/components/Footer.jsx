export default function Footer() {
  return (
    <footer className="w-full bg-[#1E3E62] py-6">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white">
        <p className="text-center sm:text-left">
          Desarrollado por{" "}
          <span className="font-medium text-[#FF6500]">Juan Pablo Kass</span> para
          la Etapa 3 del Informatorio: Especialización en React
        </p>

        <div className="flex gap-5">
          <a
            href="https://github.com/juamqi/catalogo-musical-informatorio"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FF6500] transition-colors text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.41 7.86 10.94.58.11.79-.25.79-.56v-2.05c-3.2.69-3.88-1.54-3.88-1.54-.53-1.36-1.29-1.72-1.29-1.72-1.06-.73.08-.72.08-.72 1.18.08 1.8 1.22 1.8 1.22 1.04 1.78 2.73 1.27 3.4.97.11-.76.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.45.11-3.03 0 0 .97-.31 3.18 1.18a11.07 11.07 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.74.11 3.03.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.4-5.28 5.68.42.36.8 1.08.8 2.18v3.23c0 .31.21.67.79.56A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/juamqi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FF6500] transition-colors text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zM8.5 8h3.8v2.2h.1c.5-.9 1.8-2.2 3.8-2.2 4.1 0 4.9 2.7 4.9 6.2V24h-4v-7.9c0-1.9 0-4.3-2.6-4.3s-3 2-3 4.2V24h-4V8z" />
            </svg>
          </a>


        </div>
      </div>
    </footer>
  );
}
