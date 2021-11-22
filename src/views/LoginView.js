import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form } from 'react-bootstrap';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { authOperations } from '../redux/auth';
import s from './View.module.css';

function LoginView() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  const { registerForm, inputName, inpetCont, inputIcon, div, formButton } = s;

  return (
    <>
      <div className={registerForm}>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formPlaintextEmail">
            <Form.Label className={inputName}>Email address</Form.Label>
            <div className={inpetCont}>
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

          <Form.Group className="mb-3" controlId="formPlaintextPassword">
            <Form.Label className={inputName}>Password</Form.Label>
            <div className={inpetCont}>
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

          <div className={div}>
            <button type="submit" className={formButton}>
              Login
            </button>
          </div>
        </Form>
      </div>
    </>
  );
}

export default LoginView;
