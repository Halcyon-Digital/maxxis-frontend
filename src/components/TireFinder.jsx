import React from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { categoriesData } from '../api/fetchData';
import '../assets/sass/components/_TireFinder.scss';

function TireFinder() {
  const navigate = useNavigate();
  const { data } = useQuery('category', () => categoriesData());
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    navigate(
      `/products?categories=${data.categories}&&rim=${data.rim}&&size=${data.size}`
    );
  };

  return (
    <div
      id="tirefinder"
      className="position-absolute top-50 start-50 translate-middle bg-dark p-3 text-light tirefinder"
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Select
          {...register('categories', { required: true })}
          aria-label="Default select example"
        >
          <option value="">Categories</option>
          {data &&
            data.map((category, i) => (
              <option key={i} value={category.title}>
                {category.title}
              </option>
            ))}
        </Form.Select>
        <Form.Select
          {...register('rim', { required: true })}
          aria-label="Default select example"
        >
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
        <Form.Select
          {...register('size', { required: true })}
          aria-label="Default select example"
        >
          <option value="">Size</option>
          <option value="10">10</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
        </Form.Select>
        <button type="submit">Find</button>
      </Form>
    </div>
  );
}

export default TireFinder;
