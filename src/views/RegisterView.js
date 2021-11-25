import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form } from 'react-bootstrap';
import { BsFillPersonFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { authOperations } from 'redux/auth';
import s from './View.module.css';

function RegisterView() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  const {
    registerForm,
    form,
    inputName,
    input,
    inputCont,
    inputIcon,
    buttonContainer,
    formButton,
  } = s;

  return (
    <div className={registerForm}>
      <Form onSubmit={handleSubmit} className={form}>
        <Form.Group className="mb-3" controlId="formBasicNmae">
          <Form.Label className={inputName}>Name</Form.Label>
          <dig className={inputCont}>
            <BsFillPersonFill className={inputIcon} />
            <Form.Control
              type="text"
              placeholder="Enter name"
              name="name"
              value={name}
              autoComplete="off"
              onChange={handleChange}
            />
          </dig>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className={input}>Email address</Form.Label>
          <div className={inputCont}>
            <MdEmail className={inputIcon} />
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={email}
              autoComplete="off"
              onChange={handleChange}
            />
          </div>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className={inputName}>Password</Form.Label>
          <div className={inputCont}>
            <RiLockPasswordFill className={inputIcon} />
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </div>
        </Form.Group>

        <div className={buttonContainer}>
          <button type="submit" className={formButton}>
            Sign up
          </button>
        </div>
      </Form>
    </div>
  );
}

export default RegisterView;
