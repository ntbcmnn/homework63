import { IPostForm } from '../../types';
import React, { useEffect, useState } from 'react';

const initialForm = {
  title: '',
  description: '',
  date: ''
};

interface Props {
  postToEdit?: IPostForm;
  submitForm: (post: IPostForm) => void;
}

const PostForm: React.FC<Props> = ({postToEdit, submitForm}) => {
  const [form, setForm] = useState<IPostForm>({...initialForm});

  useEffect((): void => {
    if (postToEdit) {
      setForm(prevState => ({
        ...prevState,
        ...postToEdit
      }));
    }
  }, [postToEdit]);

  const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    if (!form.title.trim() || !form.description.trim()) {
      alert('Please fill out all fields.');
      return;
    }

    submitForm({...form});

    if (!postToEdit) {
      setForm({...initialForm});
    }
  };

  const onChangeField = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const {name, value} = e.target;
    setForm(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <form
      onSubmit={onSubmitForm}
      className="d-flex flex-column justify-content-center align-items-center w-100"
    >
      <h3 className="form-title text-center mb-5">
        {postToEdit ? 'Edit information' : 'Add new post'}
      </h3>

      <input
        className="mb-3 form-control w-50"
        type="text"
        placeholder="Title"
        value={form.title}
        name="title"
        onChange={onChangeField}
      />

      <textarea
        className="mb-3 form-control w-50"
        placeholder="Description"
        value={form.description}
        name="description"
        onChange={onChangeField}
      />

      <button type="submit" className="btn btn-dark w-50">
        {postToEdit ? 'Save' : 'Add'}
      </button>
    </form>
  );
};

export default PostForm;