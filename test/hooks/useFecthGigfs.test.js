import { renderHook, waitFor } from "@testing-library/react";
import { useFecthGigfs } from "../../src/hooks/useFecthGigfs";

describe("Test on the hooks useFecthGigfs", () => {
  test("should return initial state", () => {
    const { result } = renderHook(() => useFecthGigfs("hola"));
    const { images, isLoading } = result.current;

    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });
  test("should return an array with values and isLoading in false", async () => {
    const { result } = renderHook(() => useFecthGigfs("One Punch"));
    await waitFor(
      () => expect(result.current.images.length).toBeGreaterThan(0),
      {
        timeout: 4000,
      }
    );
    const { images, isLoading } = result.current;

    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
