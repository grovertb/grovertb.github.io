import { Container, Grid, Typography } from '@mui/material'
import CardService from './CardService'

const services = [ 'Creación Web', 'Desarrollo de aplicaciones', 'Mantenimiento y soporte' ]

const MyServices = () => (
  <Container>
    <Typography>MyServices</Typography>
    <Grid container spacing={4}>
      {
        services.map((service, index) => (
          <Grid
            item
            key={`service-${index + 1}`}
            sm={4}>
            <CardService
              description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s'
              title={service} />
          </Grid>
        ))
      }
    </Grid>
  </Container>
)

export default MyServices
