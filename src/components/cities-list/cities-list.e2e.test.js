
import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import CitiesList from "./cities-list";

configure({adapter: new Adapter()});

const mockCities = [`Amsterdam`, `Paris`, `Cologne`, `Brussels`, `Hamburg`, `Dusseldorf`];

it(`Another city must be chosen`, () => {
  const changeCity = jest.fn();

  const wrapper = shallow(
      <CitiesList
        cities={mockCities}
        currentCity={mockCities[0]}
        changeCity={changeCity}
      />
  );

  const links = wrapper.find(`li.locations__item`);

  expect(links.length).toEqual(mockCities.length);

  links.forEach((link) => {
    link.simulate(`click`);
  });

  expect(changeCity).toHaveBeenCalledTimes(mockCities.length);
});


