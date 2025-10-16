import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Card = ({coffee, coffees, setCoffees}) => {
    const {_id, name, quantity, supplier, taste, category, details, photo} = coffee;
    const handleDelete = id => {
        // console.log(id);
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            
            // console.log("deleted", id);
            fetch(`http://localhost:5000/coffee/${id}`,{
                method: 'DELETE'
            })
                .then((res) => res.json())     
                .then(data =>{
                    console.log(data);
                    if(data.deletedCount >0){
                      Swal.fire({
                        title: "Deleted!",
                        text: "Your coffee has been deleted.",
                        icon: "success",
                      });
                      const remaining = coffees.filter(cof => cof._id !== id);
                      setCoffees(remaining);
                    }
                })
          }
        });
    }
    return (
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img src={photo} alt="Movie" />
        </figure>
        <div className="card-body flex flex-row justify-between items-center">
          {/* Left section */}
          <div>
            <h2 className="card-title text-lg font-bold">{name}</h2>
            <p>Quantity: {quantity}</p>
            <p>Supplier: {supplier}</p>
            <p>Taste: {taste}</p>
          </div>

          {/* Right section (buttons) */}
          <div className="flex flex-col space-y-2">
            <button className="btn btn-sm btn-outline">Edit</button>
            <Link to={`/UpdateACoffee/${_id}`}>
              <button className="btn btn-sm btn-outline">Update</button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-sm btn-outline btn-error"
            >
              X
            </button>
          </div>
        </div>
      </div>
    );
};

export default Card;