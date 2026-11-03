describe("Presentador", () => {
  let documentAnterior;
  let primerNumero;
  let segundoNumero;
  let resultado;
  let enviarFormulario;

  beforeEach(() => {
    documentAnterior = global.document;
    primerNumero = { value: "1.5" };
    segundoNumero = { value: "2.25" };
    resultado = { innerHTML: "" };
    const formulario = {
      addEventListener: (evento, callback) => {
        if (evento === "submit") {
          enviarFormulario = callback;
        }
      },
    };
    const elementos = {
      "#primer-numero": primerNumero,
      "#segundo-numero": segundoNumero,
      "#sumar-form": formulario,
      "#resultado-div": resultado,
    };

    global.document = {
      querySelector: (selector) => elementos[selector],
    };

    jest.isolateModules(() => {
      require("./presenter.js");
    });
  });

  afterEach(() => {
    if (documentAnterior === undefined) {
      delete global.document;
    } else {
      global.document = documentAnterior;
    }
  });

  it("suma valores decimales y muestra el resultado sin truncarlos", () => {
    enviarFormulario({ preventDefault: () => {} });

    expect(resultado.innerHTML).toBe("<p>3.75</p>");
  });
});
