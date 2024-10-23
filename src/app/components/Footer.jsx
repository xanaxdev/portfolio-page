export default function Footer() {
    return (
        <footer className="py-10">

            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* About Me section */}
                <div>
                    <h2 className="text-2xl font-bold mb-4">&copy; Copyright</h2>
                    <p className="text-gray-400">
                        This website was created by <span className="underline text-color-primary font-desc">Kacper Płaczek</span> - All rights reserved.
                    </p>
                </div>

                {/* Social Media section */}
                <div className="text-right">
                    <h2 className="text-2xl font-bold mb-4">Follow Me</h2>
                    <div className="flex justify-end  space-x-4">
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775A4.933 4.933 0 0 0 23.337 3.1a9.864 9.864 0 0 1-3.127 1.196 4.927 4.927 0 0 0-8.394 4.49A13.986 13.986 0 0 1 1.671 3.149a4.928 4.928 0 0 0-.666 2.475 4.926 4.926 0 0 0 2.19 4.1 4.92 4.92 0 0 1-2.231-.616v.062a4.928 4.928 0 0 0 3.946 4.828 4.934 4.934 0 0 1-2.224.084 4.927 4.927 0 0 0 4.6 3.417A9.869 9.869 0 0 1 0 21.54a13.911 13.911 0 0 0 7.548 2.213c9.054 0 14.002-7.496 14.002-13.986 0-.213-.005-.425-.014-.637A9.936 9.936 0 0 0 24 4.557z"/>
                            </svg>
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 .5C5.4.5 0 5.9 0 12.5c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2.1c-3.3.7-4.2-1.5-4.2-1.5-.6-1.4-1.4-1.8-1.4-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.6-1.3-5.6-6 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.4 1.2.9-.3 1.9-.5 2.9-.5.9 0 2 .2 2.9.5 2.4-1.6 3.4-1.2 3.4-1.2.6 1.7.2 3 .1 3.3.7.9 1.2 2 1.2 3.3 0 4.8-2.9 5.7-5.6 6 .4.3.7 1 .7 2v3c0 .4.3.7.8.6 4.8-1.6 8.2-6.1 8.2-11.4C24 5.9 18.6.5 12 .5z"/>
                            </svg>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M22.23 0H1.77C.79 0 0 .77 0 1.73v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0zm-13.91 20.44H4.94V9.39h3.38v11.05zm-1.69-12.57c-1.09 0-1.98-.88-1.98-1.97s.88-1.97 1.98-1.97c1.09 0 1.98.88 1.98 1.97 0 1.09-.88 1.97-1.98 1.97zM20.44 20.44h-3.38v-5.7c0-1.36-.02-3.11-1.89-3.11-1.89 0-2.18 1.48-2.18 3v5.8h-3.38V9.39h3.25v1.51h.05c.45-.84 1.53-1.72 3.15-1.72 3.37 0 4 2.22 4 5.1v6.17z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
