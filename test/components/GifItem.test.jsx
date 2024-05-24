import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("Test in the <GifItem/>", () => {
  const title = "Saitama";
  const url = "https://one-pounch/saitama.jpg";
  const id = "Rd3jdna";
  test("should match with the snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} id={id} />);
    expect(container).toMatchSnapshot();
  });
  test("should show the image with url and the alt ", () => {
    render(<GifItem title={title} url={url} id={id} />);
    //metodo para verificar que coincidad todo en el atributo img
    // expect(screen.getByRole("img").src).toBe(url);
    //el metodo anterior simplificado
    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });
  test("should show the title in the component", () => {
    render(<GifItem title={title} url={url} id={id} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
