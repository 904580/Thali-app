import { createSlice } from '@reduxjs/toolkit';
import React from "react";
const initialState = {
  value: '',
  products: [
    
    {
      id: 1,
      image:
        'https://res.cloudinary.com/dtr0b1iwv/image/upload/v1646126014/images/item1_zkutrl.jpg',
      name: 'Chapati',
      price: '15',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis. ',
    },

    {
      id: 2,
      image:
        'https://res.cloudinary.com/dtr0b1iwv/image/upload/v1646126014/images/item2_ylq0qr.jpg',
      name: 'Pickle',
      price: '10',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis. ',
    },
    {
      id: 3,
      image:
        'https://res.cloudinary.com/dtr0b1iwv/image/upload/v1646126014/images/item3_bixazb.jpg',
      name: 'Curd',
      price: '30',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis. ',
    },
    {
      id: 4,
      image:
        'https://res.cloudinary.com/dtr0b1iwv/image/upload/v1646126014/images/item4_ndkmnh.jpg',
      name: 'Rasogulla',
      price: '100',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis. ',
    },
    {
      id: 5,
      image:
        'https://res.cloudinary.com/dtr0b1iwv/image/upload/v1646126015/images/item5_j8v6yq.jpg',
      name: 'Daal',
      price: '140',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis. ',
    },
    {
      id: 6,
      image:
        'https://res.cloudinary.com/dtr0b1iwv/image/upload/v1646126014/images/item6_qukian.jpg',
      name: 'Paneer-Butter-masala',
      price: '280',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis . ',
    },
    <br/>,
  ],
  thali: [],
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addTothali: (state, action) => {
      state.thali.push(action.payload);
    },
    RemoveItem: (state, action) => {
      state.thali.splice(action.payload, 1);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTothali, RemoveItem } = counterSlice.actions;

export default counterSlice.reducer;