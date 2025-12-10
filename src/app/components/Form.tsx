"use client"

export default function Form() {
    // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     console.log("Form submitted");
    // };

    return (
        <form 
            // onSubmit={handleSubmit} 
            className="flex flex-col gap-4 max-w-[800px] mb-6" 
            action="mailto:contact@valentin-vinel.fr"
            method="POST"
            encType="text/plain"
        >
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="Prénom"
                className="border border-blue-700 p-2 flex-1 rounded"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Nom"
                className="border border-blue-700 p-2 flex-1 rounded"
                required
              />
            </div>


            <input
              type="email"
              name="email"
              placeholder="Email"
              className="border border-blue-700 p-2 rounded"
              required
            />


            <textarea
              name="message"
              placeholder="Message"
              className="border border-blue-700 p-2 rounded mb-4"
              rows={4}
              required
            ></textarea>


            <button
              type="submit"
              className="relative overflow-hidden group flex items-center justify-center border border-sky-700 text-sky-700 rounded w-60 md:w-80 mx-auto cursor-pointer "
            >
              <span className="word-top">Envoyer ma demande</span>
              <span className="word-bottom absolute left-1/2 -translate-x-1/2">
                Envoyer ma demande
              </span>
            </button>
          </form>
    )
}