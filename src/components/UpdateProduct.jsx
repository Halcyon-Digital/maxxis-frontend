import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { categoriesData } from '../api/fetchData';
import { alrtError, alrtSuccess } from '../utils/common';

export default function UpdateProduct() {
  const { slug } = useParams();
  const { token } = useSelector((state) => state.auth.user);
  const { data } = useQuery('category', () => categoriesData());
  const [product, setProduct] = useState({});

  useEffect(() => {
    const data = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_PROXY}/api/v1/products/${slug}`
      );
      setProduct(response.data);
    };

    data();
  }, [slug]);

  const onChange = (e) =>
    setProduct((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios
      .put(`${process.env.REACT_APP_PROXY}/api/v1/products/${slug}`, product, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => alrtSuccess(res.data.message))
      .catch((error) => alrtError(error.message));
  };

  return (
    <div>
      <Form onSubmit={onSubmit}>
        <Form.Label htmlFor="title">Title</Form.Label>
        <Form.Control
          onChange={onChange}
          value={product.title}
          id="title"
          name="title"
          placeholder="Title"
        />

        <Form.Label htmlFor="code">Code</Form.Label>
        <Form.Control
          onChange={onChange}
          value={product.code}
          id="code"
          name="code"
          placeholder="Code"
        />

        <Form.Label htmlFor="categories">Categories</Form.Label>
        <Form.Select
          name="categories"
          onChange={onChange}
          aria-label="Default select example"
        >
          <option>Select Product Categories</option>
          {data &&
            data.map((category, i) => (
              <option
                key={i}
                onChange={onChange}
                value={category.title}
                selected={product.categories === category.title ? true : null}
              >
                {category.title}
              </option>
            ))}
        </Form.Select>

        <Form.Label htmlFor="description">Description</Form.Label>
        <Form.Control
          id="description"
          onChange={onChange}
          value={product.description}
          name="description"
          placeholder="Description"
        />

        <Form.Label htmlFor="regularPrice">Regular Price</Form.Label>
        <Form.Control
          onChange={onChange}
          value={product.regularPrice}
          type="number"
          id="regularPrice"
          name="regularPrice"
          placeholder="RegularPrice"
        />

        <Form.Label htmlFor="discountPrice">DiscountPrice</Form.Label>
        <Form.Control
          onChange={onChange}
          value={product.discountPrice}
          type="number"
          id="discountPrice"
          name="discountPrice"
          placeholder="DiscountPrice"
        />

        <Form.Label htmlFor="weight">Weight</Form.Label>
        <Form.Control
          onChange={onChange}
          value={product.weight}
          id="weight"
          type="number"
          name="weight"
          placeholder="Weight"
        />

        <Form.Label htmlFor="size">Size</Form.Label>
        <Form.Control
          id="size"
          onChange={onChange}
          value={product.size}
          name="size"
          placeholder="Size"
        />

        <Form.Label htmlFor="stockQuantity">Stock Quantity</Form.Label>
        <Form.Control
          id="stockQuantity"
          type="number"
          onChange={onChange}
          value={product.stockQuantity}
          name="stockQuantity"
          placeholder="Stock Quantity"
        />

        <Form.Label htmlFor="shippingInDhaka">Shipping in Dhaka</Form.Label>
        <Form.Control
          id="shippingInDhaka"
          type="number"
          onChange={onChange}
          value={product.shippingRateDhaka}
          name="shippingRateDhaka"
          placeholder="Shipping In Dhaka"
        />

        <Form.Label htmlFor="shippingOutDhaka">Shipping Out Dhaka</Form.Label>
        <Form.Control
          id="shippingOutDhaka"
          type="number"
          onChange={onChange}
          value={product.shippingRateOut}
          name="shippingRateOut"
          placeholder="Shipping Out Dhaka"
        />

        <Form.Label htmlFor="images">Product Images</Form.Label>
        <Form.Control
          id="images"
          onChange={onChange}
          value={product.images}
          name="images"
          placeholder="First image link, Second image link, Third image link"
        />

        <Form.Label htmlFor="features">Features Images</Form.Label>
        <Form.Control
          id="features"
          onChange={onChange}
          value={product.features}
          name="features"
          placeholder="First image link, Second image link, Third image link"
        />

        <Form.Label htmlFor="featuresDetails">Features Details</Form.Label>
        <Form.Control
          id="featuresDetails"
          onChange={onChange}
          value={product.featuresDetails}
          name="featuresDetails"
          placeholder="@elample sports, onroad, allwather"
        />

        <Form.Label htmlFor="thumbnailImage">Thumbnail Images</Form.Label>
        <Form.Control
          id="thumbnailImage"
          onChange={onChange}
          value={product.thumbnailImage}
          name="thumbnailImage"
          placeholder="Thumbnail Images"
        />

        <Button className="mt-2" variant="danger" type="submit">
          Update
        </Button>
      </Form>
    </div>
  );
}
