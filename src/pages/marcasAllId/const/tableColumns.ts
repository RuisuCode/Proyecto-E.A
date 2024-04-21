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
    name: "id",
    label: "#",
    options: {
      filter: true,
      sort: true,
    },
  },

  {
    name: "prueba",
    label: "Prueba",
    options: {
      filter: false,
      sort: true,
    },
  },
  {
    name: "competencia",
    label: "Competencia",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "Ubicacion",
    label: "Ubicación",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "Resultado",
    label: "Marca",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "posicion",
    label: "Posición",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "Fecha",
    label: "Fecha",
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
