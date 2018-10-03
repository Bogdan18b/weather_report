import Header from './header';

it("renders correctly", () => {
  const wrapper = shallow(
    <Header city="Boston" country="US" />
  );
  expect(wrapper).toMatchSnapshot();
});

it("shows city name correctly", () => {
  const wrapper = shallow(
    <Header city="Boston" country="US" />
  );
  const text = wrapper.find("h1").text();
  expect(text).toContain("Boston");
});
