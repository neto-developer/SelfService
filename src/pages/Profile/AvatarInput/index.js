import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform'
import api_login from '../../../services/api_login'
import logo from '~/assets/logo.svg';
import { Container } from './styles';

export default function AvatarInput() {
  const { defaultValue, registerField } = useField('avatar');

  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'avatar_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
    // eslint-disable-next-line
  }, [ref]);
  async function handleChange(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]);

    const response = await api_login.post('avatar', data);

    const { id, url } = response.data;
    setFile(id);
    setPreview(url);
  }
  return (
    <Container>
      <label htmlFor="avatar">
        <img src={
          preview || logo
        }
          alt=""
        />
        <input
          type="file"
          id="avatar"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container>
  );
}
