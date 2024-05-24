import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFecthGigfs } from "../../src/hooks/useFecthGigfs";
jest.mock("../../src/hooks/useFecthGigfs");

describe("Test on <Gifgrid/>", () => {
  const category = "One Punch";
  test("should show  the initial loading", () => {
    useFecthGigfs.mockReturnValue({
      images: [],
      isLoading: true,
      handleDelete: () => {},
    });
    render(<GifGrid category={category} />);
    expect(screen.getByText("Cargando..."));
    expect(screen.getByText(category));
  });
  test("should show items when upload the images by useFecthGifts ", () => {
    const gifs = [
      {
        id: "ABC",
        title: "asdasd",
        url: "https://localhost/gocuku.jpg",
      },
      {
        id: "ABCFsa",
        title: "asdasdsdfr",
        url: "https://localhost/gocuku.jpg",
      },
    ];
    useFecthGigfs.mockReturnValue({
      images: gifs,
      isLoading: false,
      handleDelete: () => {},
    });
    render(<GifGrid category={category} />);
    expect(screen.getAllByRole("img").length).toBe(2);
  });
});
