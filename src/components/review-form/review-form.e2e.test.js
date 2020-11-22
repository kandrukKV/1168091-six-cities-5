import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ReviewForm from "./review-form";

configure({adapter: new Adapter()});

it(`Review form test submit`, () => {
  const onSubmitForm = jest.fn();

  const wrapper = shallow(
      <ReviewForm
        onSubmit={onSubmitForm}
        rating={1}
        value={``}
        isFormDisabled={false}
        onChangeRating={() => {}}
        onChangeTextArea = {() => {}}
      />
  );

  const form = wrapper.find(`form`);
  form.simulate(`submit`, {preventDefault() {}});
  expect(onSubmitForm).toHaveBeenCalledTimes(1);
});

it(`Review textarea changes`, () => {
  const onChange = jest.fn();

  const wrapper = shallow(
      <ReviewForm
        onSubmit={() => {}}
        rating={1}
        value={``}
        isFormDisabled={false}
        onChangeRating={() => {}}
        onChangeTextArea = {onChange}
      />
  );

  const textArea = wrapper.find(`textarea`);
  textArea.simulate(`change`, {target: {value: `email@email.ru`}});
  expect(onChange).toHaveBeenCalledTimes(1);
});

it(`Review rating changes`, () => {
  const onChange = jest.fn();

  const wrapper = shallow(
      <ReviewForm
        onSubmit={() => {}}
        rating={1}
        value={``}
        isFormDisabled={false}
        onChangeRating={onChange}
        onChangeTextArea = {() => {}}
      />
  );

  const inputs = wrapper.find(`input`);

  inputs.forEach((input) => {
    input.simulate(`change`);
  });

  expect(onChange).toHaveBeenCalledTimes(inputs.length);
});
