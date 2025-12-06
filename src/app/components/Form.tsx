"use client"

export default function Form() {
    // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     console.log("Form submitted");
    // };

    return (
        <form 
            // onSubmit={handleSubmit} 
            className="flex flex-col gap-4 max-w-[800px] m-auto mb-6" 
            action="mailto:contact@valentin-vinel.fr"
            method="POST"
            encType="text/plain"
        >
            <div className="flex gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="Prénom"
                className="border p-2 flex-1 rounded"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Nom"
                className="border p-2 flex-1 rounded"
                required
              />
            </div>


            <input
              type="email"
              name="email"
              placeholder="Email"
              className="border p-2 rounded"
              required
            />


            <textarea
              name="message"
              placeholder="Message"
              className="border p-2 rounded"
              rows={4}
              required
            ></textarea>


            <button
              type="submit"
              className="bg-black text-white p-2 rounded w-80 mx-auto cursor-pointer"
            >
              Envoyer ma demande
            </button>
          </form>
    )
}