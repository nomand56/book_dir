import axios from "axios";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";


export default function AddBooks() {
  const { register, handleSubmit } = useForm();


  return (
    <form className="flex flex-col justify-between border-grey-1 height:200px mt-20" onSubmit={handleSubmit((data) => {
      axios.post("/sendBooks", data).then((res) => {
        console.log(res)
      })
    })}>

      <input {...register("title")} placeholder="First name" />
      <select {...register("category")}>
        {/* <option value="">Select...</option> */}
        <option value="fiction">Fiction</option>
        <option value="nonfiction">Non-Fiction</option>
      </select>

      <button type="submit">Submit</button>
    </form>
  );
}
