import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Login from "./login";

configure({adapter: new Adapter()});

it(`Login form submit`, () => {
  const onSubmitForm = jest.fn();

  const wrapper = shallow(
      <Login
        onSubmitForm={onSubmitForm}
        onChangeEmail={() => {}}
        onChangePassword={() => {}}
        email={``}
        password={``}
      />
  );

  const form = wrapper.find(`form`);
  form.simulate(`submit`, {preventDefault() {}});

  expect(onSubmitForm).toHaveBeenCalledTimes(1);
});

it(`Login change email`, () => {
  const onChangeEmail = jest.fn();

  const wrapper = shallow(
      <Login
        onSubmitForm={() => {}}
        onChangeEmail={onChangeEmail}
        onChangePassword={() => {}}
        email={``}
        password={``}
      />
  );

  const input = wrapper.find(`input`);

  input.at(0).simulate(`change`, {target: {value: `email@email.ru`}});

  expect(onChangeEmail).toHaveBeenCalledTimes(1);
});

it(`Login change password`, () => {
  const onChangePassword = jest.fn();

  const wrapper = shallow(
      <Login
        onSubmitForm={() => {}}
        onChangeEmail={() => {}}
        onChangePassword={onChangePassword}
        email={``}
        password={``}
      />
  );

  const input = wrapper.find(`input`);

  input.at(1).simulate(`change`, {target: {value: `123`}});

  expect(onChangePassword).toHaveBeenCalledTimes(1);
});
