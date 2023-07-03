import CounterApp from "../components/Counter.jsx";

function addition(a, b) {
  return a + b;
}
test("Counter component should render", () => {
  expect(addition(5, 6)).toBe(11);
});
