import { useForm } from 'react-hook-form';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { alrtError, alrtSuccess } from '../utils/common';
import { useQuery } from 'react-query';
import { categoriesData, tireSizeData } from '../api/fetchData';

export default function CreateProduct() {
  const { token } = useSelector((state) => state.auth.user);
  const { data } = useQuery('category', () => categoriesData());
  const { data: tireSize } = useQuery('tiresize', () => tireSizeData());
  const {
    register,
    handleSubmit,
    resetField,
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
    resetField('title');
    resetField('code');
    resetField('categories');
    resetField('description');
    resetField('regularPrice');
    resetField('discountPrice');
    resetField('weight');
    resetField('size');
    resetField('stockQuantity');
    resetField('shippingRateDhaka');
    resetField('shippingRateOut');
    resetField('images');
    resetField('features');
    resetField('featuresDetails');
    resetField('thumbnailImage');
    resetField('rim');
    resetField('ts');
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
        {errors.title && <span>Title field is required</span>}

        <Form.Label htmlFor="code">Code</Form.Label>
        <Form.Control
          id="code"
          {...register('code', { required: true })}
          placeholder="Code"
        />

        <Form.Label htmlFor="ts">Text Product Size</Form.Label>
        <Form.Control
          id="ts"
          {...register('ts', { required: true })}
          placeholder="Text Size"
        />

        <Form.Label htmlFor="categories">Categories</Form.Label>
        <Form.Select
          {...register('categories', { required: true })}
          aria-label="Default select example"
        >
          <option>Select Product Categories</option>
          {data &&
            data?.map((category, i) => (
              <option key={i} value={category.title}>
                {category.title}
              </option>
            ))}
        </Form.Select>

        <Form.Label htmlFor="size">Size</Form.Label>
        <Form.Select {...register('size')} aria-label="Default select example">
          <option value="">Tire Size</option>
          {tireSize &&
            tireSize.map((size, i) => (
              <option key={i} value={size.size}>
                {size.size}
              </option>
            ))}
        </Form.Select>

        <Form.Label htmlFor="rim">Rim</Form.Label>
        <Form.Select {...register('rim')} aria-label="Default select example">
          <option value="">Rim</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
        </Form.Select>

        <Form.Label htmlFor="description">Description</Form.Label>
        <Form.Control
          id="description"
          {...register('description', { required: true })}
          placeholder="Description"
        />

        <Form.Label htmlFor="regularPrice">Regular Price</Form.Label>
        <Form.Control
          type="number"
          id="regularPrice"
          {...register('regularPrice', { required: true })}
          placeholder="RegularPrice"
        />

        <Form.Label htmlFor="discountPrice">DiscountPrice</Form.Label>
        <Form.Control
          type="number"
          id="discountPrice"
          {...register('discountPrice', { required: true })}
          placeholder="DiscountPrice"
        />

        <Form.Label htmlFor="weight">Weight</Form.Label>
        <Form.Control
          id="weight"
          type="number"
          {...register('weight', { required: true })}
          placeholder="Weight"
        />

        <Form.Label htmlFor="stockQuantity">Stock Quantity</Form.Label>
        <Form.Control
          id="stockQuantity"
          type="number"
          {...register('stockQuantity', { required: true })}
          placeholder="Stock Quantity"
        />

        <Form.Label htmlFor="shippingInDhaka">
          Shipping rate in Dhaka
        </Form.Label>
        <Form.Control
          id="shippingInDhaka"
          type="number"
          {...register('shippingRateDhaka', { required: true })}
          placeholder="Shipping In Dhaka"
        />

        <Form.Label htmlFor="shippingOutDhaka">
          Shipping rate Out Dhaka
        </Form.Label>
        <Form.Control
          id="shippingOutDhaka"
          type="number"
          {...register('shippingRateOut', { required: true })}
          placeholder="Shipping Out Dhaka"
        />

        <Form.Label htmlFor="images">
          Product Images [size: 306 x 305]
        </Form.Label>
        <Form.Control
          id="images"
          {...register('images', { required: true })}
          placeholder="First image link, Second image link, Third image link"
        />
        {errors.images && <span>This field is required</span>}

        <Form.Label htmlFor="features">
          Features Images [size: 80 x 80]
        </Form.Label>
        <Form.Control
          id="features"
          {...register('features', { required: true })}
          placeholder="First image link, Second image link, Third image link"
        />
        {errors.images && <span>This field is required</span>}

        <Form.Label htmlFor="featuresDetails">Features Details</Form.Label>
        <Form.Control
          id="featuresDetails"
          {...register('featuresDetails', { required: true })}
          placeholder="@elample sports, onroad, allwather"
        />
        {errors.images && <span>This field is required</span>}

        <Form.Label htmlFor="thumbnailImage">
          Thumbnail Images [size: 302 x 345]
        </Form.Label>
        <Form.Control
          id="thumbnailImage"
          {...register('thumbnailImage', { required: true })}
          placeholder="Thumbnail Images"
        />
        {errors.images && <span>This field is required</span>}

        <Button className="mt-2" variant="danger" type="submit">
          Crate
        </Button>
      </Form>
    </div>
  );
}
