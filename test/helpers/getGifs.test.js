import { getGifs } from "../../src/helpers/getGifs";

describe("test in getGifs", () => {
  test("should return array of gifs", async () => {
    //getGifs devuelve un arreglo de gif
    const gifs = await getGifs("hola");
    //comprobar que la longitud del arreglo sea mayor que 0
    expect(gifs.length).toBeGreaterThan(0);
    //si se cumple la operacion anterior paso a verifiacar los datos
    //del primer elemento del arreglo
    expect(gifs[0]).toEqual({
      //verifico que el valor que guarde cada clave sea del tipo deseado en este caso string
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
