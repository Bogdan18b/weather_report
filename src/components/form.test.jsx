import Form from './form';
import App from '../App';

it("calls changeDegrees on click", () => {
  const spy = sinon.spy();
  const wrapper = mount(
    <Form getWeather={()=>{}} changeDegrees={spy} type="imperial"/>
  );
  wrapper
    .find("p.form-degrees")
    .simulate("click");
  expect(spy.calledOnce).toBe(true);
});
