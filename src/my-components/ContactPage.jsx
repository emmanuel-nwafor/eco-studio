export function ContactPage() {

    const handleSubmit = (e) => {
      e.preventDefault();
      const message = e.target.message.value;
      const mailtoLink = `mailto:echinecherem729@gmail.com?subject=Contact Message&body=${encodeURIComponent(message)}`;
      window.location.href = mailtoLink; // Opens the default mail client
    };
  
    return (
      <div className="p-9 items-center justify-center">
        <div className="flex-col">
          <h1 className="text-2xl font-bold text-gray-400 text-center">
            Send A Message..
          </h1>
        </div>
  
        <form
          className="w-full relative max-w-xl mx-auto bg-white dark:bg-[#080808] h-12 rounded-full overflow-hidden shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),_0px_1px_0px_0px_rgba(25,28,33,0.02),_0px_0px_0px_1px_rgba(25,28,33,0.08)] transition duration-200"
          onSubmit={handleSubmit}
        >
          <input 
            type="text"
            name="message"
            className="w-full relative text-sm sm:text-base z-50 border-none dark:text-white bg-transparent text-black h-full rounded-full focus:outline-none focus:ring-0 pl-4 sm:pl-10 pr-20"
            placeholder="Type your message here..."
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 z-50 -translate-y-1/2 h-8 w-8 rounded-full disabled:bg-gray-100 bg-black dark:bg-zinc-900 dark:disabled:bg-zinc-800 transition duration-200 flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-300 h-4 w-4"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l14 0" />
              <path d="M13 18l6 -6" />
              <path d="M13 6l6 6" />
            </svg>
          </button>
        </form>
      </div>
    );
  }
  