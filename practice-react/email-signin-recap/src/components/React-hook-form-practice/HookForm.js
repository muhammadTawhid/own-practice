import React, { useState } from "react";
import { useForm } from "react-hook-form";

const HookForm = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    newUser: true,
    signUpError: false,
    signUpSuccess: false,
    signInSuccess: false,
  });

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data, "onsubmit data");

  const handleSignUpFormToggle = () => {
    const signUpNewUser = { ...user };
    signUpNewUser.newUser = !user.newUser;
    setUser(signUpNewUser);
  };

  const handleSignUp = () => {
    console.log("sign up");
  };

  const handleSignIn = () => {
    console.log("sign in ");
  };

  //   console.log(watch("example")); // watch input value by passing the name of it
  return (
    <div>
      <div className="form-box">
        <h2>{user.newUser ? "Sign Up" : "Sign In"}</h2>
        <form onSubmit={handleSubmit(onSubmit)} action="">
          <div className="input-div">
            {user.newUser && <label htmlFor="">Name</label>}
            {user.newUser && (
              <input
                style={{ borderBottom: errors.name && "1px solid red" }}
                {...register("name", {
                  required: "this field is required",
                  pattern: {
                    value: /^[a-z]+$/g,
                    message: "Name should contains lowercase",
                  },
                  maxLength: {
                    value: 20,
                    message: "Max character 20",
                  },
                })}
                onKeyUp={() => trigger("name")}
                type="text"
              />
            )}
            {errors.name && (
              <small className="err-message">{errors.name?.message}</small>
            )}
          </div>

          <div className="input-div">
            <label>Email</label>
            <input
              style={{ borderBottom: errors.email && "1px solid red" }}
              {...register("email", {
                required: "This field is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Invalid Email Address",
                },
              })}
              onKeyUp={() => trigger("email")}
              type="text"
            />
            {errors.email && (
              <small className="err-message">{errors.email?.message}</small>
            )}
          </div>

          <div className="input-div">
            <label htmlFor="">Password</label>
            <input
              style={{ borderBottom: errors.password && "1px solid red" }}
              {...register("password", {
                required: "This field is required",
                pattern: {
                  value: /\d+/g,
                  message: "Password must have at least one numeric value",
                },
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 character",
                },
              })}
              onKeyUp={() => trigger("password")}
              type="text"
            />
            {errors.password && (
              <small className="err-message">{errors.password?.message}</small>
            )}
          </div>

          {/* {user.signUpSuccess && <small style={{color:"green"}}>User created successfully</small>}
                    {user.signInSuccess && <small style={{color:"green"}}>User signed in successfully</small>}
                    {user.signUpError && <small className="err-message">This email already in used</small>} */}

          {user.newUser ? (
            <button onClick={handleSignUp} type="submit" className="submit-btn">
              Sign Up
            </button>
          ) : (
            <button onClick={handleSignIn} type="submit" className="submit-btn">
              Sign In
            </button>
          )}
        </form>
        <p>
          {user.newUser ? "Already" : "Don't"} have an account ?{" "}
          <button className="toggle-btn" onClick={handleSignUpFormToggle}>
            {user.newUser ? "Sign in" : "Sign up"}
          </button>
        </p>
        <h5>
          <span>Or</span>
        </h5>
        <button className="submit-btn">
          sign {user.newUser ? "up" : "in"} with google
        </button>
        <br />
        <button className="submit-btn">
          sign {user.newUser ? "up" : "in"} with facebook
        </button>
      </div>
    </div>
  );
};

export default HookForm;

{
  /* <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form> */
}
