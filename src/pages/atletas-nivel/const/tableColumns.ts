export const columns = (entity: any) => {
  return [
    {
      name: "Estatus",
      label: "Estatus",
      options: {
        filter: true,
        sort: true,
        display: entity === 999 ? true : false,
      },
    },
    {
      name: "cedula",
      label: "Cedula",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "primer_nombre",
      label: "Nombre",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "primer_apellido",
      label: "Apellido",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: "nivel",
      label: "Nivel",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "estatura",
      label: "Estatura",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "peso",
      label: "Peso",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "options",
      label: "Acciones",
      options: {
        filter: false,
        sort: false,
      },
    },
  ];
};
