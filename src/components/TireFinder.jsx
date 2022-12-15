import React from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { categoriesData, tireSizeData } from '../api/fetchData';
import { AiOutlineClose } from 'react-icons/ai';
import '../assets/sass/components/_TireFinder.scss';
import '../assets/sass/components/_commonButton.scss';
import { useState } from 'react';

function TireFinder() {
  const navigate = useNavigate();
  const { data } = useQuery('category', () => categoriesData());
  const { data: tireSize } = useQuery('tiresize', () => tireSizeData());
  const { register, handleSubmit } = useForm();
  const [rim, setRim] = useState('');
  const [size, setSize] = useState('');
  const [categories, setCategories] = useState('');

  const onClose = (e) => {
    const finder = document.getElementById('tirefinder');
    finder.classList.remove('d-block');
  };

  const onSubmit = (data) => {
    navigate(
      `/finder?categories=${data.categories}${rim && `&&rim=${rim}`}${
        size && `&&size=${size}`
      }`
    );
  };

  return (
    <div
      id="tirefinder"
      className="position-absolute top-50 start-50 translate-middle p-3 text-light tirefinder"
    >
      <div className="text-end mb-2 close-button">
        <span onClick={onClose}>
          <AiOutlineClose />
        </span>
      </div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Select
          {...register('categories', { required: true })}
          onChange={(e) => setCategories(e.target.value)}
          className="mb-2 find-ctg"
        >
          <option value="">Categories</option>

          {data &&
            data.map((category, i) => (
              <option key={i} value={category.title}>
                {category.title}
              </option>
            ))}
        </Form.Select>

        {(categories === 'motorcycle' || categories === 'Passenger Car') && (
          <>
            <Form.Select
              {...register('rim')}
              name=""
              id=""
              onChange={(e) => setRim(e.target.value)}
              className="mb-2"
            >
              <option value="">Rim</option>
              <option value="10">10</option>
              <option value="12">12</option>
              <option value="17">17</option>
              <option value="18">18</option>
            </Form.Select>

            <Form.Select
              {...register('size', { required: true })}
              onChange={(e) => setSize(e.target.value)}
            >
              <option value="">Size</option>

              {tireSize &&
                tireSize.map((size, i) => (
                  <option key={i} value={size.size}>
                    {size.size}
                  </option>
                ))}
            </Form.Select>
          </>
        )}

        <button className="common_button mt-2" type="submit">
          Find
        </button>
      </Form>
    </div>
  );
}

export default TireFinder;
