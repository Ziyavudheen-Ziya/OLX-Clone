import React, { Fragment, useContext, useState, useEffect } from "react";
import "./Create.css";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Header from "../Header/Header";
import ProductContext from "../../context/ProductContext";
import Spinner from "../spinner/Spinner";

const Create = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [Category, setCategory] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { addProduct } = useContext(ProductContext);

  const handleImage = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await addProduct(title, Category, price, images);
    console.log(res);
    console.log("Images:", images);

    if (res.success) {
      toast.success("Product added");
      navigate("/");
    } else {
      toast.error("Failed to add product");
    }
    setLoading(false);
  };

  useEffect(() => {
    return () => {
      images.forEach((image) => URL.revokeObjectURL(image));
    };
  }, [images]);

  return (
    <Fragment>
      <Header />
      <div className="centerDiv">
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Name</label>
          <br />
          <input
            className="input"
            type="text"
            id="title"
            placeholder="Name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <br />
          <label htmlFor="category">Category</label>
          <br />
          <input
            className="input"
            type="text"
            id="category"
            placeholder="Category"
            value={Category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
          <br />
          <label htmlFor="price">Price</label>
          <br />
          <input
            className="input"
            type="number"
            id="price"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
          <br />
          <input
            type="file"
            onChange={handleImage}
            accept="image/*"
            multiple
            required
          />
          <br />
          <div className="my-2 flex items-center gap-10 flex-wrap">
            {images.map((image, i) => (
              <img
                key={i}
                src={URL.createObjectURL(image)}
                alt="Preview"
                width="150px"
                height="150px"
              />
            ))}
          </div>
          <br />
          <div>
            {loading ? (
              <Spinner />
            ) : (
              <button className="uploadBtn" type="submit">Upload and Submit</button>
            )}
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default Create;
