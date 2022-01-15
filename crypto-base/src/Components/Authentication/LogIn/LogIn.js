import React, { useState } from 'react'
import { Form, Input, Button, Card } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import useFireBase from './../../../customHooks/useFireBase';
import { useLocation, useHistory } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import axios from 'axios';
import domain from './../../../Domain';


const LogIn = () => {

    const [error, setError] = useState('');

    const auth = getAuth();

    const {signInWithGoogle, setIsLoading, setUser} = useFireBase();

    const loaction = useLocation();
    const history = useHistory();
    const redirect_url = loaction.state?.from || '/';

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(res => {
                setUser(res.user);
                saveToDB(res.user);
                history.push(redirect_url);
            })
            .finally(() => setIsLoading(false))
    };

    const onFinish = (values) => {
        signInWithEmailAndPassword(auth, values.email, values.password)
            .then(res => { 
                setUser(res.user);
                history.push(redirect_url);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const saveToDB = ({email, displayName, uid}) => {
        const user = {email, displayName, fireBaseId: uid};

        axios.put(`${domain}user`, user)
            .then(res => console.log(res));
    }

    return (
        <div style={{fontFamily: "'Inter', sans-serif"}}>
            <div className='center'>
                <button class="google-btn" onClick={handleGoogleSignIn}>
                    <div class="google-icon-wrapper">
                        <img class="google-icon-svg" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
                    </div>
                    <p class="btn-text"><b>Sign in with Google</b></p>
                </button>
            </div>

            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 8,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your email!',
                    },
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                    ]}
                >
                    <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password"/>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                    offset: 8,
                    span: 16,
                    }}
                >
                    <p style={{color: 'red'}}>{error}</p>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                    offset: 8,
                    span: 16,
                    }}
                >
                    <Link to='/register' >Create a new account</Link>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                    offset: 8,
                    span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit" style={{height: 40}}>
                        SIGN IN
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default LogIn
