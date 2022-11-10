import { useForm } from 'react-hook-form';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { alrtError, alrtSuccess } from '../utils/common';
import { useQuery } from 'react-query';
import { categoriesData } from '../api/fetchData';

export default function CreateProduct() {
  const { token } = useSelector((state) => state.auth.user);
  const { data } = useQuery('category', () => categoriesData());
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await axios
      .post(`${process.env.REACT_APP_PROXY}/api/v1/products`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => alrtSuccess(res.data.message))
      .catch((error) => alrtError(error.message));
  };
  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Label htmlFor="title">Title</Form.Label>
        <Form.Control
          id="title"
          {...register('title', { required: true })}
          placeholder="Title"
        />

        <Form.Label htmlFor="code">Code</Form.Label>
        <Form.Control
          id="code"
          {...register('code', { required: true })}
          placeholder="Code"
        />

        <Form.Label htmlFor="categories">Categories</Form.Label>
        <Form.Select
          {...register('categories', { required: true })}
          aria-label="Default select example"
        >
          <option>Select Product Categories</option>
          {data &&
            data.map((category) => (
              <option value={category.title}>{category.title}</option>
            ))}
        </Form.Select>

        <Form.Label htmlFor="description">Description</Form.Label>
        <Form.Control
          id="description"
          {...register('description', { required: true })}
          placeholder="Description"
        />

        <Form.Label htmlFor="regularPrice">Regular Price</Form.Label>
        <Form.Control
          id="regularPrice"
          {...register('regularPrice', { required: true })}
          placeholder="RegularPrice"
        />

        <Form.Label htmlFor="weight">Weight</Form.Label>
        <Form.Control
          id="weight"
          {...register('weight', { required: true })}
          placeholder="Weight"
        />

        <Form.Label htmlFor="discountPrice">DiscountPrice</Form.Label>
        <Form.Control
          id="discountPrice"
          {...register('discountPrice', { required: true })}
          placeholder="DiscountPrice"
        />

        <Form.Label htmlFor="size">Size</Form.Label>
        <Form.Control
          id="size"
          {...register('size', { required: true })}
          placeholder="Size"
        />

        <Form.Label htmlFor="stockQuantity">Stock Quantity</Form.Label>
        <Form.Control
          id="stockQuantity"
          {...register('stockQuantity', { required: true })}
          placeholder="Stock Quantity"
        />

        <Form.Label htmlFor="shippingInDhaka">Shipping in Dhaka</Form.Label>
        <Form.Control
          id="shippingInDhaka"
          {...register('shippingRateDhaka', { required: true })}
          placeholder="Shipping In Dhaka"
        />

        <Form.Label htmlFor="shippingOutDhaka">Shipping Out Dhaka</Form.Label>
        <Form.Control
          id="shippingOutDhaka"
          {...register('shippingRateOut', { required: true })}
          placeholder="Shipping Out Dhaka"
        />

        <Form.Label htmlFor="images">Product Images</Form.Label>
        <Form.Control
          id="images"
          {...register('images', { required: true })}
          placeholder="Product Images"
        />
        {errors.images && <span>This field is required</span>}

        <Form.Label htmlFor="features">Features Images</Form.Label>
        <Form.Control
          id="features"
          {...register('features', { required: true })}
          placeholder="Features Images"
        />
        {errors.images && <span>This field is required</span>}

        <Form.Label htmlFor="thumbnailImage">Thumbnail Images</Form.Label>
        <Form.Control
          id="thumbnailImage"
          {...register('thumbnailImage', { required: true })}
          placeholder="Thumbnail Images"
        />
        {errors.images && <span>This field is required</span>}

        <Button variant="danger" type="submit">
          Crate
        </Button>
      </Form>
    </div>
  );
}
