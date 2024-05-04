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
    name: "primer_nom",
    label: "Nombre",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "primer_ape",
    label: "Apellido",
    options: {
      filter: false,
      sort: true,
    },
  },
  {
    name: "estatus",
    label: "Estatus",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "telefono",
    label: "Teléfono",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "fecha",
    label: "Fecha de Nacimiento",
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
