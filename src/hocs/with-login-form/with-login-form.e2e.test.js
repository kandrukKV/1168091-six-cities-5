import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withLoginForm from "./with-login-form";
import {Provider} from "react-redux";
import {mockStore} from "../../test-data/test-store";
import Login from "../../components/login/login";

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withLoginForm(Login);

it(`Change state.email`, () => {
  const wrapper = shallow(
      <Provider store={mockStore}>
        <MockComponentWrapped
          email={`123`}
          password={`23423`}
          onChangeEmail={``}
          onChangePassword={``}
          onSubmitForm={``}
        />
      </Provider>
  );


  console.log(wrapper.find(MockComponentWrapped).state());
});
