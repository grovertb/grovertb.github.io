const {
  REACT_APP_FIRST_NAME,
  REACT_APP_LAST_NAME
} = import.meta.env

const constant = {
  es: {
    menu: [
      {
        name: 'Inicio'
      },
      {
        name: 'Sobre mi'
      },
      {
        name: 'Servicios'
      },
      {
        name: 'Mis Habilidades'
      },
      {
        name: 'Portafolio'
      },
      {
        name: 'Contacto'
      }
    ],
    home: {
      title  : 'Hola, mi nombre es',
      title2 : `${REACT_APP_FIRST_NAME} ${REACT_APP_LAST_NAME}`,
      button1: 'Descargar CV'
    }
  },
  en: {
  }
}

export default constant
