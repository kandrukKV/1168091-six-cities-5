import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Provider} from "react-redux";
import {noon} from "../../test-data/test-data";
import {mockStore} from "../../test-data/test-store";
import withReviewForm from "./with-review-form";

configure({adapter: new Adapter()});

const MockComponent = () => (<div/>);

const MockComponentWrapped = withReviewForm(MockComponent);

it(`Property state withReviewForm`, () => {
  const wrapper = shallow(
      <Provider store={mockStore}>
        <MockComponentWrapped
          rating={5}
          value={`test`}
          isFormDisabled={true}
          authorizationStatus={`AUTH`}
          onChangeRating={noon}
          onChangeTextArea={noon}
          onSubmit={noon}
          reviewFormState={`DEFAULT`}
          changeRating={noon}
        />
      </Provider>
  );

  expect(wrapper.find(MockComponentWrapped).props().value).toEqual(`test`);
  expect(wrapper.find(MockComponentWrapped).props().rating).toEqual(5);
  expect(wrapper.find(MockComponentWrapped).props().isFormDisabled).toEqual(true);

});
