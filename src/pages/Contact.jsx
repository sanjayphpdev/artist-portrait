import { useForm } from "react-hook-form";
import axios from "axios";
import Navbar from "../components/common/Navbar";

export default function Contact() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    await axios.post(import.meta.env.VITE_API_BASE_URL + "/leads", data);
    alert("We will contact you shortly!");
  };

  return (
    <>
      <Navbar />
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto p-6">
        <input {...register("name")} placeholder="Name" className="input" />
        <input {...register("phone")} placeholder="Phone" className="input" />
        <textarea
          {...register("message")}
          placeholder="Message"
          className="input"
        />
        <button className="bg-black text-white px-4 py-2 mt-4 rounded">
          Submit
        </button>
      </form>
    </>
  );
}
