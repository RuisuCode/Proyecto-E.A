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
  /* {
      name: 'Tags',
      options: {
        filter: true,
        filterType: 'multiselect',
        sort: false,
        customBodyRenderLite: dataIndex => {
          let value = data[dataIndex][5];
          return value.map((val, key) => {
            return <Chip label={val} key={key} />;
          });
        },
      },
    }, */
];
