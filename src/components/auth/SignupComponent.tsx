"use client";

import React from "react";
import { Button, Form, type FormProps, Input } from "antd";

type FieldType = {
  name?: string;
  email?: string;
  password?: string;
  phone?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const SignupComponent: React.FC = () => (
  <div className="w-full h-svh flex justify-center items-center">
    <Form
      name="sign in"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ minWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: "Please input your name!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item<FieldType>
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your email!",
            type: "email",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Phone"
        name="phone"
        rules={[
          {
            required: false,
            message: "Please input your phone!",
            type: "string",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" color="secondary">
          Sign up
        </Button>
      </Form.Item>
    </Form>
  </div>
);

export default SignupComponent;
