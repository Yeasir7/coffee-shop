import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const updateCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(updateCoffee);

    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Updated successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="bg-[#F4F3F0] container mx-auto p-24">
      <h1 className="text-6xl mb-5 text-center">Update coffee</h1>
      <p className="mb-5 w-3/4 mx-auto text-center">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using Content here
      </p>
      <form onSubmit={handleSubmit}>
        {/* name chef */}
        <div className="flex gap-4">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text text-xl font-medium">Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Enter coffee name"
                className="input input-bordered w-full"
                name="name"
                defaultValue={name}
              />
            </label>
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text text-xl font-medium">
                Available quantity
              </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Available quantity"
                className="input input-bordered w-full"
                name="quantity"
                defaultValue={quantity}
              />
            </label>
          </div>
        </div>
        {/* Supplier Taste */}
        <div className="flex gap-4">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text text-xl font-medium">supplier</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Supplier"
                className="input input-bordered w-full"
                name="supplier"
                defaultValue={supplier}
              />
            </label>
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text text-xl font-medium">Taste</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Taste"
                className="input input-bordered w-full"
                name="taste"
                defaultValue={taste}
              />
            </label>
          </div>
        </div>
        {/* Category details */}
        <div className="flex gap-4">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text text-xl font-medium">category</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Enter category"
                className="input input-bordered w-full"
                name="category"
                defaultValue={category}
              />
            </label>
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text text-xl font-medium">Details</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Enter details"
                className="input input-bordered w-full"
                name="details"
                defaultValue={details}
              />
            </label>
          </div>
        </div>
        {/* photo */}
        <div className="flex gap-4">
          <div className="form-control  w-full">
            <label className="label">
              <span className="label-text text-xl font-medium">Photo Url</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="enter photo url"
                className="input input-bordered w-full"
                name="photo"
                defaultValue={photo}
              />
            </label>
          </div>
        </div>
        <input
          type="submit"
          value="Update Coffee"
          className="btn btn-block mt-4 bg-[#D2B48C]"
        />
      </form>
    </div>
  );
};

export default UpdateCoffee;
