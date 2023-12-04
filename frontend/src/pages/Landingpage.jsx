import Gallery from '../components/Gallery';
import Header from '../components/Header';
import { useState, useEffect } from 'react';

export default function Landingpage({ blogs, fetchData }) {
  return (
    <>
      <Header />
      <Gallery blogs={blogs} fetchData={fetchData} />
    </>
  );
}
