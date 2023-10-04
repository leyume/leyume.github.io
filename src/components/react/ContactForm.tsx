import React, { useState } from "react";

export default function ContactForm({ url }) {
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setMsg("");

    const data = new FormData(e.target);

    const values = Object.fromEntries(data.entries());

    if (values.name && values.email && values.message) {
      console.log({ data, url });

      await fetch(url, { method: "POST", body: data })
        .then((res) => res.text())
        .then((data) => setMsg(data));
    } else setMsg("*A field is empty. Please fill all fields.");

    setLoading(false);
  };

  return (
    <>
      <form
        onSubmit={submit}
        className="grid gap-5
                  [&>input]:font-brand [&>input]:bg-transparent [&>input]:text-white [&>input]:py-3 [&>input]:px-4
                  [&>input]:b-solid [&>input]:b-white [&>input]:b-opacity-50 [&>input]:b-1 [&>input]:outline-none [&>input:focus]:b-opacity-100
                  [&>textarea]:font-brand [&>textarea]:bg-transparent [&>textarea]:text-white [&>textarea]:py-3 [&>textarea]:px-4
                  [&>textarea]:b-solid [&>textarea]:b-white [&>textarea]:b-opacity-75 [&>textarea]:b-1 [&>textarea]:outline-none
                  [&_button]:font-brand [&_button]:bg-blue-7 [&_button]:text-white [&_button]:py-3 [&_button]:px-8 [&_button]:tracking-widest
                  [&_button]:b-solid [&_button]:b-blue-7 [&_button]:b-opacity-75 [&_button]:outline-none [&_button]:cursor-pointer
                  [&_button:hover]:bg-transparent [&_button]:text-white [&_button]:transition-all [&_button]:duration-500
                  "
      >
        {!!msg && <div className={msg[0] == "*" ? "text-pink-3" : "text-green"}>{msg}</div>}
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required className="focus:invalid:b-pink-4" />
        <input type="text" name="phone" placeholder="Phone" />
        <textarea name="message" placeholder="Message" required rows={4}></textarea>
        <div>
          <button>{loading ? <div className="i-svg-spinners-pulse-multiple text-4xl leading-none -my-2"></div> : <>SEND</>}</button>
        </div>
      </form>
    </>
  );
}
