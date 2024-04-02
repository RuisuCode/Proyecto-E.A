interface ITableColumn {
  name: string;
  label: string;
  options: {
    filter: boolean;
    sort?: boolean;
  };
}

export const columns: ITableColumn[] = [
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
    name: "categoria",
    label: "Categoria",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "fechaCtg",
    label: "Fecha de Nacimiento",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "edad",
    label: "Edad",
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
