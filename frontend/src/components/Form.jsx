import { useState } from 'react';
export default function Form({ fetchData }) {
  const submitNewBlog = (e) => {
    e.preventDefault();

    // Datum erstellen und formatieren
    const new_date = new Date();
    let date = new_date.toLocaleDateString();

    const form = new FormData(e.target);

    // Datum als zum FormData-Objekt hinzufügen
    form.set('date', date);

    console.log(form.get('title'));
    console.log(form.get('image'));
    console.log(form.get('content'));
    console.log(form.get('date'));

    fetch('http://localhost:9999/api/blogs', {
      method: 'POST',
      body: form,
    }).then((res) => {
      if (res.ok) {
        console.log('blogeintrag wurde erstellt!');
        fetchData();
        e.target.reset();
      }
    });
  };

  return (
    <section className='form'>
      <form onSubmit={submitNewBlog}>
        <div>
          <label htmlFor='blogtitle'>Title</label>
          <input type='text' id='blogtitle' name='title' />
        </div>
        <div>
          <label htmlFor='blogimg'>Image</label>
          <input type='file' id='blogimg' name='img' />
        </div>
        <div>
          <label htmlFor='blogcontent'>Content</label>
          <input type='text' id='blogcontent' name='content' />
        </div>
        <input id='button' type='submit' value='Publish' />
      </form>
    </section>
  );
}
